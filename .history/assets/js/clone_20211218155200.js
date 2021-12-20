$(function () {
    ///Product
    var productList1 = $('.product1 .product-list');
    var productItem1 = $('.product1 .product-item');
    for (i = 0; i < 9; i++) {
        productItem1.clone().appendTo(productList1);
    }
    var productList2 = $('.product2 .product-list');
    for (i = 0; i < 9; i++) {
        productItem1.clone().appendTo(productList2);
    }
    var productList3 = $('.product3 .product-list');
    for (i = 0; i < 4; i++) {
        productItem1.clone().appendTo(productList3);
    }
    var productList4 = $('.tab-product .product-list');
    var productItem4 = $('.tab-product .product-item');
    for (i = 0; i < 14; i++) {
        productItem4.clone().appendTo(productList4);
    }

    var productList5 = $('.product-details .product-list');
    var productItem5 = $('.product-details .product-item');
    for (i = 0; i < 4; i++) {
        productItem5.clone().appendTo(productList5);
    }
})