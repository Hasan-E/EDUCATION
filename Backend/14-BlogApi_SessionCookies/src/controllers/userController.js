"use strict";
/* ============================================ */
/*    EXPRESSJS - BLOG PROJECT WITH MONGOOSE    */
/* ============================================ */

const User = require("../models/userModel");
const passwordEncrypte = require("../utils/passwordEncrypte");

module.exports = {
  list: async (req, res) => {
    const result = await User.find();

    res.status(200).send({
      error: false,
      result,
    });
  },
  create: async (req, res) => {
    const { password } = req.body;

    if (!password || password.length < 8) {
      throw new Error("The password must be more than 8 characters.");
    }

    const result = await User.create(req.body);

    res.status(200).send({
      error: false,
      result,
    });
  },
  read: async (req, res) => {
    const result = await User.findById(req.params.id);

    res.status(200).send({
      error: false,
      result,
    });
  },
  update: async (req, res) => {
    const result = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!result) {
      res.errorStatusCode = 404;
      throw new Error("Data is not found or something wrong.");
    }

    res.status(200).send({
      error: false,
      result,
    });
  },
  delete: async (req, res) => {
    const result = await User.deleteOne({ _id: req.params.id });

    if (result?.deletedCount) {
      res.sendStatus(204);
    } else {
      res.errorStatusCode = 404;
      throw new Error("Data is not found or something wrong.");
    }
  },

  login: async (req, res) => {
    // ilk adım , kişinin gönderdiği bilgileri yakala
    const { email, password } = req.body;

    // Email ve password Kontrolü
    if (email && password) {
      // email i doğrula
      // const user = await User.findOne({email:email})
      const user = await User.findOne({ email });

      if (user) {
        // pasword doğrulama
        if (passwordEncrypte(password) === user.password) {
          res.status(200).send({
            error: false,
            message: "ok",
          });
        } else {
          res.errorStatusCode = 401;
          throw new Error("Wrong email or password");
        }
      } else {
        res.errorStatusCode = 401;
        throw new Error("Wrong email or password");
      }
    } else {
      res.errorStatusCode = 401;
      throw new Error("Email and Password are required");
    }
  },
};
