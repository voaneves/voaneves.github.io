if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("worker.min.js").then(
      (registration) => console.log("❤️", registration.scope),
      (err) => console.log("ServiceWorker registration failed: ", err)
    );
  });
}
