let menu = document.querySelector("#menu-icon");
let navbar=document.querySelector('.navmenu');

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}
// Toggle functions to switch between login and register forms
function showLogin() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("registerForm").style.display = "none";
}

function showRegister() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "block";
}

// Login function
function login() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
    const errorMessage = document.getElementById("loginErrorMessage");

    if (username === "" || password === "") {
        errorMessage.textContent = "Please enter both username and password.";
    } else if (username === "admin" && password === "password123") {
        errorMessage.textContent = "";
        alert("Login successful!");
    } else {
        errorMessage.textContent = "Incorrect username or password.";
    }
}

// Register function
function register() {
    const username = document.getElementById("registerUsername").value;
    const password = document.getElementById("registerPassword").value;
    const confirmPassword = document.getElementById("registerConfirmPassword").value;
    const errorMessage = document.getElementById("registerErrorMessage");

    if (username === "" || password === "" || confirmPassword === "") {
        errorMessage.textContent = "All fields are required.";
    } else if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match.";
    } else {
        errorMessage.textContent = "";
        alert("Registration successful! You can now log in.");
    }
}



document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const submitButton = document.querySelector('input[type="submit"]');


    form.addEventListener('submit', function (event) {

        event.preventDefault();


        const name = form.querySelector('input[placeholder="Name"]').value;
        const email = form.querySelector('input[placeholder="Email"]').value;
        const phone = form.querySelector('input[placeholder="Phone Number"]').value;
        const message = form.querySelector('textarea').value;


        if (!name || !email || !phone || !message) {
            alert('Please fill out all fields.');
            return;
        }


        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        alert('Your message has been sent successfully!');


        form.reset();
    });
});
