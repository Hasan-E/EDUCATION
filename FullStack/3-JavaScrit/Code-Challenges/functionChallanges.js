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

//! Girilen İki Sayının Toplamını Bulma: Kullanıcıdan iki sayı alarak bu sayıların toplamını hesaplayan bir fonksiyon yazın.

// const topla = () => {
//   let sayi1 = +prompt("ilk sayıyı giriniz");
//   let sayi2 = +prompt("ikinci sayıyı giriniz");
//   let toplam = sayi1 + sayi2;
//   return toplam;
// };

// console.log(topla());

//! 10 ve 20 Arasında mı? Kullanıcının girdiği bir sayının 10 ile 20 arasında olup olmadığını kontrol eden bir fonksiyon yazın.

// const func = () => {
//   let sayi = +prompt("lütfen bir sayı giriniz");
//   if (sayi > 10 && sayi < 20) {
//     console.log("girilen sayı 10-20 aralığındadır");
//   } else {
//     console.log("girilen sayı 10-20 aralığında değildir");
//   }
// };

// func();

//! Dikdörtgen Alanı Hesaplama: Kullanıcıdan dikdörtgenin uzun ve kısa kenarlarını alarak alanını hesaplayan bir fonksiyon yazın.

// const alanHesapla = () => {
//   let kisaKenar = +prompt("Lütfen kısa kenar uzunluğunu giriniz");
//   let uzunKenar = +prompt("Lütfen uzun kenar uzunluğunu giriniz");
//   const alan = kisaKenar * uzunKenar;
//   return alan;
// };

// console.log(`dikdörtgenin alanı = ${alanHesapla()} cm\u00B2 dir`);

//! Sayı Pozitifse 1 Ekle, Negatifse 1 Çıkar: Kullanıcının girdiği sayının pozitifse 1 ekleyen, negatifse 1 çıkaran bir fonksiyon yazın.

// const garip = () => {
//   let sayi = +prompt("Lütfen bir sayı giriniz");
//   let sonuc = 0;
//   if (sayi < 0) {
//     sonuc = sayi - 1;
//   } else if (sayi > 0) {
//     sonuc = sayi + 1;
//   }
//   return sonuc;
// };

// console.log(garip());

//! Fibonacci Serisi Bulma: Kullanıcının girdiği sayıya kadar olan Fibonacci serisini hesaplayan bir fonksiyon yazın.

// const fibonacci = () => {
//   let fiboSeri = [0, 1, 1];
//   let adet = +prompt("kaç adet fibonacci sayısı istediğinizi yazınız");

//   while (fiboSeri.length < adet) {
//     let num1 = fiboSeri[fiboSeri.length - 1];
//     let num2 = fiboSeri[fiboSeri.length - 2];
//     fiboSeri.push(num1 + num2);
//   }
//   return fiboSeri;
// };

// console.log(fibonacci());

//! Asal Sayı Kontrolü: Kullanıcıdan alınan sayının asal olup olmadığını kontrol eden bir fonksiyon yazın.

// const asalMi = () => {
//   let sayi = +prompt("Lütfen sayı girin");
//   let asal = true;
//   for (let i = 2; i < sayi; i++) {
//     if (sayi % i === 0) {
//       asal = false;
//       break;
//     }
//   }
//   if (asal) {
//     console.log("Girilen sayı asal sayıdır");
//   } else {
//     console.log("Girilen sayı asal değildir");
//   }
// };

// asalMi();

//! Sayıların Tersini Bulma: Bir sayının tersini (123 -> 321 gibi) bulan bir fonksiyon yazın.

// const tersSayi = () => {
//   let sayi = prompt("Bir sayı giriniz");
//   console.log(sayi.split("").reverse().join(""));
// };

// tersSayi();

//! Mükemmel Sayı Kontrolü: Bir sayının kendisinden başka tüm bölenlerinin toplamı kendisine eşitse mükemmel sayıdır (örn. 6 = 1 + 2 + 3). Bu tanıma uyan sayıları bulan bir fonksiyon yazın.

// const mukemmelSayi = (kadar) => {
//   let mukSayilar = [];

