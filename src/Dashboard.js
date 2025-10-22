import React, { useState } from 'react';
function Dashboard({ initialData, user }) {
    const [data, setData] = useState(initialData || []);
    const [loading, setLoading] = useState(false);
    
    const refreshData = () => {
        setLoading(true);
        // Simulează un API call pentru date noi
        setTimeout(() => {
            setData([...data, `New item ${Date.now()}`]);
            setLoading(false);
        }, 1000);
    };
    
    return (
        <div style={{ padding: '20px' }}>
            <h1>Dashboard - Welcome {user?.name}</h1>
            {loading && <p>Loading new data...</p>}
            <ul>
                {data.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <button onClick={refreshData}>Refresh Data</button>
        </div>
    );
}

export default Dashboard;