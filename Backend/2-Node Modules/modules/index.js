"use strict";

/* ============================================ */
/*                    MODULES                   */
/* ============================================ */

// console.log('this is from index');

/* ============================================ *

const test = function(){
    console.log('this is from index');
}

//! Export 
module.exports = test;

/* ============================================ *

//! Export v2

module.exports = function(){
    console.log('this is from index');
}

/* ============================================ *

const test = function(){
    console.log('test work');
}

const test1 = function(){
    console.log('test1 work');
}

const test2 = function(){
    console.log('test2 work');
}

/* ============================================ */
/* ----------- Exporting as an Array v3 ---------- *
module.exports = [test, test1, test2]
/* ============================================ */
/* ----------------- export v4 oje olarak ---------------- *
module.exports = {
    test : test,
    test1 : test1,
    test2 : test2,
}
/* ------- export v5 en kullanışlı olan ------- */

module.exports = {
  test: function () {
    console.log("test work");
  },
  test1: function () {
    console.log("test1 work");
  },
  test2: function () {
    console.log("test2 work");
  },
};
