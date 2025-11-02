To replace the app logo with your PNG:

1. Copy your PNG file (for example: "Adobe Express - file (1).png") into this `public/` folder.
2. Rename the file to `logo.png` so the app can pick it up at runtime.
   - Path: `public/logo.png`
3. Reload the dev server or refresh the browser.

Notes:
- The app will try `/logo.png` first; if it doesn't exist the UI falls back to the existing `logo.svg`.
- If you want a different filename, update the <img> src in the pages that render the logo (e.g., `src/pages/Auth.tsx`, `src/pages/Landing.tsx`).
