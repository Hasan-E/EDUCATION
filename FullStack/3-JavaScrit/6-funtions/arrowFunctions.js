// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// !3.YÖNTEM  : ARROW FUNCTIONS
// !-----------------------------------------------------------

console.log("****** 3- ARROW FUNCTIONS ******");

// //!Funct expression ve arrow func yontemlerinde
// //! Once fonks tanimlanmalidir sonra cagrilmalidir. Hoisting desteklenmez
// //! Aksi takdirde hata alırsiniz.

// function selamla2() {
//     console.log("declaration")  //!declaration
// }

// selamla2()

// const selamla1 = function(){
//     console.log("expression")  //!expression
// }
// selamla1()

const selamla = () => {
  console.log("Arrow functiondan selamlar"); //! ARROW
};

selamla();
//! - Tek satırlık bir kod olacaksa {} ve return gerekmez
const naber = () => console.log("merhaba");

naber();

// *-------------------------------------------------------------------
// ** Parametreli fonksiyon kullanımı
// sayının 3 e bölünüp bölünmediğini kontrol eden kod bloğu

const bol = (num) => (num % 3 === 0 ? "3 e bölünür " : "3 e bölünemez");

console.log(bol(10));

const uceBol = (num) => {
  let result;
  if (num % 3 === 0) {
    result = "3 e bölünür";
  } else {
    result = "3 e bölünmez";
  }
  return result;
};

console.log(uceBol(99));

// silindirin hacmini bulan arroe function yazın
// pi r kare * h

const hacim = (r, h) => Math.PI * r * r * h;
// return kullanılacaksa

const hacim1 = (r, h) => {
  return Math.PI * r * r * h;
};
console.log(Math.floor(hacim(3, 5)));
console.log(Math.floor(hacim1(2, 5)));

//* verilen sayıya kadar olan asal sayıları bulalım

const asal = (num) => {
  if (num < 2) {
    console.log("Bu değere kadar bir asal sayı yok");
    return;
  }
  for (let i = 2; i < num; i++) {
    if (i === 2) {
      console.log(i);
    } else {
      let asal = true;
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          asal = false;
          break;
        }
      }
      asal ? console.log(i) : "";
    }
  }
};

asal(30);
