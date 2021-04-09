import { convertMonthToText } from '../../../../utils/helper';
import './weatherCard.scss';

interface WeatherProps {
    unit: string;
    onClick: any;
}

const WeatherCard = (props: WeatherProps) => {
    const {unit, onClick} = props;
    return (
        <div className='weather-card-container' onClick={onClick}>
            <img className='weather-icon' alt='weather-icon' src='http://openweathermap.org/img/wn/04d@2x.png' />
            <p className='temperature-text'>
                <span>12</span> {' '}
                <span>
                    <sup>o</sup>
                    {unit === 'celcius'? 'C' : 'F'}
                </span>
            </p>
            <p className='temp-description'>Broken Clouds</p>
            <div>
                <p className='medium-text'>Date: {`2021 ${convertMonthToText(4)} 22`}</p>
                <p className='medium-text'><span>Pressure: </span> <span>3000</span><span>Pa</span></p>
                <p className='medium-text'><span>Pressure: </span> <span>3000</span><span>Pa</span></p>
            </div>
        </div>
    );
}

export default WeatherCard;