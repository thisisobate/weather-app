async function getWeather(location) {
  const result = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=aacfc05ba6b170056d3e2e5e5d6b4de8`,
    { mode: "cors" }
  );
  const response = await result.json();
  const weatherInfo = await processJson(response);
  return weatherInfo;
}

function processJson(json) {
  try {
    const weatherJson = json.main;
    const weather = Object.fromEntries(Object.entries(weatherJson).slice(4));
    weather.temperature = json.main.temp;
    return weather;
  } catch (error) {
    console.log(error);
  }
}
