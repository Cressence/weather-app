import React, { useEffect, useRef } from 'react';
import {
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    TextField,
    IconButton
} from "@material-ui/core";
import { Search } from '@material-ui/icons';
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { useHistory } from "react-router-dom";

import Wrapper from './../../components/Wrapper';
import BarChart from './components/BarChart';
import Carousel from './../../components/Carousel';
import {
    pad,
    getCurrentDate,
    getAmPm,
} from './../../utils/helper';
import './weatherInfo.scss';
import { resetData } from "../../store/root/actions/action";
import { RootState } from '../../store/root/reducers/rootReducer';
import Weather from "./../../api/models/weather.model";

const WeatherInfo = () => {
    const selectedUnit = localStorage.getItem('unit');
    const selectedCity = localStorage.getItem('city');

    // Redux state
    const { weatherInfo } = useSelector((state: RootState) => ({
        weatherInfo: state.weatherInfo.weatherData
    }));
    const dispatch: Dispatch<any> = useDispatch();
    const history = useHistory();

    // Component state
    const [tempUnit, setTempUnit] = React.useState<string>(selectedUnit === null ? 'fahrenheit' : selectedUnit);
    const [selectedInfo, setSelectedInfo] = React.useState<Weather>(weatherInfo !== null ? weatherInfo[0] : {});
    const [city, setCity] = React.useState<string>(selectedCity === null ? 'Munich' : selectedCity);
    const [minutes, setMinutes] = React.useState<number>(0);
    const [hour, setHour] = React.useState<number>(0);
    const barSection = useRef<HTMLDivElement>(null);



    const toggleTempUnit = (event: any) => {
        setTempUnit(event.target.value.toLowerCase());
        localStorage.setItem('unit', event.target.value);
    }

    const searchCity = () => {
        localStorage.setItem('city', city);
        dispatch(resetData());
    }

    const onWeatherCardClick = (selectedCard: Weather) => {
        setSelectedInfo(selectedCard);

        const checkCardExist = setInterval(() => {
            if (barSection.current !== null) {
                barSection.current?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
                clearInterval(checkCardExist);
            }
        }, 100);
    }

    const changeCity = (e: any) => {
        const cityVal: string = e.target.value;
        setCity(cityVal);
    }

    useEffect(() => {
        if (weatherInfo === null) {
            history.push('/');
        }

    }, [history, weatherInfo]);

    setInterval(() => {
        const today = new Date();
        setMinutes(today.getMinutes());
        setHour(today.getHours())
    }, 1000);

    return (
        <Wrapper>
            <div className='weather-info-container'>
                <div className='current-location'>
                    <div>
                        <p className='time-section'>
                            <span className='time-text' id='time-text'>{pad(hour) + ':' + pad(minutes)}</span> {' '}
                            <span className='am-pm'>{getAmPm()}</span></p>
                        <p className='date-text'>{getCurrentDate()}</p>
                    </div>
                    <div>
                        <p className='location-text'>{city}</p>
                        <TextField
                            id='location-input'
                            label='City'
                            variant='outlined'
                            value={city}
                            onChange={changeCity}
                            className='search-input'
                            InputProps={
                                {
                                    endAdornment:
                                        <IconButton disabled={city.trim().length === 0 ? true : false} aria-label="search" onClick={searchCity}>
                                            <Search />
                                        </IconButton>
                                }
                            }
                        />
                    </div>

                </div>
                <div>
                    <FormControl>
                        <RadioGroup row aria-label='temperature' name='temparature unit' value={tempUnit} onChange={toggleTempUnit} >
                            <FormControlLabel value='celcius' control={<Radio color='primary' />} label="Celsius" />
                            <FormControlLabel value='fahrenheit' control={<Radio color='primary' />} label='Fahrenheit' />
                        </RadioGroup>
                    </FormControl>
                </div>
                {
                    weatherInfo !== null ?
                        <div>
                            <Carousel data={weatherInfo} clickGetInfo={onWeatherCardClick} />
                            <BarChart elementId={barSection} temps={selectedInfo} unit={tempUnit} />
                        </div>

                        : null
                }



            </div>
        </Wrapper>

    );
};

export default WeatherInfo;