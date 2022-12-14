const APIkey = "f4cba9e7f452234c91b154152aa8da72";
let cityNames = "";
const fetchButton = document.getElementById("search");
let cityInput = document.getElementById("searchcity");
const placeTemp = document.querySelector(".temp");
const placeHumidty = document.querySelector(".humidity");
const placeWind = document.querySelector(".windspeed");
const theDate = document.querySelector(".date")


//section for temp on the five day to connect to the html
let oneTemp = document.querySelector(".temp1");
let twoTemp = document.querySelector(".temp2");
let threeTemp = document.querySelector(".temp3");
let fourTemp = document.querySelector(".temp4");
let fiveTemp = document.querySelector(".temp5");
//section for the humity  to connect to the html
let oneHum = document.querySelector(".hum1");
let twoHum = document.querySelector(".hum2");
let threeHum = document.querySelector(".hum3");
let fourHum = document.querySelector(".hum4");
let fiveHum = document.querySelector(".hum5");
// section for the wind to connect to the html
let oneWind = document.querySelector(".wind1");
let twoWind = document.querySelector(".wind2");
let threeWind = document.querySelector(".wind3");
let fourWind = document.querySelector(".wind4");
let fiveWind = document.querySelector(".wind5");

let icon1 = document.querySelector(".icon1");
let icon2 = document.querySelector(".icon2");
let icon3 = document.querySelector(".icon3");
let icon4 = document.querySelector(".icon4");
let icon5 = document.querySelector(".icon5");








//  the fetch and function to get info a place it in to html with text content

function getApi() {
  let requestUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityNames +
    "&appid=" +
    APIkey +
    "&units=imperial";
  // fetch to get variables need to set them in html
   return fetch(requestUrl) 
    .then(function (response) {
      return response.json();
    })
    .then(function (tempData) {
      console.log(tempData);

      let currentTemp = tempData.main.temp;
      console.log(currentTemp);
      placeTemp.innerHTML = "Temp " + currentTemp + " &deg";

      let currentHumidty = tempData.main.humidity;
      console.log(currentHumidty);
      placeHumidty.textContent = "Humidity " + currentHumidty + " %";

      let currentWind = tempData.wind.speed;
      console.log(currentWind);
      placeWind.textContent = "Wind " + currentWind + " mph";

     


      let lats = tempData.coord.lat;
      console.log(lats);
      let lons = tempData.coord.lon;
      console.log(lons);
      return tempData.coord



    });
}

// funtion to set up the 5 day info and send it to the html
function fiveDay(lats, lons) {
  let urlRequest =
    "https://api.openweathermap.org/data/2.5/forecast?lat=" +
    lats +
    "&lon=" +
    lons +
    "&appid=" +
    APIkey+"&units=imperial"

  fetch(urlRequest)
    .then(function (response) {
      return response.json();
    })
    .then(function (fiveData) {
      console.log(fiveData);
      let dayOne = fiveData.list[0].main.temp + " &deg;";
      let dayTwo = fiveData.list[1].main.temp + " &deg;";
      let dayThree = fiveData.list[2].main.temp + " &deg;";
      let dayFour = fiveData.list[3].main.temp + " &deg;";
      let dayFive = fiveData.list[4].main.temp + " &deg;";

      let dayOne1 = fiveData.list[0].main.humidity + " %";
      let dayTwo2 = fiveData.list[1].main.humidity + " %";
      let dayThree3 = fiveData.list[2].main.humidity + " %";
      let dayFour4 = fiveData.list[3].main.humidity + " %";
      let dayFive5 = fiveData.list[4].main.humidity + " %";

      let day1One = fiveData.list[0].wind.speed + " mph";
      let day2Two = fiveData.list[1].wind.speed + " mph";
      let day3Three = fiveData.list[2].wind.speed + " mph";
      let day4Four = fiveData.list[3].wind.speed + " mph";
      let day5Five = fiveData.list[4].wind.speed + " mph";

    
      let iconPicture = fiveData.list[0].weather[0].icon;
      let iconPicture2 = fiveData.list[1].weather[0].icon; 
      let iconPicture3 = fiveData.list[2].weather[0].icon;
      let iconPicture4 = fiveData.list[3].weather[0].icon;
      let iconPicture5  = fiveData.list[4].weather[0].icon;
     console.log(iconPicture)
    var urlDay1 = "https://openweathermap.org/img/w/"+iconPicture +".png"
    var urlDay2 = "https://openweathermap.org/img/w/"+iconPicture2 +".png"
    var urlDay3 = "https://openweathermap.org/img/w/"+iconPicture3 +".png"
    var urlDay4 = "https://openweathermap.org/img/w/"+iconPicture4 +".png"
    var urlDay5 = "https://openweathermap.org/img/w/"+iconPicture4 +".png"
      
    icon1.setAttribute("src", urlDay1)
    icon2.setAttribute("src", urlDay2)
    icon3.setAttribute("src", urlDay3)
    icon4.setAttribute("src", urlDay4)
    icon5.setAttribute("src", urlDay5)
    
    
      // let iconPicture = fiveData.list[0].weather[0].icon;
      //icon1.textContent = iconPicture;

      console.log(dayOne);
      console.log(dayTwo);
      console.log(dayThree);
      console.log(dayFour);
      console.log(dayFive);
      oneTemp.innerHTML = dayOne;
      twoTemp.innerHTML = dayTwo;
      threeTemp.innerHTML = dayThree;
      fourTemp.innerHTML = dayFour;
      fiveTemp.innerHTML = dayFive;

      console.log(dayOne1);
      console.log(dayTwo2);
      console.log(dayThree3);
      console.log(dayFour4);
      console.log(dayFive5);
      oneHum.textContent = dayOne1;
      twoHum.textContent = dayTwo2;
      threeHum.textContent = dayThree3;
      fourHum.textContent = dayFour4;
      fiveHum.textContent = dayFive5;

      console.log(day1One);
      console.log(day2Two);
      console.log(day3Three);
      console.log(day4Four);
      console.log(day5Five);
      oneWind.textContent = day1One;
      twoWind.textContent = day2Two;
      threeWind.textContent = day3Three;
      fourWind.textContent = day4Four;
      fiveWind.textContent = day5Five;
    });
}
// click event for fiveday to go on to web page

// adds buttons to get the names for the previous searches and sends them to local storage
fetchButton.addEventListener("click", function () {
  let citylist = cityInput.value;
  localStorage.setItem("city", citylist);
  let btn = document.createElement("button");
  btn.innerHTML = cityInput.value;
  document.body.appendChild(btn);
});
// button to get the single day forcast
fetchButton.addEventListener("click", function () {
  cityNames = cityInput.value;
  console.log(cityNames);
  let placeName = document.querySelector(".thename");
  placeName.textContent = cityNames;
//sends lat and lon back to fiveday function
  getApi().then(function(coord){
    fiveDay(coord.lat, coord.lon)
  })
  
});
let today = moment();
$("#date").text(today.format("MMM Do, YYYY"));
//https://api.openweathermap.org/data/2.5/uvi?appid=${APIkey}&lat=${lat}&lon=${lon}
//https://api.openweathermap.org/data/2.5/forecast?q=lakeville&appid=${APIkey}

