(function () {
  [...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn");
      loadCSS(button.dataset.id);
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      document.getElementById(button.dataset.id).classList.add("active");
    });
  });

  window.onscroll = function () {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop,
    arrowUp = document.querySelector(".arrow-up");

    arrowUp.style.opacity = scrolled > 150 ? 1 : 0;
  };

  document.querySelector(".sidebar-toggle").addEventListener("click", () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("open");
  });

  document.getElementById("theme").addEventListener("click", () => {
    if (darkTheme.matches) document.body.classList.toggle("light-mode");
    else document.body.classList.toggle("dark-mode");
  });
})();

const darkTheme = window.matchMedia("(prefers-color-scheme: dark)");

var width =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

var height =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;

var filesAdded = 'home';

// To load CSS file
function loadCSS(fileName) { 
  console.log(fileName);
    if(filesAdded.indexOf(fileName) !== -1)
        return;
  
    var head = document.getElementsByTagName('head')[0];
      
    // Creating link element
    var style = document.createElement('link'); 
    style.href = '/assets/styles/' + fileName + '.css';
    style.type = 'text/css';
    style.rel = 'stylesheet';
    head.append(style);

    console.log('/assets/styles/' + fileName + '.css');
      
    // Adding the name of the file to keep record
    filesAdded += fileName;
}