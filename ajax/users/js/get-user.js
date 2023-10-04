$(() => {
    let data = document.URL.split("?")[1];
    let id = data.split("=")[1];
    document.getElementById("userId").value = id;
    getUser();

    $("#deleteUser").on("click", () => {
        deleteUser();
    })
});

let user;

//JavaScript
/*
const getUser = () => {
    let id = document.getElementById("userId").value;
    clear();
    if (id === "") {
        return;
    }
    let http = new XMLHttpRequest();
    http.responseType = "json";
    http.open("GET", `http://localhost:5555/api/users/${id}`, true);
    
    http.onload = function() {
        user = http.response;
        console.log(http.response);
        if (http.status !== 200) {
            return;
        }
        display(http.response);
    }
    http.send();
}
*/

//jQuery
const getUser = () => {
    let id = document.getElementById("userId").value;
    clear();
    if (id === "") {
        return;
    }
    $.getJSON(`http://localhost:5555/api/users/${id}`)
        .done( (res) => {
            user = res;
            console.log(res);
            display(res);
        })
        .fail ( (err) => {
            console.error(err);
        });
}

const display = (user) => {
    document.getElementById("id").innerText = user.id;
    document.getElementById("name").innerText = `${user.firstname} ${user.lastname}`;
    document.getElementById("username").innerText = user.username;
    document.getElementById("phone").innerText = user.phone;
    document.getElementById("reviewer").innerText = user.isReviewer ? "Yes" : "No";
    document.getElementById("admin").innerText = user.isAdmin ? "Yes" : "No";
}

const clear = () => {
    document.getElementById("id").innerText = "";
    document.getElementById("name").innerText = "";
    document.getElementById("username").innerText = "";
    document.getElementById("phone").innerText = "";
    document.getElementById("reviewer").innerText = "";
    document.getElementById("admin").innerText = "";
}

const deleteUser = () => {
    let http = new XMLHttpRequest();
    http.responseType = "json";
    http.open("DELETE", `http://localhost:5555/api/users/${user.id}`, true);
    
    http.onload = function() {
        console.log(http.response);
        document.location = "get-users.html"
    }
    http.send();
}