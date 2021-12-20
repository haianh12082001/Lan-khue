$(document).ready(function () {
    $('.product-category .list').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        speed: 2000,
        autoplaySpeed: 3000,

    });
    // PRODUCT-DETAIL
    $('.product-slides').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        speed: 2000,
        autoplaySpeed: 3000,

        asNavFor: '.product-slides-nav',
        prevArrow: ('<div class="slick-prev"><i class="fas fa-chevron-left"></i></div>'),
        nextArrow: ('<div class="slick-next"><i class="fas fa-chevron-right"></i></div>'),
    });
    $('.product-slides-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.product-slides',
        infinite: true,
        autoplay: true,
        arrows: false,
        speed: 2000,
        autoplaySpeed: 3000,
        focusOnSelect: true,
        pauseOnHover: true,
    });

    $('.tab-navigation a').click(function () {
        $('.tab-navigation a').removeClass("active")
        $(this).addClass("active")
    })

    $('.menu-item').click(function () {
        $(this).toggleClass("active")
    })

    $(".header-bar").click(function () {
        $('.header-menu').toggleClass('active');
        $('.menu-bar').toggleClass('fa-times');
        $('.opacity__menu').toggleClass('active');
    })
})