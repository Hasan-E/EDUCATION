"use strict";

/* ============================================ */
/*                    MODULES                   */
/* ============================================ */

// require('./modules/index.js');
// require('./modules/index');
//  require('./modules');

/* ============================================ *

//!import
const test = require('./modules');

test()

/* ============================================ *

//!import v2 
require('./modules')();
/* ============================================ *

const arrFn = require('./modules');// -> refers to [test, test1, test2]
// console.log(typeof arrFn,arrFn);

arrFn[0]();
arrFn[1]();
arrFn[2]();

/* ============================================ *

//! Order is important in Array desctructing
const [test,test2,test1] = require('./modules') // -> refers to [test, test1, test2]

test();
test1();
test2();
/* ============================================ */
/* ------------- import v4 object ------------- *
const objFn = require('./modules')

 objFn.test();
 objFn.test1();
 objFn.test2();
 
/* ------------- import v5 object ------------- */
const { test2, test1, test } = require("./modules");
test();
test1();
test2();

// console.clear();
