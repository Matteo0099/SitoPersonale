$(window).scroll(function() {
    $('.scroll-animations .magictime').each(function() {
      if (isScrolledIntoView(this) === true) {
        $(this).addClass('tinLeftIn');
      }
    });
  });