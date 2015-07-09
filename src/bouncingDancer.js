var BouncingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('BouncingDancer');
  // this.xTraj = Math.floor(Math.random() * 100 - 5);
  // this.yTraj = Math.floor(Math.random() * 100 - 5);
  this.yTraj = 5;
  this.xTraj = 5;
};

BouncingDancer.prototype = Object.create(makeDancer.prototype);
BouncingDancer.prototype.constructor = BouncingDancer;
BouncingDancer.prototype.step = function() {
  makeDancer.prototype.step.apply(this, arguments);
  this.setPosition(this.top,this.left);
  this.setCenter(this.yTraj + this.top, this.xTraj + this.left);
  //this.top += this.yTraj;
  //this.left += this.xTraj;
};