var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bubblecal', function(err) {
    if (err) throw err;
});

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error', );
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var taskSchema = mongoose.Schema({
  quantity: Number,
  description: String
});

var Task = mongoose.model('Task', taskSchema);

var selectAll = function(callback) {
  Task.find({}, function(err, tasks) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, tasks);
    }
  });
};

module.exports.selectAll = selectAll;
