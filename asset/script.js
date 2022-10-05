const searchButton = document.getElementById("search");
const APIKey = "f4cba9e7f452234c91b154152aa8da72"
var gettingWeather = function () {
  var requestURL = "api.openweathermap.org/data/2.5/weather?q={city name}&appid={APIkey}"
  
    

  fetch(requestURL)
    .then(function (responce) {
      return responce.json(data);
    })
    .then(function (data) {
      console.log(data);
    });
}

searchButton.addEventListener("click", gettingWeather)