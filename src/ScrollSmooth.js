/*
function scrollToHalf(){
    var height = $('body').height();
    $('html, body').animate({
        scrollTop: height/2
    }, 500);
}
*/

function scrollToHome(){
    $('html, body').animate({
        scrollTop: $('#home').offset().top
    }, 850);
}

function scrollToAbout(){
    $('html, body').animate({
        scrollTop: $('#about').offset().top
    }, 825);
}

function scrollToProjects(){
    $('html, body').animate({
        scrollTop: $('#projects').offset().top
    }, 825);
}

function scrollToContact(){
    $('html, body').animate({
        scrollTop: $('#contact').offset().top
    }, 825);
}

/*
var scrollBehaviorSupported = 'scroll-behavior' in document.documentElement.style;
console.log('scroll-behavior supported:', scrollBehaviorSupported);
*/

/*
document.getElementById("#home").scrollIntoView({
    behavior: 'smooth'
});

document.getElementById("#about").scrollIntoView({
    behavior: 'smooth'
});

document.getElementById("#projects").scrollIntoView({
    behavior: 'smooth'
});

document.getElementById("#contact").scrollIntoView({
    behavior: 'smooth'
});
*/