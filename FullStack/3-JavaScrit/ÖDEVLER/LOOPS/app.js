//**************  ÖDEV1   *********************

// let finish = "";
// let i = 1;
// let toplam = 0;
// let not;
// do {
//   not = prompt(i + ". notunuzu giriniz veya bitirmek için Q ya bas");
//   console.log(i + ".notunuz : " + not);
//   if (not == "q") {
//     break;
//   } else if (!(not < 101 && not > -1) && not != "Q") {
//     console.log("Geçerli bir not giriniz");
//   } else if (not < 101 && not > -1) {

//     toplam += Number(not);
//     i++;
//   }
// } while (not !== "Q");

// console.log("Not ortalamanız: " + (toplam / (i - 1)).toFixed(2));

//**************  ÖDEV2   *********************

let random = Math.ceil(Math.random() * 20);

let hak = 5;

while (hak > 0) {
  const tahmin = +prompt("1 ile 20 arasında bir sayı tahmin ediniz ❤=" + hak);

  hak--;

  if (!(tahmin < 21 && tahmin > -1)) {
    console.log("Geçersiz tahmin  ❤=" + hak);
  } else if (tahmin == random) {
    console.log("✨🎊🎉TEBRİKLER BİLDİNİZ🎉🎊✨");
    const tekrar = prompt("Tekrar oynamak ister misiniz?  E/H");

    if (tekrar == "e" || tekrar == "E") {
      hak = 5;
      random = Math.ceil(Math.random() * 20);
      console.clear();
      continue;
    } else if (tekrar == "h" || tekrar == "H") {
      console.log("Yine bekleriz");
      break;
    }
  } else if (tahmin > random && hak > 0) {
    console.log("Tahmininizi AZALTINIZ🔽  ❤=" + hak);
  } else if (tahmin < random && hak > 0) {
    console.log("Tahmininizi ARTTIRINIZ🔼  ❤=" + hak);
  } else if (hak == 0) {
    console.log("ÜZGÜNÜZ BİLEMEDİNİZ");
    const tekrar = prompt("Tekrar oynamak ister misiniz?  E/H");
    console.clear();
    if (tekrar == "e" || tekrar == "E") {
      hak = 5;
      continue;
    } else if (tekrar == "h" || tekrar == "H") {
      console.log("Yine bekleriz");
      break;
    }
  }
}
