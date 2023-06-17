var weatherApiKey = "9b9f981929d99254261769a8bd7d6e55";
var city;
var weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}`;

const searchInputBtn = document.getElementById("searchInputBtn");

const savedCities = JSON.parse(localStorage.getItem("savedCities")) || [];
savedCities.forEach((savedCity) => {
  createButton(savedCity);
});

searchInputBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const searchInput = document.getElementById("searchInput").value;
  createButton(searchInput);
  savedCities.push(searchInput);
  localStorafe.setItem("savedCities", JSON.stringify(savedCities));
});

window.addEventListener("DOMContentLoaded", () => {
  const savedCities = localStorage.getItem("savedCities");
  if (savedCities) {
    const savedData = document.getElementById("savedData");
    savedData.textContent = savedCities;
  }
});

const searchForm = document.getElementById("searchForm");
searchForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form submission

  const searchInput = document.getElementById("searchInput");
  const searchData = searchInput.value; // Get the input value

  // Save the input value to local storage
  localStorage.setItem("searchData", searchData);

  // Update the displayed data
  const localStorageData = document.getElementById("localStorageData");
  localStorageData.textContent = searchData;

  // Reset the form
  searchInput.value = "";
});
