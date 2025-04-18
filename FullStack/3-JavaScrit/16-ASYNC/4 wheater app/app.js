//!  SELECTORS
const form = document.querySelector("form");
const input = document.querySelector("form input");
const cardContainer = document.getElementById("card-container");
const alertMessage = document.getElementById("alert");
const languageBtnTr = document.getElementById("tr");
const languageBtnEn = document.getElementById("en");

//! LOCATION FIND
const locate = document.getElementById("locate");
const locationDiv = document.getElementById("userLocation");
let userLocation = false; //kullanıcı konum bilgisini sol tarafa göndermek için kullanıcaz

//!   VARIABLES
// const apiKey = "e5376d11bdfd1f397afb624e660d330d";
// localStorage.setItem("apiKey", "e5376d11bdfd1f397afb624e660d330d");//Api keyi localStorage a kaydeder
const apiKey = localStorage.getItem("apiKey"); //Api keyi localStorage dan alır
let url;
let units = "metric"; // fahrenheit için 'imperial' yazmalıyız
let cities = []; //! var olan şehir isimlerini tutacak
let lang = "en";

//!  EVENT LISTENERS
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   console.log(input.value); // kullanıcının girdiği veri
  if (input.value) {
    const city = input.value;
    url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}&lang=${lang}`;
    //   console.log(url);
    getWeatherData();
    form.reset();
  }
});

// =====//! LOCATION FIND
locate.addEventListener("click", () => {
  navigator.geolocation?.getCurrentPosition(({ coords }) => {
    // console.log(coords)
    const { latitude, longitude } = coords;
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}&lang=${lang}`;
    userLocation = true;
    //   console.log(url);
    getWeatherData();
  });
});

// =====//! LANGUAGE
languageBtnTr.onclick = () => {
  input.setAttribute("placeholder", "Bir Şehir Giriniz");
  lang = "tr";
};
languageBtnEn.onclick = () => {
  input.setAttribute("placeholder", "Search for a city");
  lang = "en";
};
//!  FUNCTIONS
const getWeatherData = async () => {
  try {
    // const response = await fetch(url).then((response) => response.json()); // fetch ile istek atma
    // // console.log(response); // API den gelen hava durumu bilgileri
    const response = await axios(url); //! Axios ile istek atma
    //?  Data destructure
    // const { main, name, weather, sys } = response; //! fetch
    const { main, name, weather, sys } = response.data; //! fetch

    // console.log(main, name, weather[0].icon, sys.country);
    const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`; //! openweathermap.org
    if (cities.indexOf(name) == -1) {
      cities.unshift(name);
      let card = `       <div class="col" id="${name}">
        <div class="card mb-4 rounded-3 shadow-sm">
            <ul class="list-unstyled mt-2 mb-4">
                <li class="text-end me-2"><i class="bi bi-x-circle"></i></li>
                <h4 class="my-0 fw-normal">${name} <span ><sup><img src="https://flagsapi.com/${
        sys.country
      }/shiny/24.png" class="rounded-circle" alt=${
        sys.country
      }/> </sup></span></h4>
                <h1 class="card-title pricing-card-title"><i class="bi bi-thermometer-half"></i> ${Math.round(
                  main.temp
                )}<sup>°C</sup></h1>
                <h6 class="card-title pricing-card-title">Min : ${Math.round(
                  main.temp_min
                )}<sup>°C</sup> - Max : ${Math.round(
        main.temp_max
      )}<sup>°C</sup>  </h6>
                <h6 class="card-title pricing-card-title"><img src="./assets/wi-barometer.svg" height="30px"/>${
                  main.pressure
                } <img src="./assets/wi-humidity.svg" height="30px"/>${
        main.humidity
      } </h6>
                <li><img src="${iconUrl}"/></li>
                <li>${weather[0].description.toUpperCase()}</li>
            </ul>
        </div>
        </div>`;
      if (userLocation) {
        locationDiv.innerHTML = card;
        userLocation = false;
      } else {
        cardContainer.innerHTML = card + cardContainer.innerHTML;
      }
      //! REMOVE CITIES
      const clearButton = document.querySelectorAll(".bi-x-circle");
      console.log(clearButton); //yakalanan butonlar
      clearButton.forEach((button) => {
        button.addEventListener("click", (e) => {
          e.target.closest(".col").remove(); //tıklanan card ı domdan sildik
          delete cities[cities.indexOf(e.target.closest(".col").id)];
        });
      });
    } else {
      if (lang == "tr") {
        alertMessage.textContent = ` ${name} şehrinin hava durumunu zaten biliyorsun, Lütfen başka şehir ara`;
      } else if (lang == "en") {
        alertMessage.textContent = `You already know the weather for ${name}, Please search for another city`;
      }
      alertMessage.classList.replace("d-none", "d-block");
      setTimeout(() => {
        alertMessage.classList.replace("d-block", "d-none");
      }, 3000);
    }
  } catch (error) {
    if (lang == "tr") {
      alertMessage.textContent = "Şehir Bulunamadı😥";
    } else {
      alertMessage.textContent = "City Not found😥";
    }

    alertMessage.classList.replace("d-none", "d-block");

    setTimeout(() => {
      alertMessage.classList.replace("d-block", "d-none");
    }, 3000);
  }
};
