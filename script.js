$(document).ready(function() {
    $('nav a').each(function() {
        if (this.href === window.location.href) {
            $(this).addClass('active');
        }
    });
});

$(document).ready(function() {
    $('#mobile-menu').click(function() {
        $('.navbar').toggleClass('active');
        $(this).toggleClass('active');
    });
});

