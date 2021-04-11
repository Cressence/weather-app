import { WEATHER_SUCCESS } from "./constants";
import Weather from "./../../api/models/weather.model";

const initialState: any = {
    weatherData: [],
  };

const weatherInfo = (state = initialState, action: any) => {
    switch (action.type) {
        case WEATHER_SUCCESS: {
          if (action.data.cod === "200") {
            let weather: Weather[] = [];
            const completeData = action.data.list;
            for (let count = 0; count < completeData.length; count += 8) {
              const singleWeather = completeData[count];
              let info: Weather = {
                temperature: singleWeather.main.temp,
                pressure: singleWeather.main.pressure,
                description: singleWeather.weather[0].description,
                icon: singleWeather.weather[0].icon,
                date: singleWeather.dt_txt,
                humidity: singleWeather.main.humidity,
                tempCollection: [completeData.slice(count, count + 7)]
              }
              weather.push(info);
            }

            return {
              ...state,
              weatherData: weather,
            };
          } else {
            return {
              ...state,
              appError:
                action.data.message !== undefined ? action.data.message : "",
            };
          }
        }
        default:
          return state;
      }
}

export default weatherInfo;