import Weather from '../../../../api/models/weather.model';
import { formatDate } from '../../../../utils/helper';
import './weatherCard.scss';

interface WeatherProps {
    weatherInfo: Weather
}

const WeatherCard = (props: WeatherProps) => {
    const {weatherInfo} = props;
    const selectedUnit = localStorage.getItem('unit');
    return (
        <div className='weather-card-container'>
            <div className='weather-card-justify-content'>
                <p className='temperature-text'>
                    <span> { weatherInfo.temperature }</span> {' '} <span>
                        <sup>o</sup>
                        {
                            selectedUnit === null ? 'F'
                            : 
                            selectedUnit === 'celcius'? 'C' : 'F'
                        }
                    </span>
                </p>
                <div className='weather-card-right'>
                    <img className='weather-icon' alt='weather-icon' src={`https://openweathermap.org/img/wn/${weatherInfo.icon}.png`} />
                    <p className='temp-description'>{weatherInfo.description}</p>
                    <p className='date-text'>{formatDate(weatherInfo.date)}</p>
                </div>
            </div>
            <div className='weather-card-justify-content'>
                <div>
                    <p className='other-title'>Avg. Pressure</p>
                    <p className='value-title'>{weatherInfo.pressure} hPa</p>
                </div>
                <div className='other-data-right'>
                    <p className='other-title'>Avg. Humidity</p>
                    <p className='value-title'>{weatherInfo.humidity} %</p>
                </div>
            </div>
        </div>
    );
}

export default WeatherCard;