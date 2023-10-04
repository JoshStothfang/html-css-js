//JavaScript
/*
const postUser = (user) => {
    let http = new XMLHttpRequest();
    
    http.responseType = "json";
    http.open("POST", `http://localhost:5555/api/users`, true);
    
    http.setRequestHeader("Content-type", 'application/json');

    http.onload = function() {
        console.log(http.response);
        display(http.response);
        document.location = "get-users.html";
    }
    http.send(JSON.stringify(user));
}
*/

const postUser = (user) => {
    $.ajax({
        method: "POST",
        url: "http://localhost:5555/api/users",
        data: JSON.stringify(user),
        contentType: "application/json"
    })
    .done( (res) => {
        console.log(res);
        display(res);
        document.location = "get-users.html";
    })
    .fail( (err) => {
        console.error(err);
    });
}

const save = () => {
    let user = getDataFromHtml();
    postUser(user);
}

const getDataFromHtml = () => {
    let user = {};
    user.id = 0;
    user.firstname = document.getElementById("firstname").value;
    user.lastname = document.getElementById("lastname").value;
    user.username = document.getElementById("username").value;
    user.password = "password123"
    user.phone = document.getElementById("phone").value;
    user.email = document.getElementById("email").value;
    user.isReviewer = document.getElementById("reviewer").checked;
    user.isAdmin = document.getElementById("admin").checked;
    return user;
}

const display = (user) => {
    document.getElementById("id").value = user.id;
}