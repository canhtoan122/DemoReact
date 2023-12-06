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

// routes/submit.js
var express = require("express");
var router = express.Router();
const mysql= require('mysql');
const app = express();

app.use(express.json()); // Place this line before your routes

// Create a connection to the MySQL server
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ctyphuocta',
  });

const util = require('util');
const query = util.promisify(connection.query).bind(connection);
const InsertCustomer = async()=>{
    const row = await query('INSERT INTO ctyphuocta (name, phoneNumber, email, content) VALUES (${name}, ${phoneNumber}, ${email}, ${content}');
    return row;
}
router.post("/", async (req, res) => {
    const data = req.body;
    // const rows= await InsertCustomer();
    res.json({ message: 'Data received and processed successfully!', data });
});

module.exports = router;
