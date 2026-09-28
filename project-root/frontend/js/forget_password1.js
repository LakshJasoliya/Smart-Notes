var domainName = "http://127.0.0.1:3000";

function verifyOTP(event) {
    event.preventDefault();

    const otp = document.getElementById("otp").value;
    const userEmail = localStorage.getItem('userEmail'); // Retrieve user's email from localStorage

    if (!otp || !userEmail) {
        alert("Please enter the OTP.");
        return;
    }

    const requestBody = {
        otp: otp,
        emailForVerification: userEmail
    };

    fetch(domainName+'/verifyOTPForForgotPasswordEvent', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("OTP verified successfully. Redirecting...");
            window.location.href = "/forget_password2";
        } else {
            alert("Invalid OTP. Please try again.");
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("An error occurred while processing your request.");
    });
}
