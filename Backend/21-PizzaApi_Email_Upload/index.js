"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
/*
    $ cp .env-sample .env
    $ npm init -y
    $ npm i express dotenv mongoose 
    $ npm i morgan swagger-autogen swagger-ui-express redoc-express
    $ mkdir logs
    $ npm run dev
*/

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env?.PORT || 8000;

// Nested Query
app.set("query parser", "extended");

// DB Connection:
const { dbConnection } = require("./src/configs/dbConnection");
dbConnection();

/* ------------------------------------------------------- */
//* Middlewares:

// Accept JSON:
app.use(express.json());

// Auhentication:
app.use(require("./src/middlewares/authentication"));

// Query Handler
app.use(require("./src/middlewares/queryHandler"));

// Logger:
app.use(require("./src/middlewares/logger"));
/* ============================================ */
//! ------------------ E-mail ------------------ */
// yarn add nodemailer
/* ============================================ *
const nodemailer = require("nodemailer");

/*Send email with ethereal (fake) email *
//? Create test account
// nodemailer.createTestAccount().then((email) => console.log(email));

// {
//   user: 't52j53prqvwxawqe@ethereal.email',
//   pass: 'egr24dsJWBs8S6nuJx',
//   smtp: { host: 'smtp.ethereal.email', port: 587, secure: false }, //send mail
//   imap: { host: 'imap.ethereal.email', port: 993, secure: true }, // receive mail
//   pop3: { host: 'pop3.ethereal.email', port: 995, secure: true }, // receive mail
//   web: 'https://ethereal.email',
//   mxEnabled: false
// }

//? Connect to MailServer / (SMTP)
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email' ,
    port: 587,
    secure: false,
    auth: {
        user: 't52j53prqvwxawqe@ethereal.email' ,
        pass: 'egr24dsJWBs8S6nuJx'
    }
})
// console.log(transporter);

//? Send Mail
transporter.sendMail({
    from: 't52j53prqvwxawqe@ethereal.email',
    to: 'hasan.erhan1302@gmail.com',
    subject: "Hi there",
    text: "Hello there, this is a test mail.Dont consider.",
    html:"<p><b>Hello there<b>,this is a test mail.Dont consider.<p>"
},function (error,success){

    success ? console.log('Success', success) : console.log('Error' , error);
    ;
    
})
/*Send email with ethereal (fake) email */

/*Send email with gmail *
//qrif glie ggws xqtb
//? Connect to MailServer / (SMTP)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'hasan.erhan1302@gmail.com',
        pass: 'qrif glie ggws xqtb'
    }
},{})

//? Send Mail
transporter.sendMail({
    from: 'hasan.erhan1302@gmail.com',
    to: 'hasan.erhan1302@gmail.com',
    subject: "Hi there",
    text: "Hello there, this is a test mail.Dont consider.",
    html:"<p><b>Hello there<b>,this is a test mail.Dont consider.<p>"
},function (error,success){

    success ? console.log('Success', success) : console.log('Error' , error);
    ;
    
})

/*Send email with gmail */

/* Send email with yandex email *

const transporter = nodemailer.createTransport({
    service: 'yandex',
    auth: {
        user: 'info@yandex.com',
        pass: 'yourPersonelPassword' 
    }
});

transporter.sendMail({
    from: 'info@yandex.com',
    to: 'info@yandex.com',
    subject: "Hi there",
    text: "Hello there, this is a test mail. Dont consider.",
    html: "<p> <b> Hello there</b>,  this is a test mail. Dont consider. </p>"
}, function (error, success) {
    success ? console.log('Success:', success) : console.log('Error:', error)
});

/* ============================================ */

/* ------------------------------------------------------- */
//* Routes:

// HomePath
app.all("/", (req, res) => {
  res.send({
    error: false,
    message: "Welcome to PIZZA API",
    docs: {
      swagger: "/documents/swagger",
      redoc: "/documents/redoc",
      json: "/documents/json",
    },
    user: req.user,
  });
});

// Other path
app.use("/", require("./src/routes"));

// Not found
// app.all('/*splat', (req, res) => {
//     res.status(404).send({
//         error: true,
//         message: 'Route not available.'
//     })
// });

/* ------------------------------------------------------- */

// ErrorHandler:
app.use(require("./src/middlewares/errorHandler"));

// RUN SERVER:
app.listen(PORT, () => console.log("http://127.0.0.1:" + PORT));

/* ------------------------------------------------------- */
//! Syncronization (must be in commentLine):
// require('./src/helpers/sync')()
