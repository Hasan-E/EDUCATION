console.log("***********Selectors*********");

document.title = "FS19";

//*===========================================
//*               GETELEMENTBYID()
//*===========================================

console.log(document.getElementById("add-new-item"));

// id si add-new-item olan elemanı seçer
const headerText = document.getElementById("add-new-item");

//! Seçilen elemanın style property sini manipüle ettik
// her şey key-value şeklinde yazılır
headerText.style.color = "red";
headerText.style.backgroundColor = "yellow";
headerText.style.border = "2px solid black";
//! NOTE:property'lerde kebap-case yerine camelCase notasyonu ile yazılır

const addBtn = document.getElementById("btn");
console.log(addBtn);

// headerText.style = "font-family:tahoma; font-size : 40px";//? css vari erişim

const htmlLi = document.getElementById("html-li");
console.log(htmlLi);
htmlLi.style.color = "blue";

//? HTML elementlerinin içeriklerini okuma ve değiştirme
//? =================================================

//? bir text elementinin içeriği aşağıdaki attribute'ler ile degisitirlebilir.
//! textContent, innerText, innerHTML

console.log(htmlLi.textContent);
htmlLi.textContent = "HTML5";

document.getElementById("js-li").innerText = "JS";

document.getElementById("react-li").innerHTML = "<h2>React JS</h2>";

//!inputların değerinin okunması ve yazılması
const myInput = document.getElementById("input");
console.log(myInput.value);

addBtn.value = "Submit";

console.clear();

//*===========================================
//*            GETELEMENTSBYTAGNAME()
//*===========================================

const allLi = document.getElementsByTagName("li");
console.log(allLi); //HTMLCollection
console.log(allLi[0].textContent);
allLi[2].textContent = "JavaScript";

//! array-like grubunda direk array metodları kullanılamaz.
// allLi.array.forEach((li) => console.log(li));

//? Toplu olarak erişim için for of yapısı da kullanılabilir
for (const li of allLi) {
  console.log(li.textContent);
}

//? çözüm olarak array-like grubu array'a çevirebiliriz.
//? 1-Spread

const arrAllLi = [...allLi];
console.log(arrAllLi);

arrAllLi.forEach((li) => (li.style.color = "crimson"));

//? 2-Array.from()
console.log(Array.from(allLi));
Array.from(allLi).map((li) => (li.style.backgroundColor = "skyblue"));

//*===========================================
//*           GETELEMENTSBYCLASSNAME()
//*===========================================

const myList = document.getElementsByClassName("list");
console.log(myList);

myList[0].innerText = "HTML Dersleri";

document.getElementsByClassName("item-list")[0].style.border = "2px solid red";

console.clear();
//* ==========================================
//*               QUERYSELECTOR()
//* ==========================================
// ! Query Selector ile id, tag, class seçilebilir.
//! bu secici akısta gördügü ilk elementi secer.

//? id ile seçmek için
console.log(document.querySelector("#btn"));

//? class ile seçmek için
console.log(document.querySelector(".item-list"));

//? tag ile seçmek için
console.log(document.querySelector("li")); //? ilk gördüğü elemeanı seçer

//? Css selektörleri querySelector ile kullanılabilir.
const myH3 = document.querySelector("main section.item-list h3");
console.log(myH3);

const myGrayLi = document.querySelector(".item-list ul li:nth-child(3)");
myGrayLi.style.backgroundColor = "gray";

//* ==========================================
//*             QUERYSELECTORALL()
//* ==========================================

const liste = document.querySelectorAll(".item-list .list");
console.log(liste);

// querySelectorAll bir nodelist döndürür. NodeList dahili olarak  forEach metodunu barındırır. Ama istenirse spread veya Array.from() ile yine Arraye'dönüsüm yapılabilir.
liste.forEach((li) => console.log(li.innerText));

const newList = [...liste];

console.log(newList.map((e) => (e.style.backgroundColor = "orange")));
