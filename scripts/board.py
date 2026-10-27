#!/usr/bin/env python3
"""Print the Daily Focus board (six slots, completed-today, master list) from Firestore.

Uses the same public Firebase config and sync code as the PWA (firebase-config.js).
Anonymous auth is enabled on the project, so no secret is needed. Run with: python3 -I scripts/board.py
"""
import json, re, sys, urllib.request, pathlib

cfg = (pathlib.Path(__file__).resolve().parent.parent / "firebase-config.js").read_text()
key = re.search(r'apiKey:\s*"([^"]+)"', cfg).group(1)
project = re.search(r'projectId:\s*"([^"]+)"', cfg).group(1)
board = re.search(r'SYNC_CODE\s*=\s*"([^"]+)"', cfg).group(1)

def post(url, body):
    req = urllib.request.Request(url, data=json.dumps(body).encode(), headers={"content-type": "application/json"})
    return json.load(urllib.request.urlopen(req))

tok = post(f"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key={key}", {"returnSecureToken": True})["idToken"]
req = urllib.request.Request(
    f"https://firestore.googleapis.com/v1/projects/{project}/databases/(default)/documents/boards/{board}",
    headers={"Authorization": f"Bearer {tok}"})
doc = json.load(urllib.request.urlopen(req))

def conv(v):
    for k in ("stringValue", "booleanValue", "doubleValue"):
        if k in v: return v[k]
    if "integerValue" in v: return int(v["integerValue"])
    if "nullValue" in v: return None
    if "arrayValue" in v: return [conv(x) for x in v["arrayValue"].get("values", [])]
    if "mapValue" in v: return {k: conv(x) for k, x in v["mapValue"].get("fields", {}).items()}
    return v

out = {k: conv(v) for k, v in doc.get("fields", {}).items()}
out["_updateTime"] = doc.get("updateTime")
json.dump(out, sys.stdout, indent=1, ensure_ascii=False)
print()
