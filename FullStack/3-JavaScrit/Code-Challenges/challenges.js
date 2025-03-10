// !Kullanıcının girdiği üç sayıdan en büyüğünü bulan bir fonksiyon yazın.
// const number1 = +prompt("enter first number");
// const number2 = +prompt("enter second number");
// const number3 = +prompt("enter third number");
// let bigestNumber;
// if (number1 >= number2) {
//   if (number1 >= number3) {
//     if (number1 == number3) {
//       if (number1 == number2) {
//         console.log("üç sayı birbirine eşittir");
//       } else {
//         console.log("sayı 1 ve 3 (" + number1 + ") en büyük sayıdır");
//       }
//     } else if (number1 == number2) {
//       console.log("sayı 1 ve 2 (" + number1 + ") enbüyük sayıdır");
//     } else {
//       console.log("sayı 1 (" + number1 + ")en büyüksayıdır");
//     }
//   } else {
//     console.log("sayı 3 (" + number3 + ")en büyüksayıdır");
//   }
// } else if (number2 >= number3) {
//   if (number2 == number3) {
//     console.log("sayı 2 ve 3 (" + number2 + ") en büyük sayıdır");
//   } else {
//     console.log("sayı 2 (" + number2 + ")en büyüksayıdır");
//   }
// } else {
//   console.log("sayı 3 (" + number3 + ")en büyüksayıdır");
// }

// !Bir yılın artık yıl olup olmadığını belirleyen bir kod yazın
// const year = +prompt("Enter a Year");

// if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//   console.log(year + " Is a leap year");
// } else {
//   console.log(year + " Is not a leap year");
// }

// !Bir sayının pozitif, negatif veya sıfır olduğunu bulan bir fonksiyon yazın

// let sayi = +prompt("lütfen bir sayı giriniz");

// if (sayi === 0) {
//   console.log("girilen sayı 0");
// } else if (sayi < 0) {
//   console.log("girilen sayı negatiftir");
// } else if (sayi > 0) {
//   console.log("girilen sayı pozitiftir");
// } else {
//   console.log("lütfen 0, negatif veya pozitif bir sayı giriniz5 ");
// }

//! Girilen bir sayının tek mi çift mi olduğunu döndüren bir fonksiyon yazın.

// const tekCift = () => {
//   sayi = +prompt("Lütfen bir sayı giriniz");
//   if (sayi % 2 == 0) {
//     console.log(`Girilen sayı ${sayi} ve bu bir çift sayıdır`);
//   } else {
//     console.log(`Girilen sayı ${sayi} ve bu bir tek sayıdır`);
//   }
//   return sayi;
// };

// tekCift();

//! Bir kullanıcının yaşını alarak reşit olup olmadığını kontrol eden bir kod yazın

// let yas = +prompt("Lütfen yaşınızı giriniz");
// if (yas >= 18) {
//   console.log("Reşitsiniz");
// } else if (yas == 17) {
//   console.log("Daha 17 - 17 -17");
// } else {
//   console.log("Reşit değilsiniz");
// }

//! 1'den 100'e kadar olan sayılar içinde 3'e bölünebilenleri ekrana yazdırın

// for (i = 1; i < 101; i++) {
//   if (i % 3 == 0) {
//     console.log(i);
//   }
// }

//! Fibonacci dizisini belirli bir terime kadar hesaplayan bir kod blogu yazın.
// const limit = +prompt("Hangi limite kadar fibonacci yazdırmayı istersiniz?");
// const fibonacci = (limit) => {
//   let sayi1 = 0;
//   let sayi2 = 1;
//   let sayi3 = 0;
//   console.log(sayi1);
//   console.log(sayi2);
//   while (sayi3 <= 1000) {
//     sayi3 = sayi1 + sayi2;
//     if (sayi3 <= limit) {
//       console.log(sayi3);
//     }
//     sayi1 = sayi2;
//     sayi2 = sayi3;
//   }
// };
// fibonacci(limit);
