(function () {
  const cursor = document.querySelector("#cursor");
  const cursorBorder = document.querySelector("#cursor-border");
  let cursorPos = { x: 0, y: 0 };
  let cursorBorderPos = { x: 0, y: 0 };

  if (!("ontouchstart" in document.documentElement)) {
    document.addEventListener("pointermove", updateCursor);
    document.addEventListener("pointerleave", hideCursor);
    document.querySelectorAll("[data-cursor]").forEach(handleHover);
    animateBorder();
  }

  function updateCursor(e) {
    displayCursor();
    cursorPos.x = e.clientX;
    cursorPos.y = e.clientY;
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  }

  function animateBorder() {
    const easting = 8;
    cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easting;
    cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easting;
    cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
    requestAnimationFrame(animateBorder);
  }

  function handleHover(item) {
    item.addEventListener("pointerover", setCursorSize);
    item.addEventListener("pointerout", resetCursorSize);
  }

  function setCursorSize() {
    if (this.dataset.cursor === "pointer") {
      cursor.style.opacity = 0;
      cursorBorder.classList.add("small-cursor");
      cursorBorder.style.setProperty("--size-cursor", "30px");
    } else if (this.dataset.cursor === "pointer2") {
      cursor.style.opacity = 0;
      cursorBorder.classList.add("big-cursor");
      cursorBorder.style.setProperty("--size-cursor", "100px");
    }
  }

  function resetCursorSize() {
    cursor.style.opacity = 1;
    cursorBorder.classList.remove("small-cursor");
    cursorBorder.classList.remove("big-cursor");
    cursorBorder.style.setProperty("--size-cursor", "50px");
  }

  function hideCursor() {
    cursor.style.display = "none";
    cursorBorder.style.display = "none";
  }

  function displayCursor() {
    cursor.style.display = "block";
    cursorBorder.style.display = "block";
  }
})();
