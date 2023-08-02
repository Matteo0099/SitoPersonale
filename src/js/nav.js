const navLinks = document.querySelectorAll("[data-navLink]");

navLinks.forEach((link) => {
  if (link.getAttribute("href") === window.location.pathname) {
    link.setAttribute("aria-current", "page");
  }
})

document.querySelector(".burger-icon").addEventListener("click", function() {
  document.querySelector(".nav-menu").classList.toggle("active");
});