describe("spinningDancer", function() {

  var spinningDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    spinningDancer = new makeSpinningDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(spinningDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes it move up and down", function() {
    var oldPosition = spinningDancer.top;
    spinningDancer.step();
    expect(spinningDancer.$node.css('top') === oldPosition).to.be.false;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(spinningDancer, "step");
      expect(spinningDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(spinningDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(spinningDancer.step.callCount).to.be.equal(2);
    });
  });
});
