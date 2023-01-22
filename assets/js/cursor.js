(function () {
  const cursor = document.querySelector("#cursor");
  const cursorBorder = document.querySelector("#cursor-border");
  let cursorPos = { x: 0, y: 0 };
  let cursorBorderPos = { x: 0, y: 0 };

  // store the reference toSelectorAll("[data-cursor]") to avoid
  // making an expensive query every time the code runs.
  const cursorItems = document.querySelectorAll("[data-cursor]");

  // This if statement is used to check touch capabilities
  if (!("ontouchstart" in document.documentElement)) {
    document.addEventListener("pointermove", updateCursor);
    document.addEventListener("pointerleave", hideCursor);
    cursorItems.forEach(handleHover);
    animateBorder();
  }

  // This function updates the cursor position using the coordinates
  function updateCursor(e) {
    const { clientX, clientY } = e;

    // This functions displays the cursor on the screen
    displayCursor();

    // Updates the x and y coordinates of the cursor
    cursorPos.x = clientX;
    cursorPos.y = clientY;

    // sets the transformation for the cursor based on the coordinates
    cursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
  }

  // This function animates the movements of the cursor border
  function animateBorder() {
    const easting = 8;
    const { x: cx, y: cy } = cursorPos;
    const { x: bx, y: by } = cursorBorderPos;

    cursorBorderPos.x += (cx - bx) / easting;
    cursorBorderPos.y += (cy - by) / easting;

    // This sets the transform based on the updated coordinates
    cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;

    // This requests the animation frame for the next animation
    requestAnimationFrame(animateBorder);
  }

  function handleHover(item) {
    item.addEventListener("pointerover", setCursorSize);
    item.addEventListener("pointerout", resetCursorSize);
  }

  // This sets the size of the cursor based on the dataset
  function setCursorSize() {
    const cursorType = this.dataset.cursor;
    if (cursorType === "pointer") {
      cursorBorder.style.opacity = 0;
      cursor.classList.add("small-cursor");
      cursor.style.setProperty("--size-cursor", "30px");
    } else if (cursorType === "pointer2") {
      cursorBorder.style.opacity = 0;
      cursor.classList.add("big-cursor");
      cursor.style.setProperty("--size-cursor", "100px");
    }
  }

  // This resets the cursor
  function resetCursorSize() {
    cursorBorder.style.opacity = 0.2;
    cursor.classList.remove("small-cursor");
    cursor.classList.remove("big-cursor");
    cursor.style.setProperty("--size-cursor", "15px");
  }

  // This hides the cursor
  function hideCursor() {
    cursor.style.display = "none";
    cursorBorder.style.display = "none";
  }

  // This displays the cursor
  function displayCursor() {
    cursor.style.display = "block";
    cursorBorder.style.display = "block";
  }
})();
