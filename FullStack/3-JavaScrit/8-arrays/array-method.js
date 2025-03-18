// ?==============================================
// ?            DIZI ERISIM METOTLARI
// ?==============================================

//Array Property
//* -------------------------------------------------------------------------- */
//*!                                   length                                   */
/* -------------------------------------------------------------------------- */
// Bir arrayın kaç elemandan oluştuğunu verir

const number = [3, 5, 2, "4", "bes", "dort", 3, 6, "bes", 5, 56];

console.log(`number arayi ${number.length} eleman sayısına sahiptir`);

//* -------------------------------------------------------------------------- */
//*!                                INCLUDES                                   */
//* -------------------------------------------------------------------------- */

//* Bir elemanın dizide bulunup bulunmadığınını true veya false olarak döndürür.

console.log(number.includes(5)); // number dizisi 5 sayısını içeriyor mu? true
console.log(number.includes(9)); // number dizisi 9 sayısını içeriyor mu? false

// const userList = ["excalibur16", "cezalandırıcı28", "fişek44", "tozduman55", "crazyboy_56"]
// const guest = prompt("Bir kullanıcı adı girin")
// userList.includes(guest) ? console.log("KAyıtlı kullanıcı giriş yap") : console.log("Kayıt olabilirsiniz")

/* -------------------------------------------------------------------------- */
//!                          indexOf(), lastIndexOf()                         */
/* -------------------------------------------------------------------------- */
// Bir array içinde aradığımız elamanı ilk gördüğün indexin numarasını döndürür
// İçinde bulamazsa (yoksa) -1 değeri döndürür

if (number.indexOf("bes") < 0) {
  console.log("Aranan öğe yok");
} else {
  console.log(`Aradığınız öğenin index numarası ${number.indexOf("bes")}`);

  // lastIndexOf()
  // sondan başlayarak bakar ilk gördüğü index numarası verir

  console.log(number.lastIndexOf(5));
}

//* -------------------------------------------------------------------------- */
//*!                                JOIN                                       */
//* -------------------------------------------------------------------------- */
//* Dizideki tüm elemanları belirtilen bir ayraç ile birleştirerek bir string döndürür.

const statement = ["oku", "da", "adam", "ol"];

console.log(statement.join("💋"));

const newStr = statement.join("👱‍♂️");
console.log(newStr);

//* -------------------------------------------------------------------------- */
//*!                               SLICE                                      */
//* -------------------------------------------------------------------------- */

// slice(start,end)
// end verilmezse onuna kadar olanı alır
console.log(statement.slice(1, 3));
console.log(statement);
