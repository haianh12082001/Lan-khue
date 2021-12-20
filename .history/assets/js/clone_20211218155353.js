$(function () {
    ///Product
    var productList1 = $('.product1 .gutters-10');
    var productItem1 = $('.product1 .product-item');
    for (i = 0; i < 9; i++) {
        productItem1.clone().appendTo(productList1);
    }

})