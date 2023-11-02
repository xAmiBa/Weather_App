const Weather = require("./weather");
const WeatherClient = require("./WeatherClient");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

App = () => {
  rl.question(
    "\n What city you would like to see weather for? Type X if you want to exit: ",
    (answer) => {
      if (answer === "X") {
        rl.close();
      } else {
        try {
          const client = new WeatherClient();
          const weather = new Weather(client);
          // await weather.load(answer)
          weather.displayWeather(answer).then((result) => {
            console.log("\n", result);
            App();
          });
        } catch (error) {
          console.error("City not found!", error);
        }
      }
    },
  );
};

App();
