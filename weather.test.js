const Weather =  require('./weather');
const WeatherClient =  require('./WeatherClient');

const jestFetchMock = require("jest-fetch-mock");
jestFetchMock.enableMocks();
      
describe('class Weather', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });
    const expected_response_london = {
        coord: { lon: -0.1257, lat: 51.5085 },
        weather: [
            { id: 500, main: 'Rain', description: 'light rain', icon: '10d' }
        ],
        base: 'stations',
        main: {
            temp: 13.05,
            feels_like: 12.68,
            temp_min: 11.59,
            temp_max: 14.04,
            pressure: 990,
            humidity: 87
        },
        visibility: 10000,
        wind: { speed: 6.69, deg: 210 },
        rain: { '1h': 0.31 },
        clouds: { all: 75 },
        dt: 1698842905,
        sys: {
            type: 2,
            id: 2006068,
            country: 'GB',
            sunrise: 1698821590,
            sunset: 1698856493
        },
        timezone: 0,
        id: 2643743,
        name: 'London',
        cod: 200
    };
    const expected_response_casablanca = {
        coord: { lon: -0.1257, lat: 51.5085 },
        weather: [
            { id: 500, main: 'Rain', description: 'light rain', icon: '10d' }
        ],
        base: 'stations',
        main: {
            temp: 23.05,
            feels_like: 12.68,
            temp_min: 11.59,
            temp_max: 14.04,
            pressure: 990,
            humidity: 87
        },
        visibility: 10000,
        wind: { speed: 6.69, deg: 210 },
        rain: { '1h': 0.31 },
        clouds: { all: 75 },
        dt: 1698842905,
        sys: {
            type: 2,
            id: 2006068,
            country: 'GB',
            sunrise: 1698821590,
            sunset: 1698856493
        },
        timezone: 0,
        id: 2643743,
        name: 'Casablanca',
        cod: 200
    };

    // mocking result with real time API call
    test('London data returned', async () => {
    
        // Mock the fetch call
        fetch.mockResponseOnce(JSON.stringify(expected_response_london));

        // Create an instance and call a method
        const client = new WeatherClient();
        // const weatherData = await client.fetchWeatherData('London');

        // Create an instance and call a method of Weather class
        const weather = new Weather(client);
        await weather.load('London')
        result = await weather.getWeatherData()

        const expected_return = {
            City: 'London',
            Weather: 'Rain', // Taking the first weather condition from the array
            Temperature: 13.05,
            Feels_like: 12.68,
            Humidity: '87%' // Humidity as a percentage
        }

        expect(result).toEqual(expected_return)
    });
    test('Compare London and Casablanca', async () => {

        const client = new WeatherClient();
        const weather = new Weather(client);

        fetch.mockResponseOnce(JSON.stringify(expected_response_london))
        fetch.mockResponseOnce(JSON.stringify(expected_response_casablanca))
        

        result = await weather.compareWith('London', 'Casablanca')
        expect(result).toBe('Casablanca is warmer than London.')
    })
});

