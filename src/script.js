// API Key from OpenWeatherMap (Replace with your own API key)
const apiKey = "02a198af250925c2862f54944fe05fce";

// DOM elements
const searchInput = document.getElementById("search");
const searchButton = document.getElementById("search-btn");
const cityName = document.getElementById("city-name");
const temperature = document.getElementById("temperature");
const weatherDescription = document.getElementById("weather-description");
const humidity = document.getElementById("humidity");

// Event listener for the search button
searchButton.addEventListener("click", () => {
  const city = searchInput.value;

  if (city) {
    getWeatherData(city);
  } else {
    alert("Please enter a city name");
  }
});

// Function to fetch weather data from the API
async function getWeatherData(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = await response.json();

    // Update the UI with weather information
    cityName.textContent = data.name;
    temperature.textContent = data.main.temp;
    weatherDescription.textContent = data.weather[0].description;
    humidity.textContent = data.main.humidity;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    alert("An error occurred while fetching weather data. Please try again.");
  }
}

// Event listener for the search input field
searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const city = searchInput.value;

    if (city) {
      getWeatherData(city);
    } else {
      alert("Please enter a city name");
    }
  }
});
