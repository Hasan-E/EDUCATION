//! TYPESCRIPT -02
/* -------------------------------------------------------------------------- */
//! VOID YAPILAR
// Return ile bir değer döndermeyecek anlamındadır
// void, bir fonksiyonun herhangi bir değer döndürmediğini belirtmek için kullanılan özel bir türdür.
// return kullanmazsın veya return; yazarsın, ama değer döndüremezsin.
// Genellikle  (console.log, alert, event handler vb. kullanılır.

function Selamla(): void {
  console.log("Merhaba CH19 Nasılsınız");
  let x: number = 5;
  // return x yazdığımz zaman HATA alıyoruz.
  return;
}

Selamla();

//! UNION VERİ TURU
// Or gibi , bu veya bu anlamında birden fazla veri türü tanımlanmasını sağlar

let password: number | string = "Hello";

password = 43534534;

console.log(password);

// Type Guard : Tür kontrolü

function uzunlukHesapla(veri: string | number) {
  if (typeof veri === "string") {
    return veri.length; // Stringin kaç karakter olduğu
  } else {
    return veri.toString().length; // Sayının kaç karakter olduğu
  }
}

console.log(uzunlukHesapla("TypeScript"));
console.log(uzunlukHesapla(86763412465));

//! TYPE ALIASES
type name = string;

let kullaniciAdi: name = "Helen";

console.log(kullaniciAdi);

//!Type aliases union ile kullanımı
type password = string | number;

let passw: password = "ddsfsd3453";
passw = 324234;

//! STRING LITERAL - Type assertion

type pet = "Cat" | "Dog" | "Bird" | "Fish";

let myPet: pet = "Cat";
let yourPet: pet = "Bird";

//let herPet:pet="Snake"

/* -------------------------------------------------------------------------- */

type secenekler = "evet" | "hayır" | "belki";

let cevap: secenekler;
cevap = "belki";
cevap = "evet";
cevap = "hayır";

// object

type Araba = {
  marka: "BMW" | "Audi" | "Mercedes";
  renk: "Siyah" | "Metalik Gri";
};

let car: Araba = {
  marka: "Mercedes",
  renk: "Metalik Gri",
};

//!INTERSECTION
// AND gibi iki özelliği de kapsaması şarttır

type Person = {
  name: string;
  age: number;
};

type employee = {
  employeeId: number;
  department: string;
};

type EmployeeDetail = Person & employee;

const employee1: EmployeeDetail = {
  name: "Ali",
  age: 34,
  employeeId: 12,
  department: "Full Stack",
};

/*----------------------------------------------------------------- */

//! type assertion farklı kullanma şekilleri
let str: unknown = "Hello World";
console.log((str as string).toUpperCase());
console.log((str as number) + 5);

//! FONSİYONLAR
function toplam(a: number, b: number): number {
  let sum: number;
  sum = a + b;
  return sum;
}
console.log(toplam(45, 675));

//? 1 Void fonksiyon

function toplama(a: number, b: number): void {
  let sum: number;
  sum = a + b;
  console.log(sum);

  //   return sum;
}
console.log(toplam(45, 675));

//! İsteğe bağlı parametre gönderimi    => ? işareti kullanılır

function selam(msj: string, isim: string, soyisim?: string): void {
  console.log(`${msj} ${isim} ${soyisim} nasılsın`);
}

selam("merhaba", "Ali");

//! Varsayılan Parametre Kullanımı

function selam1(msj: string, isim: string = "User"): void {
  console.log(`${msj} ${isim} nasılsın`);
}

selam1("merhaba", "Ali");

//! Arrow Function kullanımı
const cikarma = (a: number, b: number): number => b - a;
console.log(cikarma(55, 32));

//! function Overloading
//Bir fonksiyonun birden fazla parametre kombinasyonunu desteklemesi için overload kullanılır

function birlestir(a: string, b: string): string;
function birlestir(a: number, b: number): number;

function birlestir(a: any, b: any): any {
  return a + b;
}

console.log(birlestir("Merhaba", "Dünya"));
console.log(birlestir(5, 35));
// console.log(birlestir(true,false));

// Rest parametresi
function topla(...sayilar: number[]): number {
  console.log(sayilar);

  return sayilar.reduce((acc: number, sayi: number) => acc + sayi);
}

console.log(topla(45, 56, 45, 76, 23, 7));

/* ============================================ */
/*                     CLASS                    */
/* ============================================ */

class Student{
    //Property
    studentNumber:number;
    studentName:string;
    constructor(code:number,name:string){
        this.studentNumber=code;
        this.studentName=name;
    }
}

let s1=new Student(101,"Ali")
let s2=new Student(103,"Ahmet")
let s3=new Student(105,"Sema")

console.log(s1,s2,s3);

/* ============================================ */

class People{
    name:string;
    lastName:string;

    constructor(ad:string,soyad:string){
        this.name = ad;
        this.lastName = soyad
    }
}

class Admin extends People{
    adminCode:number
    constructor(code:number,name:string,lastName:string){
        super(name,lastName)
        this.adminCode=code;
    }
    displayAdminInfo(){
        console.log(`Admin Info:${this.adminCode} ${this.name} ${this.lastName}`);
        
    }
}

const Admin1=new Admin(123,"Ali","Ertan")
console.log(Admin1);


/* ============================================ */
//! ABSTRACT CLASSES
// Abstract sınıflar doğrudan nesne üretmez.
// Soyut (abstract) metotlar içerebilir. Alt sınıflar bu metotları override etmek zorundadır.
// Eğer bir sınıfın doğrudan kullanılması gerekmiyorsa ve alt sınıfların bazı metodları uygulaması zorunluysa, abstract class kullanmalısınız!

abstract class Kisi{
    name:string;
    lastName:string;

    constructor(ad:string,soyad:string){
        this.name=ad;
        this.lastName=soyad;
    }
}

class User extends Kisi{
    adminCode:number;
    constructor(code:number,name:string,lastName:string){
        super(name,lastName);
        this.adminCode=code;
    }
}

const kisi1 = new User(12,"busra","idil")