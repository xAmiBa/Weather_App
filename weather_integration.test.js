const Weather = require("./weather");
const WeatherClient = require("./WeatherClient");

describe("class weather INTEGRATED", () => {
  test("compare london and casablanca intergarted", async () => {
    const client = new WeatherClient();
    const weather = new Weather(client);

    result = await weather.compareWith("London", "Casablanca");
    expect(result).toBe("Casablanca is warmer than London.");
  });
});

describe("class weather INTEGRATED", () => {
  test("display weather for Lublin", async () => {
    const client = new WeatherClient();
    const weather = new Weather(client);

    await weather.load("Lublin");
    let result = await weather.displayWeather("Warsaw");
    const lines = result.split("\n");

    // we take only first line of output as this line is constant
    const firstline = lines[0];
    const expectedOutput = "City:          Warsaw";
    expect(firstline).toBe(expectedOutput);
  });
});
