function initCustomCursor() {
  const cursor = document.querySelector("#cursor");
  const cursorBorder = document.querySelector("#cursor-border");
  let cursorPos = { x: 0, y: 0 };
  let cursorBorderPos = { x: 0, y: 0 };

  const cursorItems = document.querySelectorAll("[data-cursor]");

  if (!("ontouchstart" in document.documentElement)) {
    document.addEventListener("pointermove", updateCursor, { passive: true });
    document.addEventListener("pointerleave", hideCursor);
    cursorItems.forEach(handleHover);
    animateBorderWithSetTimeout();
  }

  function updateCursor({ clientX, clientY }) {
    displayCursor();
    cursorPos = { x: clientX, y: clientY };
    cursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
  }

  function animateBorder() {
    const easing = 8;
    const { x: cx, y: cy } = cursorPos;
    const { x: bx, y: by } = cursorBorderPos;

    cursorBorderPos.x += (cx - bx) / easing;
    cursorBorderPos.y += (cy - by) / easing;
    cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
  }

  function animateBorderWithSetTimeout() {
    animateBorder();
    setTimeout(animateBorderWithSetTimeout, 1000 / 60);
  }

  function handleHover(item) {
    item.addEventListener("pointerover", setCursorSize);
    item.addEventListener("pointerout", resetCursorSize);
  }

  function setCursorSize() {
    const cursorType = this.dataset.cursor;
    cursorBorder.style.opacity = 0;
    cursor.classList.toggle("small-cursor", cursorType === "pointer");
    cursor.classList.toggle("big-cursor", cursorType === "pointer2");
    cursor.style.setProperty(
      "--size-cursor",
      cursorType === "pointer" ? "30px" : "100px"
    );
  }

  function resetCursorSize() {
    cursorBorder.style.opacity = 0.2;
    cursor.classList.remove("small-cursor", "big-cursor");
    cursor.style.setProperty("--size-cursor", "15px");
  }

  function hideCursor() {
    cursor.style.display = "none";
    cursorBorder.style.display = "none";
  }

  function displayCursor() {
    cursor.style.display = "block";
    cursorBorder.style.display = "block";
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initCustomCursor);
} else {
  initCustomCursor();
}
