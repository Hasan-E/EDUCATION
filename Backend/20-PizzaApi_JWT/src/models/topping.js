"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const {
  mongoose: { Schema, model },
} = require("../configs/dbConnection");
/* ------------------------------------------------------- */

const toppingSchema = new Schema(
  {
    name: { type: String, trim: true, required: true, unique: true },
  },
  { collection: "toppings", timestamps: true }
);

module.exports = model("toppings", toppingSchema);
