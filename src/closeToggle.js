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