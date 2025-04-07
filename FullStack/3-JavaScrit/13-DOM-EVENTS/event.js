//* ==============================================
//*                  EVENTS
//* ===============================================

console.log("******Events******");

//? Selectorler
const h2 = document.querySelector("h2");
const body = document.querySelector("body");
const myInput = document.getElementById("input");
const ul = document.querySelector("ul");
const addBtn = document.getElementById("btn");

// Event Tanımlama

//Mouse h2 elementi üzerine geldiğinde tetiklenir
h2.onmouseover = function () {
  // console.log("tetiklendi")
  // h2.style.color="red"
  h2.classList.add("red", "center");
};

//Mouse h2 elementi üxerinden ayrıldığında tetiklenir
h2.onmouseout = () => {
  h2.classList.remove("red", "center");
};

//* DOM içeriklerinin tamamı yüklendikten sonra tetiklenen event (onload)
body.onload = function () {
  myInput.focus();
};

//? DOMContentLoaded (metin v.b içerikler yüklenince tetiklenir. Resim, link gibi içeriklerin yüklenmesini beklemez)
// document.addEventListener("DOMContentLoaded",(e)=>{
//     console.log("çalıştı")
// })

addBtn.addEventListener("click", (e) => {
  // console.log(e.target)
  // console.log(e.target.value)
  // console.log(myInput.value)

  if (!myInput.value) {
    alert("lütfen boş bırakmayınız");
  } else {
    const li = document.createElement("li");
    li.textContent = myInput.value;
    ul.appendChild(li);
    myInput.value = "";
  }
});
