//STICKY FUNCTION FOR NAVIGATION
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos != 0) {
        document.getElementById("header").style.background = "#f38181";
    } else {
        document.getElementById("header").style.background = "rgba(0,0,0,.0)";
    }
}

//Animation of hamburger
var mob_menu = document.getElementById("mobile-ul");

function hamburger(x) {
    x.classList.toggle("change-hamburger");
    mob_menu.classList.toggle("mobile-ul-active");
};

//SLICK SLIDER
$(document).ready(function () {
    $('.slider-main').slick({
        dots: false,
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        speed: 800,
    });
    //AUTOPLAY FUNCTION WITH PROGRESSBAR
    var percentTime;
    var tick;
    var time = 1;
    var progressBarIndex = 0;

    $('.nav-slider .progress-bar').each(function (index) {
        var progress = "<div class='in-progress in-progress" + index + "'></div>";
        $(this).html(progress);
    });

    function startProgressbar() {
        resetProgressbar();
        percentTime = 0;
        tick = setInterval(interval, 10);
    }

    function interval() {
        if (($('.slider-main .slick-track div[data-slick-index="' + progressBarIndex + '"]').attr("aria-hidden")) === "true") {
            progressBarIndex = $('.slider-main .slick-track div[aria-hidden="false"]').data("slickIndex");
            startProgressbar();
        } else {
            percentTime += 1 / (time + 5);
            $('.in-progress' + progressBarIndex).css({
                width: percentTime + "%"
            });
            if (percentTime >= 100) {
                $('.slider-main').slick('slickNext');
                progressBarIndex++;
                if (progressBarIndex > 3) {
                    progressBarIndex = 0;
                }
                startProgressbar();
            }
        }
    }

    function resetProgressbar() {
        $('.in-progress').css({
            width: 0 + '%'
        });
        clearInterval(tick);
    }

    startProgressbar();
    // End ticking machine

    $('.nav-slider .nav-slider__button').click(function () {
        clearInterval(tick);
        var goToThisIndex = $(this).find("span").data("slickIndex");
        $('.slider-main').slick('slickGoTo', goToThisIndex, false);
        startProgressbar();
    });
});

//NUMBER COUNTER ANIMATION
var a = 0;
$(window).scroll(function () {

    var oTop = $('.m-numbers').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.m-numbers__counter').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                    countNum: countTo
                },
                {
                    duration: 4000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        //alert('finished');
                    }

                });
        });
        a = 1;
    }
});

//L-SERVICE-2 => DROPDOWN BUTTONS
// function dropdown() {
//     var dropdown_text = document.getElementById("accordion-text");
//     var arrow = document.getElementById("arrow");
//     if (dropdown_text.style.height === "180px") {
//         dropdown_text.style.height = "0";
//     } else {
//         dropdown_text.style.height = "180px";
//     }
// }

