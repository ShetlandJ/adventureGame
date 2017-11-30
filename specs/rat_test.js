var Rat = require("../rat.js");

describe( "Rat", function(){

  beforeEach(function(){

    food1 = new Food("Chicken", 50);
    rat1 = new Rat();

  });

  it("can poison food", function(){
    rat1.touchFood;
    assert.strictEqual(food1.poison, true);
  });
});
