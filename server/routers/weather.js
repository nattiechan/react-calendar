const express = require('express');
const weatherController = require('../controller/weatherController');
const router = express.Router();

router.get('/',
    weatherController.getForecast,
    (_, res) => res.status(200).json(res.locals.forecast)
);

module.exports = router;