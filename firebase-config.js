// ============================================================================
//  DAILY FOCUS — SYNC SETTINGS   (this is the ONLY file you edit for sync)
// ============================================================================
//
//  Until you paste real values below, the app runs in "Local only" mode:
//  it still works perfectly on each device, it just won't sync between them.
//
//  TO TURN ON PHONE <-> LAPTOP SYNC:
//  1. Go to https://console.firebase.google.com  ->  Add project  (free).
//  2. In the project, click the </> "Web" icon to register a web app.
//     Firebase shows you a "firebaseConfig = { ... }" block — copy those
//     values into FIREBASE_CONFIG below (apiKey, authDomain, projectId, etc).
//  3. Left menu -> Build -> Firestore Database -> Create database (Production).
//  4. Left menu -> Build -> Authentication -> Get started -> enable
//     "Anonymous" sign-in.
//  5. Change SYNC_CODE below to your own long, private phrase (any text).
//     Use the SAME file/value on every device so they share one board.
//
//  Then re-upload this one file to GitHub. Done.
// ============================================================================

window.FIREBASE_CONFIG = {
  apiKey:            "PASTE_API_KEY_HERE",
  authDomain:        "PASTE_PROJECT.firebaseapp.com",
  projectId:         "PASTE_PROJECT_ID",
  storageBucket:     "PASTE_PROJECT.appspot.com",
  messagingSenderId: "PASTE_SENDER_ID",
  appId:             "PASTE_APP_ID"
};

// A private label for your board. Anyone who knows this string + your config
// can see your tasks, so make it long and not guessable.
window.SYNC_CODE = "aaron-daily-focus-change-me-to-a-long-random-private-string";
