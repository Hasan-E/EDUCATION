"use scrict";

/* ============================================ */
/*                  MIDDLEWARES                 */
/* ============================================ */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT ?? 8000;
/* ============================================ *
//* Middleware is a function and must have three parameters.
//* App.us() -> Runs in every request and response. (Middleware and Routes)

// Functional Middleware

const middleware1 = (req, res, next) => {
  console.log("Middleware1 worked.");
  next(); // go to next route or middleware
};
const middleware2 = (req, res, next) => {
  console.log("Middleware2 worked.");
  next();
};

// 1. way runs for each request
// app.use(middleware1);
// app.use(middleware2);

// 2. way runs for each request
// app.use(middleware1,middleware2)

// 3. way specific route
// app.use("/api", middleware1);
// app.use("/books", middleware2);


// app.get("/api", (req, res) => {
//     console.log("this is main route");
    
//     res.send({
//         message: "Welcome",
//     });
// });

// app.get("/books", (req, res) => {
//     console.log("this is books route");
    
//     res.send({
//         message: "Which book you wanna read",
//     });
// });

// 4. way you can use them between route and controller

app.get("/api",[middleware1,middleware2] ,(req, res) => {
    console.log("this is main route");
    
    res.send({
        message: "Welcome",
    });
});
/* ============================================ *

//* Middleware
// This middleware chose to run according to method and URL.

app.get("/", (req, res, next) => {
  //   console.log(req);

  req.name = "alican"; // sending data to next function or routes
  next();
  
});

app.get("/", (req, res, next) => {
  //   console.log(req);
  req.name2 = "Raife";

  next();
});

app.get("/", (req, res) => {

  console.log(req.name);
  res.send({
    message: `Welcome ${req.name},${req.name2} `,
  });
});

/* ============================================ */
//* Import Middlewares

const { middleFn1, middleFn2 } = require("./middlewares");

app.get("/", [middleFn1, middleFn2], (req, res) => {
  res.send({
    message: `Welcome ${req.name},${req.name2},${req.name3} `,
  });
});

/* ============================================ */
app.listen(PORT, () => console.log("Running at : http://127.0.0.1:" + PORT));
