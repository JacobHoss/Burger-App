const orm = require("../config/orm.js");

const burger = {
  selectAll: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(id, cb) {
    var condition = "id =" + id;
    orm.updateOne("burgers", condition, cb)
  }
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;