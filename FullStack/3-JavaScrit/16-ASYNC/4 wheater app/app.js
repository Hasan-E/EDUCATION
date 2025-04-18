//!  SELECTORS
const form = document.querySelector("form");
const input = document.querySelector("form input");
const cardContainer = document.getElementById("card-container");
const alertMessage = document.getElementById("alert");

//!   VARIABLES
// const apiKey = "e5376d11bdfd1f397afb624e660d330d";
// localStorage.setItem("apiKey", "e5376d11bdfd1f397afb624e660d330d");//Api keyi localStorage a kaydeder
const apiKey = localStorage.getItem("apiKey"); //Api keyi localStorage dan alır
let url;
let units = "metric"; // fahrenheit için 'imperial' yazmalıyız

//!  EVENT LISTENERS
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   console.log(input.value); // kullanıcının girdiği veri
  const city = input.value;
  url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  //   console.log(url);
  getWeatherData();
  form.reset();
});
//!  FUNCTIONS
const getWeatherData = async () => {
  try {
    const response = await fetch(url).then((response) => response.json()); // fetch ile istek atma
    // console.log(response); // API den gelen hava durumu bilgileri
    //?  Data destructure
    const { main, name, weather, sys } = response; // fetch
    console.log(main, name, weather[0].description, sys.country);
  } catch (error) {}
};
