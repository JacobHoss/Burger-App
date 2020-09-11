const connection = require("./connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

const orm = {
    
    selectAll: function(cb) {
        let post = "SELECT * FROM burgers;";
        connection.query(post, function(err, result) {
          if (err) throw err;
          cb(result);
        });
      },
    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
    
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
    
        console.log(queryString);
    
        connection.query(queryString, vals, function(err, result) {
          if (err) throw err;
          cb(result);
        });
      },
    updateOne: function(table, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += "devoured = 1"
        queryString += " WHERE ";
        queryString += condition;
    
        console.log(queryString);
        connection.query(queryString, function(err, result) {
          if (err) throw err;
          cb(result);
        });
      }
};

module.exports = orm;