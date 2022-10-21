(function () {
  const cursor = document.querySelector("#cursor");
  const cursorBorder = document.querySelector("#cursor-border");
  const cursorPos = { x: 0, y: 0 };
  const cursorBorderPos = { x: 0, y: 0 };

  document.addEventListener("mousemove", (e) => {
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

  document.querySelectorAll("[data-cursor]").forEach((item) => {
    item.addEventListener("mouseover", (e) => {
      if (item.dataset.cursor === "pointer") {
        cursorBorder.classList.add("small-cursor");
        cursorBorder.style.setProperty("--size-cursor", "30px");
      }
      if (item.dataset.cursor === "pointer2") {
        cursorBorder.classList.add("big-cursor");
        cursorBorder.style.setProperty("--size-cursor", "80px");
      }
    });
    item.addEventListener("mouseout", (e) => {
      cursorBorder.classList.remove("small-cursor");
      cursorBorder.classList.remove("big-cursor");
      cursorBorder.style.setProperty("--size-cursor", "50px");
    });
  });
})();
