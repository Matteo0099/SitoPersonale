document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar-first');
  const body = document.querySelector('body');
  let prevScrollPos = window.pageYOffset;

  // Update the navbar based on scroll position
  function updateNavbarStyles(scrollPos) {
    const blurValue = Math.min(10, Math.max(0, Math.floor((scrollPos - 100) / 50) * 2));
    const alphaValue = Math.min(1, (scrollPos - 275) / 100);

    if (scrollPos > 100 && scrollPos < 350) 
      navbar.style.background = 'transparent';

    navbar.style.backdropFilter = `blur(${blurValue}px)`;

    if (!body.classList.contains('dark')) 
      navbar.style.background = `rgba(255, 255, 255, ${alphaValue * 0.25})`;
    else 
      navbar.style.background = `rgba(22, 22, 29, ${alphaValue * 0.25})`;
  }

  // initial styles
  updateNavbarStyles(prevScrollPos);

  // Scroll 
  window.addEventListener('scroll', () => {
    const scrollPos = window.pageYOffset;

    if (scrollPos !== prevScrollPos) {
      updateNavbarStyles(scrollPos);
      prevScrollPos = scrollPos;
    }
  });

  // set aria-current attribute
  const navLinks = document.querySelectorAll("[data-navLink]");

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === window.location.pathname) 
      link.setAttribute("aria-current", "page");
  });

  // Toggle navigation menu
  document.querySelector(".burger-icon").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("active");
  });
});

console.clear();
