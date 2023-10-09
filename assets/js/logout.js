// JavaScript code for handling form submission
document.addEventListener("DOMContentLoaded", function() {
    var logoutForm = document.getElementById("logoutForm");

    logoutForm.addEventListener("submit", function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Perform any necessary logout logic here (e.g., clearing session data)

        // Redirect to another page after logging out
        window.location.href = "index.html";
    });
});
