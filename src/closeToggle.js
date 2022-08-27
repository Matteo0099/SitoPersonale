document.addEventListener('DOMContentLoaded', function () {
                
    var dropdown = document.querySelector('.dropdown');
    
    dropdown.addEventListener('click', function(event) {
       event.stopPropagation();
       dropdown.classList.toggle('is-active');
    });
});  


/*
function toggleItem(elem) {
    onclick="#";
    for (var i = 0; i < elem.length; i++) {
      elem[i].addEventListener("click", function(e) {
        var current = this;
        for (var i = 0; i < elem.length; i++) {
          if (current != elem[i]) {
            elem[i].classList.remove('is-active');
          } else if (current.classList.contains('is-active') === true) {
            current.classList.remove('is-active');
          } else {
            current.classList.add('is-active')
          }
        }
        e.preventDefault();
      });
    };
  }
  toggleItem(document.querySelectorAll('.navbar-menu'));
  toggleItem(document.querySelectorAll('.navbar-burger'));
*/

//canvas experiment
let canvas = document.querySelector('#main');
if(canvas.getContext) {
   let ctx = main.getContext('2d');
}

(() => {
    const canvas = document.querySelector('section');
    if (!canvas.getContext) {
        return;
    }

    // get the context
    let ctx = canvas.getContext('2d');

    // set fill and stroke styles
    ctx.fillStyle = '#0B3866';
    ctx.strokeStyle = '#0B3866';

    // draw a rectangle with fill and stroke
    ctx.fillRect(50, 50, 150, 100);
    ctx.strokeRect(50, 50, 150, 100);
})();

/*function Closenav() {
    $('navbar-menu').click(function (e) {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        }
        else {
            $(this).addClass("active");
        }
    });
    if(x.style.display != "none") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}
*/

/*
var $links = $('.navbar-item');
$links.click(function(){
   $links.removeClass('navbar-menu');
   $(this).addClass('navbar-menu is-shadowless');
});
*/

/*
function() {
    $(".navbar-burger").toggleClass("is-active"), $(".navbar-menu").toggleClass("is-active")
}
*/