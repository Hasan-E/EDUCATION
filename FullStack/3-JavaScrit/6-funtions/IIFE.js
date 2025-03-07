//? ====================================================
// ?              FONKSİYONLAR - IIFE
// ? ====================================================

//**Immediately Invoked Function Expression (IIFE) yani "Hemen Çağrılan Fonksiyon İfadesi" */

const topla = (num) => {
  console.log("toplam:", 65 + 98);
};

// invoke - call
topla();

(function () {
  console.log("merhaba");
})();

(function (num) {
  console.log("sayımız", num);
})(99);

// birinci gönderilen taban,2. gönderilen üs olacak şekilde verilen sayının kuvvetini bulan kod bloğunu yazın

(function (x, y) {
  console.log(Math.pow(x, y));
})(5, 9);

let sonuc = (function (x, y) {
  return Math.pow(x, y);
})(5, 9);

console.log(sonuc);

// Değişken Kapsülleme
// Kapsülleme: sifre değişkeni, IIFE sayesinde yalnızca bu fonksiyonun içinde bulunur ve dışarıdan doğrudan erişilemez. Böylece sifre değişkeni kapsüllenmiş olur.
const veri = (function () {
  const sifre = "12345";

  return {
    sifreGoster: function () {
      return sifre;
    },
  };
})();

console.log(veri.sifreGoster());

// Kapsüllemenin Faydaları
// Güvenlik: sifre değişkeni, doğrudan erişime kapatılarak yalnızca yetkili fonksiyonlar aracılığıyla gösterilir.
// Veri Gizliliği: İstenmeyen değişikliklere karşı korunur.
// Kontrollü Erişim: Yalnızca belirlenen metodlar aracılığıyla erişim sağlanır.
