var mongoose = require('mongoose');

var trackerSchema = new mongoose.Schema({
   emotion:{
       type: String,
       required: 'Emotion cannot be blank'
   },
   workContent:{
       type: String,
       required: 'Work content cannot be blank'
   },
   hours:{
       type: String,
       required: 'Hours cannot be blank'
   },
   pay:{
       type: String,
       required: 'Pay cannot be blank'
   },
   memo:{
       type: String,
       default: 'None'
   },
   created_date:{
       type: Date,
       default: Date.now
   }
});

var Tracker = mongoose.model('Tracker', trackerSchema);

module.exports = Tracker;