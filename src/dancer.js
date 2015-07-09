// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps){

  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  //During the constructor, this is getting called before the subclass's constructor function
  //has finished calling. What if instead we did setTimeout right here?
  setTimeout(this.step.bind(this, this.timeBetweenSteps));
  this.setPosition(top, left);
};

makeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
}

makeDancer.prototype.setCenter = function(top, left) {
  this.top = top;
  this.left = left;
};