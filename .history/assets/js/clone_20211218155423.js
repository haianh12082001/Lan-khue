$(function () {
    ///Product
    var productList1 = $('.bg-light-blue .gutters-10');
    var productItem1 = $('.bg-light-blue .col-lg');
    for (i = 0; i < 4; i++) {
        productItem1.clone().appendTo(productList1);
    }

})