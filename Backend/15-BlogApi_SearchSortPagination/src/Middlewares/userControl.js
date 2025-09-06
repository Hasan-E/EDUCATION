"use strict";

const User = require("../models/userModel");

/* ============================================ */
/*    EXPRESSJS - BLOG PROJECT WITH MONGOOSE    */
/* ============================================ */

// Authentication middleware
module.exports = async (req, res, next) => {
  req.user = null;
  const { _id, email } = req?.session;

  if (req.session._id) {
    const user = await User.findOne({ _id, email });
    // if(user){
    //     req.user = user;
    // }else{
    //     req.session = null;
    // }

    user ? (req.user = user) : (req.session = null);
  }

  next();
};
