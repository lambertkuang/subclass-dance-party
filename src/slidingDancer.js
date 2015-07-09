var makeSlidingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("slidingDancer");
  this.size = 15;
}

makeSlidingDancer.prototype = Object.create(makeDancer.prototype);
makeSlidingDancer.prototype.constructor = makeSlidingDancer;

makeSlidingDancer.prototype.step = function() {
  makeDancer.prototype.step.apply(this, arguments);
  this.$node.css({'height': this.size,
    'width': this.size
  });
  this.setPosition(this.top, this.left);
  this.size++;
};