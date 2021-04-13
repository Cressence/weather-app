import { WEATHER_FAILURE, WEATHER_SUCCESS, RESET } from "./constants";

const APPID = process.env.REACT_APP_APPID;
const URL = process.env.REACT_APP_API_URL;

const getWeatherDataPromise = async (city:string, tempUnit:string) => {
    const unit = tempUnit === 'celcius'? 'metric' : 'imperial'
    try {
        return fetch(`${URL}?q=${city.toLocaleLowerCase()}&APPID=${APPID}&units=${unit}`)
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

export const resetData = () => (dispatch: any) => {
    return dispatch({
        type: RESET,
        data: null,
      });;
};