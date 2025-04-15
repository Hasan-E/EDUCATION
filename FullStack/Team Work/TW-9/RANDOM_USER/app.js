//!   BUTTON
const btn = document.getElementById("btn");
//!   OUTPUTS
const preName = document.querySelector("#pre h5");
const mainName = document.querySelector("#main h5");
const nextName = document.querySelector("#next h5");
const preImg = document.querySelector("#pre img");
const mainImg = document.querySelector("#main img");
const nextImg = document.querySelector("#next img");
const preCountry = document.querySelector("#pre p");
const mainCountry = document.querySelector("#main p");
const nextCountry = document.querySelector("#next p");
const preEmail = document.querySelector("#pre a");
const mainEmail = document.querySelector("#main a");
const nextEmail = document.querySelector("#next a");
//!   BUTTON FUNCTION
const getirData = () => {
  fetch("https://randomuser.me/api/")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Url de hata var");
      }
      return res.json();
    })
    .then((data) => printScreen(data))
    .catch((err) => console.error("hata:", err));
};
const printScreen = (data) => {
  const person = data.results[0];

  preName.textContent = mainName.textContent;
  preImg.src = mainImg.src;
  preCountry.textContent = mainCountry.textContent;
  preEmail.textContent = mainEmail.textContent;

  mainName.textContent = nextName.textContent;
  mainImg.src = nextImg.src;
  mainCountry.textContent = nextCountry.textContent;
  mainEmail.textContent = nextEmail.textContent;

  nextName.textContent = `${person.name.first} ${person.name.last}`;
  nextImg.src = person.picture.large;
  nextCountry.textContent = person.location.country;
  nextEmail.textContent = person.email;
};

btn.onclick = () => getirData();

//!!   İLK YÜKLEMEDE DOLDURMA
const ilkYukleme = async () => {
  try {
    const res1 = await fetch("https://randomuser.me/api/");
    const data1 = await res1.json();
    const person1 = data1.results[0];

    mainName.textContent = `${person1.name.first} ${person1.name.last}`;
    mainImg.src = person1.picture.large;
    mainCountry.textContent = person1.location.country;
    mainEmail.textContent = person1.email;

    const res2 = await fetch("https://randomuser.me/api/");
    const data2 = await res2.json();
    const person2 = data2.results[0];

    nextName.textContent = `${person2.name.first} ${person2.name.last}`;
    nextImg.src = person2.picture.large;
    nextCountry.textContent = person2.location.country;
    nextEmail.textContent = person2.email;
  } catch (err) {
    console.error("İlk yükleme hatasi:", err);
  }
};

window.onload = () => ilkYukleme();
