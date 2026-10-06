document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.querySelector(".nav ul");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      menu.classList.toggle("open");
    });
  }

  var path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach(function (link) {
    var href = link.getAttribute("href").split("#")[0] || "index.html";
    if (href === path) {
      link.classList.add("active");
    }
  });
});
