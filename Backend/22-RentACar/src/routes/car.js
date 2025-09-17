"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */

const { isStaffOrisAdmin, isLogin, isAdmin } = require("../middlewares/permissions");
const { list, read, update, del } = require("../controllers/car");

// URL: /cars

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
