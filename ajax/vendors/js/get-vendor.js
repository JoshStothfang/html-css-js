$(() => {
    let id = document.URL.split("?")[1].split("=")[1];
    getVendor(id);
});

const getVendor = (id) => {
    $.getJSON(`http://localhost:5555/api/vendors/${id}`)
        .done( (response) => {
            display(response);
        });
}

const display = (vendor) => {
    $("#id").text(vendor.id);
    $("#code").text(vendor.code);
    $("#name").text(vendor.name);
    $("#address").text(vendor.address);
    $("#city").text(vendor.city);
    $("#state").text(vendor.state);
    $("#zip").text(vendor.zip);
    $("#phone").text(vendor.phone);
    $("#email").text(vendor.email);
}