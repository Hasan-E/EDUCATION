let finish = "";
let i = 1;
let toplam = 0;
do {
  let not = prompt(i + ". notunuzu giriniz veya bitirmek için Q ya bas");
  console.log(i + ".notunuz : " + not);

  if (not == "q") {
    break;
  }
  //   finish = prompt("bitirmek için Q ya bas").toUpperCase();
  toplam += Number(not);
  i++;
} while (finish !== "Q");
console.log(toplam);

console.log((toplam / (i - 1)).toFixed(2));
