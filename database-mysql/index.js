var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'mvp'
});

var selectAll = function(callback) {
  connection.query('SELECT * FROM tasks', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

var updateTask = function(task_id, callback) {
  connection.query('UPDATE tasks SET completed = true WHERE id = task_id', function(err, results) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

// var postNewTask = function({task}, callback) {
//   connection.query('INSERT INTO tasks VALUES (' + `${}, ${}, ${}, ${}, ${}, ${}`) {
//     if (err) {
//       callback(err, null);
//     } else {
//       callback(null, results);
//     }
//   });
// }



module.exports.selectAll = selectAll;
