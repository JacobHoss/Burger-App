const connection = require("./connection.js");  

const orm = {
    
    selectAll: function(cb) {
        let post = "SELECT * FROM burgers;";
        connection.query(post, function(err, result) {
          if (err) throw err;
          cb(result);
        });
      },
    insertOne: function(cb) {
      let post = `INSERT INTO burgers (burger_name, devoured) VALUES ("Spicy Burger", FALSE);`
        connection.query(post, function(err, result) {
          if (err) throw err;
          cb(result);
        });
      },
    updateOne: function(table, objColVals, condition, cb) {
      let post = "UPDATE burgers SET devoured=1 WHERE id = 4"
        connection.query(post, function(err, result) {
          if (err) throw err;
          cb(result);
        });
      }
};

module.exports = orm;