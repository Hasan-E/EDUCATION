"use strict";

/* ============================================ */
/*    EXPRESSJS - BLOG PROJECT WITH MONGOOSE    */
/* ============================================ */

const router = require("express").Router();

const user = require("../controllers/userController");

/* ============================================ */

// URL: /users ->

router.route("/").get(user.list).post(user.create);

router
  .route("/:id")
  .get(user.read)
  .put(user.update)
  .patch(user.update)
  .delete(user.delete);

router.post("/login", user.login);

/* ============================================ */

module.exports = router;
