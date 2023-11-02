# Weather App

This is a simple weather application that allows you to fetch and compare weather data for different cities using the OpenWeatherMap API. It also demonstrates key concepts such as Test-Driven Development (TDD), Object-Oriented Programming (OOP), and making asynchronous requests with external libraries.

## Technologies

- JavaScript
- Node.js
- Jest (for testing)
- readline (for user interaction)

## Key Features

1. **Weather Class**: The `Weather` class encapsulates the logic for fetching, comparing, and displaying weather data for cities.

2. **WeatherClient Class**: The `WeatherClient` class handles the API requests to OpenWeatherMap to fetch weather data for a given city.

3. **User Interaction**: The app interacts with users through the command line using the `readline` module, allowing users to input a city and exit the app by typing 'X.'

4. **Testing**: The project includes unit and integration tests for all classes, using Jest to verify the functionality of methods.

Certainly, here's an updated section for your README file that mentions the need to add their own API key:

## How to Use

1. **Install Dependencies**: Run `npm install` to install the required dependencies, including `jest-fetch-mock` for mocking API requests.

2. **Add Your API Key**: Before using the application, you need to obtain an API key from [OpenWeatherMap](https://openweathermap.org/api) and replace the `apiKey` variable in `WeatherClient.js` with your own API key.

3. **Run Tests**: Execute `npm test` to run the included unit tests for the `Weather` class.

4. **Execute the App**: To run the app interactively, execute `node app.js`. You can input a city to fetch its weather data and exit the app by typing 'X'.

5. **Explore the Code**: Check the `Weather` and `WeatherClient` classes to understand how the weather data is fetched, compared, and displayed.

## What I Learned

- TDD (Test-Driven Development) principles were followed while developing the `Weather` class, ensuring that the functionality was thoroughly tested.
- Object-Oriented Programming (OOP) concepts were applied to create modular and reusable code.
- Using the `readline` module to interact with the user through the command line.
- Making asynchronous API requests to fetch external data using the `fetch` method.
- Handling exceptions and errors when fetching weather data.
- How to work with Promises and asynchronous code in JavaScript.
- Organizing the project structure for better maintainability.

This project serves as a learning example and can be expanded with additional features or integrated into other applications for weather data retrieval.