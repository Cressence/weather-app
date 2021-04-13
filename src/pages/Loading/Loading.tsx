import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { useHistory } from "react-router-dom";
import { Button } from '@material-ui/core';

import Wrapper from './../../components/Wrapper';
import { RootState } from '../../store/root/rootReducer';
import { getWeatherData, resetData } from "./../../store/root/action";
import './loading.scss';

const Loading = ( ) => {
    const selectedUnit = localStorage.getItem('unit');
    const selectedCity = localStorage.getItem('city');
    const { weatherInfo, appError } = useSelector((state: RootState) => ({
        weatherInfo: state.weatherInfo.weatherData,
        appError: state.weatherInfo.appError
    }));

    const dispatch: Dispatch<any> = useDispatch();
    const history = useHistory();

    const goBackToDefaultWeather = () => {
        localStorage.clear();
        dispatch(resetData());
    }

    useEffect(() => {
        const MAIN_ROUTE = process.env.REACT_APP_MAIN_ROUTE;
        dispatch(
            getWeatherData(
                selectedCity === null? 'Munich': selectedCity,
                selectedUnit === null ? 'fahrenheit': selectedUnit
            )
        );

        if (weatherInfo !== null) {
            history.push(`${MAIN_ROUTE}/info`);
        }
    }, [dispatch, history, weatherInfo, selectedUnit, selectedCity]);

    return (
        <Wrapper>
            <div className='loading-container'>
                {
                    appError !== null ?
                    <div>
                        <p className='loader-text'>City "{selectedCity}" not found!</p>
                        <Button onClick={goBackToDefaultWeather} className='back-button' variant="contained" color="primary">Back</Button>
                    </div>             
                    :
                    <div>
                    <p className='loader-text'>Almost there</p>
                    <div className="loader">
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                    </div>
                </div>
                }
                
                
            </div>
        </Wrapper>
    );
}

export default Loading;