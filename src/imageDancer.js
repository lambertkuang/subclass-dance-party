var ImageDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('imageDancer bounce');
};
ImageDancer.prototype = Object.create(makeDancer.prototype);
ImageDancer.prototype.constructor = ImageDancer;
ImageDancer.prototype.step = function() {
  makeDancer.prototype.step.apply(this, arguments);
};
