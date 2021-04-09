import React from 'react';
import { Radio, RadioGroup, FormControlLabel, FormControl } from "@material-ui/core";
import { ArrowBack, ArrowForward } from "@material-ui/icons";

import Wrapper from './../../components/Wrapper';
import WeatherCard from "./components/Weathercard";
import BarChart from './components/BarChart';
import { 
    getCurrentTime,
    getCurrentDate,
    getCurrentLocation,
    getAmPm,
    convertFahrenheitToCelcius,
    convertCelciusToFahrenheit
} from "./../../utils/helper";
import './weatherInfo.scss';

const WeatherInfo = () => {
    const [tempUnit, setTempUnit] = React.useState<string>('celcius');
    const [showChart, setShowChart] = React.useState<boolean>(false);

    const toggleTempUnit = (event: any) => {
        setTempUnit(event.target.value);

        if (event.target.value === 'celsius') {
            convertFahrenheitToCelcius(event.target.value);
        } else {
            convertCelciusToFahrenheit(event.target.value);
        }
    }

    const onWeatherCardClick = () => {
        setShowChart(true);
    }

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
                <div className='weather-card-section'>
                    <WeatherCard unit={tempUnit} onClick={onWeatherCardClick} />
                    <WeatherCard unit={tempUnit} onClick={onWeatherCardClick} />
                    <WeatherCard unit={tempUnit} onClick={onWeatherCardClick} />               
                </div>
                {
                    showChart ? <BarChart /> : null
                }
                    
            </div>
        </Wrapper>
        
    );
}

export default WeatherInfo;