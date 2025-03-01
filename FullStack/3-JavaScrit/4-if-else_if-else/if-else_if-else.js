/* -------------------------------------------------------------------------- */
//!                                CONDITONALS                             */
/* -------------------------------------------------------------------------- */
//! ******* IF -  ELSE

// if ( şart ) {
//     şart durumu doğru ise bu bloğu çalıştır
// }
// else {
//     şart durumu doğru değilse ise bu bloğu çalıştır
// }

// ! Kullancıdan alınan sayının tek mi çift olduğuna karar veren kod bloğu

// if (+prompt("bir sayi") % 2) {
//   console.log("tek");
// } else {
//   console.log("çift");               //!bu benim yaptığım
// }

// let sayi = Number(prompt("Bir sayi giriniz?"))

// let kalan = sayi%2

// if (kalan === 0){
//     console.log("sayı çifttir")
// }else{
//     console.log("sayi tektir")
// }

//! ******* IF - ELSE IF - ELSE

//  if ( şart1 )
// {
//     şart1 durumu doğru ise bu blok çalıştırılır
// }

// else if (şart2 ){
//     şart1 durumu doğru değil şart2 durumu doğru ise bu blok çalıştırılır
// }

// else{
//     şart durumu doğru değilse bu blok çalıştırılır.
// }

/* -------------------------------------------------------------------------- */

// Kulllanıcıalan alınan iki sayı ve bir operator bilgisine göre işlem yapan programı yazınız

let sayi1 = +prompt("Birinci sayiyi giriniz"); //10
let sayi2 = +prompt("İkinci sayiyi giriniz"); //2
let operator = prompt("+,-,*,/ işaretlerinden birini giriniz."); // /
let sonuc;

if (operator == "+") {
  sonuc = sayi1 + sayi2;
} else if (operator == "-") {
  sonuc = sayi1 - sayi2;
} else if (operator == "*") {
  sonuc = sayi1 * sayi2;
} else if (operator == "/") {
  if (sayi2 != 0) {
    sonuc = sayi1 / sayi2;
  } else {
    console.log("infinity");
  }
} else {
  console.log("Geçersiz operatör girildi");
}

// 1.yol
// if (sonuc) {
//     console.log(sonuc)
// }else{
//     console.log("Bir sonuç elde edemediniz")
// }

// 2.short circuit
console.log(sonuc || "bir şey bulunamadı");
