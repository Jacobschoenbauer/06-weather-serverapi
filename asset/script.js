const APIkey = "f4cba9e7f452234c91b154152aa8da72";
let citySearch = "Lakeville"
let cityNames = ""
const fetchButton = document.getElementById("search");
let cityName = document.getElementById("searchcity");


let requestUrl = "https://api.openweathermap.org/data/2.5/weather?q="+ citySearch +"&appid=" + APIkey+"&units=imperial"

function getApi() {
  
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (tempData) {
     console.log(tempData)
     let currentTemp = tempData.main.temp
     console.log(currentTemp)
      let placeTemp = document.querySelector(".temp")
      placeTemp.textContent=currentTemp

      let currentHumidty = tempData.main.humidity
      console.log(currentHumidty)
      let placeHumidty = document.querySelector(".humidity")
      placeHumidty.textContent=currentHumidty

      let currentWind = tempData.wind.speed
      console.log(currentWind)
      let placeWind = document.querySelector(".windspeed")
      placeWind.textContent=currentWind
     
    });
}

fetchButton.addEventListener("click", function(){

  cityNames = cityName.value
  console.log(cityNames)
  getApi()

});

//https://api.openweathermap.org/data/2.5/uvi?appid=${APIkey}&lat=${lat}&lon=${lon}
//https://api.openweathermap.org/data/2.5/forecast?q=lakeville&appid=${APIkey}