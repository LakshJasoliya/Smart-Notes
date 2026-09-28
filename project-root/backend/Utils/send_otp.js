const nodemailer = require('nodemailer');
// const mail = 'smartnotes.web@gmail.com';
// const password = 'Smartnotes@2024';
const mail = 'smartnotes.web@gmail.com';
const password = 'lgxs sayl nymx teoo';

function generateOTP(length) {
    const chars = '0123456789';
    let otp = '';
    for (let i = 0; i < length; i++) {
        otp += chars[Math.floor(Math.random() * chars.length)];
    }
    return otp;
}

async function sendOTP(email, otp) {
    try {
        console.log(email);
        // Create a transporter object using SMTP transport
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: mail, // your Gmail email address
                pass: password // your Gmail password
            }
        });

        // Define email options
        let mailOptions = {
            from: mail,
            to: email,
            subject: 'OTP Verification',
            text: `Your OTP for verification of your email is: ${otp}`
        };

        // Send email with defined transport object
        let info = await transporter.sendMail(mailOptions);

        console.log('Email sent: ', info.response);
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Error sending email.');
    }
}

module.exports = { generateOTP, sendOTP };