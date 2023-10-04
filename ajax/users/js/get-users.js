$(() => {
        //let users = getUsers();
        getUsers();
        //display(users);
});

//JavaScript
/*
const getUsers = () => {

    let http = new XMLHttpRequest();

    http.responseType = "json";

    http.open("GET", "http://localhost:5555/api/users", true);

    //what to do when call completes, response is passed to this function when returned
    http.onload = function() {
        console.log(http.response);
        display(http.response);
        //return http.response;
    }

    http.send();
}
*/

//jQuery
const getUsers = () => {
    $.getJSON("http://localhost:5555/api/users")
        .done( (res) => {
            console.log(res);
            display(res);
        })
        .fail( (err) => {
            console.error(err);
        });
}

const deleteUser = (id) => {

    let http = new XMLHttpRequest();

    http.responseType = "json";

    http.open("DELETE", `http://localhost:5555/api/users/${id}`, true);

    http.onload = function() {
        console.log(http.response);
    }

    http.send();
    document.location.reload();
}

/*
//JavaScript
const display = (users) => {
    let tbody = document.getElementById("tbody");

    //clears tbody out
    tbody.innerHTML = "";

    for (let u of users) {
        let tr = "<tr>";
        tr += `<td>${u.id}</td>`;
        tr += `<td>${u.firstname} ${u.lastname}</td>`;
        tr += `<td>${u.username}</td>`;
        tr += `<td>${u.phone}</td>`;
        tr += `<td>${u.isReviewer ? "Yes" : "No"}</td>`;
        tr += `<td>${u.isAdmin ? "Yes" : "No"}</td>`;
        tr += "<td>";
        tr += `<a href="get-user.html?id=${u.id}">Detail</a> | `;
        tr += `<a href="put-user.html?id=${u.id}">Edit</a> | `;
        tr += `<a href="" onclick="deleteUser(${u.id})">Delete</a>`;
        tr += "</td>";
        tr += "</tr>";
        tbody.innerHTML += tr;
    }
}
*/

//jQuery
const display = (users) => {
    let tbody = $("#tbody");

    tbody.empty();

    for (let u of users) {
        let tr = $("<tr></tr>");
        tr.append( $(`<td>${u.id}</td>`) );
        tr.append( $(`<td>${u.firstname} ${u.lastname}</td>`) );
        tr.append( $(`<td>${u.username}</td>`) );
        tr.append( $(`<td>${u.phone}</td>`) );
        tr.append( $(`<td>${u.isReviewer ? "Yes" : "No"}</td>`) );
        tr.append( $(`<td>${u.isAdmin ? "Yes" : "No"}</td>`) );
        let a1 = $(`<a href="get-user.html?id=${u.id}">Detail</a>`);
        let sep1 = $("<span> | </span>");
        let a2 = $(`<a href="put-user.html?id=${u.id}">Edit</a>`);
        let sep2 = $("<span> | </span>");
        let a3 = $(`<a href="" onclick="deleteUser(${u.id})">Delete</a>`);
        let tda = $("<td></td>");
        tda.append(a1);
        tda.append(sep1);
        tda.append(a2);
        tda.append(sep2);
        tda.append(a3);
        tr.append(tda);
        tbody.append(tr)
;    }
}