//   for (let i = 6; i < kadar; i++) {
//     let mukSayi = 0;
//     for (let k = 0; k < i; k++) {
//       if (i % k === 0) {
//         mukSayi += k;
//       }
//     }
//     if (mukSayi == i) {
//       mukSayilar.push(i);
//     }
//   }
//   return mukSayilar;
// };

// console.log(mukemmelSayi(1500));

//! Armstrong Sayısı Kontrolü: Girilen bir sayının basamaklarının küplerinin toplamı kendisine eşitse Armstrong sayısıdır (ör. 153 = 1³ + 5³ + 3³). Bu tür sayıları bulan bir fonksiyon yazın.

// const Armstrong = () => {
//   let sayi = prompt("Lütfen bir sayı giriniz");
//   let rakamlar = sayi.toString().split("").map(Number);
//   let rakamKupToplam = 0;
//   for (let i = 0; i < rakamlar.length; i++) {
//     rakamKupToplam += rakamlar[i] ** rakamlar.length;
//   }
//   if (rakamKupToplam == sayi) {
//     console.log("This is an Amstrong");
//   } else {
//     console.log("This is not an Amstrong");
//   }
// };

// Armstrong();

//! İki Sayının EBOB'unu Bulma: Kullanıcıdan iki sayı alarak, bu iki sayının en büyük ortak bölenini (EBOB) bulan bir fonksiyon yazın

// const EBOB = () => {
//   let sayi1 = +prompt("Lütfen ilk sayıyı giriniz");
//   let sayi2 = +prompt("Lütfen ikinci sayıyı giriniz");
//   let sayi1bolenler = [];
//   let sayi2bolenler = [];
//   let ortakBolenler = [];
//   for (i = 0; i < sayi1; i++) {
//     if (sayi1 % i === 0) {
//       sayi1bolenler.push(i);
//     }
//   }
//   for (i = 0; i < sayi2; i++) {
//     if (sayi2 % i === 0) {
//       sayi2bolenler.push(i);
//     }
//   }
//   for (i = 0; i < sayi1bolenler.length; i++) {
//     if (sayi2bolenler.includes(sayi1bolenler[i])) {
//       ortakBolenler.push(sayi1bolenler[i]);
//     }
//   }

//   console.log(ortakBolenler[ortakBolenler.length - 1]);
// };

// EBOB();

//! Farklı bir yötem olarak öklid algoritması ile EBOB HESAPLAMA ve EBOB u kullanarak EKOK hesaplama

// const EbobOklid = (sayi1, sayi2) => {
//   // let sayi1 = +prompt("Lütfen ilk sayıyı giriniz");
//   // let sayi2 = +prompt("Lütfen ikinci sayıyı giriniz");
//   while (sayi2 !== 0) {
//     let ebob = sayi2;
//     sayi2 = sayi1 % sayi2;
//     sayi1 = ebob;
//   }
//   return sayi1;
// };
// // console.log(`Bu iki sayının EBOB u = ${EbobOklid()}`);

// const ebobdanEkok = () => {
//   let sayi1 = +prompt("Lütfen ilk sayıyı giriniz");
//   let sayi2 = +prompt("Lütfen ikinci sayıyı giriniz");
//   ebob = EbobOklid(sayi1, sayi2);
//   ekok = (sayi1 * sayi2) / ebob;
//   return ekok;
// };

// console.log(`Bu iki sayının EKOK u = ${ebobdanEkok()}`);

// !Bir Sayının Basamaklarının Toplamını Bulma: Kullanıcının girdiği sayının basamaklarının toplamını hesaplayan bir fonksiyon yazın

// const basamakTopla = () => {
//   let sayi = prompt("Lütfen bir sayı giriniz");
//   let basamaklar = sayi.split("");
//   let toplam = 0;
//   basamaklar.forEach((basamak) => {
//     toplam += Number(basamak);
//   });
//   return toplam;
// };

// console.log(`Girilen sayının basamakları toplamı ${basamakTopla()} dır`);

//! Dört Basamaklı Palindrom Sayıları Bulma: 1000 ile 9999 arasındaki palindrom (tersi kendisine eşit) sayıları ekrana yazdıran bir fonksiyon yazın.

// const polindrom = () => {
//   let pol = 0;
//   for (i = 1000; i <= 9999; i++) {
//     pol = Number(i.toString().split("").reverse().join(""));
//     if (pol === i) {
//       console.log(i);
//     }
//   }
// };
// polindrom();

