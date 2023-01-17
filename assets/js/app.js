// Initialize all event handlers and API support
(function init() {
  checkAPISupport();
  initMenuHandler();
  initScrollHandler();
  initThemeHandler();
  initScrollToTopHandler();
})();

// Check whether the IntersectionObserver API is supported
function checkAPISupport() {
  if (!("IntersectionObserver" in window)) {
    // If API not supported, display a corresponding message
    console.log("No IntersectionObserver API, website may behave strangely.");
  }
}

// Handles click events on navigation links and sidebar toggle element
function initMenuHandler() {
  // Get all controls and sections
  const controls = document.querySelectorAll(".control");
  const sections = document.querySelectorAll("section");

  // Create an observer with 0.05 threshold
  const controlObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // If a section is intersecting, add the active-btn class to the corresponding navigation link
        if (entry.isIntersecting) {
          const index = Array.from(sections).indexOf(entry.target);
          document.querySelector(".active-btn").classList.remove("active-btn");
          controls[index].classList.add("active-btn");
        }
      });
    },
    { threshold: 0.05 }
  );

  // Observe all sections
  sections.forEach((section) => controlObserver.observe(section));

  // Request click handler to all controls and sidebar-toggle element
  controls.forEach((control) =>
    control.addEventListener("click", toggleSidebar)
  );
  document
    .querySelector(".sidebar-toggle")
    .addEventListener("click", toggleSidebar);

  // Toggle the sidebar when clicked
  function toggleSidebar() {
    document.querySelector(".sidebar").classList.toggle("open");
  }
}

// Show the elements with the hidden class when they intersect with viewport
function initScrollHandler() {
  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // Add or remove the show class based on result
      entry.target.classList.toggle(
        "show",
        entry.isIntersecting || entry.intersectionRatio > 0
      );
    });
  });

  // Observe all "hidden" elements
  document
    .querySelectorAll(".hidden")
    .forEach((el) => scrollObserver.observe(el));
}

//  Handle click event on "arrow-up" and fade in when user scrolls more than 150 pixels from page's top
function initScrollToTopHandler() {
  window.onscroll = () => {
    document.querySelector(".arrow-up").style.opacity =
      (window.pageYOffset || document.documentElement.scrollTop) > 150 ? 1 : 0;
  };
}

// Handle click event on theme button and set theme on user's preference
function initThemeHandler() {
  const themeButton = document.getElementById("theme");
  themeButton.addEventListener("click", toggleTheme);
}

function toggleTheme() {
  const darkMode = window.matchMedia("(prefers-color-scheme: dark)");
  document.body.classList.toggle(darkMode.matches ? "light-mode" : "dark-mode");
}

// Get current screen width and height
const width =
  window.screen.width ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
const height =
  window.screen.height ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;
