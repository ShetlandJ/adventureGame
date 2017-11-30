var assert = require("assert");
var Hero = require("../task.js");

describe( "Task", function(){
  beforeEach(function(){

    task1 = new Task("Do stuff", 10, 5, 100)
  });

  it("should have a description", function(){
    assert.strictEqual(task1.description, "Do stuff");
  });

  it("should have a difficulty level", function(){
    assert.strictEqual(task1.difficulty, 10);
  });

  it("should have an urgency level", function(){
    assert.strictEqual(task1.urgency, 5);
  });

  it("should have a reward", function(){
    assert.strictEqual(task1.reward, 100);
  });

  it("should start incomplete", function(){
    assert.strictEqual(task1.complete, false);
  });

  it("should be completeable", function(){
    task1.setComplete();
    assert.strictEqual(task1.complete, true);
  });
});
