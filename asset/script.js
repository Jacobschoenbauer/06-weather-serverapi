const APIkey = "f4cba9e7f452234c91b154152aa8da72";

var repoList = document.querySelector("ul");
var fetchButton = document.getElementById("search");

function getApi() {
  var requestUrl =
    "https://api.openweathermap.org/data/2.5/uvi?appid=${apiKey}&lat=${lat}&lon=${lon}`";
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        console.log(data)
    })
      
      
}


fetchButton.addEventListener("button", getApi);
