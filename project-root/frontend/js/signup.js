var domainName = "http://127.0.0.1:3000";

function sendOTP(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form data
    const formData = new FormData(document.querySelector('form'));

    // Validate input fields
    const username = formData.get('username');
    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');

    console.log("Validating input data");
    console.log(username);

    if (!username || !email || !password || !confirmPassword) {
        // If any field is empty, show an error message and return
        alert('All fields are required.');
        return;
    }

    if (password !== confirmPassword) {
        // If passwords don't match, show an error message and return
        alert('Passwords do not match.');
        return;
    }

    console.log(formData);
    console.log("requesting a server");

    const formDataJSON = {
        username: username,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        role: 'user'
    };

    // Send a POST request to the signup endpoint
    fetch(domainName+'/signupEvent', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formDataJSON)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data); // Log the response data

            // Check if signup was successful
            if (data.success) {
                // Store the JWT token securely (e.g., in localStorage or sessionStorage)
                // localStorage.setItem('token', data.token);

                // Redirect to signup_verification.html
                window.location.href = '/signup_verification';
                localStorage.setItem('emailForVerification', email);
            } else {
                // Handle signup failure
                alert(data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}