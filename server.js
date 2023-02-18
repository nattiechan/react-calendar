const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());


// Global error handler
app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 400,
        message: { err: 'An error occurred' }
    };
    const errorObj = Object.assign(defaultErr, err);
    return res.status(errorObj.status).json(errorObj.message);
});



app.listen(process.env.PORT || 8080);