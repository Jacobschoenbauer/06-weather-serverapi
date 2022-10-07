const APIkey = "f4cba9e7f452234c91b154152aa8da72";
let repoList = document.querySelector("ul");
const fetchButton = document.getElementById("search");
let cityName = document.getElementById("searchcity").value;

function getApi() {
  let requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=lakeville&appid=${APIkey}`;
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      var weatherPost = document.createElement("h3");

      weatherPost.textContent = data.list[1].title;

     
    });
}

fetchButton.addEventListener("click", getApi);

//https://api.openweathermap.org/data/2.5/uvi?appid=${APIkey}&lat=${lat}&lon=${lon}
