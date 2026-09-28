var domainName = "http://127.0.0.1:3000";

function submitFeedback() {
    const userEmail = document.getElementById('email').value;
    const userSubject = document.getElementById('subject').value;
    const userMessage = document.getElementById('message').value;

    // Create a data object to send in the request body
    const data = {
        email: userEmail,
        subject: userSubject,
        message: userMessage
    };

    // Make a POST request to /submitFeedback
    fetch(domainName+'/submitMyFeedback', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Feedback submitted successfully!');
            // Optionally, clear the form after successful submission
            document.getElementById('feedbackForm').reset();
        } else {
            throw new Error('Failed to submit feedback');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to submit feedback. Please try again.');
    });
}