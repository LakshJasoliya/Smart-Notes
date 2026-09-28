const nodemailer = require('nodemailer');
const mail = 'smartnotes.web@gmail.com';
const password = 'lgxs sayl nymx teoo';

async function sendEmail(email, subject, text) {
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
            subject,
            text
        };

        // Send email with defined transport object
        let info = await transporter.sendMail(mailOptions);

        console.log('Email sent: ', info.response);
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Error sending email.');
    }
}

module.exports = { sendEmail };