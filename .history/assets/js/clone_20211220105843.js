$(function () {
    ///Product
    var productList1 = $('.bg-light-blue .gutters-10');
    var productItem1 = $('.bg-light-blue .col-lg');
    for (i = 0; i < 4; i++) {
        productItem1.clone().appendTo(productList1);
    }

    var productList2 = $('.bestseller .row-cols-lg-5');
    var productItem2 = $('.bestseller .col-lg');
    for (i = 0; i < 9; i++) {
        productItem2.clone().appendTo(productList2);
    }
    var productList3 = $('#tab-1 .row-cols-lg-5');
    var productItem3 = $('#tab-1 .col-lg');
    for (i = 0; i < 9; i++) {
        productItem3.clone().appendTo(productList3);
    }
    $('tab-navigation a').click(function () {
        $('.tab-navigation a').removeClass("active");
        $(this).addClass("active");
    })
})

