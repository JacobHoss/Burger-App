const orm = require("../config/orm.js");

const burger = {
  all: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    });
  },
  
  create: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  devour: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;