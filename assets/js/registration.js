// JavaScript for storing and displaying user information

// Get form elements
const registrationForm = document.getElementById("registrationForm");
const userList = document.getElementById("userList");
const submitBtn = document.getElementById("submitBtn");

// Add a click event listener to the submit button
submitBtn.addEventListener("click", function () {
    // Get user input values
    const userName = document.getElementById("userName").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const contactNo = document.getElementById("contactNo").value;
    const address = document.getElementById("address").value;
    const country = document.getElementById("country").value;
    const comments = document.getElementById("comments").value;

    // Create an object to hold the user data
    const userData = {
        userName,
        gender,
        email,
        password,
        contactNo,
        address,
        country,
        comments,
    };

    // Store the user data in local storage
    localStorage.setItem(userName, JSON.stringify(userData));

    // Clear the form fields
    registrationForm.reset();

    // Display the user data
    displayUserData();
});

// Function to display user data
function displayUserData() {
    userList.innerHTML = "<h2>Registered Users:</h2>";

    // Iterate through local storage and display each user's data
    for (let i = 0; i < localStorage.length; i++) {
        const userName = localStorage.key(i);
        const userData = JSON.parse(localStorage.getItem(userName));

        userList.innerHTML += `
            <div class="user">
                <h3>${userName}</h3>
                <p>Gender: ${userData.gender}</p>
                <p>Email: ${userData.email}</p>
                <p>Contact No.: ${userData.contactNo}</p>
                <p>Address: ${userData.address}</p>
                <p>Country: ${userData.country}</p>
                <p>Comments: ${userData.comments}</p>
            </div>
        `;
    }
}

// Initial display of user data
displayUserData();
