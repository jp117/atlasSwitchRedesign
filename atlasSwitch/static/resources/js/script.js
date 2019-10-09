$(document).ready(function() {
    /* Sticky Nav */
    $('.js--section-aboutus').waypoint(
        function(direction) {
            if (direction == 'down') {
                $('nav').addClass('sticky');
            } else {
                $('nav').removeClass('sticky');
            }
        },
        {
            offset: '100px'
        }
    );
    /* Scroll to links on page */
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') ==
                    this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length
                    ? target
                    : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate(
                        {
                            scrollTop: target.offset().top - 100
                        },
                        1000
                    );
                    return false;
                }
            }
        });

    /* Mobile nav */
    $('.js--nav-icon, js--main-nav').click(function(e) {
        e.preventDefault();
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        if (icon.hasClass('fa-bars')) {
            icon.addClass('fa-times');
            icon.removeClass('fa-bars');
            nav.css('display', 'block');
        } else {
            icon.addClass('fa-bars');
            icon.removeClass('fa-times');
            nav.hide();
        }
    });
});
