"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
// yarn add morgan
// https://expressjs.com/en/resources/middleware/morgan.html

const morgan = require("morgan");

// app.use(morgan('tiny'))
// app.use(morgan('short'))
// app.use(morgan('dev'))
// app.use(morgan('common'))
// app.use(morgan('combined'))

// Custom log:
const customLog =
  ' TIME=":date[iso]" - URL=":url" - METHOD=":method" - IP=":remote-addr" - REF=":referrer" - STATUS=":status" - SIGN=":user-agent" - (:response-time[digits] ms) ';

// app.use(morgan(customLog));

// Write to file;
const fs = require("node:fs");

// app.use(morgan(customLog,{
//     // stream: fs.createWriteStream('./example.log',{flags:'a+'})
//     stream: fs.createWriteStream('./example.log')
// }))

// Write day to day
const now = new Date();
const today = now.toISOString().split("T")[0];

module.exports = morgan(customLog, {
  stream: fs.createWriteStream(`./logs/${today}.log`, {
    flags: "a+",
  }),
});
/* Logger */
/* ------------------------------------------------------- */
