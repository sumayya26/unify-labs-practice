const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");

const loading = document.getElementById("loading");
const weatherCard = document.getElementById("weatherCard");
const errorDiv = document.getElementById("error");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

searchBtn.addEventListener("click", getWeather);

async function getWeather() {
  const city = cityInput.value.trim();
  if (!city) return;

  loading.classList.remove("hidden");
  weatherCard.classList.add("hidden");
  errorDiv.classList.add("hidden");

  try {
    // First get coordinates using Open-Meteo geocoding API
    const geoResponse = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
    );

    const geoData = await geoResponse.json();

    if (!geoData.results) throw new Error("City not found");

    const { latitude, longitude, name } = geoData.results[0];

    // Then fetch weather data
    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );

    const weatherData = await weatherResponse.json();

    const current = weatherData.current_weather;

    cityName.textContent = name;
    temperature.textContent = current.temperature;
    humidity.textContent = "N/A";
    wind.textContent = current.windspeed;

    weatherCard.classList.remove("hidden");
  } catch (error) {
    errorDiv.textContent = "Error fetching weather data. Please try again.";
    errorDiv.classList.remove("hidden");
  } finally {
    loading.classList.add("hidden");
  }
}