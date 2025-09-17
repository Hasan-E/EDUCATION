"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
// sync():

module.exports = async function () {
  // return null;

  /* REMOVE DATABASE */
  const { mongoose } = require("../configs/dbConnection");
  await mongoose.connection.dropDatabase();

  console.log("- Database and all data DELETED!");
  /* REMOVE DATABASE */
  const users = require("../mokeData/user.json");
  const User = require("../models/user");
  await User.insertMany(users);
  console.log("users added");

  /* ------------------------- */
  const cars = require("../mokeData/car.json");
  const Car = require("../models/car");
  await Car.insertMany(cars);
  console.log("cars added");

  /* ------------------------- */

  const reservations = require("../mokeData/reservation.json");
  const Reservation = require("../models/reservation");
  await Reservation.insertMany(reservations);
  console.log("reservations added");

};
