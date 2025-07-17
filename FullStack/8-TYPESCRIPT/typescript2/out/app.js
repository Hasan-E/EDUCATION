"use strict";
//! TYPESCRIPT -02
/* -------------------------------------------------------------------------- */
//! VOID YAPILAR
// Return ile bir değer döndermeyecek anlamındadır
// void, bir fonksiyonun herhangi bir değer döndürmediğini belirtmek için kullanılan özel bir türdür.
// return kullanmazsın veya return; yazarsın, ama değer döndüremezsin.
// Genellikle  (console.log, alert, event handler vb. kullanılır.
function Selamla() {
    console.log("Merhaba CH19 Nasılsınız");
    let x = 5;
    // return x yazdığımz zaman HATA alıyoruz.
    return;
}
Selamla();
//! UNION VERİ TURU
// Or gibi , bu veya bu anlamında birden fazla veri türü tanımlanmasını sağlar
let password = "Hello";
password = 43534534;
console.log(password);
// Type Guard : Tür kontrolü
function uzunlukHesapla(veri) {
    if (typeof veri === "string") {
        return veri.length; // Stringin kaç karakter olduğu
    }
    else {
        return veri.toString().length; // Sayının kaç karakter olduğu
    }
}
console.log(uzunlukHesapla("TypeScript"));
console.log(uzunlukHesapla(86763412465));
let kullaniciAdi = "Helen";
console.log(kullaniciAdi);
let passw = "ddsfsd3453";
passw = 324234;
let myPet = "Cat";
let yourPet = "Bird";
let cevap;
cevap = "belki";
cevap = "evet";
cevap = "hayır";
let car = {
    marka: "Mercedes",
    renk: "Metalik Gri",
};
const employee1 = {
    name: "Ali",
    age: 34,
    employeeId: 12,
    department: "Full Stack",
};
/*----------------------------------------------------------------- */
//! type assertion farklı kullanma şekilleri
let str = "Hello World";
console.log(str.toUpperCase());
console.log(str + 5);
//! FONSİYONLAR
function toplam(a, b) {
    let sum;
    sum = a + b;
    return sum;
}
console.log(toplam(45, 675));
//? 1 Void fonksiyon
function toplama(a, b) {
    let sum;
    sum = a + b;
    console.log(sum);
    //   return sum;
}
console.log(toplam(45, 675));
//! İsteğe bağlı parametre gönderimi    => ? işareti kullanılır
function selam(msj, isim, soyisim) {
    console.log(`${msj} ${isim} ${soyisim} nasılsın`);
}
selam("merhaba", "Ali");
//! Varsayılan Parametre Kullanımı
function selam1(msj, isim = "User") {
    console.log(`${msj} ${isim} nasılsın`);
}
selam1("merhaba", "Ali");
//! Arrow Function kullanımı
const cikarma = (a, b) => b - a;
console.log(cikarma(55, 32));
function birlestir(a, b) {
    return a + b;
}
console.log(birlestir("Merhaba", "Dünya"));
console.log(birlestir(5, 35));
// console.log(birlestir(true,false));
// Rest parametresi
function topla(...sayilar) {
    console.log(sayilar);
    return sayilar.reduce((acc, sayi) => acc + sayi);
}
console.log(topla(45, 56, 45, 76, 23, 7));
/* ============================================ */
/*                     CLASS                    */
/* ============================================ */
class Student {
    constructor(code, name) {
        this.studentNumber = code;
        this.studentName = name;
    }
}
let s1 = new Student(101, "Ali");
let s2 = new Student(103, "Ahmet");
let s3 = new Student(105, "Sema");
console.log(s1, s2, s3);
/* ============================================ */
class People {
    constructor(ad, soyad) {
        this.name = ad;
        this.lastName = soyad;
    }
}
class Admin extends People {
    constructor(code, name, lastName) {
        super(name, lastName);
        this.adminCode = code;
    }
    displayAdminInfo() {
        console.log(`Admin Info:${this.adminCode} ${this.name} ${this.lastName}`);
    }
}
const Admin1 = new Admin(123, "Ali", "Ertan");
console.log(Admin1);
/* ============================================ */
//! ABSTRACT CLASSES
// Abstract sınıflar doğrudan nesne üretmez.
// Soyut (abstract) metotlar içerebilir. Alt sınıflar bu metotları override etmek zorundadır.
// Eğer bir sınıfın doğrudan kullanılması gerekmiyorsa ve alt sınıfların bazı metodları uygulaması zorunluysa, abstract class kullanmalısınız!
class Kisi {
    constructor(ad, soyad) {
        this.name = ad;
        this.lastName = soyad;
    }
}
class User extends Kisi {
    constructor(code, name, lastName) {
        super(name, lastName);
        this.adminCode = code;
    }
}
const kisi1 = new User(12, "busra", "idil");
