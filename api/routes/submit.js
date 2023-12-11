
var express = require("express");
var router = express.Router();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: 'nguyencanhtoan200@gmail.com',
    pass: 'thba ztnm qmtb nkns',
  },
});
const sendMail = async (transporter, mailOption) => {
  try{
    await transporter.sendMail(mailOption);
    console.log("Email has been send");
  } catch(error){
    console.log(error);
  }
}

router.post("/", async (req, res) => {
  try{
    const { firstName, lastName, email, message } = req.body;
    const mailOption = {
      from: 'nguyencanhtoan200@gmail.com', // sender address
      to: '${email}', // list of receivers
      subject: "Yêu cầu vận tải", // Subject line
      text: `
              First Name: ${firstName}
              Last Name: ${lastName}
              Email: ${email}
              Message: ${message}
          `,
      html: "<b>Hello world?</b>", // html body
    }
    sendMail(transporter, mailOption);
  } catch(error){
    res.end("Email has been send");
  }
});

module.exports = router;