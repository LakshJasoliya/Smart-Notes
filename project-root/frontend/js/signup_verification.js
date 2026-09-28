var domainName = "http://127.0.0.1:3000";

console.log("this is signup_verifigation.js");

function verifyOTP(event) {
    event.preventDefault();

    const otp = document.getElementById('otpInput').value;
    console.log(otp);
    const emailForVerification = localStorage.getItem('emailForVerification');

    // Send a POST request to the server to verify OTP
    fetch(domainName+'/verifyEvent', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ otp, emailForVerification })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // OTP verification successful
            // Redirect to dashboard
            console.log("data.success");
            window.location.href = '/dashboard';
            localStorage.removeItem('emailForVerification');

            // Set JWT token as HTTPOnly cookie
            document.cookie = `token=${data.token}; path=/; secure; HttpOnly`;
        } else {
            // OTP verification failed, handle error (e.g., display error message)
            console.error('OTP verification failed:', data.message);
        }
    })
    .catch(error => {
        console.error('Error verifying OTP:', error);
    });
}
