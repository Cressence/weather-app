import { RESET, WEATHER_SUCCESS, WEATHER_FAILURE } from "./constants";
import Weather from "./../../api/models/weather.model";
import { calculateAverageData } from "../../utils/helper";

const initialState: any = {
    weatherData: null,
    appError: null
  };

const weatherInfo = (state = initialState, action: any) => {
    switch (action.type) {
        case WEATHER_SUCCESS: {
          if (action.data.cod === "200") {

            //Build an array of objects in the format our interface uses.
            //Using the Weather interface 
            // let weather: Weather[] = [];
            const completeData = action.data.list;
            
            // Group temperatures per day
            const dailyTemps = completeData.reduce((dailyTemps:any[], temp:any) => {
              const date  = temp.dt_txt.split(' ')[0];

              if (!dailyTemps[date]) {
                dailyTemps[date] = [];
              }
              dailyTemps[date].push(temp);
              return dailyTemps;
            }, {});

            //Build array of temperatures
            let weather: Weather[] = Object.keys(dailyTemps).map(date => {
              return {
                temperature: calculateAverageData(dailyTemps[date], 'temperature'),
                pressure: calculateAverageData(dailyTemps[date], 'pressure'),
                description: dailyTemps[date][0].weather[0].description,
                icon: dailyTemps[date][0].weather[0].icon,
                date: dailyTemps[date][0].dt_txt,
                humidity: calculateAverageData(dailyTemps[date], 'humidity'),
                tempCollection: dailyTemps[date]
              }
            });

            return {
              ...state,
              weatherData: weather,
            };
          } else {
            return {
              ...state,
              appError: action.data.message
            };
          }
        }
        case WEATHER_FAILURE: {
          return {
            ...state,
            weatherData: null,
            appError: 'Ops! could not get weather data. Please try again'
          }
        }
        case RESET: {
          return {
            ...state,
            weatherData: null,
            appError: null
          }
        }
        default:
          return state;
      }
}

export default weatherInfo;