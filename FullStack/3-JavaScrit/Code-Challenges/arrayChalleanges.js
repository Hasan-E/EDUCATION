// ! ================================ ISINMA SORULARI ==============================================

//! Bir dizideki pozitif sayıların karesini alıp, sonucu 50'den büyük olanları döndüren bir fonksiyon yazın.
const dizi1 = [2, 3, 4, -3, 5, 6, -2, 7, 8, -5, 9, 5, -7, 3, 9, -8];
const sonuc1 = dizi1
  .filter((num1) => num1 > 0)
  .map((num2) => num2 * num2)
  .filter((num3) => num3 > 50);
console.log(sonuc1);

//! Bir dizideki tüm sayıların çarpımını hesaplayan bir fonksiyon yazın.
const dizi2 = [2, 1, 3, 4, -3, 5, 6, -2, 7, 8, -5, 9, -1, 5, -7, 3, 9, -8];
const sonuc2 = dizi2.reduce((carpimTopla, sayi) => carpimTopla * sayi);
console.log(sonuc2);

//! Bir dizideki ilk negatif sayının indeksini döndüren bir fonksiyon yazın.
const dizi3 = [2, 1, 3, 4, -3, 5, 6, -2, 7, 8, -5, 9, -1, 5, -7, 3, 9, -8];
const sonuc3 = dizi3.findIndex((num) => num < 0);
console.log(sonuc3);

//! Bir dizideki kelimelerin hepsini büyük harfe çeviren bir fonksiyon yazın.
const dizi4 = [
  "İstanbul",
  "Ankara",
  "İzmir",
  "Bursa",
  "Antalya",
  "Gaziantep",
  "Şanlıurfa",
  "Denizli",
  "Adana",
  "Kocaeli",
  "Hatay",
  "Diyarbakır",
  "Tekirdağ",
  "Kayseri",
  "Manisa",
];
const sonuc4 = dizi4.map((il) => il.toUpperCase());
console.log(sonuc4);

//! Bir dizide ilk 50'den büyük sayıyı bulan bir fonksiyon yazın.
const dizi5 = [25, 45, 32, 12, 2, 35, 4, 56, 24, 58, 63, 952, 50, 60, 80, 50];
const sonuc5 = dizi5.findIndex((num) => num > 50);
console.log(dizi5[sonuc5]);

//! Bir dizideki sayıların karesini alıp, sonucu 100'den küçük olanları döndüren bir fonksiyon yazın.
const dizi6 = [
  25, 8, 45, 32, 7, 12, 2, 35, 4, 56, 24, 9, 63, 95, 50, 60, 5, 80, 50,
];
const sonuc6 = dizi6.map((num) => num * num).filter((num) => num < 100);
console.log(sonuc6);

//! Bir dizide tüm elemanların çift sayı olup olmadığını kontrol eden bir fonksiyon yazın.
const dizi7 = [25, 45, 32, 12, 2, 35, 4, 56, 24, 58, 63, 952, 50, 60, 80, 50];
const sonuc7 = dizi7.filter((num) => num % 2 == 0);
sonuc7.length == dizi7.length
  ? console.log("Dizideki tüm sayılar çift sayıdır")
  : console.log("Dizideki tüm sayılar çift sayı değildir");

//! Bir diziyi tersten oluşturmak için bir fonksiyon yazın.
const dizi8 = dizi4.slice(5, 15);
const sonuc8 = dizi8.reverse();
console.log(sonuc8);

//! Bir dizide en az bir elemanın 10'un katı olup olmadığını kontrol eden bir fonksiyon yazın.
const dizi9 = [25, 45, 32, 12, 2, 35, 4, 56, 24, 58, 63, 952, 50, 60, 80, 50];
const sonuc9 = dizi9.filter((num) => num % 10 == 0);
sonuc9.length < 0
  ? console.log(`Bu dizinin hiç bir elemanı 10'un katı değildir`)
  : console.log(`Bu dizinin ${sonuc9.length} elemanı 10'un katıdır`);

//! Bir dizideki tüm kelimeleri ters çeviren bir fonksiyon yazın.
const dizi10 = dizi4.slice(5, 15);
const sonuc10 = dizi10.map((il) => il.split("").reverse().join(""));
console.log(sonuc10);

