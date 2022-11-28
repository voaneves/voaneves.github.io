(function () {
  const typedTextSpan = document.querySelector(".typed-text");
  const cursorSpan = document.querySelector(".caret");
  let textArray = new Array();

  document.querySelectorAll(".text-string").forEach((element) => {
    textArray.push(element.innerHTML);
  });

  const typingDelay = 100;
  const erasingDelay = 50;
  const newTextDelay = 1000;
  let textArrayIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } else setTimeout(erase, newTextDelay);
  }

  function erase() {
    if (charIndex > 0) {
      typedTextSpan.textContent = textArray[textArrayIndex].substring(
        0,
        charIndex - 1
      );
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) textArrayIndex = 0;
      setTimeout(type, typingDelay + 1100);
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
  });
})();
