# Daily Focus — phone + sync setup

You do this once. ~10 minutes total. The app works on every device the moment
it's hosted; sync switches on once you add Firebase.

---

## STEP 1 — Put it online (GitHub Pages, free)

You're already signed into GitHub as **artrajeus**.

1. Go to https://github.com/new
   - Repository name: **daily-focus**
   - Public · click **Create repository**
2. On the new empty repo, click **“uploading an existing file”**.
3. Drag in ALL of these files from this folder (NOT the `.claude` folder):
   - index.html
   - manifest.json
   - sw.js
   - firebase-config.js
   - icon-180.png, icon-192.png, icon-512.png, icon-maskable-512.png
4. Click **Commit changes**.
5. Repo **Settings → Pages** → Source: **Deploy from a branch** →
   Branch: **main** / **/ (root)** → **Save**.
6. Wait ~1 minute. Your app is live at:
   **https://artrajeus.github.io/daily-focus/**

## STEP 2 — Add it to your iPhone

1. Open that URL in **Safari** on your iPhone.
2. Tap the **Share** button → **Add to Home Screen** → **Add**.
3. You now have a “Focus” app icon. Open it — it runs full-screen, no browser bars.
   (Do the same on the laptop: open the URL, it just works in the browser.)

At this point it works on every device — but each device has its OWN list.
Do Step 3 to make them sync.

---

## STEP 3 — Turn on phone ↔ laptop sync (Firebase, free)

1. Go to https://console.firebase.google.com → **Add project** → give it a name
   (e.g. "daily-focus") → you can skip Google Analytics → **Create project**.
2. On the project home, click the **`</>`** (Web) icon to “Add an app”.
   Give it a nickname, **Register app**. Firebase shows a `firebaseConfig = {…}`
   block — keep that tab open.
3. Left menu → **Build → Firestore Database → Create database** →
   choose a location → start in **Production mode** → Enable.
4. Left menu → **Build → Authentication → Get started** →
   **Sign-in method** → enable **Anonymous** → Save.
5. **Authentication → Settings → Authorized domains → Add domain** →
   add **artrajeus.github.io**  (required, or sign-in is blocked on the live site).
6. **Firestore → Rules** tab → paste this, then **Publish**:

   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /boards/{board} {
         allow read, write: if request.auth != null;
       }
     }
   }
   ```

7. Edit **firebase-config.js** (in this folder): paste the values from the
   `firebaseConfig` block into `FIREBASE_CONFIG`, and change `SYNC_CODE` to a
   long private phrase of your own.
8. Re-upload **firebase-config.js** to the GitHub repo (Add file → Upload files →
   drag it in → Commit). Pull the app to refresh on each device.

The badge under the title shows the status:
🟡 **Local only** (no Firebase yet) · 🟢 **Synced** · 🟡 **Offline — will sync** · 🔴 error.

---

## Updating the app later
Edit the file(s) here, then re-upload to the same GitHub repo (it overwrites).
After changing index.html, bump `CACHE = "daily-focus-vN"` in sw.js so phones
fetch the new version.
