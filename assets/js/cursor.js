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
    const { clientX, clientY } = e;

    displayCursor();
    cursorPos.x = clientX;
    cursorPos.y = clientY;
    cursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
  }

  function animateBorder() {
    const easting = 8;
    const { x: cx, y: cy } = cursorPos;
    const { x: bx, y: by } = cursorBorderPos;

    cursorBorderPos.x += (cx - bx) / easting;
    cursorBorderPos.y += (cy - by) / easting;
    cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
    requestAnimationFrame(animateBorder);
  }

  function handleHover(item) {
    item.addEventListener("pointerover", setCursorSize);
    item.addEventListener("pointerout", resetCursorSize);
  }

  function setCursorSize() {
    const cursorType = this.dataset.cursor;

    if (cursorType === "pointer") {
      cursor.style.opacity = 0;
      cursorBorder.classList.add("small-cursor");
      cursorBorder.style.setProperty("--size-cursor", "30px");
    } else if (cursorType === "pointer2") {
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
