import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { data1, data2, data3 } from './Data';
import Typography from '@mui/material/Typography';

Highcharts.setOptions({
    lang: {
        decimalPoint: ',',
        thousandsSep: '.',
        loading: 'Carregando...',
        months: [
            'Janeiro',
            'Fevereiro',
            'Março',
            'Abril',
            'Maio',
            'Junho',
            'Julho',
            'Agosto',
            'Setembro',
            'Outubro',
            'Novembro',
            'Dezembro',
        ],
        weekdays: [
            'Domingo',
            'Segunda-feira',
            'Terça-feira',
            'Quarta-feira',
            'Quinta-feira',
            'Sexta-feira',
            'Sábado',
        ],
    },
});

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
            text: 'Aceleração RMS (g)',
            style: { color: '#6673A9' },
        },
        tickPositions: [0, 5, 10, 15, 20],
    },
    series: [
        {
            name: 'Axial',
            data: data1.map((item) => [new Date(item.datetime).getTime(), item.max]),
            pointStart: new Date(data1[0].datetime).getTime(),
            marker: {
                enabled: false,
            },
            color: '#D9529C',
        },

        {
            name: 'Horizontal',
            data: data2.map((item) => [new Date(item.datetime).getTime(), item.max]),
            pointStart: new Date(data2[0].datetime).getTime(),
            marker: {
                enabled: false,
            },
            color: '#73B2D9',
        },
        {
            name: 'Radial',
            data: data3.map((item) => [new Date(item.datetime).getTime(), item.max]),
            pointStart: new Date(data3[0].datetime).getTime(),
            marker: {
                enabled: false,
            },
            color: '#D9BC66',
        },
    ],
};
const LineChart = () => {
    return (
        <div>
            <Typography variant="body2" m={5} color={'#3A3B3F'}>
                Aceleração RMS
            </Typography>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
};

export default LineChart;
