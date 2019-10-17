var db = require('../models_tracker');

exports.getTrackers = function(req, res){
    db.Tracker.find()
    .then(function(trackers){
        res.json(trackers)
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.getTracker = function(req, res){
    db.Tracker.findById(req.params.trackerId)
    .then(function(foundTracker){
        res.json(foundTracker);
    })
    .catch(function(err){
        res.send(err);
    });
}

exports.createTracker = function(req, res){
    db.Tracker.create(req.body)
    .then(function(newTracker){
        res.status(201).json(newTracker);
    })
    .catch(function(err){
        res.send(err);
    });
}

exports.updateTracker = function(req, res){
    db.Tracker.findOneAndUpdate({_id: req.params.trackerId}, req.body, {new: true})
    .then(function(tracker){
      res.json(tracker)
    })
    .catch(function(err){
      res.send(err);
    })
}

exports.deleteTracker = function(req, res){
  db.Tracker.remove({_id: req.params.trackerId})
  .then(function(){
      res.json({message:'successfully deleted'})
  })
  .catch(function(err){
      res.send(err);
  })
}

module.exports = exports;