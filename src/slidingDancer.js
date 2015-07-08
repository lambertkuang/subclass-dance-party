var makeSlidingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("slidingDancer");
  this.size = 15;
}

makeSlidingDancer.prototype = Object.create(makeDancer.prototype);
makeSlidingDancer.prototype.constructor = makeSlidingDancer;

makeSlidingDancer.prototype.step = function() {
  makeDancer.prototype.step.apply(this, arguments);
  this.$node.css('border', this.size + 'px solid green');
  this.size++;
};