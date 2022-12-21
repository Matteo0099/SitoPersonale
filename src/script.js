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
 * toggle Dark-mode
*/
/*
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
*/