import { cleanup, render, screen } from '@testing-library/react';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import { Provider } from "react-redux";
import {store} from "./../store/configureStore";
import { createMemoryHistory } from 'history'

import WeatherInfo from './../pages/WeatherInfo';
import { getCurrentTime } from '../utils/helper';

const server = setupServer(
    rest.get(`${process.env.REACT_APP_API_URL}`, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(fakeApiResponse));
    }),
);

// const Wrapper = (props) => {return <Provider store={store}>{props.children}</Provider>};

beforeAll(() => server.listen());
afterEach(() => {
    server.resetHandlers();
    cleanup();
});
afterEach(() => server.close());

describe('<WeatherInfo />: Weather information Screen', () => {

    it('should display data only if local storage has value', () => {
        const history = createMemoryHistory();
        history.push(`${process.env.REACT_APP_API_URL}`);
        // render(<WeatherInfo />, {wrapper: Wrapper},);
        
        // expect(screen.getByText('time-text')).toEqual(getCurrentTime());
    });
});

const fakeApiResponse = {
    "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [
        {
            "dt": 1618336800,
            "main": {
                "temp": 277.62,
                "feels_like": 276.27,
                "temp_min": 275.31,
                "temp_max": 277.62,
                "pressure": 1027,
                "sea_level": 1027,
                "grnd_level": 964,
                "humidity": 74,
                "temp_kf": 2.31
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 1.67,
                "deg": 345
            },
            "visibility": 10000,
            "pop": 0.84,
            "snow": {
                "3h": 0.49
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2021-04-13 18:00:00"
        },
        {
            "dt": 1618347600,
            "main": {
                "temp": 275.5,
                "feels_like": 275.5,
                "temp_min": 273.86,
                "temp_max": 275.5,
                "pressure": 1029,
                "sea_level": 1029,
                "grnd_level": 965,
                "humidity": 81,
                "temp_kf": 1.64
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 1.08,
                "deg": 273
            },
            "visibility": 10000,
            "pop": 0.46,
            "snow": {
                "3h": 0.27
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2021-04-13 21:00:00"
        },
        {
            "dt": 1618358400,
            "main": {
                "temp": 271.71,
                "feels_like": 271.71,
                "temp_min": 271.71,
                "temp_max": 271.71,
                "pressure": 1030,
                "sea_level": 1030,
                "grnd_level": 965,
                "humidity": 89,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13n"
                }
            ],
            "clouds": {
                "all": 91
            },
            "wind": {
                "speed": 1.17,
                "deg": 272
            },
            "visibility": 10000,
            "pop": 0.27,
            "snow": {
                "3h": 0.15
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2021-04-14 00:00:00"
        },
        {
            "dt": 1618369200,
            "main": {
                "temp": 270.77,
                "feels_like": 270.77,
                "temp_min": 270.77,
                "temp_max": 270.77,
                "pressure": 1030,
                "sea_level": 1030,
                "grnd_level": 964,
                "humidity": 89,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 52
            },
            "wind": {
                "speed": 0.77,
                "deg": 265
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2021-04-14 03:00:00"
        },
    ]
};