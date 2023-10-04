$(() => {
    let id = document.URL.split("?")[1].split("=")[1];
    productDetail(id)
        .done((res) => {
            getProduct(res);
        });
});

const getProduct = (product) => {
    $("#id").text(product.id);
    $("#partNbr").text(product.partNbr);
    $("#name").text(product.name);
    $("#price").text(currency.format(product.price));
} 