// Original
function add(a, b) {
    return a + b;
}

// Newer - created so that functions could be a part of JSON data, allows you to change value of function
let add = function(a, b) {
    return a + b;
}

// Newest
const add = (a, b) => {
    return a + b;
}