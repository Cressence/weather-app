import Weather from '../../../../api/models/weather.model';
import { formatDate } from '../../../../utils/helper';
import './weatherCard.scss';

interface WeatherProps {
    unit: string;
    onClick: any;
    weatherInfo: Weather
}

const WeatherCard = (props: WeatherProps) => {
    const {unit, onClick, weatherInfo} = props;
    return (
        <div className='weather-card-container' onClick={() => onClick(weatherInfo)}>
            <img className='weather-icon' alt='weather-icon' src={`https://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png`} />
            <p className='temperature-text'>
                <span> { weatherInfo.temperature }</span> {' '} <span>
                    <sup>o</sup>
                    {unit === 'celcius'? 'C' : 'F'}
                </span>
            </p>
            <p className='temp-description'>{weatherInfo.description}</p>
            <div>
                <p className='medium-text'>Date: {formatDate(weatherInfo.date)}</p>
                <p className='medium-text'><span>Pressure: </span> <span>{weatherInfo.pressure}</span><span>Pa</span></p>
                <p className='medium-text'><span>Humidity: </span> <span>{weatherInfo.humidity}</span><span>Pa</span></p>
            </div>
        </div>
    );
}

export default WeatherCard;