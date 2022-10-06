const APIkey = "f4cba9e7f452234c91b154152aa8da72";

const fetchButton = document.getElementById("search");
const lat = 44.71469;
const lon = -93.261124;
function getApi() {
  const requestUrl = `https://api.openweathermap.org/data/2.5/uvi?appid=${APIkey}&lat=${lat}&lon=${lon}`;
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

fetchButton.addEventListener("click", getApi);
