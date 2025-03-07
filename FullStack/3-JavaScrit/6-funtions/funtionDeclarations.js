// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================
//! Fonksiyon tanımlama yöntemleri
// Function Declaration (Fonksiyon Bildirimi):
// Function Expression (Fonksiyon İfadesi):
// Arrow Function (Ok Fonksiyonları)

/* -------------------------------------------------------------------------- */
// recursive Function
// IIFE (Immediately Invoked Function Expresion)
// Callback Function

// !-----------------------------------------------------------
// ! 1.YÖNTEM  : FUNCTION DECLARATION
// !-----------------------------------------------------------
//? Bir fonksiyon belirli bir görevi gerçekleştirmek için tasarlanmış,
//? yeniden kullanılabilir, (tek bir görev için tek fonksiyon olması daha iyidir)
//? test etmesi kolaydır

//! * --------Function-Declaration----------------------------*/
// /JavaScript'te function declaration (fonksiyon bildirimi), bir fonksiyonun ismini ve içeriğini önceden belirleyerek tanımlamanın temel yoludur.
// Function declaration, function anahtar kelimesi kullanılarak yapılır
//? Bir fonksiyonun çalışması için çağırmak gereklidir.Çağırılmadığında işleme alınmaz.Bu çağırma işlemine invoke yada call denir.

print();

// Hoisting : yukarı kaldırma
//! sadece function declerationda hoisting yapılıyor
// Hoisting: Function declaration ile tanımlanan fonksiyonlar, JavaScript tarafından kodun en başına "yükseltilir" (hoist edilir), bu nedenle fonksiyon tanımlanmadan önce bile çağrılabilir.

function print() {
  console.log("Merhaba Nasılsınız");
}

print();

topla();

function topla() {
  console.log(25 + 30);
}

console.clear();

//? Parametreli fonksiyonlar
// Parametreli fonksiyonlar, belirli girdilerle işlem yapabilen fonksiyonlardır.
//?Parametreler, fonksiyon tanımlanırken parantez içinde belirtilir ve fonksiyon çağrıldığında değerler gönderilerek (argüman olarak) kullanılır.
//* Fonksiyon tanımlanırken verilen değerlere arguments denir

function toplama(a, b, c) {
  //   console.log(a + b + c);
  result = a + b + c;
  return result;
}
console.log(toplama(5, 8, 7));

function selamla(ad, yas, meslek = "mimar") {
  console.log(ad);
  console.log(yas);
  console.log(meslek);
}

selamla("rooster", 20, "yazılımcı");
selamla("rooster", 25);

// ***************************

function degerler(a, b) {
  console.log(a);
  console.log(b);
  console.log(arguments);
}
degerler(66, 65, 25, 63, 6325, 63);

// ! return keyword  */

function yasHesapla(isim, tarih) {
  //   console.log(`merhaba ben ${isim} ben ${2025 - tarih} yaşındayım`);
  let yasBul = 2025 - tarih;
  return yasBul;
}

yasHesapla("hasan", 1991);

let yas = yasHesapla("hasan", 1991);

console.log(yas);

if (yas > 30) {
  console.log("yas 30 dan büyük");
} else {
  console.log("yas 30dan kucuk");
}

// dairenin cevresini bulan fonksiyon

function daireCevresi(r) {
  let cevre = 2 * Math.PI * r;
  return cevre;
}
console.log(daireCevresi(5));
