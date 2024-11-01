const express = require('express');
const app = express();
const port = 5001;

app.get('/api/compliance-status', (req, res) => {
    res.json({ complianceStatus: "CIS Compliance Achieved", tasksCompleted: 4 });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});