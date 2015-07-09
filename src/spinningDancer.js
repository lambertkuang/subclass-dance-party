var makeSpinningDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('spinningDancer animated');
  this.radius = 20;
  this.timeScale = 2000;
  this.bigA = Math.random() * 500;
  this.littleA = Math.random() * 10;
  this.bigB = Math.random() * 70;
  this.littleB = Math.random() * 10;
  this.delta = Math.PI / 2;
  this.pause = false;
};

makeSpinningDancer.prototype = Object.create(makeDancer.prototype);
makeSpinningDancer.prototype.constructor = makeSpinningDancer;
makeSpinningDancer.prototype.step = function() {
  makeDancer.prototype.step.apply(this, arguments);
  var newPos = {x: this.left, y: this.top};
  if (!this.pause) {
    newPos = this.calculatePath();
  }
  this.setCenter(newPos.y, newPos.x);
  this.setPosition(newPos.y, newPos.x);
 };
makeSpinningDancer.prototype.calculatePath = function() {
  var time = new Date().getTime() / this.timeScale;

  var x = this.bigA * Math.sin(this.littleA * time + this.delta) + 700;
  var y = this.bigB * Math.sin(this.littleB * time) + 300;
  return {x: x, y: y};
}

