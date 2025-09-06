"use strict";
/* ============================================ */
/*    EXPRESSJS - BLOG PROJECT WITH MONGOOSE    */
/* ============================================ */
const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT;
const HOST = process.env.HOST;

/* ============================================ */
/* ---------- // Middlewares & Config --------- */
// Accept and Parse data
app.use(express.json());

// SessionCookie
// $npm install cookie-session
const session = require("cookie-session");
app.use(
  session({
    secret: process.env.PASS_SALT,
   // maxAge: 100 * 60 * 60 * 24 * 3 // 3 days in miliseconds // now this is a cookie
  })
);

//User Control (check user data from session)
app.use(require('./src/Middlewares/userControl'))

// DB Connection
// const dbConnection = require("./src/dbConnection");
// dbConnection();
require("./src/dbConnection")();

/* ============================================ */
/* ----------------- //Routes ----------------- */
app.all("/", (req, res) => {
  res.send({
    message: "Welcome to Blog Api",
    session: req.session,
  });
});

// Blog route
app.use("/blogs", require("./src/routes/blogRouter"));
app.use("/users", require("./src/routes/userRouter"));

/* ============================================ */
/* -------------- // Errorhandler ------------- */
app.use(require("./src/Middlewares/errorHandler"));
/* ============================================ */

app.listen(PORT, () => console.log(`Running at : http://${HOST}:${PORT}`));
