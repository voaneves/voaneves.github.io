function init() {
  checkAPISupport();
  initEventHandlers();
  initTheme();
}

function checkAPISupport() {
  if (!("IntersectionObserver" in window)) {
    console.log("No IntersectionObserver API, website may behave strangely.");
  }
}

function initEventHandlers() {
  const controls = document.querySelectorAll(".control");
  const sections = document.querySelectorAll("section");
  const hiddenEls = document.querySelectorAll(".hidden");
  const arrowUp = document.querySelector(".arrow-up");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.target.tagName.toLowerCase() === "section") {
        if (entry.isIntersecting) {
          const index = Array.from(sections).indexOf(entry.target);
          document.querySelector(".active-btn").classList.remove("active-btn");
          controls[index].classList.add("active-btn");
        }
      } else {
        entry.target.classList.toggle(
          "show",
          entry.isIntersecting || entry.intersectionRatio > 0
        );
      }
    });
  });

  sections.forEach((section) => observer.observe(section));
  hiddenEls.forEach((el) => observer.observe(el));

  document.addEventListener("click", (event) => {
    if (event.target.matches(".control")) {
      toggleSidebar();
    } else if (event.target.matches(".sidebar-toggle")) {
      toggleSidebar();
    } else if (event.target.matches("#theme")) {
      toggleTheme();
    }
  });

  window.addEventListener(
    "scroll",
    () => {
      arrowUp.style.opacity =
        (window.pageYOffset || document.documentElement.scrollTop) > 150
          ? 1
          : 0;
    },
    { passive: true }
  );
}

function initTheme() {
  const themeButton = document.getElementById("theme");
  const darkMode = window.matchMedia("(prefers-color-scheme: dark)");
  themeButton.addEventListener("click", toggleTheme);
}

function toggleTheme() {
  const darkMode = window.matchMedia("(prefers-color-scheme: dark)");
  document.body.classList.toggle(darkMode.matches ? "light-mode" : "dark-mode");
}

const width =
  window.screen.width ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
const height =
  window.screen.height ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
