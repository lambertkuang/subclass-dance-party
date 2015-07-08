describe("slidingDancer", function() {

  var slidingDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    slidingDancer = new makeSlidingDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(slidingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes it move left", function() {
    //save sliding dancers position
    var oldLeft = slidingDancer.left;
    slidingDancer.step();
    expect(slidingDancer.left < oldLeft).to.be.true;
    //expect that sliding dancer's position is 5 to the left of before
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(slidingDancer, "step");
      expect(slidingDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(slidingDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(slidingDancer.step.callCount).to.be.equal(2);
    });
  });
});
