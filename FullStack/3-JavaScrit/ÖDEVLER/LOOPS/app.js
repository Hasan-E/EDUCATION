//!-**************  ÖDEV1   *********************

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

//!-******************************  ÖDEV2   *********************

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
// !------------------ EN BÜYÜK SAYIYI BUL---------------
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

// !------------------SEASONS-------------------

// const month = +prompt("Enter a mounth(1-12)");
// const day = +prompt("Enter a day(1-31)");

// const isvalidmonth = month >= 1 && month <= 12;
// const isvalidday = day >= 1 && day <= 31;

// if (isvalidmonth && isvalidday) {
//   if ((month == 2 && day >= 21) || (month >= 3 && month <= 5)) {
//     console.log(`The season for ${month}/${day} is Spring.`);
//   } else if ((month == 9 && day <= 21) || (month >= 6 && month <= 8)) {
//     console.log(`The season for ${month}/${day} is Summer.`);
//   } else if (
//     (month == 9 && day >= 22) ||
//     (month == 12 && day <= 20) ||
//     (month >= 10 && month <= 11)
//   )
//     console.log(`The season for ${month}/${day} is Fall.`);
//   else {
//     console.log(`The season for ${month}/${day} is Winter.`);
//   }
// } else {
//   console.log("Invalid month or day. Please enter valid values.");
// }
// !-----------LEAP YEAR--------------------
// const year = +prompt("Enter a Year");

// if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//   console.log(year + " Is a leap year");
// } else {
//   console.log(year + " Is not a leap year");
// }
