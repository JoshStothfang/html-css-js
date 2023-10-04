const url = "http://localhost:5555/api/products";

const currency = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD"
});

// GET all products
const productList = () => {
    return $.getJSON(`${url}`); //returns object called promise (JS way to handle async calls)
}

// GET product by id
const productDetail = (id) => {
    return $.getJSON(`${url}/${id}`);
}