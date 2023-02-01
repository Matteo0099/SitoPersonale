let outline = document.querySelector('.outline');
let cursor = document.querySelector('.cursor');
let links = document.querySelectorAll('a');
let btn = document.querySelectorAll('button');

//update the cursor
document.addEventListener('mousemove', function (e) {
    let x = e.clientX;
    let y = e.clientY;
    outline.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%))`; //alt96
    cursor.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%))`;
});

function mouseCursor(event) {
    outline.classList.toggle('hover-crs');
    cursor.classList.toggle('hover-crs');
    if (event.target !== this) {
        event.stopPropagation();
        localStorage.clear();
    }
}

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

//delete web cache
window.onbeforeunload = function () {
    document.stopPropagation();
    localStorage.clear();
    Cache.delete();
    CacheStorage.delete();
}

/*document.addEventListener('mousemove', function (e) {
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
        if (link.target !== this) {
            e.stopPropagation();
            localStorage.clear();
        }
    });
});*/