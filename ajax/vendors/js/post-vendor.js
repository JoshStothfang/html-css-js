$(() => {
    $("#addVendor").on("click", () => {
        postVendor(getDataFromHtml());
    });
});

const getDataFromHtml = () => {
    let vendor = {};
    vendor.id = 0;
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

const postVendor = (vendor) => {
    $.ajax({
        method: "POST",
        url: "http://localhost:5555/api/vendors",
        data: JSON.stringify(vendor),
        contentType: "application/json"
    })
        .done( () => {
            document.location = "get-vendors.html";
        });
}