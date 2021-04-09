import React from 'react';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

import './barchart.scss';

const data = [
    { year: '1970', population: 3.682 },
    { year: '1980', population: 4.440 },
    { year: '1990', population: 5.310 },
    { year: '2000', population: 6.127 },
    { year: '2010', population: 6.930 },
  ];

const BarChart = () => {
    return (
        <div className='bar-chart-container'>
            <Chart data={data}>
                <ArgumentAxis tickSize={3} showLine={false} />

                <BarSeries
                    valueField="population"
                    argumentField="year"
                />
                <Title text="2021 Nov 20" />
                <Animation />
            </Chart> 
        </div>
        
    );
};

export default BarChart;