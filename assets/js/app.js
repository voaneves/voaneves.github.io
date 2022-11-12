(function () {
  [...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      currentPage = document.getElementById(button.dataset.id);
      currentPage.classList.add("active");

      window.onscroll = function () {
        var scrolled = window.pageYOffset || document.documentElement.scrollTop,
          arrowUp = document.querySelector(".arrow-up");

        arrowUp.style.opacity = scrolled > 150 ? 1 : 0;
      };
    });
  });

  document.getElementById("theme").addEventListener("click", () => {
    const meta = document.querySelector('meta[name="color-scheme"]');
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const theme = event.matches ? "dark" : "light";
      });

    if (meta.content === "light") {
      meta.content = "dark";
      document.body.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
    } else if (
      window.matchMedia("(prefers-color-scheme: light)").matches &&
      meta.content === "dark light"
    ) {
      meta.content = "dark";
      document.body.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
    } else {
      meta.content = "light";
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
    }
  });
})();

var width =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

var height =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;
/* 
function getBrowserLocales(options = {}) {
  const defaultOptions = {
    languageCodeOnly: false,
  };
  const opt = {
    ...defaultOptions,
    ...options,
  };
  const browserLocales =
    navigator.languages === undefined
      ? [navigator.language]
      : navigator.languages;
  if (!browserLocales) {
    return undefined;
  }
  return browserLocales.map((locale) => {
    const trimmedLocale = locale.trim();
    return opt.languageCodeOnly ? trimmedLocale.split(/-|_/)[0] : trimmedLocale;
  });
}

if (getBrowserLocales({ languageCodeOnly: true }) === "pt") {
} */

var currentPage;
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
