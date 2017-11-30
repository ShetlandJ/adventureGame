var assert = require("assert");
var Hero = require("../hero.js");

describe( "Hero", function(){
  beforeEach(function(){

    hero1 = new Park("Superman", "Chicken")
  });

  it("should have a name", function(){
    assert.strictEqual(hero1.name, "Superman");
  });

  it("should have a favourite food type", function(){
    assert.strictEqual(hero1.favouriteFood, "Superman");
  });

  it("should have 100 health at the start", function(){
    assert.strictEqual(hero1.health, 100);
  });

  it("should be able to lose health by number", function(){
    hero1.loseHealth(10);
    assert.strictEqual(hero1.health, 90);
  });

  it("should be able to lose health by number", function(){
    hero1.loseHealth(10);
    hero1.loseHealth(10);
    hero1.gainHealth(5);
    assert.strictEqual(hero1.health, 85);
  });

  it("quests start as zero", function(){
    assert.strictEqual(hero1.tasks.length, 0);
  });

  it("quests start as zero", function(){
    assert.strictEqual(hero1.tasks.length, 0);
  });
)};
