"use strict";

/* ============================================ */
/*     | FULLSTACK TEAM | NODEJS / EXPRESS |    */
/* ============================================ */
// sendMail(to,subject,message)

const nodemailer = require("nodemailer");

module.exports = function sendMail(to, subject, message) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "hasan.erhan1302@gmail.com",
      pass: "qrif glie ggws xqtb",
    },
  });

  transporter.sendMail(
    {
      from: "hasan.erhan1302@gmail.com",
      to,
      subject,
      text: message,
      html: message,
    },
    function (error, success) {
      success ? console.log("Success:", success) : console.log("Error:", error);
    }
  );
};
