$(() => {
    let id = document.URL.split("?")[1].split("=")[1];
    getVendor(id);

    $("#updateVendor").on("click", () => {
        putVendor(getDataFromHtml());
    });
});

const getVendor = (id) => {
    $.getJSON(`http://localhost:5555/api/vendors/${id}`)
        .done( (response) => {
            display(response);
        });
}

const display = (vendor) => {
    $("#id").val(vendor.id);
    $("#code").val(vendor.code);
    $("#name").val(vendor.name);
    $("#address").val(vendor.address);
    $("#city").val(vendor.city);
    $("#state").val(vendor.state);
    $("#zip").val(vendor.zip);
    $("#phone").val(vendor.phone);
    $("#email").val(vendor.email);
}

const getDataFromHtml = () => {
    let vendor = {};
    vendor.id = $("#id").val();
    vendor.code = $("#code").val();
    vendor.name = $("#name").val();
    vendor.address = $("#address").val();
    vendor.city = $("#city").val();
    vendor.state = $("#state").val();
    vendor.zip = $("#zip").val();
    vendor.phone = $("#phone").val();
    vendor.email = $("#email").val();
    return vendor;
}

const putVendor = (vendor) => {
    $.ajax({
        method: "PUT",
        url: `http://localhost:5555/api/vendors/${vendor.id}`,
        data: JSON.stringify(vendor),
        contentType: "application/json"
    })
        .done( () => {
            document.location = "get-vendors.html";
        });
}