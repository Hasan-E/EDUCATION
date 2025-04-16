let dizi = [];

fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
  .then((res) => res.json())
  .then((data) => {
    dizi = data.meals;
    showScreen(data.meals);
  });

//! EKRANA BASTIRMA İŞLEMİ

function showScreen(data) {
  const mealsDiv = document.querySelector(".food");
  mealsDiv.innerHTML = ""; // bu fonksiyon çok sefer çalışacak ve ekrana farklı elemanlar baslılacak, dolayısıyla her seferinde ekran temizlenmeli ve yeni veri basılmalı
  data.forEach((a) => {
    mealsDiv.innerHTML += `
    
    <div class="col-md-3 m-1">
    <p>${a.strMeal}</p>
    <img width="200px" src="${a.strMealThumb}"/>
    </div>
    
    `;
  });
}

//!  INPUTA GİRİLEN MEALS I EKRANA BASTIRMA
//!arama inputuna yazdığım harfleri içeren yemekleri ekrana bastır (oninput=kullanıcı input elemanına her veri girişinde çalışmaktadır)

//? e.target.value=> inputa her veri girişindeki değerleri alabilmek için kullanılır.document.querySelector("input").value=e.target.value

document.querySelector("input").oninput = (e) => {
  //   console.log(e.target.value);
  let yemek = dizi.filter((b) =>
    b.strMeal.toLowerCase().includes(e.target.value.toLowerCase())
  );
  showScreen(yemek);
};

//!bayraklara tıklanınca o ülkenin yemeği gelsin
//!api yi aldığımız sitedeki url nin endpoint i ülke vatandaşları şeklinde, örneğin Turkish. bizde bayraklara tıklanınca hazır img gelmişken ülke vatandaşı da gelmiş olsun diye id sine bunu yerleştirdik, ve fetch ile yazdığımız url nin sonuna bu id yi ekleyerek tıkladığımız ülkenin yemeklerinin gelmesini sağladık

document.querySelectorAll("img").forEach((bayrak) => {
  bayrak.onclick = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${bayrak.id}`)
      .then((res) => res.json())
      .then((veri) => showScreen(veri.meals));
  };
});
