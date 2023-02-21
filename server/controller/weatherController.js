const fetch = require('node-fetch');
const fs = require('fs/promises');
const path = require('path');
const weatherUrl = 'https://api.open-meteo.com/v1/forecast?latitude=49.25&longitude=-123.12&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=America%2FLos_Angeles';
const weatherController = {};

weatherController.getForecast = (_, res, next) => {
    fetch(weatherUrl)
        .then(response => response.json())
        .then(result => processWeatherData(result))
        .then(output => res.locals.forecast = output)
        .then(() => next())
        .catch(error => next({
            log: `weatherController.getForecast ERROR: ${typeof error === 'object' ? JSON.stringify(error) : error}`,
            message: { err: `Error occurred in weatherController.getForecast. Check server logs for more details.` }
        }))
}

const processWeatherData = async (data) => {
    const info = data.daily;
    const output = [];
    const days = info.time.length;
    for (let i = 0; i < days; i++) {
        const sunrise = info.sunrise[i];
        // Since we are not using external libraries like moment.js
        // We need timestamp with timezone information to obtain day-of-week (DOW) correctly
        // Since only sunrise/sunset times are timestamps, we will use them to get DOW instead
        const dow = new Date(sunrise).toLocaleDateString('en-US', { weekday: 'short' });
        const getTime = (timestamp) => new Date(timestamp).toLocaleTimeString('en-US', { timeStyle: 'short' });
        output.push({
            'dow': dow,
            'date': info.time[i],
            'weatherCode': info.weathercode[i],
            'forecast': await getWmoCode(info.weathercode[i]),
            'maxTemp': info.temperature_2m_max[i],
            'minTemp': info.temperature_2m_min[i],
            'sunrise': getTime(sunrise),
            'sunset': getTime(info.sunset[i])
        });
    }
    return output;
}

const getWmoCode = async (code) => {
    const data = await fs.readFile(path.join(__dirname, '../data/wmoCode.json'));
    const wmoCode = JSON.parse(data).wmoCode;
    return wmoCode[`${code}`];
}


module.exports = weatherController;
