const navbarLinks = document.getElementsByClassName('navbar-links')[0];
const toggleButton = document.getElementsByClassName('toggle-button')[0];

(function () {
  var toggle = document.querySelector('.nav-toggle');
  
  toggle.addEventListener('click', function(e) {
    this.classList.toggle('opened');
    navbarLinks.classList.toggle('active')
  });
})();

/*
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
  //toggleButton.classList.toggle('none')
  //toggleButtonClose.classList.toggle('active')
});
*/
