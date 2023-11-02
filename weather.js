class Weather {
  constructor(weatcherclient_object) {
    this.weatherClient = weatcherclient_object;
    this.data = null;
  }
  async load(city) {
    // loads weather snipped for specific city
    // awaiting for result
    this.data = await this.weatherClient.fetchWeatherData(city);
  }
  getWeatherData() {
    // gets weather data
    return {
      City: this.data.name,
      Weather: this.data.weather[0].main,
      Temperature: this.data.main.temp,
      Feels_like: this.data.main.feels_like,
      Humidity: `${this.data.main.humidity}%`,
    };
  }
  async compareWith(city1, city2) {
    // loading first city
    let cities_data = [];
    await this.load(city1);
    let weather_data_city1 = await this.getWeatherData();

    // loading second city
    await this.load(city2);
    let weather_data_city2 = await this.getWeatherData();

    cities_data = [weather_data_city1, weather_data_city2];

    // get both temp and choose the higher one
    let temperatures = cities_data.map((city) => city.Temperature);
    let max_temperature = Math.max(...temperatures);

    let warmer_city = null;
    let colder_city = null;
    cities_data.forEach((city) => {
      if (city.Temperature === max_temperature) {
        warmer_city = city;
      } else {
        colder_city = city;
      }
    });
    return `${warmer_city.City} is warmer than ${colder_city.City}.`;
  }
  async displayWeather(city) {
    function printInTwoColumns(leftColumn, rightColumn, columnWidth) {
      const leftPadding = columnWidth - leftColumn.length;
      const separator = " ".repeat(leftPadding);

      return leftColumn + separator + rightColumn;
    }
    await this.load(city);
    const data = this.getWeatherData();

    const result = [];
    result.push(printInTwoColumns("City:", data.City, 15));
    result.push(printInTwoColumns("Weather:", data.Weather, 15));
    result.push(printInTwoColumns("Temparature:", data.Temperature, 15));
    result.push(printInTwoColumns("Feels like:", data.Feels_like, 15));
    result.push(printInTwoColumns("Humidity:", data.Humidity, 15));
    return result.join("\n");
  }
}

module.exports = Weather;
