const navLinks = document.querySelectorAll("[data-navLink]");

navLinks.forEach((link) => {
  if (link.getAttribute("href") === window.location.pathname) {
    link.setAttribute("aria-current", "page");
  }
})

document.querySelector(".burger-icon").addEventListener("click", function () {
  document.querySelector(".nav-menu").classList.toggle("active");
});

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar-first');
  let body = document.querySelector('body');
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        let scrollPos = window.pageYOffset;
        // let maxScroll = document.body.scrollHeight - window.innerHeight;
        // let percentage = scrollPos / maxScroll;
        // let gradientIndex = Math.min(Math.floor(percentage * gradients.length), gradients.length - 1);
        // navbar.style.background = gradients[gradientIndex];

        // flag 1
        ticking = false;

        if (scrollPos > 100 && scrollPos < 350)
          navbar.style.background = 'transparent';
        if (scrollPos > 100 && scrollPos < 150)
          navbar.style.backdropFilter = 'blur(2px)';
        if (scrollPos > 150 && scrollPos < 200)
          navbar.style.backdropFilter = 'blur(4px)';
        if (scrollPos > 200 && scrollPos < 275)
          navbar.style.backdropFilter = 'blur(8px)';

        // 2 styles ↓
        if (scrollPos > 275 && scrollPos < 375 || scrollPos > 375 && scrollPos < 450)
          navbar.style.backdropFilter = 'blur(10px)';
        
        if(body.classList.contains('dark') == false) {
          if (scrollPos > 275 && scrollPos < 375)
          navbar.style.background = 'rgb(255, 255, 255, 0.25)';
          if (scrollPos > 375 && scrollPos < 450)
            navbar.style.background = 'rgb(255, 255, 255, 0.5)';
          if (scrollPos > 450 && scrollPos < 550)
            navbar.style.background = 'rgba(255, 255, 255, 0.75)';
          if (scrollPos > 550)
            navbar.style.background = 'rgba(255, 255, 255, 1)';
        } 
        else {
          if (scrollPos > 275 && scrollPos < 375)
          navbar.style.background = 'rgba(22, 22, 29, 0.25)';
          if (scrollPos > 375 && scrollPos < 450)
            navbar.style.background = 'rgba(22, 22, 29, 0.5)';
          if (scrollPos > 450 && scrollPos < 550)
            navbar.style.background = 'rgba(22, 22, 29, 0.75)';
          if (scrollPos > 550)
            navbar.style.background = 'rgba(22, 22, 29, 1)';
        }
      });

      // flag 2
      ticking = true;
    }
  });
});

console.clear();