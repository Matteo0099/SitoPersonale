let outline = document.querySelector('.outline');
let cursor = document.querySelector('.cursor');
let links = document.querySelectorAll('a');
let btn = document.querySelectorAll('button');

document.addEventListener('mousemove', function (e) {
    let x = e.clientX;
    let y = e.clientY;

    outline.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%))`; //alt96
    cursor.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%))`;

    //ciclo sui link per l'effetto hover
    links.forEach((link) => {
        link.addEventListener("mouseover", function () {
            outline.classList.add('hover-crs');
            cursor.classList.add('hover-crs');
        });
        link.addEventListener("mouseleave", function () {
            outline.classList.remove('hover-crs');
            cursor.classList.remove('hover-crs');
        });
        if (e.target !== this) {
            e.stopPropagation();
            localStorage.clear();
        }
    });
    btn.forEach((button) => {
        button.addEventListener("mouseover", function () {
            outline.classList.add('hover-crs');
            cursor.classList.add('hover-crs');
        });
        button.addEventListener("mouseleave", function () {
            outline.classList.remove('hover-crs');
            cursor.classList.remove('hover-crs');
        });
        if (e.target !== this) {
            e.stopPropagation();
            localStorage.clear();
        }
    });
});

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
var loader = document.querySelector('.preloader');
var loader__container = document.querySelector('.holder');
var loadingscreen = document.querySelector('.full__page');
var TotalLoading = setInterval(animate, 100);  //interval
//about 3 seconds  3+3 < 99
var count = 1;   //initial
var costantGrowth = 0.1;
const max = 4; //max count
//if 1->4 with 0.1 (1 sec = 0.1*10) = 4(4sec)

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
