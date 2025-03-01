/* ---------------------------------- */
//!             OPERATORS             */
/* ---------------------------------- */
//! Aritmatik Operatorler

let a = 10;
let b = "2";

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// Öncelik sıralaması-  işlem önceliği
// üs, parantez içi, çarpma/bölme, çıkarma/toplama

// Dakika olarak verilen ağaşıdaki deger kaç saat kaç dakikaya denk gelmektedir

let sure = 377;
let saat = Math.floor(sure / 60);

console.log(saat);

let dakika = sure % 60;

console.log(dakika);

console.log(`${saat}:${dakika}`);

// INCREMENT ++  - DECREMENT --

let x = 10;

console.log("INCREMENT");
// x ++ önce yazdır sonra arttır
// ++ x önce arttır sonra yazdır
console.log(++x);
console.log("DECREMENT");
// x-- önce yazdır sonra azalt
// --x önce azalt sonra yazdır
//x=x-1
console.log(--x);

console.clear();

// ASSIGMENT OPERATORS

let t = 7;
let z = 6;

console.log(t);

t = z;
console.log(t);

// t = t+z
// t = t-z
console.log(t);
t += z; //! t = t+z
console.log(t);
t -= z; //! t = t-z
console.log(t);
t *= 3; //! t = t*z
console.log(t);
t /= 2; //! t = t/z
console.log(t);
t %= 4; //! t = t%z
console.log(t);
t++;
t **= 6; //! t = t**z
console.log(t);

/* ---------------------------------- */
/* !       COMPARISON OPERATORS        */
/* ---------------------------------- */
//Karşılaştırma opretörleri bize Boolean bir değer döndürür.

let c = 2;
let d = "2";
console.log(typeof c);
console.log(typeof d);
console.log(c == d); // == eşittir tipine bakmadan sadece değerler aynıysa eşit olarak kabul eder.
console.log(c === d); // === hem veri tipini kontrol eder hemde değeri kontrol eder.

// otomatik tip dönüşümü - Type conversion
// + hariç diğerlerinde bir string ve number ifade işleme alınıyosa js insiyatif kullanır ve işlemi gerçekleştirir.

console.log(c - d);

console.log(c != d); // false sonucu vererek eşittir demiş oluyor:
//eşit değildir =>false yani eşittir sonucunu veriyor. ikisi değer olarak eşit olduğu için eşit değildir kontrolünde (false) yani eşittir olarak veriyor. Tiplerine bakmadan kontrol ediyor
console.log(c !== d); // 2="2" eşit değil değil mi, evet bunlar eşit değil.

/*-----------------------------------------------------------*/

console.log(5 > 4);
console.log(5 < 4);
console.log(7 >= 17);
console.log(7 <= 7);

/*-----------------------------------------------------------*/

/* ---------------------------------- */
/*          LOGICAL OPERATORS         */
/* ---------------------------------- */
console.clear();
//! AND operatoru &&
// mükemmeliyetçidir- herşey true olmalı - bir tane false gördüğü anda orada işlem bitiyor.
// falsy deger üretenler
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(false));
console.log(Boolean("harvey"));
console.log(Boolean(5));
console.log(Boolean({}));
console.log(Boolean([]));

console.log(true && 5 && 1 && "harvey" && 5);
console.log("elma" && "armut" && "muz" && "" && "çilek");
let f = "elma" && "armut" && "muz" && undefined && "çilek";
console.log(typeof f);

/* ------------------------------------------------------------- */
//! OR operatoru ||

//? Herşey false olsa bile bir tane true değer varsa true döndürmeye yeter
//? Herşey false ise son false değerini bize döndürür

console.log(false || false || 1 || false || false);
console.log(false || "" || 0 || "test" || false);

console.log(true && true && true && true && 156);
console.log(false || false || false || 555 || true || 25);

let nedir = false || false || false || false || 0 || "";
console.log("Typeof:", typeof nedir);
console.log("Boolean:", Boolean(nedir));
