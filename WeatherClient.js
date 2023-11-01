
class WeatherClient {
  async fetchWeatherData(city) {
    const apiKey = require('../keys/weatherKey');
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
    
    let weatherData = null;
    
    return fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      else {
        return response.json();  
      } 
    })
    .then((weatherData) => {
      return weatherData
    }
    );
  };
};
// console.log('got to weather client')

module.exports = WeatherClient;