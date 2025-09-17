"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */

const { isStaffOrisAdmin, isLogin, isAdmin } = require("../middlewares/permissions");
const { list, read, update, del } = require("../controllers/reservation");

// URL: /reservations

router
    .route("/")
    .get(isStaffOrisAdmin, list)

router
    .route("/:id")
    .get(isLogin, read)
    .put(isLogin, update)
    .patch(isLogin, update)
    .delete(isAdmin, del);

/* ------------------------------------------------------- */
module.exports = router;
