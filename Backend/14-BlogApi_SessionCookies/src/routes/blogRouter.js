"use strict";

/* ============================================ */
/*    EXPRESSJS - BLOG PROJECT WITH MONGOOSE    */
/* ============================================ */

const router = require("express").Router();
const {blogCategory,blogPost} = require("../controllers/blogController");

/* ============================================ */

// URL : /blogs ->

/* ----------- Blog Category Routes ----------- */
router.route("/categories").get(blogCategory.list).post(blogCategory.create);

router
  .route("/categories/:id")
  .get(blogPost.read)
  .put(blogPost.update)
  .patch(blogPost.update)
  .delete(blogPost.delete);

/* -------------- BlogPost route -------------- */

router.route("/posts").get(blogPost.list).post(blogPost.create);

router
  .route("/posts/:id")
  .get(blogPost.read)
  .put(blogPost.update)
  .patch(blogPost.update)
  .delete(blogPost.delete);



/* ============================================ */

module.exports = router;
