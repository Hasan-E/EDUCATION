//! ---------------------------------------------
//! ****************** SWITCH - CASE ***********
//! ---------------------------------------------
// Switch -case bloğu if-else gibi kullanılacak if-else alternatif bir yöntemdir.
// Burda bir şart durumunun karşılacağı birden fazla ihtimale göre ortaya çıkabilme ihtimali olan her duruma karşılık bir yapı verilir .
// Switch de önemli olan şey;  bir şartla karşılaştığı zaman onu uygular ve devam eder işte o noktada çıkmasını istiyoruz ve kod blogunu kırıp çıkmazsak sadece sonuncu değeri yazar

// break

// let urun = prompt("Lütfen ürün giriniz");
// let fiyat;

// switch (urun) {
//   case "kalem":
//     fiyat = "kalem 5$";
//     break;
//   case "defter":
//     fiyat = "defter 10$";
//     break;
//   case "silgi":
//     fiyat = "silgi 25$";
//     break;

//   default:
//     console.log("geçersiz ürün bseçildi");
// }

// fiyat ? console.log(fiyat) : console.log("ürün bulunamadı");

// !-*****************************************************************

let maas = 1000;

let kidem = prompt("Personel kıdemini giriniz");

let promosyon;

switch (kidem) {
  case "prof": {
    console.log(`${maas} + 1000`);
    promosyon = maas + 1000;
    break;
  }

  case "senior": {
    promosyon = maas + 700;
    break;
  }
  case "junior": {
    promosyon = maas + 300;
    break;
  }

  default:
    promosyon = maas + 100;
    break;
}

console.log(`${promosyon}$ alacağınız var`);
