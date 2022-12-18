//Link active class navigation
//simple 2 for-each

let items = document.querySelectorAll('.nav__container a');
items.forEach((item) => {
    item.addEventListener("click", function () {
        items.forEach((item) => {
            item.classList.remove('nav__link');
        });
        item.classList.add('nav__link');
    });
});

/**
 * preloader 
**/

var loader = document.querySelector('.loader-wrap');
var loader__container = document.querySelector('.full__page');
var loadingscreen = document.querySelector('.loader');
var TotalLoading = setInterval(animate, 100);  //interval
//about 3 seconds  3+3 < 99
var count = 3;   //initial
var costantGrowth = 3;
const max = 99; //max count

console.log("loading...");

function animate() {
    count += costantGrowth;
    //console.log(count);
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
 * toggle Dark-mode
*/

window.onload = function () {
    setMode();
};

function setMode() {
    let mode = localStorage.getItem('mode');
    if (!mode) mode = 'light';
    document.body.classList.add(mode);
}

function toggleMode() {
    let element = document.body;
    let btn = document.getElementById("darkmode-button");
    let mode = localStorage.getItem('mode')

    if (!mode) mode = 'dark';

    if (mode == 'dark') {
        localStorage.setItem("mode", "light");
        element.classList.remove("dark");
        element.classList.add("light");
        // btn.innerHTML = 'Dark mode';
    }
    else {
        localStorage.setItem("mode", "dark");
        element.classList.remove("light");
        element.classList.add("dark");
        // btn.innerHTML = 'Light mode';
    }
}