//! Bir diziden sadece tek sayıları döndüren bir fonksiyon yazın.
const dizi11 = [25, 45, 32, 12, 2, 35, 4, 56, 24, 58, 63, 952, 50, 60, 80, 50];
const sonuc11 = dizi11.filter((num) => num % 2 !== 0);
console.log(sonuc11);

//! Bir dizideki her elemana indeksini ekleyip yeni bir dizi döndüren bir fonksiyon yazın.
const dizi12 = dizi4.slice(2, 12);
const sonuc12 = dizi12.map((il) => dizi12.indexOf(il) + ":" + il);
console.log(sonuc12);

//! Bir dizideki en büyük sayıyı bulan bir fonksiyon yazın.
const dizi13 = [25, 45, 32, 12, 2, 35, 4, 56, 24, 58, 63, 952, 50, 60, 80, 50];
const sonuc13 = dizi13.reduce((max, sayi) => (max > sayi ? max : sayi));
console.log(sonuc13);

//! Bir dizideki her elemanı 3 artıran bir fonksiyon yazın (diziyi yerinde değiştirerek).
const dizi14 = [2, 1, 3, 4, -3, 5, 6, -2, 7, 8, -5, 9, -1, 5, -7, 3, 9, -8];
dizi14.forEach((sayi, index, dizi) => (dizi[index] = sayi + 3));
console.log(dizi14);

//! Bir dizide ilk defa 10 olan elemanın indeksini döndüren bir fonksiyon yazın.
const dizi15 = [2, 1, 3, 4, -3, 5, 6, 10, -2, 7, 8, -5, 9, -1, 5, -7, 3, 9, -8];
const sonuc15 = dizi15.indexOf(10);
console.log(sonuc15);

//! Bir dizide tüm sayıların pozitif olup olmadığını kontrol eden bir fonksiyon yazın.
const dizi16 = [2, 1, 3, 4, -3, 5, 6, 10, -2, 7, 8, -5, 9, -1, 5, -7, 3, 9, -8];
const dizi16Pozitif = dizi16.filter((num) => num > 0);

dizi16.length == dizi16.filter((num) => num > 0).length
  ? console.log("Her eleman pzitif")
  : console.log("Her eleman pozitif değil");
dizi16Pozitif.length == dizi16.filter((num) => num > 0).length
  ? console.log("Her eleman pzitif")
  : console.log("Her eleman pozitif değil");

//!   Bir dizideki 6 karakterden uzun kelimeleri döndüren bir fonksiyon yazın.
const dizi17 = [
  "Manisa",
  "Kayseri",
  "Tekirdağ",
  "Diyarbakır",
  "Hatay",
  "Kocaeli",
  "Adana",
  "Denizli",
  "Şanlıurfa",
  "Gaziantep",
];
const sonuc17 = dizi17.filter((il) => il.length > 6);
console.log(sonuc17);

//! Bir dizideki alt dizileri düz bir liste haline getiren bir fonksiyon yazın.
const dizi18 = [1, [2, 3], [4, [5, 6]], [[7, 8], 9]];
const sonuc18 = dizi18.flat(Infinity);
console.log(sonuc18);

//! Bir dizideki kelimeleri harflere ayırıp düz bir liste haline getiren bir fonksiyon yazın.
const dizi19 = ["Düşünmek ", "ruhun ", "kendisiyle ", "konuşmasıdır."];
const sonuc19 = dizi19.map((kelime) => kelime.split("")).flat(Infinity);
console.log(sonuc19);

//! Bir dizide çift sayıların toplamını hesaplayan bir fonksiyon yazın.
const dizi20 = [25, 45, 32, 12, 2, 35, 4, 56, 24, 58, 63, 952, 50, 60, 80, 50];
const sonuc20 = dizi20
  .filter((num) => num % 2 == 0)
  .reduce((toplam, num) => toplam + num);
console.log(sonuc20);
console.clear();

// !===================================== ISINMIŞ SORULAR ==========================================

//! Bir dizideki elemanların sırasını tersine çeviren bir algoritma yazın, ancak dizi elemanlarını doğrudan değiştirmeden yeni bir dizi oluşturun.
const array1 = ["Beyaz", "Kırmızı", "Mavi", "Mor", "Sarı", "Siyah", "Yeşil"];
const result1 = [...array1].reverse();
console.log(array1);
console.log(result1);

