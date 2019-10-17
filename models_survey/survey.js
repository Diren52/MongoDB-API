var mongoose = require('mongoose');

var surveySchema = new mongoose.Schema({
   email:{
       type: String,
       required: 'Email cannot be blank'
   },
   name:{
       type: String,
       required: 'Name cannot be blank'
   },
   gender:{
       type: String,
       required: 'Gender cannot be blank'
   },
   age:{
       type: String,
       required: 'Age cannot be blank'
   },
   courses:{
       type: Array,
       required: 'Courses cannot be blank'
   },
   text:{
       type: String,
       default: 'None'
   },
   created_date:{
       type: Date,
       default: Date.now
   }
});

var Survey = mongoose.model('Survey', surveySchema);

module.exports = Survey;