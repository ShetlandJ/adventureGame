var _ = require("lodash");

var Hero = function(name, favFood){
  this.favFood = favFood;
  this.name = name;
  this.health = 100;
  this.tasks = [];

};

Hero.prototype = {

  loseHealth: function(number){
    if (this.health - number > 0){
    this.health -= number;
  }else{
    this.health = 0;
  }
  },

  talk: function(){
    return "I'm not a bird or a plane dumbass!";
  },

  addTask: function(task){
    this.tasks.push(task);
  },

  eatFood: function(food){
    if(food.poison === false){
      if (food.name === this.favFood){
        this.health += 1.5 * food.replenish;
      };
      this.health += food.replenish;
    }else{
      this.health -= food.replenish;
    }
  }
};


module.exports = Hero;
