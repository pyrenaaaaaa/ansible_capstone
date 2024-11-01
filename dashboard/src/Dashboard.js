import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
    const [status, setStatus] = useState(null);

    useEffect(() => {
        axios.get('/api/compliance-status')
            .then(response => setStatus(response.data))
            .catch(error => console.error("Error fetching data: ", error));
    }, []);

    return (
        <div>
            <h1>CIS Compliance Dashboard</h1>
            {status ? (
                <div>
                    <p>{status.complianceStatus}</p>
                    <p>Tasks Completed: {status.tasksCompleted}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Dashboard;