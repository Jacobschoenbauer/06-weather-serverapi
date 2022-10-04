const searchButton = document.getElementById("search");

function getWeather() {
  var requestURL =
    "";

  fetch(requestURL)
    .then(function (responce) {
      return responce.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

searchButton.addEventListener("click", getWeather)