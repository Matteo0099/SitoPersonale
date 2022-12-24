//open nav
//toggle 
function openNav() {
    console.log("open nav")
    document.getElementById("nav-page").classList.toggle("visible")
    console.log("close nav")
    document.getElementById("nav").classList.toggle("invisible")
    document.getElementById("body").classList.toggle("no-overflow")
}

/**
 * preloader 
 * 4 cicle loader animation 
**/
var loader = document.querySelector('.loader-wrap');
var loader__container = document.querySelector('.full__page');
var loadingscreen = document.querySelector('.loader');
var TotalLoading = setInterval(animate, 100);  //interval
//about 3 seconds  3+3 < 99
var count = 5;   //initial
var costantGrowth = 5;
const max = 100; //max count

console.log("loading...");

function animate() {
    count += costantGrowth;
    console.log(count);
    //stop count
    if (count == max || count > max) {
        loader.style.display = "none";
        loadingscreen.style.display = "none";
        loader__container.style.display = "none";
        stop(count);
        clearInterval(TotalLoading);
        console.log("loaded!");
    }
}

/**
 * Parallax Image scroll
*/
let image_parallax = document.querySelectorAll('.image-parallax');
let hero_parallax = document.querySelectorAll('.about .container');

//scroll on page
window.addEventListener('scroll', function () {
    let win_pos = window.pageYOffset;
    image_parallax.forEach((item) => {
        let elementToMove = item.getBoundingClientRect();
        //enter in the window
        if (win_pos > elementToMove.top) {
            item.style.transform = "translateY(" + elementToMove.top * -.1 * 0.525 + "px)";
        }
    });
    hero_parallax.forEach((item) => {
        let elementToMove = item.getBoundingClientRect();
        if (win_pos > elementToMove.top) {
            item.style.transform = "translateY(" + elementToMove.top * .1 * 0.625 + "px)";
        }
    });
});
