// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps){

  this.top;
  this.left;

  this.timeBetweenSteps = timeBetweenSteps;

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  //During the constructor, this is getting called before the subclass's constructor function
  //has finished calling. What if instead we did setTimeout right here?
  setTimeout(this.step.bind(this, this.timeBetweenSteps));
  this.setCenter(top, left);
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
  this.adjustPerspective();
};

makeDancer.prototype.perspectiveScale = function() {
  var adjustment = .3;
  var scalar = 1.5;
  var relativePosition = this.top / $('body').height();
  return relativePosition * scalar - adjustment; 
}

makeDancer.prototype.adjustPerspective = function() {
  var scale = this.perspectiveScale();
  this.$node.css("height", 200 * scale);
  this.$node.css("width", 200 * scale);
  this.$node.css("z-index", Math.floor(200 * scale));
}