(function () {
  [...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      sidebar.classList.toggle("open");
    });
  });

  window.onscroll = function () {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop,
      arrowUp = document.querySelector(".arrow-up");

    arrowUp.style.opacity = scrolled > 150 ? 1 : 0;
  };

  document.querySelector(".sidebar-toggle").addEventListener("click", () => {
    document.querySelector(".sidebar").classList.toggle("open");
  });

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
