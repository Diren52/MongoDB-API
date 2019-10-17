var express = require('express');
var router = express.Router();
var db = require('../models_survey');
var helpers = require('../helpers/survey');


router.route('/')
    .get(helpers.getSurveys)
    .post(helpers.createSurvey)

router.route('/:surveyId')
    .get(helpers.getSurvey)
    .put(helpers.updateSurvey)
    .delete(helpers.deleteSurvey)

module.exports = router;