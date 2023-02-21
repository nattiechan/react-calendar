const fs = require('fs/promises');
const path = require('path');

const calendarController = {};
const DOW = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

calendarController.getSchedule = (_, res, next) => {
    fs.readFile(path.join(__dirname, '../data/schedule.json'))
        .then(data => JSON.parse(data).schedule)
        .then(schedule => processSchedule(schedule))
        .then(output => res.locals.schedule = output)
        .then(() => next())
        .catch(error => next({
            log: `calendarController.getSchedule ERROR: ${typeof error === 'object' ? JSON.stringify(error) : error}`,
            message: { err: `Error occurred in calendarController.getSchedule. Check server logs for more details.` }
        }))
};

calendarController.getDow = (_, res, next) => {
    res.locals.dow = DOW;
    return next();
};

const processSchedule = (schedule) => {
    const morning = Array(7).fill(null);
    const afternoon = Array(7).fill(null);
    const evening = Array(7).fill(null);
    schedule.forEach(entry => {
        const processedEntry = { ...entry, timeOfDay: Number(entry.timeOfDay) };
        switch (processedEntry.timeOfDay) {
            case 1:
                morning[DOW.indexOf(processedEntry.day)] = processedEntry;
                break;
            case 2:
                afternoon[DOW.indexOf(processedEntry.day)] = processedEntry;
                break;
            case 3:
                evening[DOW.indexOf(processedEntry.day)] = processedEntry;
                break;
            default:
                console.log(`Invalid Entry: ${entry}`);
        }
    })
    return { "morning": morning, "afternoon": afternoon, "evening": evening };
};

module.exports = calendarController;