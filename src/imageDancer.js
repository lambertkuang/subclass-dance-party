var ImageDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('imageDancer');
}
ImageDancer.prototype = Object.create(makeDancer.prototype);
ImageDancer.prototype.constructor = ImageDancer;
ImageDancer.prototype.step = function() {
  makeDancer.prototype.step.apply(this, arguments);
  if (this.$node.hasClass('flipped')) {
    this.$node.removeClass('flipped');
  } else {
    this.$node.addClass('flipped');
  }
};
