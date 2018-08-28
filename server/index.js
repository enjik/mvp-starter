var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
var tasks = require('../database-mysql');
// var tasks = require('../database-mongo');

var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/tasks', function (req, res) {
  tasks.selectAll(function(err, data) {
    if(err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.post('/tasks', function (req, res) {
  req.body.body.hours = Number(req.body.body.hours);
  req.body.body.completed = 0;
  tasks.postNewTask(req.body.body, function(err, data) {
    if(err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});


app.listen(3000, function() {
  console.log('listening on port 3000!');
});
