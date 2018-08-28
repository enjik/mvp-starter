var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'mvp'
});

var selectAll = function(callback) {
  connection.query('SELECT * FROM tasks', function(err, results) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

var updateTask = function(task_id, callback) {
  connection.query(`UPDATE tasks SET completed = true WHERE id = ${task_id}`, function(err, results) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

var postNewTask = function({description, hours, deadline, category, completed}, callback) {
  const query = 'INSERT INTO tasks (description, hours, deadline, category, completed) VALUES (?, ?, ?, ?, ?)';
  console.log(query, {description, hours, deadline, category, completed});
  connection.query(query, [description, hours, deadline, category, completed], function (err, results) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
}

var deleteTask = function(task_id, callback) {
  connection.query(`DELETE tasks WHERE id = ${task_id}`, function(err, results) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
}


module.exports.selectAll = selectAll;
module.exports.postNewTask = postNewTask;
module.exports.updateTask = updateTask;
module.exports.deleteTask = deleteTask;
