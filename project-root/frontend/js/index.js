var domainName = "http://127.0.0.1:3000";

console.log("js is there");

// document.getElementById("forgotPasswordLink").addEventListener("click", function() {
//     if(validateUsername()) {
//         forgotPasswordRedirect();
//     }
// });

// function forgotPasswordRedirect() {
//     window.location.href = "/forget_password1";
// }

function validateUsername() {

    console.log("in validate username");
    var username = document.getElementById("username").value;
    if (!username) {
        alert("Please enter your username before proceeding.");
        return false;
    }
    return true;
}

function forgotPasswordFunc(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    console.log("in forgot password func");

    if (validateUsername()) {
        // Proceed with forgot password functionality
        const username = document.getElementById("username").value;

        const requestBodyForForgotPassword = {
            username: username
        }
        fetch(domainName + '/forgotPasswordEvent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ requestBodyForForgotPassword })
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert("data.email = " + data.email)
                    // Email found, store it in localStorage and redirect to enter OTP page
                    localStorage.setItem('userEmail', data.email);
                    window.location.href = "/forget_password1";
                } else {
                    // Handle case where user is not found
                    alert("User not found. Please enter a valid username.");
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert("An error occurred while processing your request.");
            });

        // window.location.href = "forgot_password1.html";
    } else {
        // Prevent default behavior of the link
        event.preventDefault();
        return false;
    }
}

function loginFunc(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // alert("in login event")
    console.log("in login event");

    // Get the form data
    const username = document.getElementById('username').value; // Get the username value
    const password = document.getElementById('password').value; // Get the password value

    console.log(username);
    console.log(password);

    const requestBody = {
        username: username,
        password: password
    };
    console.log(requestBody); // Log the form data for debugging

    console.log("requesting a server");

    // Send a POST request to the login endpoint
    fetch(domainName + '/loginEvent', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Set the content type to JSON
        },
        body: JSON.stringify(requestBody) // Convert the request body to JSON
    })
        .then(response => response.json())
        .then(data => {
            alert("check for cookie");
            console.log("data = ", data); // Log the response data

            // Check if the login was successful
            if (data.success) {
                console.log("data.success = ", data.success);
                console.log(domainName + '/dashboard');

                window.location.href = domainName + '/dashboard'; // Redirect the user to the dashboard
            } else {
                // Handle login failure
                alert("login failed");
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}