function validatePhoneNumber(phoneNumber) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
}

document.getElementById('phoneNumberInput').addEventListener('blur', function () {
    const phoneNumberInput = this.value.trim(); 
    const phoneNumberError = document.getElementById('phoneNumberError');
    if (phoneNumberInput === '') {
        phoneNumberError.textContent = 'Phone number is required';
    } else if (!validatePhoneNumber(phoneNumberInput)) {
        phoneNumberError.textContent = 'Please enter a valid phone number';
    } else {
        phoneNumberError.textContent = '';
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const editProfileButton = document.getElementById('editProfile');
    const firstName = document.getElementById('firstName');
    const middleName = document.getElementById('middleName');
    const lastName = document.getElementById('lastName');
    const emailInput = document.getElementById('emailInput');
    const phoneNumberInput = document.getElementById('phoneNumberInput');

    editProfileButton.addEventListener('click', function() {
        const isEditable = !firstName.disabled;
        if (isEditable) {
            firstName.disabled = true;
            middleName.disabled = true;
            lastName.disabled = true;
            emailInput.disabled = true;
            phoneNumberInput.disabled = true;
            editProfileButton.textContent = 'Edit Profile';
        } else {
            firstName.disabled = false;
            middleName.disabled = false;
            lastName.disabled = false;
            emailInput.disabled = false;
            phoneNumberInput.disabled = false;
            editProfileButton.textContent = 'Save Profile';
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const payLaterOption = document.getElementById('payLaterOption');
    const payLaterLabel = document.getElementById('payLaterLabel');

    let isChecked = false;

    payLaterLabel.addEventListener('click', function() {
        if (isChecked) {
            payLaterOption.checked = false;
            isChecked = false;
        } else {
            payLaterOption.checked = true;
            isChecked = true;
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const bookWorkOption = document.querySelector('input[name="bookWork"]');
    const bookWorkLabel = document.querySelector('.book-for-work');

    let isChecked = false;

    bookWorkLabel.addEventListener('click', function() {
        if (isChecked) {
            bookWorkOption.checked = false;
            isChecked = false;
        } else {
            bookWorkOption.checked = true;
            isChecked = true;
        }
    });
});

document.getElementById('exp').addEventListener('input', function(event) {
    var expDate = event.target.value;
    var expRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
    if (!expRegex.test(expDate)) {
        event.target.setCustomValidity('Expiry date should be in the format MM/YY');
    } else {
        event.target.setCustomValidity('');
    }
});

document.getElementById('cvc').addEventListener('input', function(event) {
    var cvc = event.target.value;
    var cvcRegex = /^[0-9]{3}$/;
    if (!cvcRegex.test(cvc)) {
        event.target.setCustomValidity('CVC should contain only 3 numbers');
    } else {
        event.target.setCustomValidity('');
    }
});


function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateEmailBox() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailbox = document.getElementById('emailbox').value.trim();
    const emailboxError = document.getElementById('emailboxError');

    if (emailbox === '') {
        emailboxError.textContent = 'Email address is required';
        return false;
    } else if (!validateEmail(emailbox)) {
        return false;
    } else {
        emailboxError.textContent = '';
        return true;
    }
}

document.getElementById('emailInput').addEventListener('blur', function () {
    const emailInput = this.value.trim();
    const emailInputError = document.getElementById('emailInputError');
    if (emailInput === '') {
        emailInputError.textContent = 'Email address is required';
    } else if (!validateEmail(emailInput)) {
        emailInputError.textContent = 'Please enter a valid email address';
    } else {
        emailInputError.textContent = '';
    }
});

function subscribeEmail() {
    if (validateEmailBox()) {
        alert('Subscribed');
    } else {
        alert("Enter a valid email address");
    }
}

function redirectToLinkedIn() {
    window.location.href = 'https://www.linkedin.com/';
}

function redirectToTelegram() {
    window.location.href = 'https://telegram.org/';
}

function redirectToTwitter() {
    window.location.href = 'https://twitter.com/';
}

function redirectToFacebook() {
    window.location.href = 'https://www.facebook.com/';
}

function redirectToInstagram() {
    window.location.href = 'https://www.instagram.com/';
}