//! Aşağıdaki dizideki her kelimeyi büyük harfe çeviren bir map fonksiyonu yazın

// const words = ["elma", "armut", "çilek", "muz"];
// const upperCaseWords = words.map((word) => word.toUpperCase());
// console.log(upperCaseWords);

//! Aşağıdaki sayıların 3 katını alan bir map fonksiyonu yazın

// const numbers = [1, 5, 10, 15, 20];
// const ucKat = numbers.map((num) => num * 3);
// console.log(ucKat);

//! Aşağıdaki kelimelerin uzunluklarını içeren yeni bir dizi oluşturun:

// const words = ["masa", "bilgisayar", "kalem", "defter"];

// const uzunluk = words.map((k) => k.length);
// console.log(uzunluk);

// !Aşağıdaki dizideki çift sayıların yarısını, tek sayıların ise iki katını içeren yeni bir dizi oluşturun:

// const numbers = [2, 5, 8, 11, 14, 17];

// const numberCombine = numbers.map((number) =>
//   number % 2 == 0 ? number / 2 : number * 2
// );

// console.log(numberCombine);

// !Aşağıdaki diziden içinde "e" harfi olan kelimeleri filtreleyin:

// const words = ["masa", "kalem", "kitap", "buz"];
// const sec = words.filter((op) => op.includes("e"));
// console.log(sec);

//! Bir dizide, en sık tekrar eden elemanı ve tekrar sayısını bulan bir algoritma yazın.

// const numbers = [2, 3, 3, 3, 3, 4, 5, 4, 5, 7, 6, 8, 9, 5, 6, 5, 5];

// let max = 0;
// let ensik;
// for (let i = 0; i < numbers.length; i++) {
//   let count = 0;
//   for (let k = 0; k < numbers.length; k++) {
//     if (numbers[i] === numbers[k]) {
//       count++;
//     }
//   }
//   if (count > max) {
//     max = count;
//     ensik = numbers[i];
//   }
// }

// console.log(`Tekrar eden eleman: ${ensik} tekrar sayısı ${max}`);
