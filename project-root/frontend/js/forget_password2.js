var domainName = "http://127.0.0.1:3000";

function forgetPassword(event) {
    event.preventDefault();

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    console.log(password);

    // Check if the passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Get the user's email from localStorage
    const userEmail = localStorage.getItem('userEmail');

    // Prepare the request body
    const requestBody = {
        email: userEmail,
        password: password
    };

    // Send a POST request to update the password
    fetch(domainName+'/updatePasswordEvent', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Store JWT token in a cookie with HttpOnly flag
            document.cookie = `token=${data.token}; path=/; HttpOnly`;

            alert("Password updated successfully.");
            // Redirect the user to the login page
            window.location.href = "/dashboard";
        } else {
            alert("Error updating password. Please try again.");
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("An error occurred while processing your request.");
    });
}
