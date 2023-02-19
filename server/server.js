const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;
const weatherRouter = require('./routers/weather');

app.use(express.json());

// route handlers
app.use('/weather', weatherRouter);

// main app
app.get('/', (_, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

// Catch-all route handler
app.use((_, res) => res.sendStatus(404));

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



app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

module.exports = app;