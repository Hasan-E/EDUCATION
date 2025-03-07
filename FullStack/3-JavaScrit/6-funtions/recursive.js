//? ====================================================
// ?              FONKSİYONLAR - RECURSIVE
// ? ====================================================

//* Kendi kendi çağıran fonksiyona recursive fonksiyon denilir.
// BAzı formülü olan  matematiksel problem için kullanılabilir

//? verilen sayıya kadar(sayı dahil olmak şartıyla) olan sayma sayılarının toplamını bulan fonksiyon

const toplam = (num) => {
  let topla = 0;

  for (let i = 1; i <= num; i++) {
    topla += i;
  }

  console.log("sayların toplamı", topla);
};

toplam(10);

//! Recursive Fonksiyonun Yapısı
// Bir recursive fonksiyonun çalışması için en az iki temel bileşene ihtiyaç vardır:

//? Sonlanma Koşulu: Fonksiyonun kendi kendini çağırmasını durduran koşul. (Sayma sayısı olduğu için 1den  küçük olursa durmalı)

//? Özyineleme Adımı: Fonksiyonun, kendisini tekrar çağırdığı adım.

//* recursive fonksiyon ile

const toplamlar = (n) => {
  if (n < 1) {
    return n;
  } else {
    return toplamlar(n - 1) + n;
  }
};

console.log(toplamlar(8));

// Fonksiyon toplamlar(8) olarak çağrıldığında şöyle çalışır:

// toplamlar(8) → toplamlar(7) + 8
// toplamlar(7) → toplamlar(6) + 7
// toplamlar(6) → toplamlar(5) + 6
// toplamlar(5) → toplamlar(4) + 5
// toplamlar(4) → toplamlar(3) + 4
// toplamlar(3) → toplamlar(2) + 3
// toplamlar(2) → toplamlar(1) + 2
// toplamlar(1) → toplamlar(0) + 1
// toplamlar(0) → 0 (sonlanma koşulu sağlandığı için 0 döndürülür)

// Faktöriyel örneği

const fact = (n) => {
  if (n === 1) {
    return n;
  } else {
    return fact(n - 1) * n;
  }
};

console.log(fact(5));
