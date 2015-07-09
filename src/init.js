$(document).ready(function(){
  window.dancers = [];
  

  var distanceThreshold = 75;
  var checkPosition = function()
  {
    for(var i = 0; i < dancers.length; i++) {
      if (dancers[i].$node.hasClass('BouncingDancer')) {
        for(var j = 0; j < dancers.length; j++) {
          if(i === j){
            continue;
          }
          var distance = distanceBetweenDancers(dancers[i], dancers[j]);
          if(distance < distanceThreshold) {
            changeDancer(dancers[i], "green");
            changeDancer(dancers[j], "green");
          } 
        }
      }
    }

  };

  var distanceBetweenDancers = function(dancerA, dancerB)
  {
    return Math.sqrt(Math.pow(dancerA.top - dancerB.top, 2) + 
                        Math.pow(dancerA.left - dancerB.left, 2));
  };

  var changeDancer = function(dancer, color) {
    dancer.$node.css("border-color", color);
  };

  setInterval(checkPosition, 100);
  //Every 100 ms,
    //Check all dancers
      //If the dancer is close to another dancer
        //do something

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position
    var dancerHeight = 150;
    var dancer = new dancerMakerFunction(
      $('body').height() - $("body").height() * .15*  Math.random() - dancerHeight,
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    dancers.push(dancer);
    $('body').append(dancer.$node);

    dancer.$node.mouseover(function() {
      changeDancer(dancer, "blue");
    });
  });

  $(".lineUpButton").on("click", function(event) {
    //Line up logic
    //Divide screen width by number of dancers
    var spacing = $('body').width() / dancers.length;
    //for each dancer
    for(var i = 0; i < dancers.length; i++) {
      var newX = i * spacing;
      var newY = $('body').height() * .65;
      //place that dancer at middle height & set horizontal position based on 
      //it's place in the array times the width found earlier.
      dancers[i].setCenter(newY, newX);
      dancers[i].setPosition(newY, newX);
    }
  });
  $(".flipOutButton").on("click", function(event) {
    for (var i = 0; i < dancers.length; i++) {
      if (dancers[i].$node.hasClass('flipped')) {
        dancers[i].$node.removeClass('flipped');
      } else {
        dancers[i].$node.addClass('flipped');
      }
    }
  });
});

