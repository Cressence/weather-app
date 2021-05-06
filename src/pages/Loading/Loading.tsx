import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { useHistory } from "react-router-dom";
import { Button } from '@material-ui/core';

import Wrapper from './../../components/Wrapper';
import { RootState } from '../../store/root/reducers/rootReducer';
import { getWeatherData, resetData } from "../../store/root/actions/action";
import './loading.scss';

const Loading = () => {
    const [isMounted, setIsMounted] = useState(false);


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
        if (!isMounted) {
            dispatch(
                getWeatherData(
                    selectedCity === null ? 'Munich' : selectedCity,
                    selectedUnit === null ? 'fahrenheit' : selectedUnit
                )
            );

            setIsMounted(true);
        } else {
            if (weatherInfo !== null) {
                history.push('/info');
            }
        }

    }, [dispatch, history, weatherInfo, selectedUnit, selectedCity, isMounted, setIsMounted]);

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