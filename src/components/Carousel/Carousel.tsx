import React, { useState } from 'react';
import { ArrowBack, ArrowForward } from '@material-ui/icons';
import {  Grid } from '@material-ui/core';

import Weather from './../../api/models/weather.model';
import WeatherCard from './../../pages/WeatherInfo/components/Weathercard';
import './carousel.scss';

interface CarouselProps {
    data: Weather[];
    clickGetInfo: any;
}

const pages = (data: Weather[]) => {
    const weatherArray = [];
    for (let count = 0; count < data.length; count += 3) {
        const currentCount = count;
        const maxCount = (currentCount + 3) > (data.length -1) ? data.length: currentCount + 3;
        weatherArray.push(data.slice(currentCount, maxCount));
    }
    return weatherArray;
};

const Carousel = (props: CarouselProps) => {
    const { data, clickGetInfo } = props;
    const [activeIndex, setActiveIndex] = useState(0);

    const goToPrevSlide = () => {
        let index = activeIndex;
        let length = data.length;
        if (index < 1) {
            index = length - 1;
        } else {
            index--;
        }
        
        setActiveIndex(index);

    }
 
    const goToNextSlide = () => {
        let index = activeIndex;
        let length = data.length;
        if (index === length - 1) {
            index = 0
        } else {
            index++;
        }
        
        setActiveIndex(index);
    }
    
    return (
        <div className='carousel-container'>
            <div className='carousel-item'>
                <div className='navigator-section'>
                    <div>
                        {
                            activeIndex !== 0 ?
                            <ArrowBack fontSize='large' onClick={goToPrevSlide} />
                            : null
                        }
                    </div>
                    <div>
                        {
                            activeIndex !==  pages.length ?
                            <ArrowForward fontSize='large' onClick={goToNextSlide} />
                            : null
                        }
                    </div>
                </div>
                
                    {
                        // loop and display every page
                        pages(data).map((carouselLoop:Weather[], index: number) => {
                            return (
                                <div key={index}>
                                    <Grid container spacing={2}>
                                     {
                                        // Loop and display every item in each page
                                        carouselLoop.map((info:Weather, count:number) => {
                                            return (
                                                <Grid
                                                    key={count}
                                                    item
                                                    xs={12}
                                                    sm={6}
                                                    md={4}
                                                    onClick={() => clickGetInfo(info)}
                                                    className={index === activeIndex ? 'active' : 'inactive'}
                                                >
                                                    <WeatherCard weatherInfo={info} />
                                                </Grid>
                                            );
                                        })
                                    }
                                    </Grid> 
                                </div>
                            );
                        })
                    }          
                
            </div>
        </div>
    );
}

export default Carousel;