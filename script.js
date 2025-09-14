// =====================
// DOM Elements
// =====================
let nameErr   = document.getElementById('name-error');
let phoneErr  = document.getElementById('phone-error');
let emailErr  = document.getElementById('email-error');
let msgErr    = document.getElementById('message-error');
let subErr    = document.getElementById('submit-error');

let contact   = document.getElementById('contact-name');
let phone     = document.getElementById('contact-number');
let email     = document.getElementById('contact-mail');
let message   = document.getElementById('contact-message');
let btn       = document.getElementById('btn');


// =====================
// Validation Functions
// =====================

// Validate full name (must contain first + last name)
function validName() {
    let name = contact.value;
    if (name.length === 0 || !name.match(/^[A-Za-z]+ [A-Za-z]+$/)) {
        nameErr.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>`;
        nameErr.style.color = "red";
        return false;
    }
    nameErr.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    nameErr.style.color = "green";
    return true;
}

// Validate phone number (10 digits only)
function validNumber() {
    let number = phone.value;
    if (!number.match(/^[0-9]{10}$/)) {
        phoneErr.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>`;
        phoneErr.style.color = "red";
        return false;
    }
    phoneErr.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    phoneErr.style.color = "green";
    return true;
}

// Validate email (basic pattern)
function validEmail() {
    let mail = email.value;
    if (!mail.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)) {
        emailErr.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>`;
        emailErr.style.color = "red";
        return false;
    }
    emailErr.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    emailErr.style.color = "green";
    return true;
}

// Validate message (minimum 45 characters)
function validMsg() {
    let msg = message.value;
    let needed = 45;
    let left = needed - msg.length;

    if (left > 0) {
        msgErr.innerHTML = `${left} characters left <i class="fa-solid fa-circle-exclamation"></i>`;
        msgErr.style.color = "red";
        return false;
    }
    msgErr.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    msgErr.style.color = "green";
    return true;
}

// Validate entire form before submit
function validForm() {
    if (!validName() || !validNumber() || !validEmail() || !validMsg()) {
        subErr.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Please fix errors before submitting `;
        subErr.style.color = "red";
        return false;
    }
    subErr.innerHTML = `Form has been sent <i class="fa-solid fa-circle-check"></i>`;
    subErr.style.color = "green";
    return true;
}


// =====================
// Event Listeners
// =====================

// Real-time validation on input fields
contact.addEventListener('keyup', validName);
phone.addEventListener('keyup', validNumber);
email.addEventListener('keyup', validEmail);
message.addEventListener('keyup', validMsg);

// Prevent form submission if validation fails
btn.addEventListener('click', (e) => {
    if (!validForm()) {
        e.preventDefault();
    }
});

