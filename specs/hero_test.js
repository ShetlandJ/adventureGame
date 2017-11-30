var assert = require("assert");
var Hero = require("../hero.js");
var Task = require("../task.js");
var Food = require("../food.js")

describe( "Hero", function(){

  beforeEach(function(){

    hero1 = new Hero("Superman", "Chicken");
    hero2 = new Hero("Superman", "Bread");
    hero3 = new Hero("Superman", "Bread");


    task1 = new Task("Do stuff", 10, 5, 100);
    task2 = new Task("Do other stuff", 5, 2, 50);
    task3 = new Task("Do even more stuff", 15, 1, 150);

    food1 = new Food("Chicken", 50);

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

  it("should be able to gain health by fav food", function(){
    hero1.health = 10;
    hero1.eatFood(food1);
    assert.strictEqual(hero1.health, 85);
  });

  it("should be able to gain health by fav food can't go over 100", function(){
    hero1.health = 40;
    hero1.eatFood(food1);
    assert.strictEqual(hero1.health, 100);
  });

  it("should be able to gain health", function(){
    hero2.health = 10;
    hero2.eatFood(food1);
    assert.strictEqual(hero2.health, 60);
  });

  it("should be able to get poisoned", function(){
    food1.poison = true;
    hero1.eatFood(food1);
    assert.strictEqual(hero1.health, 50);
  });

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

  it("can check completed tasks", function(){
    hero1.addTask(task1)
    hero1.addTask(task2)
    hero1.addTask(task3)

    task2.setComplete();
    task3.setComplete();

    assert.strictEqual(hero1.viewTask("complete"), 2);
  });

  it("can check incompleted tasks", function(){
    hero1.addTask(task1)
    hero1.addTask(task2)
    hero1.addTask(task3)

    task2.setComplete();
    task3.setComplete();

    assert.strictEqual(hero1.viewTask("incomplete"), 1);
  });

  it("can sort by difficulty", function(){
    hero1.addTask(task1)
    hero1.addTask(task2)
    hero1.addTask(task3)


    assert.deepStrictEqual(hero1.sortTask("difficulty"), [task3, task1, task2]);
  });

  it("can sort by urgency", function(){
    hero1.addTask(task1)
    hero1.addTask(task2)
    hero1.addTask(task3)


    assert.deepStrictEqual(hero1.sortTask("urgency"), [task1, task2, task3]);
  });

  it("can sort by reward", function(){
    hero1.addTask(task1)
    hero1.addTask(task2)
    hero1.addTask(task3)


    assert.deepStrictEqual(hero1.sortTask("reward"), [task3, task1, task2]);
  });

})
