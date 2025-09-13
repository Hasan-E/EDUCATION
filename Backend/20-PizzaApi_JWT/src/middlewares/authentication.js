"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */

const Token = require('../models/token')
const jwt = require('jsonwebtoken')

module.exports = async (req, res) => {
    req.user = null;

    const auth = req?.headers?.authorization; // Token ...TokenKey... || Bearer ...Bearer...
    const tokenArr = auth ? auth.split(' ') : null; // [Token ...TokenKey... || Bearer ...Bearer...]
}