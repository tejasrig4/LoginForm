function validateForm(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username === "user" && password === "password") {
        alert("Login successful");
    } else {
        alert("Invalid username or password");
    }
}
