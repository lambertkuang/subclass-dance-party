var BouncingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('BouncingDancer');
  this.xTraj = Math.floor(Math.random() * 10 - 5);
  this.yTraj = Math.floor(Math.random() * 10 - 5);

};

BouncingDancer.prototype = Object.create(makeDancer.prototype);
BouncingDancer.prototype.constructor = BouncingDancer;
BouncingDancer.prototype.step = function() {
  makeDancer.prototype.step.apply(this, arguments);
  this.setPosition(this.top,this.left);
  this.setCenter(this.yTraj + this.top, this.xTraj + this.left);

  if (this.top <= 0 || this.top >= $('body').height()) {
    this.yTraj = this.yTraj * -1;
  } 
  if (this.left <= 0 || this.left >= $('body').width()) {
    this.xTraj = this.xTraj * -1;
  }
  //this.top += this.yTraj;
  //this.left += this.xTraj;
};