// Get elements from the DOM
const forgetPasswordForm = document.getElementById('forgetPasswordForm');
const emailInput = document.getElementById('email');
const resetPasswordButton = document.getElementById('resetPassword');
const messageDiv = document.getElementById('message');

// Event listener for the Reset Password button
resetPasswordButton.addEventListener('click', () => {
    // Get the email input value
    const email = emailInput.value;

    // Check if the email is empty
    if (!email) {
        showMessage('Please enter an email address.', 'error');
        return;
    }

    // Store the password in localStorage (for demonstration purposes only)
    localStorage.setItem('password', 'your_password_here');

    showMessage('Password reset successful!', 'success');
});

// Function to display a message
function showMessage(message, type) {
    messageDiv.textContent = message;
    messageDiv.className = type;
    setTimeout(() => {
        messageDiv.textContent = '';
        messageDiv.className = '';
    }, 3000);
}
