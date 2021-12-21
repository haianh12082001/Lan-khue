$(document).ready(function () {
    $('.product-category .list').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        speed: 2000,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: true,
                    speed: 2000,
                    autoplaySpeed: 3000,
                }
            },
            {
                breakpoint: 568,
                settings: {

                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: true,
                    speed: 2000,
                    autoplaySpeed: 3000,
                }
            },
        ]
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
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.product-slides',
        infinite: true,
        autoplay: true,
        arrows: false,
        speed: 2000,
        autoplaySpeed: 3000,
        focusOnSelect: true,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: true,
                    speed: 2000,
                    autoplaySpeed: 3000,
                }
            },
            {
                breakpoint: 568,
                settings: {

                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: true,
                    speed: 2000,
                    autoplaySpeed: 3000,
                }
            },
        ]
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
        $('.header-bar i').toggleClass('fa-times');
        // $('.opacity__menu').toggleClass('active');
    })
    /////product-menu phần mobi
    $(".filter-icon").click(function () {
        $('.product-menu').toggleClass('active');

    })
    $(".close-product-menu").click(function () {
        $('.product-menu').removeClass('active');

    })
    // $(".box-search").click(function () {
    //     $(this).toggleClass('active');

    // })
})
function BoxSearchDroup() {
    var x = screen.width;
    var acc = document.getElementsByClassName("box-search-title");
    var i;
    console.log(x);
    if (x < 769) {
        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
                /* Toggle between adding and removing the "active" class,
                to highlight the button that controls the panel */
                this.classList.toggle("active");

                /* Toggle between hiding and showing the active panel */
                var panel = this.nextElementSibling;

                if (panel.style.display === "block") {
                    panel.style.display = "none";

                } else {
                    panel.style.display = "block";

                }
            });
        }
    }
} BoxSearchDroup()


