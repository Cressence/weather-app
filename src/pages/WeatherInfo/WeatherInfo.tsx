import React, { useEffect } from 'react';
import { Radio, RadioGroup, FormControlLabel, FormControl, Grid } from "@material-ui/core";
import { ArrowBack, ArrowForward } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { useHistory } from "react-router-dom";

import Wrapper from './../../components/Wrapper';
import WeatherCard from "./components/Weathercard";
import BarChart from './components/BarChart';
import { 
    getCurrentTime,
    getCurrentDate,
    getCurrentLocation,
    getAmPm,
} from "./../../utils/helper";
import './weatherInfo.scss';
import { getWeatherData } from "./../../store/root/action";
import { RootState } from '../../store/root/rootReducer';
import Weather from "./../../api/models/weather.model";

const WeatherInfo = () => {
    // Component state
    const [tempUnit, setTempUnit] = React.useState<string>('celcius');
    const [selectedInfo, setSelectedInfo] = React.useState<Weather | null>(null);

    // Redux state
    const { weatherInfo } = useSelector((state: RootState) => ({
        weatherInfo: state.weatherInfo.weatherData
    }));
    const dispatch: Dispatch<any> = useDispatch();
    const history = useHistory();

    const toggleTempUnit = (event: any) => {
        setTempUnit(event.target.value);
        dispatch(getWeatherData('Munich,de', event.target.value));
    }

    const onWeatherCardClick = (selectedCard:Weather) => {
        setSelectedInfo(selectedCard);
    }

    useEffect(() => {
        if (weatherInfo === null) {
            history.push("/weather-app");
        }
    }, [history, weatherInfo]);
    
    return (
        <Wrapper>
            <div className='weather-info-container'>
                <div className='current-location'>
                    <div>
                        <p className='time-section'><span className='time-text'>{getCurrentTime()}</span> <span className='am-pm'>{getAmPm()}</span></p>
                        <p className='date-text'>{getCurrentDate()}</p>
                    </div>
                    <p className='location-text'>{getCurrentLocation()}</p>
                </div>
                <div>
                <FormControl>
                    <RadioGroup row aria-label='temperature' name='temparature unit' value={tempUnit} onChange={toggleTempUnit} >
                        <FormControlLabel value='celcius' control={<Radio color='primary' />} label="Celsius" />
                        <FormControlLabel value='fahrenheit' control={<Radio color='primary' />} label='Fahrenheit' />
                    </RadioGroup>
                    </FormControl>
                </div>
                <div className='navigator-section'>
                    <ArrowBack fontSize='large'/>
                    <ArrowForward fontSize='large' />
                </div>
                <Grid container spacing={2} className=''>
                    {
                        weatherInfo !== null ?
                        weatherInfo.map((info:Weather, index: number) => {
                            return (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <WeatherCard unit={tempUnit} onClick={() => onWeatherCardClick(info)} weatherInfo={info} />
                                </Grid>
                            );
                        })
                        : null
                    }          
                </Grid>
                {
                    selectedInfo !== null ? <BarChart temps={selectedInfo} unit={tempUnit} /> : null
                }
                    
            </div>
        </Wrapper>
        
    );
}

export default WeatherInfo;