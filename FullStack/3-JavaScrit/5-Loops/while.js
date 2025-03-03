// * ============================================
//!            WHILE LOOP
// * ============================================
// JavaScript'te while döngüsü, bir koşul doğru olduğu sürece belirli bir kod bloğunu tekrar tekrar çalıştırmak için kullanılır.

// while (şart){
//     yapılacak işlemler
// }

let i = 0;
while (i <= 10) {
  console.log(i);

  i++;
}
console.clear();
//* Kullanıcı doğru şifre girene kadar kullanıcıdan şifre isteyelim

// let password = prompt("Lütfen şifre giriniz");
// while (password != "45%.a") {
//   password = prompt("input password");
// }
// console.log("tebrikler doğru girdiniz");

//! Tek başına karar yapıları ile tekrarlama işlemi yapılamaz.
//! Tekrar varsa döngu var demektir.
//! karar yapısı kontrol eder ve duruma gore programın akışını yönlendirir ama tekrar yaptırmaz

// 0-100 arasında değer girilene kadar değer girilmesini isteyen kod bloğu

// let number1 = +prompt("Enter a number");
// while (number1 < 0 || number1 > 100) {
//   alert("wrong number");
//   number1 = +prompt("lütfen doğru giriniz çıkmak için q");

//   if (number1 == "q") {
//     break;
//   }
// }

// console.log("çıkıldı");
console.clear();

//? Bazı fonksiyonlar

// Math.floor(); //* her zaman en yakın alt tamsayıya yuvarlar
// Math.ceil(); //* her zaman en yakın üst tam sayıya yuvarlar
// Math.trunc(); //* sayının tam kısmını alır.
// Math.round(); //* en yakın tam sayıya yuvarlar.

// Math.random(); //* 0 ve 1 arasında rasgele sayı üretir.
// toFixed(x); //*virgülden sonra x adet basamak olsun

//? : Tahmin Oyunu
//* Program 1*20 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer 5 hak içinde bildi ise "Tebrikler  bildiniz" yazacaktır.

const random = Math.ceil(Math.random() * 20);
let hak = 5;
console.log(random);

while (hak > 0) {
  const tahmin = +prompt("0-20 arasi Tahmin giriniz");
  hak--;

  if (tahmin == random) {
    console.log("TEBRİKLER🎉🎊");
    break;
  } else if (tahmin > random) {
    console.log(hak + "hakkınız kaldı AZALT🔽");
  } else {
    console.log(hak + "hakkınız kaldı ARTIR🔼");
  }
  if (hak == 0) {
    console.log("ÜZGÜNÜZ BİLEMEDİNİZ😥");
  }
}
