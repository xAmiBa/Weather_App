const jestFetchMock = require("jest-fetch-mock");
jestFetchMock.enableMocks();

const WeatherClient =  require('./WeatherClient');

describe('class WeatherClient', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });

    // mocking result with real time API call
    test('London data returned', async () => {
        const expected_data = {
            temp: 12.75,
            feels_like: 12.43,
            temp_min: 11.95,
            temp_max: 13.53,
            pressure: 992,
            humidity: 90
          };

        // Mock the fetch call
        fetch.mockResponseOnce(JSON.stringify(expected_data));

        // Create an instance and call a method
        const weatherClient = new WeatherClient();
        const weatherData = await weatherClient.fetchWeatherData('London');

        expect(weatherData).toEqual(expected_data);
        });
    });