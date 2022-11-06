body = document.querySelector("#full-page"); 

addEventlistener => body.fullpage('on-scroll', {
    sectionSelector: '.vertical-scrolling',
    slideSelector: '.horizontal-scrolling',
    controlArrows: false
    // more options here
});

var canvasW = window.innerWidth;
var canvasH = window.innerHeight;

function init()
{
    canvas = document.getElementById("mainCanvas");
    canvas.width = document.body.clientWidth; //document.width is obsolete
    canvas.height = document.body.clientHeight; //document.height is obsolete
    canvasW = canvas.width;
    canvasH = canvas.height;

    if( canvas.getContext )
    {
        setup();
        setInterval( run , 33 );
    }
}

$(window).bind("resize", function(){
    var w = $(window).width();
    var h = $(window).height();

    $("#mycanvas").css("width", w + "px");
    $("#mycanvas").css("height", h + "px"); 
});

//using HTML5 for fullscreen (only newest Chrome + FF)
$("#mycanvas")[0].webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT); //Chrome
$("#mycanvas")[0].mozRequestFullScreen(); //Firefox

//now i want to cancel fullscreen
document.webkitCancelFullScreen(); //Chrome
document.mozCancelFullScreen(); //Firefox

