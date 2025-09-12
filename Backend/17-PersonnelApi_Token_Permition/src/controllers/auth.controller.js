"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */

const Personnel = require("../models/personnel.model");
const CustomError = require("../helpers/customError");
const Token = require("../models/token.model");
const passwordEncrypt = require("../helpers/passwordEncrypt");

module.exports = {
  login: async (req, res) => {
    const { userName, email, password } = req.body;

    if (!((userName || email) && password))
      throw new CustomError(
        "UserName or email and password are required.",
        400
      );

    // findOne set methodunu da çalıştırır
    const user = await Personnel.findOne({
      $or: [{ userName }, { email }],
      password,
    });

    if (!user) throw new CustomError("Wrong email/userName or password", 401);

    if (!user.isActive)
      throw new CustomError("The user status is not active", 401);

    // Token

    //Token var mı yok mu ?
    let token = await Token.findOne({ userId: user._id })
      .select("token")
      .lean();

    // Token yoksa oluştur
    if (!token) {
      token = await Token.create({
        userId: user._id,
        token: passwordEncrypt(user._id + Date.now()),
      })
        .select("token")
        .lean();
    }

    res.status(200).send({
      error: false,
      ...token,
      user,
    });
  },

  logout: async (req, res) => {
    req.session = null;

    res.status(200).send({
      error: false,
      message: "Logout is success",
    });
  },
};
