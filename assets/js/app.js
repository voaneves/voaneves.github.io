(function () {
  [...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      document.getElementById(button.dataset.id).classList.add("active");
    });
  });
  document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    const meta = document.querySelector('meta[name="color-scheme"]');
    if (meta.content === "light") {
      meta.content = "dark";
    } else {
      meta.content = "light";
    }
  });
})();

var width =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

const englishOrNot = document.location.href.search("en");

function fragmentText(text, maxWidth, ctx) {
  var words = text.split(" "),
    lines = [],
    line = "";

  if (ctx.measureText(text).width < maxWidth) {
    return [text];
  }

  while (words.length > 0) {
    while (ctx.measureText(words[0]).width >= maxWidth) {
      var tmp = words[0];
      words[0] = tmp.slice(0, -1);

      if (words.length > 1) {
        words[1] = tmp.slice(-1) + words[1];
      } else {
        words.push(tmp.slice(-1));
      }
    }

    if (ctx.measureText(line + words[0]).width < maxWidth) {
      line += words.shift() + " ";
    } else {
      lines.push(line);
      line = "";
    }

    if (words.length === 0) {
      lines.push(line);
    }
  }
  return lines;
}
