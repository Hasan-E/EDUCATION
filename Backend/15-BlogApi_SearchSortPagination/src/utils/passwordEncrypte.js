"use strict";
/* ============================================ */
/*    EXPRESSJS - BLOG PROJECT WITH MONGOOSE    */
/* ============================================ */ const crypto = require("node:crypto");
/* ============================================ */

// Password Encryption
// https://nodejs.org/docs/latest/api/crypto.html#cryptobkdf2syncpassword-salt-iterations-keylen-digest

module.exports = (password) => {
  const salt = process.env.PASS_SALT;
  const iteration = parseInt(process.env?.PASS_ITERATION);
  const keylen = parseInt(process.env?.PASS_KEYLEN); // write 32 for 64
  const digest = process.env.PASS_DIGEST;

  return crypto
    .pbkdf2Sync(password, salt, iteration, keylen, digest)
    .toString("hex");
};
