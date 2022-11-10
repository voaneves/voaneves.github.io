if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("worker.min.js").then(
      function (registration) {
        console.log("❤️");
      },
      function (err) {
        console.log("ServiceWorker registration failed: ", err);
      }
    );
  });
}
