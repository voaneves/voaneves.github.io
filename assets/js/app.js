(function init() {
  checkAPISupport();
  initMenuHandler();
  initScrollHandler();
  initThemeHandler();
  initScrollToTopHandler();
})();

function checkAPISupport() {
  if (!("IntersectionObserver" in window)) {
    console.log("No IntersectionObserver API, website may behave strangely.");
  }
}

function initMenuHandler() {
  const controls = document.querySelectorAll(".control");
  const sections = document.querySelectorAll("section");
  const controlObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Array.from(sections).indexOf(entry.target);
          document.querySelector(".active-btn").classList.remove("active-btn");
          controls[index].classList.add("active-btn");
        }
      });
    },
    {
      threshold: 0.05,
    }
  );
  sections.forEach((section) => controlObserver.observe(section));
  controls.forEach((control) => {
    control.addEventListener("click", toggleSidebar);
  });
  document
    .querySelector(".sidebar-toggle")
    .addEventListener("click", toggleSidebar);

  function toggleSidebar() {
    document.querySelector(".sidebar").classList.toggle("open");
  }
}

function initScrollHandler() {
  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle(
        "show",
        entry.isIntersecting || entry.intersectionRatio > 0
      );
    });
  });
  document
    .querySelectorAll(".hidden")
    .forEach((el) => scrollObserver.observe(el));
}

function initScrollToTopHandler() {
  window.onscroll = function () {
    const scrolled = window.pageYOffset || document.documentElement.scrollTop;
    document.querySelector(".arrow-up").style.opacity = scrolled > 150 ? 1 : 0;
  };
}

function initThemeHandler() {
  document.getElementById("theme").addEventListener("click", function () {
    const darkTheme = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkTheme.matches) {
      document.body.classList.toggle("light-mode");
    } else {
      document.body.classList.toggle("dark-mode");
    }
  });
}

const width =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
const height =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;
