document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Clear previous error messages
    document.getElementById('username-error').textContent = '';
    document.getElementById('password-error').textContent = '';
    document.getElementById('response-message').textContent = '';

    // Get form values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    let valid = true;

    // Client-side validations
    if (!username.includes('@')) {
        document.getElementById('username-error').textContent = 'Please enter a valid email address.';
        valid = false;
    }

    if (password.length < 6) {
        document.getElementById('password-error').textContent = 'Password must be at least 6 characters long.';
        valid = false;
    }

    if (!valid) return;

    // API Integration
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('response-message').textContent = 'Login successful!';
        document.getElementById('response-message').style.color = 'green';
    })
    .catch(error => {
        document.getElementById('response-message').textContent = 'Login failed. Please try again.';
        document.getElementById('response-message').style.color = 'red';
    });
});
