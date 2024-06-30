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

    //for slideshow on about us page
    let currentIndex = 0;
        const slides = $('.slide');
        const totalSlides = slides.length;
    
        function showNextSlide() {
            slides.eq(currentIndex).fadeOut(600);
            currentIndex = (currentIndex + 1) % totalSlides;
            slides.eq(currentIndex).fadeIn(600);
        }
    
        slides.hide().eq(0).show(); // Show the first slide initially
        setInterval(showNextSlide, 4000); // Change slide every 3 seconds

        //csr page cards
        // const cards = document.querySelectorAll('.newcard');

        // cards.forEach(card => {
        //     card.addEventListener('click', () => {
        //         card.classList.toggle('active');
        //     });
        // });
        // const cards = document.querySelectorAll('.card');

        // cards.forEach(card => {
        //     card.addEventListener('click', () => {
        //         card.classList.toggle('active');
        //     });
        // });
        const cards = document.querySelectorAll('.ncard');

        cards.forEach(card => {
            card.addEventListener('click', () => {
                // If the card is active, remove the active class to close it
                if (card.classList.contains('active')) {
                    card.classList.remove('active');
                } else {
                    // Otherwise, add the active class to open it
                    card.classList.add('active');
                }
            });
        });
});

// $(document).ready(function(){
//     let currentIndex = 0;
//     const slides = $('.slide');
//     const totalSlides = slides.length;

//     function showNextSlide() {
//         slides.eq(currentIndex).fadeOut(600);
//         currentIndex = (currentIndex + 1) % totalSlides;
//         slides.eq(currentIndex).fadeIn(600);
//     }

//     slides.hide().eq(0).show(); // Show the first slide initially
//     setInterval(showNextSlide, 3000); // Change slide every 3 seconds
// });
