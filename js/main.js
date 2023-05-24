$(window).on('scroll', function() {
    if ($(window).scrollTop() > 670) {
        $('.navbar-default').addClass('navbar-fixed-top');
    } else {
        $('.navbar-default').removeClass('navbar-fixed-top');
    }
});