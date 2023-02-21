const express = require('express');
const calendarController = require('../controller/calendarController');
const router = express.Router();

router.get('/dow',
    calendarController.getDow,
    (_, res) => res.status(200).json({ "dow": res.locals.dow })
);

router.get('/schedule',
    calendarController.getSchedule,
    (_, res) => res.status(200).json(res.locals.schedule)
);

module.exports = router;