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
        slidesToShow:1,
        slidesToScroll:1,
        // autoplay: true,
        // autoplaySpeed: 5000,
        // asNavFor: '.nav-slider'
        // dotsClass: 'dot-ul',
        // customPaging: function(slider, i) {
        //     var j;
        //     var title = $(slider.$slides[i]).data();
        //     if (i === 0) { j = "INTRO" };
        //     if (i === 1) { j = "WORK" };
        //     if (i === 2) { j = "ABOUT" };
        //     if (i === 3) { j = "CONTACTS" };
        //     return '<div class="dot"><p><span>0'+(i+1)+'</span> '+j+'</p></div>';
        // }
    });
    $('.nav-slider > .nav-slider__button').click(function () {
        $('.slider-main').slick('slickGoTo',$(this).index());
    });
});

// $(document).ready(function () {
//     if ($('.slider-main').lenght) {
//         var slider = $('.slider-main')
//             .on('init', function (slick) {
//                 $('.slider-main').fadeIn(1000);
//             })
//             .slick({
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//                 arrows: true,
//                 autoplay: true,
//                 lazyLoad: 'ondemand',
//                 autoplaySpeed: 3000,
//                 asNavFor: '.nav-slider'
//             });
//
//         var $slider2 = $('.nav-slider')
//             .on('init', function (slick) {
//                 $('.nav-slider').fadeIn(1000);
//             })
//             .slick({
//                 slidesToShow: 4,
//                 slidesToScroll: 1,
//                 lazyLoad: 'ondemand',
//                 asNavFor: '.nav-slider',
//                 dots: false,
//                 centerMode: false,
//                 focusOnSelect: true
//             });
//         $('.nav-slider .slick-slide').removeClass('slick-active');
//         $('.nav-slider .slick-slide').eq(0).addClass('slick-active');
//
//         $('.slider-main').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
//             var slideNumber = nextSlide;
//             $('.nav-slider .slick-slide').removeClass('slick-active');
//             $('.nav-slider .slick-active').eq(SlideNumber).addClass('slick-active')
//         });
//
//         require(['js-slideWithProgressbar'],
//             function (slider) {
//                 $('.slider-main').each(function () {
//
//                     me.slider = new slider($(this), options, sliderOptions, previewSliderOptions);
//                 });
//             });
//         var options = {
//             progressbarSelector: '.bJS_progressbar'
//             , slideSelector: '.bJS_slider'
//             , previewSlideSelector: '.bJS_previewSlider'
//             , progressInterval: ''
//             , onCustomProgressbar: function ($slide, $progressbar) {
//             }
//         }
//         var sliderOptions = {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             arrows: false,
//             fade: true,
//             autoplay: true
//         }
//         var previewSliderOptions = {
//             slidesToShow: 3,
//             slidesToScroll: 1,
//             dots: false,
//             focusOnSelect: true,
//             centerMode: true
//         }
//     }
// });