"use strict";

/* ============================================ */
/*            EXPRESS - PERSONNEL API           */
/* ============================================ */
// Authentication middleware

const Token = require("../models/token.model");

module.exports = async (req, res, next) => {
  req.user = null;

  // Authorization: Token ...TokenKey...
  // Authorization: ApiKey ...TokenKey...
  // Authorization: Bearer ...TokenKey...
  // Authorization: Auth ...TokenKey...
  // Authorization: x-API-KEY ...TokenKey...
  // Authorization: x-auth-token ...TokenKey...

  // Get token from headers

  const auth = req.headers?.authorization || null; // Token ...tokenKey...
  const tokenArr = auth ? auth.split(" ") : null; // ['Token','...tokenKey...']

  if (tokenArr && tokenArr[0] == "Token") {
    const tokenData = await Token.findOne({token: tokenArr[1]}).populate('userId')

    if(tokenData) req.user = tokenData.userId;
  }

  next();
};
