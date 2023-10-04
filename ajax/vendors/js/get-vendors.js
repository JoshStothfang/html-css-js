$(() => {
    getVendors();
    
    $("#addVendor").on("click", () => {
        document.location = "post-vendor.html";
    });
});

const getVendors = () => {
    $.getJSON("http://localhost:5555/api/vendors")
        .done( (response) => {
            display(response);  
        });  
}

const display = (vendors) => {
    for (let vendor of vendors) {
        let tr = $("<tr></tr>");
        tr.append( $(`<td>${vendor.id}</td>`) );
        tr.append( $(`<td>${vendor.code}</td>`) );
        tr.append( $(`<td>${vendor.name}</td>`) );
        tr.append( $(`<td>${vendor.address}</td>`) );
        tr.append( $(`<td>${vendor.city}</td>`) );
        tr.append( $(`<td>${vendor.state}</td>`) );
        tr.append( $(`<td>${vendor.zip}</td>`) );
        tr.append( $(`<td>${vendor.phone}</td>`) );
        tr.append( $(`<td>${vendor.email}</td>`) );

        let td = $("<td></td>");
        td.append( $(`<a href="get-vendor.html?id=${vendor.id}">Detail</a>`) );
        td.append( $("<span> | </span>"));
        td.append( $(`<a href="put-vendor.html?id=${vendor.id}">Edit</a>`) );
        td.append( $("<span> | </span>"));
        td.append( $(`<a onclick="deleteVendor(${vendor.id})" href="">Delete</a>`) );

        tr.append(td);
        $("tbody").append(tr);
    }
}