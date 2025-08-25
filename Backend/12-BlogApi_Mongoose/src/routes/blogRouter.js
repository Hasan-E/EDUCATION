'use strict';

const { BlogCategory } = require("../models/blogModel");

/* ============================================ */
/*    EXPRESSJS - BLOG PROJECT WITH MONGOOSE    */
/* ============================================ */

const router = requires('express').Router();

router.route('/blog')
    .get(blogCategory.list)

    