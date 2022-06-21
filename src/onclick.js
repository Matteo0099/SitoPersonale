$('button#navButton1.btn').on('click', function (event) {
    $('.arrow', event.target)
        .toggleClass('rotate')
        .toggleClass('reset');
});