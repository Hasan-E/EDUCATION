//! 1. reduce() kullanarak nesne dizisinde kaç kişinin belirli bir yaşın üzerinde olduğunu sayın.
//? Örneğin, 25 yaşından büyük olanları sayın.
const people1 = [
  { id: 1, name: "Ali", age: 25 },
  { id: 2, name: "Ayşe", age: 30 },
  { id: 3, name: "Mehmet", age: 20 },
  { id: 4, name: "Zeynep", age: 40 },
];

const result1 = people1.reduce(
  (sumBig, item) => (item.age > 25 ? sumBig + 1 : sumBig),
  0
);
console.log(result1);

//! 2. map() ve reduce() kullanarak nesne dizisini id'ye göre bir nesneye çevirin.
//? Beklenen çıktı: { 1:"Ali", 2:"Ayşe" }
const people2 = [
  { id: 1, name: "Ali", age: 25 },
  { id: 2, name: "Ayşe", age: 30 },
  { id: 3, name: "Mehmet", age: 20 },
  { id: 4, name: "Zeynep", age: 40 },
];
const result2 = people2.reduce((acc, item) => {
  acc[item.id] = item.name;
  return acc;
}, {});
console.log(result2);

//!  3. filter() ve reduce() ile belirli bir yaş aralığındaki kişilerin toplam yaşını bulun.
//? Örneğin, 20 ile 35 yaş arasındaki kişilerin toplam yaşını hesaplayın.
const people3 = [
  { id: 1, name: "Ali", age: 25 },
  { id: 2, name: "Ayşe", age: 30 },
  { id: 3, name: "Mehmet", age: 20 },
  { id: 4, name: "Zeynep", age: 40 },
];
const result3 = people3.filter((item) => item.age > 20 && item.age < 35);
console.log();
