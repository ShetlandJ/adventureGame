var _ = require("lodash");

var Food = function(name, replenish){
  this.name = name;
  this.replenish = replenish;
  this.poison = false;
};


module.exports = Food;
