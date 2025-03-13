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

//! Bir stringin içindeki her harfin kaç defa geçtiğini sayan bir döngü oluşturun.

// const kelime = prompt("bir ifade giriniz");
// const sayac = {};
// let i = 0;
// console.log("Girilen kelime :" + kelime);

// while (i <= kelime.length) {
//   let harf = kelime.charAt(i);
//   if (sayac[harf]) {
//     sayac[harf]++;
//   } else {
//     sayac[harf] = 1;
//   }
//   i++;
// }

// console.log(sayac);

//! Girilen bir sayının asal olup olmadığını belirleyen bir kod bloğu yazın.

// let sayi = +prompt("Lütfen bir sayı giriniz");
// let test = true;

// if (sayi < 2) {
//   console.log("Girilen sayı asal değildir");
// } else {
//   for (let i = 2; i < sayi; i++) {
//     if (sayi % i === 0) {
//       test = false;
//       break;
//     }
//   }
// }

// if (test) {
//   console.log("Girilen sayı asaldır");
// } else {
//   console.log("Girilen sayı asal değildir");
// }

// !Sayının Tek mi Çift mi Olduğunu Bulma: Kullanıcıdan alınan sayının tek mi çift mi olduğunu kontrol eden bir fonksiyon yazın.

// const sayi = +prompt("Lütfen bir sayı giriniz");

// const tekCift = (sayi) =>
//   sayi % 2 === 0 ? console.log("çift sayı") : console.log("tek sayi");

// tekCift(sayi);

//! Sayı 5'in Katı mı? Kullanıcının girdiği bir sayının 5'in katı olup olmadığını kontrol eden bir fonksiyon yazın.
// const sayi = +prompt("Lütfen bir sayı giriniz");

// const beskati = (sayi) =>
//   sayi % 5 === 0
//     ? console.log("sayı 5 e bölünür")
//     : console.log("sayı 5 e bölünmez");

// beskati(sayi);

//! Pozitif mi Negatif mi? Kullanıcının girdiği sayının pozitif, negatif veya sıfır olup olmadığını belirleyen bir fonksiyon yazın.

// let sayi;

// const pozitifNegatif = (sayi) => {
//   sayi = +prompt("Lütfen bir sayı giriniz");

//   if (sayi === 0) {
//     console.log("Girilen sayı 0 dır");
//   } else if (sayi < 0) {
//     console.log("Girilen sayı negatiftir");
//   } else {
//     console.log("Girilen sayı pozitifdir");
//   }
// };

// pozitifNegatif();

//! Sayıyı Mutlak Değere Çevirme: Kullanıcının girdiği negatif bir sayıyı pozitif hale getiren bir fonksiyon yazın

// const sayi = +prompt("Lütfen bir sayi giriniz");

// const mutlak = (sayi) =>
//   sayi < 0 ? console.log(sayi * -1) : console.log(sayi);

// mutlak(sayi);

//! Bir Sayının Karesini Bulma: Kullanıcının girdiği sayının karesini hesaplayan bir fonksiyon yazın.

// const sayi = +prompt("karesi alınacak sayıyı giriniz");

// const kare = () => (true ? console.log(sayi * sayi) : console.log("a"));

// kare();

//! Girilen Sayının Kaç Basamaklı Olduğunu Bulma: Kullanıcıdan alınan sayının kaç basamaklı olduğunu bulan bir fonksiyon yazın (örn. 234  3 basamak).

// let sayi = prompt("Lütfen bir sayı giriniz");

// const basamaksay = () => {
//   if (sayi < 0) {
//     sayi = sayi * -1;
//   }
//   let basamak = 0;
//   while (sayi >= 1) {
//     sayi = sayi / 10;
//     basamak++;
//   }
//   return basamak;
// };

// console.log(`${sayi} sayısı ${basamaksay(sayi)} basamaklı bir sayıdır`);


//! Bir dizide tekrar eden elemanları bulan ve bunları bir kez yazdıran bir kod yazın

const dizi = [1,2,3,3,5,5,2,4,7,9,'ahmet','mehmet','ali' , 'zeynep', 'kavun', 'karpuz','karpuz'];

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  
}