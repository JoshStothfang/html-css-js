$(() => {
    $("#deleteVendor").on("click", () => {
        deleteVendor($("#id").text());
    });
});

const deleteVendor = (id) => {
    $.ajax({
        method: "DELETE",
        url: `http://localhost:5555/api/vendors/${id}`,
        contentType: "application/json"
    })
        .done( () => {
            document.location = "get-vendors.html";
        });
}