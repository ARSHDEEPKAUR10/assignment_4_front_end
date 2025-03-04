document.getElementById('survey-form').addEventListener('submit', function (e) {
    let isValid = true;

    // Clear previous errors
    clearErrors();

    // Validate Name
    if (document.getElementById('name').value === "") {
        showError('name', 'Name is required.');
        isValid = false;
    }

    // Validate Email
    if (!validateEmail(document.getElementById('email').value)) {
        showError('email', 'Please enter a valid email.');
        isValid = false;
    }

    // Validate Gender
    if (!document.querySelector('input[name="gender"]:checked')) {
        showError('gender', 'Please select a gender.');
        isValid = false;
    }

    // Validate Country Selection
    if (document.getElementById('country').value === "") {
        showError('country', 'Please select a country.');
        isValid = false;
    }

    // Validate Username (Regex Validation)
    const username = document.getElementById('username').value;
    if (!/^[A-Za-z0-9]+$/.test(username)) {
        showError('username', 'Username can only contain letters and numbers.');
        isValid = false;
    }

    // Prevent form submission if invalid
    if (!isValid) {
        e.preventDefault();
    }
});

// Helper functions for validation
function showError(fieldId, message) {
    document.getElementById(fieldId + '-error').textContent = message;
}

function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function (error) {
        error.textContent = '';
    });
}

function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}
