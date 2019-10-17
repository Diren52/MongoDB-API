var express = require('express');
var router = express.Router();
var db = require('../models_tracker');
var helpers = require('../helpers/tracker');


router.route('/')
    .get(helpers.getTrackers)
    .post(helpers.createTracker)

router.route('/:trackerId')
    .get(helpers.getTracker)
    .put(helpers.updateTracker)
    .delete(helpers.deleteTracker)

module.exports = router;