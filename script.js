$(document).ready(function() {
    // Highlight the active nav link based on the current URL
    $('nav a').each(function() {
        if (this.href === window.location.href) {
            $(this).addClass('active');
        }
    });

    // Toggle the mobile menu on click
    $('#mobile-menu').click(function(event) {
        event.stopPropagation(); // Prevent the click event from bubbling up to the document
        $('.navbar').toggleClass('active');
        $(this).toggleClass('active');
    });

    // Close the menu if clicking anywhere outside the navbar
    $(document).click(function(event) {
        if (!$(event.target).closest('.navbar, #mobile-menu').length) {
            $('.navbar').removeClass('active');
            $('#mobile-menu').removeClass('active');
        }
    });

    // Optional: Close the menu if tapping on a link inside the navbar (mobile behavior)
    $('.navbar a').click(function() {
        $('.navbar').removeClass('active');
        $('#mobile-menu').removeClass('active');
    });
});
