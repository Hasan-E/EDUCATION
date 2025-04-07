console.log("********CreateNode******");

//?1. adım olmayan bir li elemanı oluştur
const newLi = document.createElement("li");

//?2. adım olmayan bir text düğüm oluşturduk
const textLi = document.createTextNode("Go");

//? 3.adım oluşturulan text düğümü yeni elemana bağladık
newLi.appendChild(textLi);

//? 4. Yeni oluşan elementi DOM Tree ye bağladık
document.querySelector("ul").appendChild(newLi);

//? '. bir li oluşturalım
const newLi2 = document.createElement("li");
newLi2.textContent = "C++";

const react = document.querySelector(" ul li:nth-child(4)");
// react.appendChild(newLi2)
react.before(newLi2, newLi);

//* ------- ID, CLASS GIBI OZELLIKLERI ATAMA ------

//? 1- element.attribute = "yeni deger"
// *yazma
newLi.className = "list hello red bold text-center  bg-primary text-warning";
newLi.id = "new-li";
// newLi.className = "bg-warning"

//* Okuma

console.log(newLi.className);
// console.log(document.querySelector("ul").id)

//? 2- setAttribute(atr,"deger") getAttrbute("atr")

newLi2.setAttribute("class", "list border border-danger border-3 bg-success");
newLi2.setAttribute("id", "new-li2");

console.log(newLi2.getAttribute("id"));
console.log(newLi2.getAttribute("class"));

//? 3) Yontem (classList)

newLi.classList.add("border", "border-5", "border-dark");

newLi.classList.remove("bold");

console.log(newLi.classList.contains("bold"));
console.log(newLi.classList.contains("list"));

newLi.classList.toggle("border-dark");
newLi.classList.toggle("border-dark");

//* ------- YENI BIR ELEMENT OLUSTURMA (InnerHTML)------

document.querySelector("main").innerHTML += `
<div>
    <input type="text"/>
    <button class="btn btn-danger" >Submit</button>
</div>

<div class="card" style="width: 12rem;">
  <img src="https://cdn.pixabay.com/photo/2025/03/26/09/08/ai-generated-9494063_1280.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
`;
