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
//QUOTE SLICK SLIDER
$(document).ready(function () {
    $('.l-quote-slider').slick({
        dots: false,
        infinite: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 800,

        nextArrow: '<svg class="next" xmlns="http://www.w3.org/2000/svg" width="12" height="22" viewBox="0 0 12 22" xml:space="preserve"><path id="next" transform="translate(-1523 -4554)" fill="#ccc" d="M1523.52 4572.86l7.86-7.86-7.96-7.96a1.5 1.5 0 0 1 2.12-2.12l9 9a1.5 1.5 0 0 1 0 2.16l-9 9a1.5 1.5 0 0 1-2.54-1.08c0-.46.2-.86.52-1.14z"/></svg>',
        prevArrow: '<svg class="prev" xmlns="http://www.w3.org/2000/svg" width="12" height="22" viewBox="0 0 12 22" xml:space="preserve"><path id="prev" transform="translate(-383 -4554)" fill="#ccc" d="M394.48 4572.86l-7.86-7.86 7.96-7.96a1.5 1.5 0 0 0-2.12-2.12l-9 9a1.5 1.5 0 0 0 0 2.16l9 9a1.5 1.5 0 1 0 2.02-2.22z"/></svg>',
    });
});
