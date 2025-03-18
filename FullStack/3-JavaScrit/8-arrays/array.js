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

const cars = ["BMW", "Audi", "Mercedes", "Sckoda", "Porche", "Tesla"];

console.log(cars);
console.log(cars[4]);

/* -------------------------------------------------------------------------- */
//!                                 PUSH METODU                               */
/* -------------------------------------------------------------------------- */
//* push() dizinin sonuna eleman ekler. ( Çok kullanılacak önemlidir)
//* Yeni eleman eklenmiş halini döndürür.
//* Yeni eklenmiş eleman ile birlikte eleman sayısını döndürür.

const newCar = cars.push("Jeep");
console.log(cars);
console.log(newCar);

/* -------------------------------------------------------------------------- */
//!                                 POP METODU                                */
/* -------------------------------------------------------------------------- */
//** pop() son elemani siler ve sildigi elemani dondurur.

const deletedcar = cars.pop();
console.log(cars);

console.log(deletedcar);

/* -------------------------------------------------------------------------- */
//!                                 UNSHIFT METODU                            */
/* -------------------------------------------------------------------------- */
//* unshift dizinin 0. indeksine eleman ekler ve dizinin son eleman sayisini dondurur.

const ElemanEkle = cars.unshift("Tofaş");
console.log(cars);
console.log(ElemanEkle);

/* -------------------------------------------------------------------------- */
//!                                 SHIFT METODU                              */
/* -------------------------------------------------------------------------- */
//* shift, dizinin 0. indeks elemanini siler ve silenen elemani dondurur.
const elemanSilinen = cars.shift();
console.log(cars);
console.log(elemanSilinen);

/* -------------------------------------------------------------------------- */
//!                                   SPLICE                                  */
/* -------------------------------------------------------------------------- */
//* Bir array içinde arada bir noktaya ekleme yapmak için kullanılır
//? 1.parametre: eklenecek indis numarasi
//? 2.parametre: 0 ise araya ekleme, 1 ise uzerine yazma
//? 3.parametre: yeni eklenecek veri

cars.splice(2, 1, "Serçe", "Seat", "Bugatti", "Togg");

console.log(cars);

cars.splice(5, 1, "ford");
console.log(cars);

cars.splice(3, 1);
console.log(cars);

cars.splice(3, 0, "Fiat");
console.log(cars);

// cars.splice(3)
// console.log(cars)
console.clear();

/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
//!                                   REVERSE                                 */
/* -------------------------------------------------------------------------- */
// Diziyi tersine çevirir.
console.log(cars);
console.log(cars.reverse());
console.log(cars[2]);

/* -------------------------------------------------------------------------- */
//!                                    SORT                                   */
/* -------------------------------------------------------------------------- */
//! sort metodu diziyi iterasyona ugratir ve ascii karaktere göre sıralama yapar.
//! Dolayısıyla string'le doğru şekilde sıralama yapabilir.

cars.sort();
console.log(cars);

// Sort metodu sayılarıda stringmiş gibi bir sıralamaya sokar. Bu nedenle sayısal oalrak hatalı bir sıralama oluşur.

const numbers1 = [3, 556, 243, 133, 6, 78, 98];

console.log(numbers1.sort());

//Küçükten büyüğe sıralama
numbers1.sort((a, b) => a - b);
console.log(numbers1);

//Büyükten Küçüğe sıralama
numbers1.sort((a, b) => b - a);
console.log(numbers1);
