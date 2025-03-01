// * =======================================================
// *                 ARİTMETİK OPERATÖRLER
// * =======================================================

const kola = 50;
const cips = 60;
const cikolata = 35;
let toplam = kola + cips + cikolata;

console.log(toplam); // 145

//! bir arttır

toplam = toplam + 1;
console.log(toplam); //146

toplam++;

console.log(toplam);

//! 10 arttır
toplam += 10; //toplam=toplam+10

console.log(toplam);

//! + işlemi strinhlerde birleştirme (concatination) işlemi yapar

const ad = "joseph";
const soyad = "bilir";

console.log("adim ve soyadim " + ad + " " + soyad);

console.log(`adim ve soyadim  ${ad}     ${soyad}`);

//! arttırma azaltma

let a = 5;

console.log("ilk", a++);

console.log("ikinci", a);

let b = a++;

console.log("b:", b);

console.log("a:", a);

let c = 10;

console.log(++c);

let d = ++c;

console.log("d:", d);

console.log("c:", c);

let e = 45;

console.log(e--); //45
console.log(e); //44
console.log(--e); //43

//! e yi 5 arttır

e += 5;
console.log(e); //48

//! e nin 5 katını gör

e *= 5;
console.log(e); //240

//! çarpma ve üst alma

const pi = 3.14;

const yaricap = 5;

const alan = pi * yaricap ** 2;

console.log(alan);
