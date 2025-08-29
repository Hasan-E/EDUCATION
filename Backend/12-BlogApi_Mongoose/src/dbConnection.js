"use strict";
/* ============================================ */
/*    EXPRESSJS - BLOG PROJECT WITH MONGOOSE    */
/* ============================================ */

const mongoose = require('mongoose');

const dbConnection = ()=>{
    mongoose.connect('mongodb://127.0.0.1:27017')
    .then(()=>console.log('*DB Connected*'))
    .catch((err)=>console.log('! DB Not Connected !',err))
}

module.exports = dbConnection