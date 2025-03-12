console.log("*******ARRAYS********");

//*============================================
//*               ARRAYS
//*============================================

//* Dizi tanımlama
//* ---------------------------------------

//! 1-Square baracket (Array Literal) yöntemi ile dizi tanımlama
//! En çok tercih edilen yöntem

const names = ["ahmet", "mehmet", "ali", "veli", 56, true, [5, 10, 15]];

console.log(names);
console.log(typeof names);
console.log(names.length);

//* Diziden veri okuma-yazma (indisleme)
//*-----------------------------------------
//? OKUMA

console.log(names[1]);
console.log(names[5]);
console.log(names[6][2]);
console.log(names[names.length - 1]);
const newNames = names[names.length - 1];
console.log(newNames);

//? YAZMA

names[3] = "can";
console.log(names);

names[4]++;
console.log(names);
console.log(names[0].toUpperCase());

// names = [1,2,3,4,5,6] Asignment to constant variable.

// names.push("5")
// console.log(names)

// ! 2.Yöntem (Object Constructor)

const programinLanguage = new Array("Go", "JS", "Python");
console.log(programinLanguage);

const myArr = new Array(10);
console.log(myArr);

const sayilar = Array.of(4);
console.log(sayilar);

//? ===================================================
//?  DIZIYI DEGISTIREN (MUTATOR) METOTLAR
//? ===================================================
