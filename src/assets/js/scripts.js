/***************** Waypoints ******************/

$(document).ready(function() {

    $('.wp1').waypoint(function() {
        $('.wp1').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp2').waypoint(function() {
        $('.wp2').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });
    $('.wp3').waypoint(function() {
        $('.wp3').addClass('animated fadeInDown');
    }, {
        offset: '55%'
    });
    $('.wp4').waypoint(function() {
        $('.wp4').addClass('animated fadeInDown');
    }, {
        offset: '75%'
    });
    $('.wp5').waypoint(function() {
        $('.wp5').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });
    $('.wp6').waypoint(function() {
        $('.wp6').addClass('animated fadeInDown');
    }, {
        offset: '75%'
    });

});

/***************** Slide-In Nav ******************/

$(window).load(function() {

    $('.nav_slide_button').click(function() {
        $('.pull').slideToggle();
    });

});

/***************** Smooth Scrolling ******************/

$(function() {

    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 2000);
                return false;
            }
        }
    });

});

/***************** Nav Transformicon ******************/

document.querySelector("#nav-toggle").addEventListener("click", function() {
    this.classList.toggle("active");
});

/***************** Overlays ******************/

$(document).ready(function() {
    if (Modernizr.touch) {
        // show the close overlay button
        $(".close-overlay").removeClass("hidden");
        // handle the adding of hover class when clicked
        $(".img").click(function(e) {
            if (!$(this).hasClass("hover")) {
                $(this).addClass("hover");
            }
        });
        // handle the closing of the overlay
        $(".close-overlay").click(function(e) {
            e.preventDefault();
            e.stopPropagation();
            if ($(this).closest(".img").hasClass("hover")) {
                $(this).closest(".img").removeClass("hover");
            }
        });
    } else {
        // handle the mouseenter functionality
        $(".img").mouseenter(function() {
                $(this).addClass("hover");
            })
            // handle the mouseleave functionality
            .mouseleave(function() {
                $(this).removeClass("hover");
            });
    }
});

/***************** Flexsliders ******************/

$(window).load(function() {

    $('#portfolioSlider').flexslider({
        animation: "slide",
        directionNav: false,
        controlNav: true,
        touch: false,
        pauseOnHover: true,
        start: function() {
            $.waypoints('refresh');
        }
    });

    $('#servicesSlider').flexslider({
        animation: "slide",
        directionNav: false,
        controlNav: true,
        touch: true,
        pauseOnHover: true,
        start: function() {
            $.waypoints('refresh');
        }
    });

    $('#teamSlider').flexslider({
        animation: "slide",
        directionNav: false,
        controlNav: true,
        touch: true,
        pauseOnHover: true,
        start: function() {
            $.waypoints('refresh');
        }
    });

});



/***************gallery*******/



var colCount = 0;
var colWidth = 0;
var margin = 20;
var windowWidth = 0;
var blocks = [];

function positionBlocks() {
    windowWidth = $(window).width();
    colWidth = $('.gallery').outerWidth();
    colCount = Math.floor(windowWidth / (colWidth + margin));
    for (var i = 0; i < colCount; i++) {
        blocks.push(margin);
    }
    $('.gallery').each(function() {
        var min = Array.min(blocks);
        var index = $.inArray(min, blocks);
        var leftPos = margin + (index * (colWidth + margin));
        $(this).css({
            'left': leftPos + 'px',
            'top': min + 'px'
        });
        blocks[index] = min + block.outerHeight() + margin;
    });
}
// Función para obtener el valor mínimo del array
Array.min = function(array) {
    return Math.min.apply(Math, array);
};


// header fixed

$(document).ready(function() {

    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('header').addClass('header2');
        } else {
            $('header').removeClass('header2');
        }
    });


});