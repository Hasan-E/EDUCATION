"use strict";

/* -------------------------------------------
            Express - Todo Api
------------------------------------------- */


const express = require('express');
const app = express();


require('dotenv').config()
const PORT = process.env.PORT;
const HOST = process.env.HOST;
/* ------------------------------------------- */
// Middlewares
app.use(express.json());


/* ------------------------------------------- */
// Routes
app.all('/', (req, res)=> res.send({message: 'Welcome to TODO API'}))

app.use('/todos', require('./src/routers/todo'));


// ErrorHandler
app.use(require('./src/middlewares/errorHandler'));

/* ------------------------------------------- */
app.listen(PORT, HOST, () => console.log(`Runing at: http://${HOST}:${PORT}`));