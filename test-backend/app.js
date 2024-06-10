const express = require('express');

const app = express();

const PORT = 8002;

app.get('/', (req, res) => {
    res.send(`Server is listening to port ${PORT}`);
});

app.listen(PORT, (error) => {
    console.log(`Server is listening to port ${PORT}`);
});