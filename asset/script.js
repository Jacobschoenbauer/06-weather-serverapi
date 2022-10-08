const APIkey = "f4cba9e7f452234c91b154152aa8da72";
let tempDegree = document.querySelector(".temp");
let locateTime = document.querySelector(".location");
let tempData = document.querySelector(".description");

const fetchButton = document.getElementById("search");
let cityName = document.getElementById("searchcity").value;
let lat = lat
let lon = lon
function getApi() {
  let requestUrl = `https://api.openweathermap.org/data/2.5/uvi?q=lakeville&appid=${APIkey}&lat=${lat}&lon=${lon}`;
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      

     
    });
}

fetchButton.addEventListener("click", getApi);

//https://api.openweathermap.org/data/2.5/uvi?appid=${APIkey}&lat=${lat}&lon=${lon}
//https://api.openweathermap.org/data/2.5/forecast?q=lakeville&appid=${APIkey}