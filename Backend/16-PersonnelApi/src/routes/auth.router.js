"use strict";
/* ============================================ */
/*            EXPRESS - PERSONNEL API           */
/* ============================================ */

const { login } = require("../controllers/auth.controller");
const router = require("express").Router();

/* ============================================ */
//URL: /auth

router.post("/login", login);

/* ============================================ */

module.exports = router;
