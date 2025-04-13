import React from 'react';
import Graph from '../components/Graph';
import Telemetry from '../components/Telemetry';

const Dashboard = () => {
    return (
        <div>
            <h1>F1 Telemetry Dashboard</h1>
            <Telemetry />
            <Graph />
        </div>
    );
};

export default Dashboard;