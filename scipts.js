document.getElementById('boundaryForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let age = document.getElementById('age').value;
    let valid = true;

    // Username validation
    if (username.length < 5 || username.length > 15) {
        document.getElementById('usernameError').innerText = 'Username must be between 5 and 15 characters.';
        document.getElementById('usernameError').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('usernameError').innerText = '';
        document.getElementById('usernameError').style.display = 'none';
    }

    // Age validation
    if (age < 0 || age > 120) {
        document.getElementById('ageError').innerText = 'Age must be between 0 and 120.';
        document.getElementById('ageError').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('ageError').innerText = '';
        document.getElementById('ageError').style.display = 'none';
    }

    if (valid) {
        document.getElementById('result').innerText = 'Form submitted successfully!';
    } else {
        document.getElementById('result').innerText = 'Please correct the errors above.';
    }
});
