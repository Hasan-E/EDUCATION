//* ============================================
//*                FOR LOOP
//* ============================================
console.log("**** LOOPS IN ARRAYS ***");
//? Örnek

const maaslar = [50000, 80000, 40000, 30000];

let sum = 0;
for (let i = 0; i < maaslar.length; i++) {
  sum += maaslar[i];
}

console.log("toplam mmaş ödemesi:", sum);

/* -------------------------------------------------------------------------- */
//? ÖRNEK
//? notlar dizisindeki notların 50'den kucuk olanları ve buyuk olanları 2 ayri diziye kaydediniz.
const notlar = [50, 45, 67, 75, 15];

// const ellidenBuyuk= []
// const ellidenKucuk= []

// for (let i = 0; i < notlar.length; i++) {
//     notlar[i]<50 ? ellidenKucuk.push(notlar[i]) : ellidenBuyuk.push(notlar[i])
// }

// console.log(ellidenBuyuk)
// console.log(ellidenKucuk)

//?-------------- FOR IN -------------------
// for...in, bir nesnenin (object) ya da dizinin (array) özelliklerini veya indislerini döngüyle döner.
// Bir String üzerinde çalıştığında, stringin her bir karakterinin indisini (0, 1, 2, ...) döner.

const ellidenBuyuk = [];
const ellidenKucuk = [];

for (let i in notlar) {
  console.log(notlar[i]);
  notlar[i] < 50 ? ellidenKucuk.push(notlar[i]) : ellidenBuyuk.push(notlar[i]);
}

console.log(ellidenBuyuk);
console.log(ellidenKucuk);

/* -------------------------------------------------------------------------- */
const salaries = [50000, 35000, 120000, 44000];
//? Maasların ortalamasını bulalım

let toplam = 0;
for (let i in salaries) {
  toplam += salaries[i];
}

console.log(toplam);
const ortalama = toplam / salaries.length;
console.log("maaş ortalaması", ortalama);

/* -------------------------------------------------------------------------- */
//?-------------- FOR OF -------------------
//! for of dongusu, for in dongusunun bir cok veri yapisini kapsayacak sekilde guncellenmis halidir.
//! Bu dongude dizi icindeki veriye erisirken indisleme kullanmaya gerek yoktur.

const sayilar = [67, 87, 65, 90, 48, 50, 15];

const buyuk = [];
const kucuk = [];

for (let sayi of sayilar) {
  sayi > 60 ? buyuk.push(sayi) : kucuk.push(sayi);
}

console.log(buyuk);
console.log(kucuk);
