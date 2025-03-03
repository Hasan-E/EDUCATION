// * ============================================
// *            DONGULER(LOOPS)- DO-WHILE
// * ============================================

console.log("****** DO-WHILE *******");
let devamMı = "";
do {
  let vize = +prompt("vize notunuzu giriniz");
  let final = +prompt("final notunuzu giriniz");
  console.log((vize + final) / 2);

  devamMı = prompt("devam etmek ister misin");
} while (devamMı == "evet");

console.log("bye");
