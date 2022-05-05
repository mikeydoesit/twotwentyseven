$(document).ready( function() {
    // Initialize Hero Slider

    $('.hero_slider').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        fade: true,
        adaptiveHeight: true
      });


    // If in mobile view
    if ($('body').width() < 1080) {

        // When the logo wrapper is clicked
        $('.logo_wrapper').click(function () {
    
        // Slide nav up or down depending on isVisible class
        const mobileMenu = $('.nav')

            if (mobileMenu.hasClass('isVisible')) {
                mobileMenu.slideUp({
                    duration: 500,
                    start: function () {
                      $(this).css({
                        display: "flex"
                      })
                    },
                    complete: function () {
                        $(this).removeClass('isVisible')
                    }
                  })
            } else {
                mobileMenu.slideDown({
                    duration: 500,
                    start: function () {
                      $(this).css({
                        display: "flex"
                      })
                    },
                    complete: function () {
                        $(this).addClass('isVisible')
                    }
                  })
                
            }
        });
    }
})

