var weatherApiKey = "9b9f981929d99254261769a8bd7d6e55";
var city;
var weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}`;

const searchInputBtn = document.getElementById("searchInputBtn");

const savedCities = JSON.parse(localStorage.getItem("savedCities")) || [];
savedCities.forEach((savedCity) => {
  createButton(savedCity);
});

searchInputBtn.addEventListener("click", (e) => {
  e.preventDefault(); //this prevents form submission
  const searchInput = document.getElementById("searchInput").value; //gets input value
  createButton(searchInput);
  savedCities.push(searchInput);
  localStorage.setItem("savedCities", JSON.stringify(savedCities)); //saves value to localStorage
});

// window.addEventListener("DOMContentLoaded", () => {
//   const savedCities = localStorage.getItem("savedCities");
//   if (savedCities) {
//     const savedData = document.getElementById("savedData");
//     savedData.textContent = savedCities;
//   }
// });
