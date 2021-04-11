import { WEATHER_FAILURE, WEATHER_SUCCESS } from "./constants";

const APPID = '75f972b80e26f14fe6c920aa6a85ad57';


const getWeatherDataPromise = async (city:string, tempUnit:string) => {
    const unit = tempUnit === 'celcius'? 'metric' : 'imperial'
    try {
        return fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${APPID}&units=${unit}`)
        .then((data) => {
            return new Promise(resolve => {
                resolve(data.json());
            })
            .then(response => {
                return response;
            })
        })
    } catch (error) {
        console.log(error);
        
    }
};

export const getWeatherData = (city: string, tempUnit:string) => (dispatch: any) => {
    return getWeatherDataPromise(city, tempUnit)
    .then((resp) => {
        dispatch({
            type: WEATHER_SUCCESS,
            data: resp,
          });
    })
    .catch((resp) => {
        console.log("resp error: ", resp);
        dispatch({
          type: WEATHER_FAILURE,
          data: resp,
        });
      });
};