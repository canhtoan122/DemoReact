// var express = require("express");
// var router = express.Router();
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');

// router.use(bodyParser.urlencoded({ extended: true }));

// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'nguyencanhtoan200@gmail.com',
//         pass: 'Canhtoan111',
//     },
// });

// router.post('/submit', (req, res) => {
//     const { firstName, lastName, email, message } = req.body;

//     const mailOptions = {
//         from: 'nguyencanhtoan200@gmail.com',
//         to: 'recipient_email@example.com',
//         subject: 'New Form Submission',
//         text: `
//             First Name: ${firstName}
//             Last Name: ${lastName}
//             Email: ${email}
//             Message: ${message}
//         `,
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.error('Error sending email:', error);
//             res.status(500).send('Internal Server Error');
//         } else {
//             console.log('Email sent:', info.response);
//             res.status(200).send('Form submitted successfully');
//         }
//     });
// });
// module.exports = router;

var express = require("express");
var router = express.Router();

router.post("/", async(req, res) => {
    const data = req.body;
    console.log(data);
    res.json({ message: 'Data received successfully!' });
});

module.exports = router;