//! Bir dizideki tüm sayıları çift mi yoksa tek mi olduğuna göre iki ayrı alt diziye ayıran bir fonksiyon yazın.
const array2 = [1, 2, 3, 4, 5, 14, 25, 36, 47, 58, 123, 156, 189, 4512, 7845];
const arrayOdd = array2.filter((num) => num % 2 !== 0);
const arrayEven = array2.filter((num) => num % 2 == 0);
console.log(`Tek sayılar: ${arrayOdd}\nÇift sayılar: ${arrayEven}`);

//! Bir dizide her bir elemandan, kendisinden sonra gelen sayıların toplamını hesaplayıp yeni bir dizi oluşturan bir algoritma yazın.
const array3 = [1, 2, 3, 4, 5, 14, 25, 36, 47, 58, 123, 156, 189, 4512, 7845];
const result3 = array3.map((num, index) =>
  array3.slice(index + 1).reduce((sum, num) => sum + num, 0)
);
console.log(result3);

//! Bir dizide, en sık tekrar eden elemanı ve tekrar sayısını bulan bir algoritma yazın.
const array4 = [1, 2, 3, 4, 5, 1, 4, 2, 3, 5, 8, 2, 3, 1, 1, 4, 2, 7, 8, 4, 5];
const result4 = array4
  .map((num1) =>
    array4.filter(
      (num2, index) => num2 === num1 && array4.indexOf(num2) !== index
    )
  )
  .reduce((max, leng) => (leng.length > max.length ? leng : max));
console.log(
  `En fazla tekrar eden sayı : ${result4[0]}\nTekrar sayısı : ${
    result4.length + 1
  }`
);

//! Bir diziyi alt dizilere bölerek (örneğin her 3 elemanda bir) alt dizilerden oluşan bir dizi döndüren bir fonksiyon yazın. Örnek:     [1, 2, 3, 4, 5, 6] → [[1, 2, 3], [4, 5, 6]]
const array5 = [1, 2, 3, 4, 5, 1, 4, 2, 3, 5, 8, 2, 3, 1, 1, 4, 2, 7, 8, 4, 5];

const result5 = array5.reduce((supArray, item, index) => {
  if (index % 3 === 0) {
    supArray.push(array5.slice(index, index + 3));
  }
  return supArray;
}, []);

console.log(result5);

//! Bir dizideki tüm elemanların birbirine olan farklarını hesaplayıp yeni bir dizi döndüren bir fonksiyon yazın.Örnek: [10, 7, 4] → [3, 3]

const array6 = [1, 2, 3, 4, 5, 14, 25, 36, 47, 58, 123, 156, 189, 4512, 7845];
const result6 = array6.reduce((differances, num, index) => {
  if (index < array6.length && index > 0) {
    differances.push(Math.abs(num - array6[index - 1]));
  }
  return differances;
}, []);
console.log(result6);

//! Bir dizide, her bir elemanı kendisinin karesiyle ve indeksinin çarpımıyla değiştiren bir algoritma yazın.
const array7 = [1, 2, 3, 4, 5, 1, 4, 2, 3, 5, 8, 2, 3, 1, 1, 4, 2, 7, 8, 4, 5];
const result7 = array7.map((num, index) => (num = num * num * index));
console.log(result7);

//! Bir dizideki sayıları büyükten küçüğe sıralayın, ancak dizinin orijinal sırasını bozmadan sadece yeni diziyi döndürün.
const array8 = [1, 2, 3, 4, 5, 14, 25, 36, 47, 58, 123, 156, 189, 4512, 7845];
const result8 = array8.sort((a, b) => b - a);
console.log(result8);

//! Bir diziyi, her elemanın toplam uzunluğunu hesaplayarak sıralayan bir algoritma yazın.
// !Örnek:    ['a', 'bb', 'ccc'] → ['ccc', 'bb', 'a']
const array9 = ["Beyaz", "Kırmızı", "Mavi", "Mor", "Sarı", "Siyah", "Yeşil"];
const result9 = array9.sort((a, b) => b.length - a.length); //! oğuzhan hocamdan bakarak :D
console.log(result9);

//! Bir dizideki ilk 5 elemanı toplayan, geri kalanını sıfır olarak değiştiren bir fonksiyon yazın.                   Örnek: [1, 2, 3, 4, 5, 6, 7] → [15, 0, 0, 0, 0, 0, 0]
const array10 = [1, 2, 3, 4, 5, 14, 25, 36, 47, 58, 123, 156, 189, 4512, 7845];
const ilkBesToplam = array10.slice(0, 5).reduce((topla, num) => (topla += num));
const result10 = array10.map((num, index) => (index == 0 ? ilkBesToplam : 0));
console.log(result10);

