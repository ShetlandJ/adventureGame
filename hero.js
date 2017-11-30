var _ = require("lodash");

var Hero = function(name, favFood){
  this.favFood = favFood;
  this.name = name;
  this.health = 100;
  this.tasks = [];

};

Hero.prototype = {

  loseHealth: function(number){
    if (this.health - number > 0)
    this.health -= number;
  }else{
    this.health = 0;
  }

  talk: function(){
    return "I'm not a bird or a plane dumbass!";
  }


};


module.exports = Hero;
