"use strict";
"use scrict";
console.log("Merhaba TS");
// Type annotation
// JS Gösterimi
let x = 5; // Auto detection : Otomatik olarak türünü alıyor
// x="merhaba" // x sayı olarak algılandığından string değer verildiğinden hata veriyor.
console.log(x);
// TS gösterimi
let y = 56;
// y="Hello"
console.log(y);
let ad = "Helen";
let check = true;
/* -------------------------------------------------------------------------- */
//! ANY DATA TYPE
// Typescipt en esnek veri türü
// TypeScript'in sıkı tür denetimini devre dışı bırakır
//  Önceden türü bilinmeyen veriler için kullanılabilir
let z = 89;
z = "nasılsın";
//! Array DTA TYPE
//JS
let names = ["Ali", "Ahmet", "Ömer", 12];
console.log(names);
//TS
let list1 = [56, 34, 64];
console.log(list1);
// list1.push("Ömer")
console.log(list1);
let list2 = [5, 6, 8, 9];
//! TUPPLE
let tuple1;
tuple1 = ["Ömer", 34, true];
// Tuplelar Arrayı
let tuple2;
tuple2 = [
    ["Ali", 98],
    ["Ahmet", 100],
];
tuple2.push(["Sema", 100]);
console.log(tuple2);
let car = ["BMW", 2023];
// Tuple içinde destructure
let [brand, model] = car;
console.log(brand);
console.log(model);
//tuple içindeki değerleri engellemek için readonly metdou kullanılır
let config = ["Dark Mode", 1];
// config[0]="light Mode"
console.log(config);
// Bu şekilde yeni bir tuple oluşuturulduğu için hata vermiyor
config = ["light mode", 3];
// Tamamen değiştirilemez özelliği olması için  onst + readonly
//! ENUM
// enum, TypeScript’te anlamlı ve sabit değerleri bir arada tutmak için kullanılan bir veri yapısıdır.
//  Kodun okunabilirliğini artırır
//  Sabit değerleri merkezi bir şekilde yönetir
// String veya sayısal değerler ile çalışabilir,
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
let selectedColor = Color.green;
console.log(selectedColor);
var Role;
(function (Role) {
    Role[Role["User"] = 1] = "User";
    Role[Role["admin"] = 2] = "admin";
    Role[Role["guest"] = 3] = "guest";
})(Role || (Role = {}));
console.log(Role.guest);
var statusCode;
(function (statusCode) {
    statusCode[statusCode["Notfound"] = 404] = "Notfound";
    statusCode[statusCode["Success"] = 200] = "Success";
    statusCode[statusCode["Acepted"] = 202] = "Acepted";
    statusCode[statusCode["BadRequest"] = 400] = "BadRequest";
})(statusCode || (statusCode = {}));
console.log(statusCode.Acepted);
var days;
(function (days) {
    days["Monday"] = "Pazartesi";
    days["Tuesday"] = "Sal\u0131";
    days["Wednesday"] = "\u00C7ar\u015Famba";
})(days || (days = {}));
console.log(days.Monday);
//! Unknown Data Type
// TypeScript’te unknown, any'nin daha güvenli bir versiyonu olarak düşünülebilir. Türü bilinmeyen bir değeri saklamak için kullanılır, ancak any'den farklı olarak doğrudan işlemlere izin vermez.
//  Dışarıdan gelen veriler (API yanıtları, kullanıcı girdileri, JSON verileri) için unknown daha güvenlidir.
//  any kullanmak yerine unknown kullanarak hata yakalama mekanizması oluşturabilirsin.
//  Ancak, doğrudan işlemler yapamayacağın için tür kontrolü yapmayı unutmamalısın.,
let veri1;
veri1 = "Merhaba";
veri1 = 5667;
veri1 = true;
// BU üç kullanımda geçerli olur
console.log(veri1);
if (typeof veri1 == "string") {
    console.log(veri1.toUpperCase());
}
//! VOİD YAPILAR
