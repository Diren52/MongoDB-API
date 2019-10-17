var mongoose = require("mongoose");
mongoose.set('debug', true);
// mongoose.connect('mongodb://localhost/todo-api');
mongoose.connect('mongodb://hiitsherby:WenYen0u0@ds133017.mlab.com:33017/nodejs_mongodb_api');

mongoose.Promise = Promise;
module.exports.Survey = require('./tracker');