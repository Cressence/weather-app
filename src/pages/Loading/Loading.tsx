import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { useHistory } from "react-router-dom";

import Wrapper from './../../components/Wrapper';
import { RootState } from '../../store/root/rootReducer';
import { getWeatherData } from "./../../store/root/action";
import './loading.scss';

const Loading = ( ) => {
    const { weatherInfo } = useSelector((state: RootState) => ({
        weatherInfo: state.weatherInfo.weatherData
    }));
      const dispatch: Dispatch<any> = useDispatch();
      const history = useHistory();

    useEffect(() => {
        const selectedUnit = localStorage.getItem('unit');
        dispatch(
            getWeatherData('Munich,de', selectedUnit === null ? 'fahrenheit': selectedUnit)
        );

        if (weatherInfo !== null) {
            history.push("/weather-app/info");
        }
    }, [dispatch, history, weatherInfo]);

    return (
        <Wrapper>
            <div className='loading-container'>
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
                
            </div>
        </Wrapper>
    );
}

export default Loading;