var assert = require("assert");
var Hero = require("../hero.js");
var Task = require("../task.js");

describe( "Hero", function(){

  beforeEach(function(){

    hero1 = new Hero("Superman", "Chicken");
    task1 = new Task("Do stuff", 10, 5, 100);

  });

  it("should have a name", function(){
    assert.strictEqual(hero1.name, "Superman");
  });

  it("should have a favourite food type", function(){
    assert.strictEqual(hero1.favFood, "Chicken");
  });

  it("should have 100 health at the start", function(){
    assert.strictEqual(hero1.health, 100);
  });

  it("should be able to lose health by number", function(){
    hero1.loseHealth(10);
    assert.strictEqual(hero1.health, 90);
  });

  // it("should be able to lose health by number", function(){
  //   hero1.loseHealth(10);
  //   hero1.loseHealth(10);
  //   hero1.gainHealth(5);
  //   assert.strictEqual(hero1.health, 85);
  // });

  it("tasks start as zero", function(){
    assert.strictEqual(hero1.tasks.length, 0);
  });

  it("tasks can be added", function(){
    hero1.addTask(task1)
    assert.strictEqual(hero1.tasks.length, 1);
  });

  it("can talk", function(){
    assert.strictEqual(hero1.talk(), "I'm not a bird or a plane dumbass!");
  });

})
