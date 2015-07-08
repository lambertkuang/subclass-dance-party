var ImageDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
}
ImageDancer.prototype = Object.create(makeDancer.prototype);
ImageDancer.constructor = ImageDancer;
