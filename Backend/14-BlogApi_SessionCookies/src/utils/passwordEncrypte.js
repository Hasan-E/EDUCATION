"use strict";
/* ============================================ */
/*    EXPRESSJS - BLOG PROJECT WITH MONGOOSE    */
/* ============================================ */ const crypto = require("node:crypto");
/* ============================================ */

// Password Encryption
// https://nodejs.org/docs/latest/api/crypto.html#cryptobkdf2syncpassword-salt-iterations-keylen-digest

module.exports = (password) => {
  const salt = "fdaslkdfjoslskj23fjskffja2jksldfjksldfelur";
  const iteration = 10_000;
  const keylen = 32; // write 32 for 64
  const digest = "sha512";

  return crypto
    .pbkdf2Sync(password, salt, iteration, keylen, digest)
    .toString("hex");
};
