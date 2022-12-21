(function () {
  const cursor = document.querySelector("#cursor");
  const cursorBorder = document.querySelector("#cursor-border");
  const cursorPos = { x: 0, y: 0 };
  const cursorBorderPos = { x: 0, y: 0 };

  if (!("ontouchstart" in document.documentElement)) {
    document.addEventListener("pointermove", (e) => {
      cursor.style.display = "block";
      cursorBorder.style.display = "block";
      cursorPos.x = e.clientX;
      cursorPos.y = e.clientY;

      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });

    requestAnimationFrame(function loop() {
      const easting = 8;
      cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easting;
      cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easting;

      cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
      requestAnimationFrame(loop);
    });

    document.documentElement.addEventListener("pointerleave", () => {
      cursor.style.display = "none";
      cursorBorder.style.display = "none";
    });

    document.querySelectorAll("[data-cursor]").forEach((item) => {
      item.addEventListener("pointerover", () => {
        if (item.dataset.cursor === "pointer") {
          cursor.style.opacity = 0;
          cursorBorder.classList.add("small-cursor");
          cursorBorder.style.setProperty("--size-cursor", "30px");
        } else if (item.dataset.cursor === "pointer2") {
          cursor.style.opacity = 0;
          cursorBorder.classList.add("big-cursor");
          cursorBorder.style.setProperty("--size-cursor", "100px");
        }
      });
      item.addEventListener("pointerout", () => {
        cursor.style.opacity = 1;
        cursorBorder.classList.remove("small-cursor");
        cursorBorder.classList.remove("big-cursor");
        cursorBorder.style.setProperty("--size-cursor", "50px");
      });
    });
  }
})();
