var weatherApiKey = "9b9f981929d99254261769a8bd7d6e55";
var city;
var weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}`;

const searchInputBtn = document.getElementById("searchInputBtn");

const savedCities = JSON.parse(localStorage.getItem("savedCities")) || [];
savedCities.forEach((savedCity) => {
  createBtn(savedCity);
});

function createBtn(city) {
  const data = document.getElementById("savedData");
  const btn = document.createElement("btn");
  btn.textContent = city;
  btn.classList.add("selectCity");
  btn.addEventListener("click", () => {
    fetchWeather(city);
  });
  data.appendChild(btn);
}

searchInputBtn.addEventListener("click", (e) => {
  e.preventDefault(); //this prevents form submission
  const searchInput = document.getElementById("searchInput").value; //gets input value
  createBtn(searchInput);
  savedCities.push(searchInput);
  localStorage.setItem("savedCities", JSON.stringify(savedCities)); //saves value to localStorage
});

const fetchWeather = async () => {
  try {
    const city = savedCity;
    const currentResponse = await fetch(weatherUrl);
    const currentData = await currentResponse.json();

    const currentTemp = document.getElementById("currentTemp");
    currentTemp.textContent = `Temperature: ${currentData.main.temp}`; //appends to temp id

    const currentWind = document.getElementById("currentWind");
    currentWind.textContent = `Wind: ${currentData.wind.speed} m/s`; //appends to wind id

    const currentHumidity = document.getElementById("currentHumidity");
    currentHumidity.textContent = `Humidity: ${currentData.main.humidity}%`; //appends to id in html
  } catch (error) {
    console.log(error);
  }
};

function weekForecast() {
  for (let i = 0; i < currentData.list.length; i += 8) {
    const forecast = currentData.list[i];

    const tempOne = document.getElementById("temp1");
    tempOne.textContent = `${forecast.main.temp}`;

    const windOne = document.getElementById("wind1");
    windOne.textContent = `${forecast.wind.speed}`;

    const humidtyOne = document.getElementById("humidity1");
    humidityOne.textContent = `${forecast.main.humidity}`;

    const tempTwo = document.getElementById("temp2");
    tempTwo.textContent = `${forecast.main.temp}`;

    const windTwo = document.getElementById("wind2");
    windTwo.textContent = `${forecast.wind.speed}`;

    const humidtyTwo = document.getElementById("humidity2");
    humidityOne.textContent = `${forecast.main.humidity}`;

    const tempThree = document.getElementById("temp3");
    tempThree.textContent = `${forecast.main.temp}`;

    const windThree = document.getElementById("wind3");
    windThree.textContent = `${forecast.wind.speed}`;

    const humidtyThree = document.getElementById("humidity3");
    humidityThree.textContent = `${forecast.main.humidity}`;

    const tempFour = document.getElementById("temp4");
    tempFour.textContent = `${forecast.main.temp}`;

    const windFour = document.getElementById("wind4");
    windFour.textContent = `${forecast.wind.speed}`;

    const humidtyFour = document.getElementById("humidity4");
    humidityFour.textContent = `${forecast.main.humidity}`;

    const tempFive = document.getElementById("temp5");
    tempFive.textContent = `${forecast.main.temp}`;

    const windFive = document.getElementById("wind5");
    windFive.textContent = `${forecast.wind.speed}`;

    const humidtyFive = document.getElementById("humidity5");
    humidityFive.textContent = `${forecast.main.humidity}`;
  }
}
