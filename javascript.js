let hamburger = document.querySelector(".hamburger-menu");
let nav = document.getElementById("nav_check").nextElementSibling;

hamburger.onclick = function() {
    nav.classList.toggle("active");
};

function validateForm() {
    let name = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirm_password = document.getElementById("confirm_password").value;
    let dob = document.getElementById("dob").value;
    let check = document.getElementById("agreement").checked;

    if (name.length < 6) {
        document.getElementById("errorname").innerHTML = "Name must be more than 6 words";
    } else {
        document.getElementById("errorname").innerHTML = "";
    }

    if (!email.endsWith("@gmail.com")) {
        document.getElementById("erroremail").innerHTML = "Email must end with @gmail.com";
    } else {
        document.getElementById("erroremail").innerHTML = "";
    }

    if (password.length < 8 || !checkAlphanum(password)) {
        document.getElementById("errorpassword").innerHTML = "Password must be at least 8 characters and alphanumeric";
      } else {
        document.getElementById("errorpassword").innerHTML = "";
    }

    if (confirm_password != password) {
        document.getElementById("errorconfirm_password").innerHTML = "Confirm password must be the same as password";
        alert("Confirm password must be the same as password");
      } else {
        document.getElementById("errorconfirm_password").innerHTML = "";
    }

    if (new Date(dob) > new Date()) {
        document.getElementById("errordob").innerHTML = "Date of Birth must not exceed current date";
    } else {
        document.getElementById("errordob").innerHTML = "";
    }

    if (!check) {
        document.getElementById("erroragreement").innerHTML = "You must agree to the EULA";
        alert("You must agree to the EULA");
    } else {
        document.getElementById("erroragreement").innerHTML = "";
    }
}

function checkAlphanum(str) {
    let isAlphabet = false;
    let isNumeric = false;
    for (let i = 0; i < str.length; i++) {
        if (isNaN(str[i]) == true) {
            isAlphabet = true;
        } else {
            isNumeric = true;
        }
    }
    if (isAlphabet == true && isNumeric == true) {
        return true;
    } else {
        return false;
    }
}