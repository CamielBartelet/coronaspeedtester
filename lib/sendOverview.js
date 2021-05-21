require("dotenv-flow").config();
const nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  auth: {
    // user: "renormapp@gmail.com",
    // pass: "Re54321norm!",
    type: "login",
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

var mailOptions = {
  from: process.env.NEXTAUTH_EMAILFROM,
  to: "camielbartelet1@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
