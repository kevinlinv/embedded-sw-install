const PARENT_FALLBACK_URL = "http://localhost:8080/parent/";

self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request).catch(() => Response.redirect(PARENT_FALLBACK_URL, 302))
  );
});
