"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */

const Car = require("../models/car");
const dateValidation = require("../helpers/dateValidation");
const Reservation = require("../models/reservation");

module.exports = {
  list: async (req, res) => {
    /*
      #swagger.tags = ["Cars"]
      #swagger.summary = "List Cars"
      #swagger.description = `
        You can send query with endpoint for search[], sort[], page and limit.
        <ul> Examples:
            <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
            <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
            <li>URL/?<b>page=2&limit=1</b></li>
        </ul>
      `
    */
    // Müsait olmayan tüm araçları bir array olarak getirir.
    const { startDate: QStartDate, endDate: QEndDate } = req.body;
    dateValidation(QStartDate, QEndDate);
    const reservedCarIds = await Reservation.find(
      {
        startDate: { $lte: QEndDate },
        endDate: { $gte: QStartDate },
      },
      { _id: 0, carId: 1 }
    ).distinct("carId");

    //? Musait araclari listele egerki kullanici musteriyse

    const customFilter = { isPublished: true, _id: { $nin: reservedCarIds } };

    if (req.user.isAdmin || req.user.isStaff) {
      delete customFilter.isPublished;
    }

    const data = await res.getModelList(Car, customFilter, [
      { path: "creatorId", select: "username" },
      { path: "updatorId", select: "username" },
    ]);

    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(Car, customFilter),
      data,
    });
  },

  create: async (req, res) => {
    /*
            #swagger.tags = ["Cars"]
            #swagger.summary = "Create a car"
            #swagger.parameters['body'] = {
            in: 'body',
            required: true,
            schema: {
               $ref: "#/definations/Car"
              }
            }
          */

    //? CreatorId ve UpdatorId ekle
    const currentUserId = req.user._id;
    req.body.creatorId = currentUserId;
    req.body.updatorId = currentUserId;

    const data = await Car.create(req.body);

    res.status(201).send({
      error: false,
      data,
    });
  },

  read: async (req, res) => {
    /*
      #swagger.tags = ["Cars"]
      #swagger.summary = "Get Single Car"
    */

    const data = await Car.findOne({ _id: req.params.id })
      .populate(creatorId)
      .populate(updatorId);

    res.status(200).send({
      error: false,
      data,
    });
  },

  update: async (req, res) => {
    /*
      #swagger.tags = ["Cars"]
      #swagger.summary = "Update Car"
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
    //? updatorId ekle
    req.body.updatorId = req.user._id;

    // userId
    // updatedField [pricePerDay,isPublished,]
    // updatedValues [120,true]

    const data = await Car.findByIdAndUpdate(req.params.id, req.body, {
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
        #swagger.tags = ["Cars"]
        #swagger.summary = "Delete Car"
    */

    const data = await Car.deleteOne({ _id: req.params.id });

    res.status(data.deletedCount ? 204 : 404).send({
      error: !data.deletedCount,
      data,
    });
  },
};
