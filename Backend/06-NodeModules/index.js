'use strict';

/* -------------------------------------------------------
                        DOTENV
------------------------------------------------------- *


// key: asd123

// console.log('asd123');

// console.log(process.env); // KEY=asd123 node index.js

console.log(process.env.HOST);
console.log(process.env.PORT);
console.log(process.env.SECRET_KEY);

/* ------------------------------------------------------- */
//* npm i dotenv

require('dotenv').config();

console.log(process.env.HOST);
console.log(process.env.PORT);
console.log(process.env.SECRET_KEY);


//* https://www.toptal.com/developers/gitignore/