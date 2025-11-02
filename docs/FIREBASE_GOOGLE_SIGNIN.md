# Firebase Google Sign-In — Setup & Troubleshooting Guide

This document collects the exact steps to enable, test, and debug Google Sign-In with Firebase Hosting.

## 1. Enable the Google provider in Firebase
1. Open Firebase Console → Project → Authentication → Sign-in method.
2. Click the `Google` provider.
3. Toggle `Enable` ON and save.

If you want to use your own Google OAuth client (advanced):
- Create credentials in Google Cloud Console → APIs & Services → Credentials → Create OAuth client ID (Application type: Web application).
- Copy the client ID and set it in the Google provider config in Firebase if the console allows a custom client.
- Make sure the OAuth consent screen is configured (Publishing status: Test or Production) and your test users are added when in `Testing`.

## 2. Add Authorized Domains (Firebase Auth)
1. Firebase Console → Authentication → Settings → Authorized domains.
2. Add these (example):
   - `localhost`
   - `127.0.0.1`
   - `your-project-id.firebaseapp.com`
   - `your-project-id.web.app`
   - `www.your-production-domain.com` (your deployed domain)

If your app is served from a subdomain or custom domain, add it exactly.

## 3. If using a Google Cloud OAuth client — add JavaScript origins
1. Google Cloud Console → APIs & Services → Credentials → Edit your OAuth client.
2. Add Authorized JavaScript origins (e.g., `https://www.example.com`, `http://localhost:5000`).

Note: For popup flows you rarely need redirect URIs; those are used in explicit redirect flows.

## 4. Firebase config (client)
- Ensure the `authDomain` matches your Firebase Project's auth domain (usually `PROJECT.firebaseapp.com`).
- Sample config (replace placeholders):

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  // other optional fields
};
```

## 5. Popup vs Redirect
- Prefer `signInWithPopup` for the simplest UX; it requires that the call happens in a direct user-initiated click event.
- If `popup` is consistently blocked on some browsers, use `signInWithRedirect` and `getRedirectResult(auth)` to complete the flow.

Common popup issues:
- Browser popup blocker blocked the popup → user must allow popups for the domain.
- You started an async operation before calling `signInWithPopup` (browser may not treat it as a user gesture). Always call signIn directly inside click handler.

## 6. How to debug errors
- Open DevTools → Console and Network.
- On error, inspect `error.code` and `error.message`. Typical codes:
  - `auth/operation-not-allowed` — enable provider
  - `auth/unauthorized-domain` — domain not in authorized list
  - `auth/popup-blocked` — popup blocked
  - `auth/popup-closed-by-user` — user closed popup
  - `auth/cancelled-popup-request` — multiple popups

The project includes `public/firebase-signin.html` — a self-contained test page that prints detailed error information (alert + console) and supports both popup and redirect flows. Edit its `firebaseConfig` and open it to test quickly.

## 7. Deployment / Hosting
- For local testing use `localhost` (remember to add to authorized domains).
- To deploy:
  - Install Firebase CLI and login: `npm i -g firebase-tools` and `firebase login`.
  - Initialize hosting if not already: `firebase init hosting`.
  - Deploy: `firebase deploy --only hosting`.
- Firebase Hosting automatically provides HTTPS for your `web.app` and `firebaseapp.com` domains. Make sure you test over HTTPS for production domains.

## 8. Example quick test steps
1. Edit `public/firebase-signin.html` and replace `firebaseConfig` placeholders.
2. Serve locally (e.g., `npx http-server public -p 8080`) or deploy to hosting.
3. Open the page in the browser, open DevTools, click the Google button.
4. If it fails, copy `error.code` and `error.message` (they show in an alert and console) and consult the mapping above.

## 9. If you use a custom backend or want server-side tokens
- After `signInWithPopup` you can use the `user.getIdToken()` method to obtain an ID token and send it to your backend for verification.

## 10. Need help?
If you paste the exact `error.code` and the message shown by the test page (or the console dump), I will give precise next steps to fix it.
