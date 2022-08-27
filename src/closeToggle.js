document.addEventListener('DOMContentLoaded', function () {
                
    var dropdown = document.querySelector('.dropdown');
    
    dropdown.addEventListener('click', function(event) {
       event.stopPropagation();
       dropdown.classList.toggle('is-active');
     });
 });  

/*
function myFunction() {
    var element = document.getElementsByClassName("navbar-menu");
    var burger = document.getElementsByClassName("navbar-burger");

    if (burger.contains(".is-active")) {
        element.remove("is-active");
        burger.remove("is-active");
    } else {
        burger.add("is-active");
    }
} 
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