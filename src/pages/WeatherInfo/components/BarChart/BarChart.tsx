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
import { formatDate } from '../../../../utils/helper';

interface BarChartProps {
    temps: Weather;
    unit: string;
    elementId: React.RefObject<HTMLDivElement>;
}

const BarChart = (props: BarChartProps) => {
    const { temps, unit, elementId } = props;
    const data: any = [];

    temps.tempCollection.forEach((temp: any) => {
        const tableData = {
            time: `${temp.main.temp}${unit === 'celcius' ? 'C' : 'F'}`,
            temperature: temp.main.temp
        }

        data.push(tableData);
    });

    return (
        <div className='bar-chart-container' ref={elementId}>
            <Chart data={data}>
                <ArgumentAxis tickSize={3} showLine={false} />

                <BarSeries
                    valueField='temperature'
                    argumentField='time'
                />
                <Title text={formatDate(temps.date)} />
                <Animation />
            </Chart>
        </div>

    );
};

export default BarChart;