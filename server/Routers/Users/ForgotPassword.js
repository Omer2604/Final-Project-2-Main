const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
require("dotenv").config();
// const bcrypt = require("../../services/bcrypt");
// const UserModel = require("../../models/resetPasswordModel");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "omermymon@gmail.com",
    pass: process.env.EMAIL_PASS,
  },
});

function getMailOptions(to) {
  return {
    from: "omermymon@gmail.com",
    to: to,
    subject: "שחזור סיסמה",
    html: getPassRestLink(to),
  };
}

function getPassRestLink(to) {
  return `<a href='http://localhost:3000/newpassword?email=${to}'> ForgotPassword </a>`;
}

router.get("/", (req, res) => {
  let { email } = req.query;
  let options = getMailOptions(email);
  transporter.sendMail(options, (err, info) => {
    if (err) {
      res.statusCode = 500;
      console.log(err.message);

      res.json({ error: err.message });
    } else {
      res.statusCode = 200;
      res.json(info);
    }
  });
});

// router.post("/", (req, res) => {
//   let { email, newPass } = req.query;
//   bcrypt.createHash(newPass).then((hashedPass) => {
//     UserModel.updateUserPassword(email, hashedPass)
//       .then((updateRes) => {
//         res.statusCode = 200;
//         res.json({ msg: updateRes });
//       })
//       .catch((e) => {
//         res.statusCode = 500;
//         console.log(e);
//         res.json({ msg: "Error" });
//       });
//   });
// });

module.exports = router;