// console.clear();

//! Bir Sayıyı Basamaklarına Ayırma: Verilen bir sayıyı basamaklarına ayırarak her basamağı tek tek gösteren bir fonksiyon yazın

// const basamaklar = () => {
//   let sayi = prompt("Lütfen sayıyı giriniz");
//   return sayi.split("");
// };

// console.log(basamaklar());
// console.clear();

//! Pascal Üçgeni Yazdırma: Girilen satır sayısı kadar Pascal Üçgeni'ni yazdıran bir fonksiyon oluşturun.

// const pascal = () => {
//   let satirsayisi = +prompt("Lütfen pascal üçgeninin satır sayısını giriniz");
//   let pascalUcgen = [[1]];
//   for (i = 1; i < satirsayisi; i++) {
//     let satir = [1];
//     for (k = 1; k < i; k++) {
//       satir.push(pascalUcgen[i - 1][k - 1] + pascalUcgen[i - 1][k]);
//     }
//     satir.push(1);
//     pascalUcgen.push(satir);
//   }

//   for (let i = 0; i < pascalUcgen.length; i++) {
//     let bosluk = " ".repeat(satirsayisi - i);
//     console.log(bosluk + pascalUcgen[i].join(" "));
//   }
// };

// pascal();

//! Bir Sayının Tam Bölenlerini Bulma: Kullanıcının girdiği sayının tüm tam bölenlerini bulan bir fonksiyon yazın.

// const bolenler = () => {
//   let sayi = +prompt("Lütfen bir sayı giriniz");
//   let bolenler = [];
//   for (i = 0; i <= sayi; i++) {
//     if (sayi % i === 0) {
//       bolenler.push(i);
//     }
//   }
//   return bolenler;
// };

// console.log(bolenler());

//! Üçgen mi, Çember mi Daha Büyük Alan? Kullanıcıdan bir üçgenin kenar uzunluklarını ve bir çemberin yarıçapını alarak, hangi şeklin daha büyük alana sahip olduğunu bulan bir fonksiyon yazın.

// const tORc = () => {
//   let kenar1 = +prompt("Üçgenin 1.kenarını giriniz");
//   let kenar2 = +prompt("Üçgenin 2.kenarını giriniz");
//   let kenar3 = +prompt("Üçgenin 3.kenarını giriniz");

//   if (
//     kenar1 + kenar2 <= kenar3 ||
//     kenar2 + kenar3 <= kenar1 ||
//     kenar1 + kenar3 <= kenar2
//   ) {
//     console.log("bu kenarlar ile bir üçgen oluşturulamaz");
//   }
//   let cevreUcgen = (kenar1 + kenar2 + kenar3) / 2;
//   let yariCap = +prompt("Çemberin yarıçapını giriniz");
//   let alanUcgen = Math.trunc(
//     Math.sqrt(
//       cevreUcgen *
//         (cevreUcgen - kenar1) *
//         (cevreUcgen - kenar2) *
//         (cevreUcgen - kenar3)
//     )
//   );
//   let alanCember = Math.trunc(Math.PI * yariCap * yariCap);

//   alanUcgen > alanCember
//     ? console.log(
//         `Üçgenin alanı ${alanUcgen} çemberin alanından ${alanCember} den büyüktür`
//       )
//     : console.log(
//         `Çemberin alanı ${alanCember} üçgenin alanından ${alanUcgen} den büyüktür`
//       );
// };

// tORc();

// !Bir Sayıyı Üç Basamaklı Yapma: Verilen sayının üç basamaklı bir sayı olacak şekilde önüne sıfır ekleyen bir fonksiyon yazın (örn. 7 -> 007)

// const ucBasamak = () => {
//   let sayi = prompt("Bir veya iki basamaklı bir sayı giriniz:");
//   let yeniSayi;

//   if (sayi.length >= 3) {
//     console.log("Sayı zaten 3 basamaktan fazla!");
//   } else {
//     let num = sayi.split("");
//     if (sayi.length == 2) {
//       num.unshift("0");
//     } else if (sayi.length == 1) {
//       num.unshift("0", "0");
//     }
//     yeniSayi = num.join("");
//   }

//   return yeniSayi;
// };

// console.log(ucBasamak());
