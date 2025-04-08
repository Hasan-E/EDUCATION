const products = [
  { name: "Product 1", price: 20, category: "Electronics" },
  { name: "Product 2", price: 30, category: "Clothes" },
  { name: "Product 3", price: 40, category: "Electronics" },
  { name: "Product 4", price: 50, category: "Clothes" },
  { name: "Product 5", price: 60, category: "Clothes" },
  { name: "Product 6", price: 70, category: "Electronics" },
  { name: "Product 7", price: 80, category: "Clothes" },
  { name: "Product 8", price: 90, category: "Electronics" },
];

const katagoriler = products.reduce((acc, item) => {
  const katagori = item.category;
  if (!acc[katagori]) {
    acc[katagori] = [];
  }
  acc[katagori].push(item);
  return acc;
}, {});
console.log(katagoriler);

const ortalamaBul = Object.keys(katagoriler).map((kt) => {
  const toplam = katagoriler[kt].reduce((acc, item) => acc + item.price, 0);
  return { category: kt, avarage: toplam / katagoriler[kt].length };
});

console.log(ortalamaBul);
