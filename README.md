# Embedded SW install test

This project helps you test registering a service worker from a different origin via an iframe.

## Structure

- `parent/index.html`: served over `http://localhost` and embeds the child page.
- `child/index.html`: hosts the service worker registration (needs HTTPS).
- `child/sw.js`: a minimal service worker.

## How to run locally (parent)

1. From the repository root, start a local server:

   ```bash
   python3 -m http.server 8080
   ```

2. Open `http://localhost:8080/parent/`.

## How to host the child page on GitHub Pages

1. Publish the `child` folder to GitHub Pages.
2. Update the iframe `src` in `parent/index.html` to your GitHub Pages URL.

## What to expect

- The child page should register a service worker successfully on HTTPS.
- The parent page stays on HTTP (localhost) and only embeds the child page via iframe.
- Service worker registration is scoped to the child origin and should not affect the parent.
