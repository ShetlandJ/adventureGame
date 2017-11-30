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

      if ((this.health + food.replenish) >= 100) {
        this.health = 100;

      } else {

        if (food.name === this.favFood){

          if ((this.health + (1.5 * food.replenish)) >= 100) {
            this.health = 100;

          } else {
            this.health += (1.5 * food.replenish);
          }
        } else {
          this.health += food.replenish;
        }
      }
    } else {
      if ((this.health - food.replenish) <= 0) {
        this.health = 0;
      } else {
        this.health -= food.replenish;
      }
    }
  },

  viewTask: function(status){
    if (status === "complete") {
       return _.filter(this.tasks, { complete: true }).length;
    } else {
       return _.filter(this.tasks, { complete: false }).length;
    }
  }
  // findAccountByName: function(name){
	// 	return _.find(this.accounts, { name: name });
	// },
};

module.exports = Hero;
