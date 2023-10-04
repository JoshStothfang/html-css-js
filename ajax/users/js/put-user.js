const getUser = (id) => {
    let http = new XMLHttpRequest();
    http.responseType = "json";
    http.open("GET", `http://localhost:5555/api/users/${id}`, true);
    
    http.onload = function() {
        console.log(http.response);
        display(http.response);
    }
    http.send();
}

//JavaScript
/*
const putUser = (user) => {
    let http = new XMLHttpRequest();
    
    http.responseType = "json";
    http.open("PUT", `http://localhost:5555/api/users/${user.id}`, true);
    
    http.setRequestHeader("Content-type", 'application/json');

    http.onload = function() {
        console.log(http.response);
        document.location = "get-users.html";
    }
    http.send(JSON.stringify(user));
}
*/

//jQuery
const putUser = (user) => {
    $.ajax({
        method: "PUT",
        url: `http://localhost:5555/api/users/${user.id}`,
        data: JSON.stringify(user),
        contentType: "application/json"
    })
    .done( (res) => {
        console.log(res);
        document.location = "get-users.html";
    })
    .fail( (err) => {
        console.error(err);
    });
}

const save = () => {
    let user = getDataFromHtml();
    putUser(user);
}

const loaded = () => {
    let data = document.URL.split("?")[1];
    let id = data.split("=")[1];
    getUser(id);
}

const getDataFromHtml = () => {
    let user = {};
    user.id = +document.getElementById("id").value;
    user.firstname = document.getElementById("firstname").value;
    user.lastname = document.getElementById("lastname").value;
    user.username = document.getElementById("username").value;
    user.password = document.getElementById("password").value;
    user.phone = document.getElementById("phone").value;
    user.email = document.getElementById("email").value;
    user.isReviewer = document.getElementById("reviewer").checked;
    user.isAdmin = document.getElementById("admin").checked;
    return user;
}

const display = (user) => {
    document.getElementById("id").value = user.id;
    document.getElementById("firstname").value = user.firstname;
    document.getElementById("lastname").value = user.lastname;
    document.getElementById("username").value = user.username;
    document.getElementById("password").value = user.password;
    document.getElementById("phone").value = user.phone;
    document.getElementById("email").value = user.email;
    document.getElementById("reviewer").checked = user.isReviewer;
    document.getElementById("admin").checked = user.isAdmin;
}