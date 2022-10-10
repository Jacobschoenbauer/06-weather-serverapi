const APIkey = "f4cba9e7f452234c91b154152aa8da72";
let cityNames = "";
const fetchButton = document.getElementById("search");
let cityInput = document.getElementById("searchcity");
const placeTemp = document.querySelector(".temp");
const placeHumidty = document.querySelector(".humidity");
const placeWind = document.querySelector(".windspeed");
let lat = 44.714691
let lon = -93.261124

let oneTemp = document.querySelector(".temp1")
let twoTemp = document.querySelector(".temp2")
let threeTemp = document.querySelector(".temp3")
let fourTemp = document.querySelector(".temp4")
let fiveTemp = document.querySelector(".temp5")

let oneHum= document.querySelector(".hum1")
let twoHum = document.querySelector(".hum2")
let threeHum = document.querySelector(".hum3")
let fourHum = document.querySelector(".hum4")
let fiveHum = document.querySelector(".hum5")

let oneWind= document.querySelector(".wind1")
let twoWind = document.querySelector(".wind2")
let threeWind = document.querySelector(".wind3")
let fourWind = document.querySelector(".wind4")
let fiveWind = document.querySelector(".wind5")

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
function fiveDay(){
  let urlRequest = "https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid="+APIkey

  fetch(urlRequest)
  .then(function (response) {
    return response.json();
  })
  .then(function (fiveData) {
    console.log(fiveData);
    let dayOne = fiveData.list[0].main.temp
    let dayTwo = fiveData.list[1].main.temp
    let dayThree = fiveData.list[2].main.temp
    let dayFour = fiveData.list[3].main.temp
    let dayFive = fiveData.list[4].main.temp
    
    let dayOne1 = fiveData.list[0].main.humidity
    let dayTwo2 = fiveData.list[1].main.humidity
    let dayThree3 = fiveData.list[2].main.humidity
    let dayFour4 = fiveData.list[3].main.humidity
    let dayFive5 = fiveData.list[4].main.humidity

    let day1One = fiveData.list[0].wind.speed
    let day2Two = fiveData.list[1].wind.speed
    let day3Three = fiveData.list[2].wind.speed
    let day4Four = fiveData.list[3].wind.speed
    let day5Five = fiveData.list[4].wind.speed
    
   
    console.log(dayOne)
    console.log(dayTwo)
    console.log(dayThree)
    console.log(dayFour)
    console.log(dayFive)
    oneTemp.textContent= dayOne
    twoTemp.textContent= dayTwo
    threeTemp.textContent=dayThree
    fourTemp.textContent=dayFour
    fiveTemp.textContent=dayFive
    
    console.log(dayOne1)
    console.log(dayTwo2)
    console.log(dayThree3)
    console.log(dayFour4)
    console.log(dayFive5)
    oneHum.textContent= dayOne1
    twoHum.textContent= dayTwo2
    threeHum.textContent=dayThree3
    fourHum.textContent=dayFour4
    fiveHum.textContent=dayFive5
  
    console.log(day1One)
    console.log(day2Two)
    console.log(day3Three)
    console.log(day4Four)
    console.log(day5Five)
    oneWind.textContent= day1One
    twoWind.textContent= day2Two
    threeWind.textContent=day3Three
    fourWind.textContent=day4Four
    fiveWind.textContent=day5Five
    






})
}
fetchButton.addEventListener("click", fiveDay)


fetchButton.addEventListener("click", function () {
  let citylist = cityInput.value;
  localStorage.setItem("city", citylist);
  let btn = document.createElement("button");
  btn.innerHTML = cityInput.value;
  document.body.appendChild(btn);
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
