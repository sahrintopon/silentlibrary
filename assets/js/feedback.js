document.addEventListener("DOMContentLoaded", function () {
    const feedbackForm = document.getElementById("feedbackForm");
    const submitBtn = document.getElementById("submitBtn");

    submitBtn.addEventListener("click", function () {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const contact = document.getElementById("contact").value;
        const satisfaction = document.querySelector('input[name="satisfaction"]:checked').value;
        const nps = document.querySelector('input[name="nps"]:checked').value;
		const comments = document.getElementById("comments").value;

        const feedbackData = {
            name,
            email,
            contact,
            satisfaction,
            nps,
			comments,
        };

        // Save feedbackData to localStorage
        localStorage.setItem("feedbackData", JSON.stringify(feedbackData));

        // Open a new window for printing
        const printWindow = window.open('', '', 'width=600,height=400');
        printWindow.document.open();
        printWindow.document.write('<html><head><title>Feedback</title></head><body>');
        printWindow.document.write('<h1><strong>Feedback Summary:</strong></h1>');
	printWindow.document.write('<h2>Effectiveness Of User Interface from - </h2>');
        printWindow.document.write('<p>Name: ' + name + '</p>');
        printWindow.document.write('<p>Email: ' + email + '</p>');
        printWindow.document.write('<p>Contact Number: ' + contact + '</p>');
        printWindow.document.write('<p>User Satisfaction: ' + satisfaction + '/5</p>');
        printWindow.document.write('<p>Net Promoter Score: ' + nps + '/10</p>');
		printWindow.document.write('<p>Comments: ' + comments + '</p>');
        printWindow.document.write('</body></html>');
        printWindow.document.close();

        // Print the page
        printWindow.print();
    });
});
