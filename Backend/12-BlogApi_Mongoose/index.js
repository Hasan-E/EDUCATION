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

// DB Connection
const dbConnection = require("./src/dbConnection");
dbConnection();

/* ============================================ */
/* ----------------- //Routes ----------------- */
app.all("/", (req, res) => res.send("Welcome to Blog Api"));

/* ============================================ */
/* -------------- // Errorhandler ------------- */
app.use(require("./src/Middlewares/errorHandler"));
/* ============================================ */

app.listen(PORT, () => console.log(`Running at : http://${HOST}:${PORT}`));
