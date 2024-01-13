var users = [
    { email: "admin@gmail.com", password: "12345678", redirect: "" },
    { email: "Panel@gmail.com", password: "12345678", redirect: "page2.html" },
    { email: "kavith", password: "12345678", redirect: "Owner/owner.html" },
    { email: "kimaya123", password: "12345678", redirect: "dashboard.html" }
];

function auth() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var user = users.find(u => u.email === email && u.password === password);

    if (user) {
        window.location.assign(user.redirect);
        
    } else {
        alert("Invalid User");
    }
}