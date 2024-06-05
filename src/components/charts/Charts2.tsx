import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { data3 } from './Data';
import Typography from '@mui/material/Typography';

const options = {
    chart: {
        type: 'line',
    },
    title: {
        text: '',
    },
    xAxis: {
        type: 'datetime',
        labels: {
            format: '{value:%e. %b}',
            style: {
                color: '#6673A9',
                fontSize: '12px',
                fontWeight: 'bold',
                flexDirection: 'row',
            },
        },
    },
    yAxis: {
        title: {
            text: ' Temperatura (°C)',
            style: { color: '#6673A9' },
        },
        tickPositions: [0, 5, 10, 15, 20],
    },
    series: [
        {
            name: 'Temperatura',
            data: data3.map((item) => [new Date(item.datetime).getTime(), item.max]),
            pointStart: new Date(data3[0].datetime).getTime(),
            marker: {
                enabled: false,
            },
            color: '#89982E',
        },
    ],
};

const LineChart = () => {
    return (
        <div>
            <Typography variant="body2" m={5} color={'#3A3B3F'}>
                Temperatura
            </Typography>

            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
};

export default LineChart;
