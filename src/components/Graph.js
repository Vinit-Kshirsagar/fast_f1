import React from 'react';
import { Line } from 'react-chartjs-2';

const dummyData = [
    { label: 'Lap 1', value: 120 },
    { label: 'Lap 2', value: 130 },
    { label: 'Lap 3', value: 125 },
    { label: 'Lap 4', value: 135 },
];

const Graph = (props) => {
    console.log("Data passed to Graph:", props?.data);  // Add this log to check the data
    const data = props?.data || dummyData;

    const chartData = {
        labels: data.map(point => point.label),
        datasets: [
            {
                label: 'Telemetry Data',
                data: data.map(point => point.value),
                borderColor: 'rgba(75,192,192,1)',
                backgroundColor: 'rgba(75,192,192,0.2)',
                fill: true,
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div>
            <h2>Telemetry Graph</h2>
            <Line data={chartData} options={options} />
        </div>
    );
};

export default Graph;