//! Bir dizide, elemanları belirli bir eşikten (örneğin 10) büyük ve küçük olmak üzere ikiye ayıran bir algoritma yazın.
const array11 = [1, 2, 3, 4, 5, 14, 25, 36, 47, 58, 123, 156, 189, 4512, 7845];
const upperFifty = [];
const lowerFifty = [];
array11.map((num) => (num >= 50 ? upperFifty.push(num) : lowerFifty.push(num)));
console.log(
  `upper fifty numbers: ${upperFifty}\nlower fifty numbers: ${lowerFifty}`
);

//! Bir dizideki elemanların indeksleriyle birlikte toplanmasını sağlayan bir algoritma yazın.Örnek:   [5, 10, 15] → [5, 11, 17]
const array12 = ["Beyaz", "Kırmızı", "Mavi", "Mor", "Sarı", "Siyah", "Yeşil"];
const result12 = array12.map((num, index) => `${index}: ${num}`);
console.log(result12);

//! Bir dizide, her bir elemanın karesinin toplamını döndüren bir fonksiyon yazın, ancak negatif sayıları hesaba katmayın.
const array13 = [
  2, 1, 3, 4, -3, 5, 6, 10, -2, 7, 8, -5, 9, -1, 5, -7, 3, 9, -8,
];
const result13 = array13
  .filter((num) => num > 0)
  .reduce((sumOfSq, num) => (sumOfSq = sumOfSq + num * num), 0);
console.log(result13);

//! Bir dizide, elemanların tekrar sayısını dikkate alarak yeni bir dizi döndüren bir algoritma yazın.
//! Örnek:   [2, 2, 3, 3, 3] → [4, 9]
const array14 = [2, 1, 3, 4, 5, 6, 9, 2, 7, 8, 5, 9, 1, 5, 7, 3, 9, 8];
let i = 1;
const result14 = [];
array14.sort().forEach((num, index, arr) => {
  if (num === arr[index + 1]) {
    i++;
  } else {
    result14.push(num * i);
    i = 1;
    return num;
  }
});
console.log(result14);

//! Bir dizide, indekslere göre elemanları tek ve çift indeksler olarak iki ayrı diziye ayıran bir algoritma yazın.
const array16 = ["Beyaz", "Kırmızı", "Mavi", "Mor", "Sarı", "Siyah", "Yeşil"];
console.log(
  `çift indexli elemanlar ${array16.filter(
    (ciftindex, index) => index % 2 == 0
  )}\n tek indexli elemanlar ${array16.filter(
    (tekindexli, index) => index % 2 !== 0
  )}`
);

//! Bir dizide, sadece rakam olan stringʼleri toplayarak toplamı döndüren bir fonksiyon yazın.Örnek: ['1', '2', 'abc', '3'] → 6
const array17 = ["a", "2", "b", "5", "c", "8", "d", "1", "e", "4"];
const result17 = array17.reduce(
  (toplam, num) => (!isNaN(num) ? toplam + Number(num) : toplam),
  0
);
console.log(result17);

//! Bir dizide, art arda tekrar eden elemanları tek bir elemana indirgeyen bir algoritma yazın. Örnek: [1, 1, 2, 3, 3, 3, 4] → [1, 2, 3, 4]
const array18 = [2, 1, 3, 4, 5, 6, 9, 2, 7, 8, 5, 9, 1, 5, 7, 3, 9, 8];
const result18 = array18.filter((num, index) => array18.indexOf(num) === index);

console.log(result18);

//! Bir dizideki tüm çift sayıların karesini alıp, bu karelerin toplamını hesaplayan bir fonksiyon yazın.
const array19 = [2, 1, 3, 4, 5, 6, 9, 2, 7, 8, 5, 9, 1, 5, 7, 3, 9, 8];
const result19 = array19
  .filter((num) => num % 2 == 0)
  .reduce((toplam, num) => (toplam = toplam + num * num), 0);

console.log(result19);

//! Bir dizideki her elemanı indeksine göre çevirerek bir string döndüren bir algoritma yazın. Örnek: [10, 20, 30] → "0:10, 1:20, 2:30"
const array20 = ["Beyaz", "Kırmızı", "Mavi", "Mor", "Sarı", "Siyah", "Yeşil"];
const result20 = array20.map((item, index) => `${index}:${item}`);
console.log(result20);
