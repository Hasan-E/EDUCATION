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

//*===========================================
//*            GETELEMENTSBYTAGNAME()
//*===========================================

//*===========================================
//*           GETELEMENTSBYCLASSNAME()
//*===========================================

//* ==========================================
//*               QUERYSELECTOR()
//* ==========================================

//* ==========================================
//*             QUERYSELECTORALL()
//* ==========================================
