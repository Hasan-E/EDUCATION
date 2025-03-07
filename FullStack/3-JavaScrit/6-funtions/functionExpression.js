// ? =========================================================
// ?                    FONKSİYONLAR
// ?==========================================================

//!----------------------------------------------------------
//! 2.YÖNTEM  : FUNCTION EXPRESSION
//!-----------------------------------------------------------

//**********************************************************/
//! * --------Function-Expression----------------------------*/
// 1-Fonksiyon bir değişkene tanımlanır.
// 2-Function kelimesini ardından fonksiyonun ismi verilir.
// 3-Sonra da bir parantez açılıp kapatılır.
//? önce fonksiyon oluşturmak şart - hoisting olmaz

const adYazdir = function () {
  console.log("merhaba");
};
adYazdir();

//** Parametreli function exp. */

const isEvenOdd = function (a) {
  let result = a % 2 === 0 ? "Even" : "Odd";

  return result;
};
let sayi = 66;
console.log(isEvenOdd(sayi));

/* -------------------------------------------------------------------------- */
//** Verilen 3 sayıdan en büyüğünü bulun (Math.max kullanmadan) */

// 1.yöntem
let enb = function (a, b, c) {
  if (a >= b && a >= c) {
    console.log(a);
  } else if (b >= a && b >= c) {
    console.log(b);
  } else {
    console.log(c);
  }
};

enb(5, 55, 25);

// 2.yöntem

let a = 100;
let b = 105;
let c = 99;

const enb2 = function () {
  let biggest = a;

  if (b > biggest) {
    biggest = b;
  }

  if (c > biggest) {
    biggest = c;
  }

  console.log(biggest);
};

enb2();
