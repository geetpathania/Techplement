document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    const loginLink = document.getElementById("login-link");

   
    const isLoggedIn = localStorage.getItem("loggedInUser");
    if (isLoggedIn) {
        loginLink.innerText = "Logout";
        loginLink.href = "logout.html";
    } else {
        loginLink.innerText = "Login";
        loginLink.href = "login.html";
    }

//handle login
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            
            if (username === "user" && password === "password") {
                localStorage.setItem("loggedInUser", username);
                window.location.href = "index.html"; // Redirect to the home page after login
            } else {
                alert("Invalid username or password");
            }
        });
    }

    // Handle logout
    if (window.location.pathname.endsWith("logout.html")) {
        localStorage.removeItem("loggedInUser");
    }
});
