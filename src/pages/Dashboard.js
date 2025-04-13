import React from 'react';
import Graph from '../components/Graph';

const Dashboard = () => {
    const sampleData = [
        { label: 'Lap 1', value: 120 },
        { label: 'Lap 2', value: 130 },
        { label: 'Lap 3', value: 125 },
        { label: 'Lap 4', value: 135 },
    ];

    return (
        <div>
            <h1>Dashboard Page Loaded</h1>
            <Graph data={sampleData} />  {/* Pass sampleData to Graph */}
        </div>
    );
};

export default Dashboard;
