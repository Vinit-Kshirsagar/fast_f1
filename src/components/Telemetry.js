import React from 'react';

const Telemetry = () => {
    // Sample telemetry data
    const telemetryData = [
        { lap: 1, speed: 120, throttle: 0.8, brake: 0.1 },
        { lap: 2, speed: 130, throttle: 0.85, brake: 0.05 },
        { lap: 3, speed: 125, throttle: 0.75, brake: 0.15 },
        // Add more data as needed
    ];

    return (
        <div className="telemetry">
            <h2>Telemetry Data</h2>
            <table>
                <thead>
                    <tr>
                        <th>Lap</th>
                        <th>Speed (km/h)</th>
                        <th>Throttle</th>
                        <th>Brake</th>
                    </tr>
                </thead>
                <tbody>
                    {telemetryData.map((data, index) => (
                        <tr key={index}>
                            <td>{data.lap}</td>
                            <td>{data.speed}</td>
                            <td>{data.throttle}</td>
                            <td>{data.brake}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Telemetry;