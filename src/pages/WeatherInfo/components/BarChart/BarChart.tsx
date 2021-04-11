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

interface BarChartProps {
    temps: Weather;
    unit: string
}

const BarChart = (props: BarChartProps) => {
    const {temps, unit } =  props;
    const data:any = [];
    console.log(temps);
    
    temps.tempCollection.forEach((temp:any) => {
        const tableData = {
            time: `${temp.main.temp}${unit === 'celcius'? 'C' : 'F'}`,
            temperature: temp.main.temp
        }
        
        data.push(tableData);
    });

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