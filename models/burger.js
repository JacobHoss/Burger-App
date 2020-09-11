const orm = require("../config/orm.js");

const burger = {
  selectAll: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(id, cb) {
    orm.insertOne(["burger_name", "devoured"], [id, false], cb)
  },
  updateOne: function(id, cb) {
    var condition = "id =" + id;
    orm.updateOne("burgers", {devoured: 1}, cb)
  }
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;