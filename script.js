// js start code
$(document).ready(function() {

});


// menu toggle 
$('.nav__btn').clone().insertAfter('.navbar ul');
$('.nav__toggle').click(function() {
    $(this).toggleClass('on');
    $('.navbar').toggle("");
    $('body').toggleClass('scroll-off');
});


// menu toggle 
$(document).ready(function() {
    $(window).scroll(function() {
        var height = $(window).scrollTop();
        if (height > 100) {
            $(".site-header").addClass("headerup");
        } else {
            $(".site-header").removeClass("headerup");
        }
    });
    $(".menu-toggle").click(function() {
        $(this).toggleClass("on");
        $(".navbar").slideToggle();
    });


// owl slider  
$('#owl2').owlCarousel({
    // stagePadding: 50,
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});


// number count  (class="count")
var flag = 1;
var pos = $(".section--pricing").offset().top + 200;
$(window).scroll(function() {
    var windowpos = $(window).scrollTop();
    // console.log(windowpos + '--' + pos) -scroll height count
    if (windowpos >= pos) {
        if (flag == 1) {
            $('.count').each(function() {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 5000,
                    easing: 'swing',
                    step: function(now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
            flag++;
        }
    }
});


// scroll animation img and text
$(window).scroll(function() {
    var PosintionTop = $(document).scrollTop();
    console.log(PosintionTop);

    if ((PosintionTop > 1100) && (PosintionTop < 1400)) {
        $('.card-1').addClass('animated slideInLeft');
        $('.card-2').addClass('animated slideInDown');
        $('.card-3').addClass('animated slideInRight');
    };

});


 // scrolltop
    $('.scrolltotop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.scrolltotop').fadeIn();
        } else {
            $('.scrolltotop').fadeOut();
        }
    });


//(checkbox) btn click price number change month to year

//first code 
var flag = 1;
$('.btn--monthly').click(function() {
    if (flag == 1) {
        $('.35').html("<span>$245</span>");
        $('.89').html("<span>$1068</span>");
        $('.125').html("<span>$1500</span>");
        $('.monthyear').html("<span>/Year</span>");
        $('.btn--black').animate({ left: '35px' })
        flag = 0;
    } else {
        $('.35').html("<span>$35</span>");
        $('.89').html("<span>$89</span>");
        $('.125').html("<span>$125</span>");
        $('.monthyear').html("<span>/month</span>")
        $('.btn--black').animate({ left: '8px' })
        flag = 1;
    }
});

// second code
$('.check-block').click(function() {
    if ($('.check-box input').is(':checked')) {
        $('.35').html("<span>$35</span>");
        $('.89').html("<span>$89</span>");
        $('.125').html("<span>$125</span>");
        $('.monthyear').html("<span>/month</span>")
    } else {
        $('.35').html("<span>$245</span>");
        $('.89').html("<span>$1068</span>");
        $('.125').html("<span>$1500</span>");
        $('.monthyear').html("<span>/Year</span>");
    }
});

// magnific-popup
$('.magnific-imgbox a').magnificPopup({
    type: 'image',
    gallery: { enabled: true }
});


// ssdcrollreveal
ScrollReveal().reveal('.cards', {
    // rotate: {
    //     x: 2000,
    //     y: 2000,
    //     z: 0
    // },
    reset: true,
    scale: 1.1,
    origin: 'bottom',
    distance: "100px",
    duration: 1000,
    interval: 100,
    opacity: 0.1
});


// wow
new WOW().init();


// section--accoridon   

$('.accordion h3').click(function() {
    $('.accordion h3').removeClass('bor');
    $(this).addClass('bor');
    $('.accordion__block').slideUp();
    $(this).next().slideDown();
});


// tab
$('#open a').click(function() {
    $('#open a').removeClass('active');
    $(this).addClass('active');
    var ids = $(this).attr('href');
    $(ids).show();
});
