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

document.querySelector("input").oninput = (e) => {
  //   console.log(e.target.value);
  let yemek = dizi.filter((b) =>
    b.strMeal.toLowerCase().includes(e.target.value.toLowerCase())
  );
};
