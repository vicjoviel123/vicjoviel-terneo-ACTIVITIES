function login() {
    var username = document.getElementById("username").value;
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    
    if (username === "" || password === "") {
        document.getElementById("error").innerHTML = "All textboxes are required";
    }
    else {
        document.getElementById("error").innerHTML = "Registered Successfully " + username  + " "  + name + "!";
    }
}
function forgot() {
    alert("You clicked forgot password.");
}
