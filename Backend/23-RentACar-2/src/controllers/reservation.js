"use strict";
/* -------------------------------------------------------
| FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */

const Reservation = require("../models/reservation");
const Car = require("../models/car");

module.exports = {
  list: async (req, res) => {
    /*
      #swagger.tags = ["Reservations"]
      #swagger.summary = "List Reservations"
      #swagger.description = `
        You can send query with endpoint for search[], sort[], page and limit.
        <ul> Examples:
            <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
            <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
            <li>URL/?<b>page=2&limit=1</b></li>
        </ul>
      `
    */
    //? eğer user admin veya staff değilse sadece kendisine ait olan reservationları göster

    const isAdminOrStaff = req.user.isAdmin || req.user.isStaff;
    let customFilter = { userId: req.user._id };
    isAdminOrStaff && delete customFilter.userId;

    const data = await res.getModelList(Reservation, customFilter);

    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(Reservation, customFilter),
      data,
    });
  },

  create: async (req, res) => {
    /*
              #swagger.tags = ["Reservations"]
              #swagger.summary = "Create a reservation"
              #swagger.parameters['body'] = {
              in: 'body',
              required: true,
              schema: {
                 $ref: "#/definations/Reservation"
                }
              }
            */

    //? Eğer ki current user admin veya staff değilse, creatorId; müşterinin id'si olmalı

    const currentUserId = req.user._id;
    const isAdminOrStaff = req.user.isAdmin || req.user.isStaff;

    if (!isAdminOrStaff) {
      req.body.userId = currentUserId;
    }

    req.body.creatorId = currentUserId;
    req.body.updatorId = currentUserId;

    //todo amount sectigi aracın günlük fiyatı ile kiraladığı gün sayısını çarparak hesapla
    const { carId, startDate, endDate } = req.body;
    const selectedCar = await Car.findById(carId).select('pricePerDay');
    const amount =
      Math.round(
        (new Date(endDate).getTime() - new Date(startDate).getTime()) /
          (1000 * 60 * 60 * 24)
      ) * selectedCar.pricePerDay;

    // console.log(selectedCar);
    // console.log(amount);

    req.body.amount = amount;
    const data = await Reservation.create(req.body);

    res.status(201).send({
      error: false,
      data,
    });
  },

  read: async (req, res) => {
    /*
      #swagger.tags = ["Reservations"]
      #swagger.summary = "Get Single Reservation"
    */
    //todo Eğer ki current user admin veya staff değilse sadece kendisine ait olan rezervasyonu göster

    const isAdminOrStaff = req.user.isAdmin || req.user.isStaff;
    const customFilter = { userId: req.user._id, _id: req.params.id };
    isAdminOrStaff && delete customFilter.userId;

    const data = await Reservation.findOne(customFilter);

    res.status(200).send({
      error: false,
      data,
    });
  },

  update: async (req, res) => {
    /*
      #swagger.tags = ["Reservations"]
      #swagger.summary = "Update Reservation"
      #swagger.parameters['body'] = {
        in: 'body',
        required: true,
        schema: {
            "username": "test",
            "password": "1234",
            "email": "test@site.com",
            "isActive": true,
            "isStaff": false,
            "isAdmin": false,
        }
      }
    */
    req.body.updatorId = currentUserId;
    const data = await Reservation.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true,
    });

    res.status(202).send({
      error: false,
      data,
    });
  },

  del: async (req, res) => {
    /*
        #swagger.tags = ["Reservations"]
        #swagger.summary = "Delete Reservation"
    */

    const data = await Reservation.deleteOne({ _id: req.params.id });

    res.status(data.deletedCount ? 204 : 404).send({
      error: !data.deletedCount,
      data,
    });
  },
};
