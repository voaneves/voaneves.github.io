(function () {
  /* Menu Handler */
  const controls = document.querySelectorAll(".control");
  const sections = document.querySelectorAll("section");
  const control_observer = new IntersectionObserver(
    (entries, control_observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Array.from(sections).indexOf(entry.target);
          /* console.log(entry.target); */
          document.querySelector(".active-btn").classList.remove("active-btn");
          controls[index].classList.add("active-btn");
        }
      });
    },
    {
      threshold: 0.05,
    }
  );
  sections.forEach((section) => {
    control_observer.observe(section);
  });
  const sidebar = document.querySelector(".sidebar");
  controls.forEach((control) => {
    control.addEventListener("click", function () {
      sidebar.classList.toggle("open");
    });
  });
  document.querySelector(".sidebar-toggle").addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });

  /* AOC Handler */
  const scroll_observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  });
  document
    .querySelectorAll(".hidden")
    .forEach((el) => scroll_observer.observe(el));

  /* Scroll-to-top handler */
  window.onscroll = function () {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    document.querySelector(".arrow-up").style.opacity = scrolled > 150 ? 1 : 0;
  };

  /* Theme handler */
  document.getElementById("theme").addEventListener("click", function () {
    if (darkTheme.matches) document.body.classList.toggle("light-mode");
    else document.body.classList.toggle("dark-mode");
  });
})();

var darkTheme = window.matchMedia("(prefers-color-scheme: dark)");

var width =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

var height =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;
