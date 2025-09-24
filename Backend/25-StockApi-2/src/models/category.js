"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const {
  mongoose: { Schema, model },
} = require("../configs/dbConnection");
/* ------------------------------------------------------- */

const CategorySchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },

  },
  { timestamps: true,collection:'categories' }
);

module.exports = model("Category", CategorySchema);
