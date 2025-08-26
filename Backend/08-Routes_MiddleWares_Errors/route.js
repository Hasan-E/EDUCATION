"use scrict";

/* ============================================ */
/*                    ROUTES                    */
/* ============================================ */

const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT ?? 8000;
/* ============================================ *
// app.route("/").get((req, res) => response.send({ method: "GET" }));

//* "Router" is special app for URL control in Express
const router = require("express").Router();



app.use(router);
/* ============================================ */
//* Import router

// const router = require("./routes/index.js");
// const router = require("./routes/index");
// const router = require("./routes");
// app.use(router);

// Routes
app.use(require("./routes"));

/* ============================================ */
app.listen(PORT, () => console.log("Running at : http://127.0.0.1:" + PORT));
