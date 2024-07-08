function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var real_username = "yanyan";
    var real_password = "12345";

    if (username === "" || password === "") {
        document.getElementById("error").innerHTML = "All textboxes are required";
    }
    else {
        if (username === real_username && password === real_password) {
            document.getElementById("error").innerHTML = "Welcome " + username + "!";
        }
        else {
            document.getElementById("error").innerHTML = "Invalid Username";
        }
    }
}
function forgot() {
    alert("You clicked forgot password.");
}
