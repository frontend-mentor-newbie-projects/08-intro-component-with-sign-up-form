const form = document.getElementById("form");

const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const emailAddress = document.getElementById("email-address");
const password = document.getElementById("password");

const modalContainer = document.getElementById("modal-container"); 
const closeModal = document.getElementById("close-modal"); 

let somethingWentWrong = false;

form.addEventListener("submit", e => {
    e.preventDefault();

    checkInputs();
})


async function checkInputs() {
    // Remove trailing whitespaces
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailAddressValue = emailAddress.value.trim();
    const passwordValue = password.value.trim();

    // Check value of firstName
    if (firstNameValue === "") {
        setErrorFor(firstName, "First Name cannot be empty")
    } else { setSuccessFor(firstName) }

    // Check value of lastName
    if (lastNameValue === "") {
        setErrorFor(lastName, "Last Name cannot be empty");
    } else { setSuccessFor(lastName) }

    // Check value of emailAddress
    if (emailAddressValue === "" )  {
        setErrorFor(emailAddress, "Email Address cannot be empty")
    } else if (!isEmail(emailAddressValue)) {
        setErrorFor(emailAddress, "Not a valid email address")
    }
    else { setSuccessFor(emailAddress) }

    // Check value of password
    if (passwordValue === "") {
        setErrorFor(password, "Password cannot be empty")
    } else if (isPasswordSecure(passwordValue)) {
        setErrorFor(password, "Password must be at least 16 characters")
    } else { setSuccessFor(password) }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    formControl.className = "form-control error";
    small.innerText = message;

    somethingWentWrong = true;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPasswordSecure(password) {
    return (password.length < 16);
}