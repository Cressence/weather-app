import React from 'react';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

import './barchart.scss';
import Weather from '../../../../api/models/weather.model';
import { minAndSec } from '../../../../utils/helper';

interface BarChartProps {
    temps: Weather;
}

const BarChart = (props: BarChartProps) => {
    const { temps } =  props;
    const data:any = [];
    temps.tempCollection[0].forEach((temp:any) => {
        const tableData = {
            time: minAndSec(temp.dt_txt),
            temperature: temp.main.temp
        }
        
        data.push(tableData);
    });
    console.log(data);
    return (
        <div className='bar-chart-container'>
            <Chart data={data}>
                <ArgumentAxis tickSize={3} showLine={false} />

                <BarSeries
                    valueField="temperature"
                    argumentField="time"
                />
                <Title text="2021 Nov 20" />
                <Animation />
            </Chart> 
        </div>
        
    );
};

export default BarChart;