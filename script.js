var firstName = document.querySelector(".first-name");
var lastName = document.querySelector(".last-name");
var email = document.querySelector(".email");
var phoneNumber = document.querySelector(".ph-number");
var password = document.querySelector(".password");
var confirmPassword = document.querySelector(".confirm-password");
var inputContainers = [firstName, lastName, email, phoneNumber, password, confirmPassword];

document.addEventListener("DOMContentLoaded", function() {

    inputContainers.forEach(function(container) {
        var input = container.querySelector("input");
        var label = container.querySelector("label");

        input.addEventListener("focus", function() {
            label.classList.add("active-label");
        })

        input.addEventListener("blur", function() {
            validate(container);
        })

    });
});

function validate(container) {
    var input = container.querySelector("input");
    var label = container.querySelector("label");
    var p = container.querySelector("p");

    if (container === firstName || container === lastName) {
        if (input.value.length < 8) {
            p.textContent = "Must be at least 8 characters long.";
            label.classList.remove("active-label");
            label.classList.add("active-label-red");
        } else {
            label.classList.add("active-label");
            label.classList.remove("active-label-red");
            p.textContent = "";
        }
    }

    if (container === email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input.value)) {
            p.textContent = "Enter a valid email address.";
            label.classList.remove("active-label");
            label.classList.add("active-label-red");
        } else {
            label.classList.add("active-label");
            label.classList.remove("active-label-red");
            p.textContent = "";
        }
    }

    if (container === phoneNumber) {
        var phoneRegex = /^\d{11}$/; // Assumes a 10-digit phone number
        if (!phoneRegex.test(input.value)) {
            p.textContent = "Enter a valid 10-digit phone number.";
            label.classList.remove("active-label");
            label.classList.add("active-label-red");
        } else {
            label.classList.add("active-label");
            label.classList.remove("active-label-red");
            p.textContent = "";
        }
    }

    if (container === password) {
        if (input.value.length < 8) {
            p.textContent = "Must be at least 8 characters long.";
            label.classList.remove("active-label");
            label.classList.add("active-label-red");
        } else {
            label.classList.add("active-label");
            label.classList.remove("active-label-red");
            p.textContent = "";
        }
    }

    if (container === confirmPassword) {
        var passwordInput = document.querySelector(".password input");
        if (input.value !== passwordInput.value) {
            p.textContent = "Passwords do not match.";
            label.classList.remove("active-label");
            label.classList.add("active-label-red");
        } else {
            label.classList.add("active-label");
            label.classList.remove("active-label-red");
            p.textContent = "";
        }
    }
}