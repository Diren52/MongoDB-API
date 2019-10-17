var express = require('express'),
    app     = express(),
    bodyParser = require('body-parser');

var todoRoutes = require('./routes/todos'),
    surveyRoutes = require('./routes/survey'),
    trackerRoutes = require('./routes/tracker');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
   res.sendFile('index.html'); 
});

app.use('/api/todos', todoRoutes);
app.use('/api/survey', surveyRoutes);
app.use('/api/tracker', trackerRoutes);

app.listen(process.env.PORT, function(){
   console.log('App is running on port '+ process.env.PORT); 
});
