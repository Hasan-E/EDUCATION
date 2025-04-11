//?SELECTORS
//HARCAMA FORMU

const harcamaFormu = document.getElementById("harcama-formu");
const tarihInput = document.getElementById("tarih");
const miktarInput = document.getElementById("miktar");
const harcamaAlaniInput = document.getElementById("harcama-alani");

//HARCAMA TABLOSU
const harcamaBody = document.getElementById("harcama-body");

// EKLE FORMU
const ekleBtn = document.getElementById("ekle-btn");
const gelirInput = document.getElementById("gelir-input");
const ekleFormu = document.getElementById("ekle-formu");

// SONUÇ TABLOSU
const gelirinizTable = document.getElementById("geliriniz");
const giderinizTable = document.getElementById("gideriniz");
const kalanTable = document.getElementById("kalan");

//?VARIABLES
let harcamaListesi = [];
let gelirler = 0;

//!ilk formu doldurma (sarı olan)

harcamaFormu.addEventListener("submit", (e) => {
  e.preventDefault();

  const yeniHarcama = {
    id: new Date().getTime(),
    tarih: tarihInput.value,
    miktar: miktarInput.value,
    türü: harcamaAlaniInput.value,
  };

  harcamaListesi.push(yeniHarcama);
  console.log(harcamaListesi);

  harcamayiDomaYaz(yeniHarcama);

  harcamaFormu.reset(); //form içindeki inputları submit sonrası resetleme
});

//!harcamaları DOM a bastırma

const harcamayiDomaYaz = ({ id, tarih, miktar, türü }) => {
  harcamaBody.innerHTML += `
<tr>
<td class="bg-warning">${tarih}</td>
<td class="bg-warning">${türü}</td>
<td class="bg-warning">${miktar}</td>
<td class="bg-warning">
<i id=${id} class="fa-solid fa-trash-can text-danger"  type="button"></i></td>


</tr>

`;

  //*silme olayı doma basıldıktan sonra olmalı

  document.querySelectorAll(".fa-trash-can").forEach((sil) => {
    sil.onclick = () => {};
  });
};
