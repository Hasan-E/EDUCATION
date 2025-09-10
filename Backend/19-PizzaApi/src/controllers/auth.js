"use strict";

/* -------------------------------------------------------
| FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */

const CustomError = require("../helpers/customError");
const passwordEncrypt = require("../helpers/passwordEncrypt");
const token = require("../models/token");

module.exports = {
  login: async (req, res) => {
    const { username, email, password } = req.body;

    if (!((username || email) && password))
      throw new CustomError("Username/Email and Password are required.", 401);

    const user = await User.findOne({
      $or: [{ username }, { email }],
      password,
    });
    if (!user)
      throw new CustomError("Incorrect Username/Email or Password.", 401);

    if(!user.isActive) throw new CustomError('This account is not active.',401)

        let tokenData = await token.findOne({ userId: user._id})

    if (!tokenData) {
        tokenData = await Token.create({
            userId: user._id,
            token: passwordEncrypt(Date.now() + user._id)
        })
    }

    res.status(200).sen({
        error: false,
        token: tokenData.token,
        user
    })
  },

  logout: async (req, res) => {

    const currentUserId = req.user._id
    //!
    res.status(200).sen({
        error: false,
    })
  },
};
