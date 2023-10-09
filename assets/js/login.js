// Get the form element by its ID
const loginForm = document.getElementById('loginForm');

// Add an event listener to the form for the submit event
loginForm.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the values entered by the user for username and password
    const username = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Perform any necessary validation here (e.g., check credentials)

    // If validation is successful, redirect to another page
    if (username === 'sahrintopon@gmail.com' && password === 'password') {
        // Redirect to another page (replace 'members/members.html' with the actual URL)
        window.location.href = 'members/members.html';
    } else {
        // Display an error message or handle invalid credentials
        alert('Invalid username or password. Please try again.');
    }
});
