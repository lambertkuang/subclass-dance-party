var makeSpinningDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  //Use jquery to add class "spinningDancer"
  this.$node.addClass('spinningDancer');
  this.radius = 20;
};

makeSpinningDancer.prototype = Object.create(makeDancer.prototype);
makeSpinningDancer.prototype.constructor = makeSpinningDancer;
makeSpinningDancer.prototype.step = function() {
  makeDancer.prototype.step.apply(this, arguments);
  this.setPosition(this.top + Math.sin(new Date().getTime() / 1000) * this.radius, this.left);
};
