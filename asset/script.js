const APIkey = "f4cba9e7f452234c91b154152aa8da72";
let cityNames = "";
const fetchButton = document.getElementById("search");
let cityInput = document.getElementById("searchcity");
const placeTemp = document.querySelector(".temp");
const placeHumidty = document.querySelector(".humidity");
const placeWind = document.querySelector(".windspeed");

function getApi() {
  let requestUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityNames +
    "&appid=" +
    APIkey +
    "&units=imperial";
  // fetch to get variables need to set them in html
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (tempData) {
      console.log(tempData);

      let currentTemp = tempData.main.temp;
      console.log(currentTemp);
      placeTemp.textContent = "Temp " + currentTemp + " degrees";

      let currentHumidty = tempData.main.humidity;
      console.log(currentHumidty);
      placeHumidty.textContent = "Humidity " + currentHumidty + " %";

      let currentWind = tempData.wind.speed;
      console.log(currentWind);
      placeWind.textContent = "Wind " + currentWind + " mph";
    });
}
fetchButton.addEventListener("click", function () {
  let citylist =  cityInput.value
    
  

  localStorage.setItem("city", citylist);
});
fetchButton.addEventListener("click", function () {
  cityNames = cityInput.value;
  console.log(cityNames);
  let placeName = document.querySelector(".thename");
  placeName.textContent = cityNames;

  getApi();
});

//https://api.openweathermap.org/data/2.5/uvi?appid=${APIkey}&lat=${lat}&lon=${lon}
//https://api.openweathermap.org/data/2.5/forecast?q=lakeville&appid=${APIkey}
