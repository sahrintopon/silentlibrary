// script.js

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const contactList = document.getElementById("contact-list");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        // Create a contact object
        const contact = {
            name,
            email,
            subject,
            message,
        };

        // Save the contact to local storage
        saveContact(contact);

        // Clear the form
        contactForm.reset();

        // Display the updated contact list
        displayContacts();
    });

    function saveContact(contact) {
        let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
        contacts.push(contact);
        localStorage.setItem("contacts", JSON.stringify(contacts));
    }

    function displayContacts() {
        const contacts = JSON.parse(localStorage.getItem("contacts")) || [];

        let contactListHTML = "<h2>Contact List</h2>";

        if (contacts.length === 0) {
            contactListHTML += "<p>No contacts available.</p>";
        } else {
            contactListHTML += "<ul>";
            contacts.forEach(function (contact, index) {
                contactListHTML += `<li><strong>${contact.name}</strong> (${contact.email}) ${contact.subject} - ${contact.message}</li>`;
            });
            contactListHTML += "</ul>";
        }

        contactList.innerHTML = contactListHTML;
    }

    // Initial display of contacts
    displayContacts();
});
