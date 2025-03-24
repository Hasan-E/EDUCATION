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
const result5 = array5.reduce((altDizi, x, i) =>
  i % 3 === 0 ? [...altDizi, array5.slice(i, i + 3)] : []
);
console.log(result5);
