var db = require('../models_survey');

exports.getSurveys = function(req, res){
    db.Survey.find()
    .then(function(surveys){
        res.json(surveys)
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.getSurvey = function(req, res){
    db.Survey.findById(req.params.surveyId)
    .then(function(foundSurvey){
        res.json(foundSurvey);
    })
    .catch(function(err){
        res.send(err);
    });
}

exports.createSurvey = function(req, res){
    db.Survey.create(req.body)
    .then(function(newSurvey){
        res.status(201).json(newSurvey);
    })
    .catch(function(err){
        res.send(err);
    });
}

exports.updateSurvey = function(req, res){
    db.Survey.findOneAndUpdate({_id: req.params.surveyId}, req.body, {new: true})
    .then(function(survey){
      res.json(survey)
    })
    .catch(function(err){
      res.send(err);
    })
}

exports.deleteSurvey = function(req, res){
  db.Survey.remove({_id: req.params.surveyId})
  .then(function(){
      res.json({message:'successfully deleted'})
  })
  .catch(function(err){
      res.send(err);
  })
}

module.exports = exports;