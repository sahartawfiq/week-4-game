// 
 
  // Generate the target number by generating a random number between 19 and 120
 var wins= 0;
 var losses= 0;
 var counter = 0;
 var targetNumber= Math.floor(Math.random() * 100)+19;
  console.log(targetNumber);
  $("#number-to-guess").text(targetNumber);
  // Create an array to hold the generated crystal values
  var crystalValues = [];
  
  function generateCV(){
  // A loop to generate the crystal values
    for (var i = 0; i < 4; i++) {
      crystalValues[i] = Math.floor(Math.random() * 12) + 1;
      console.log("the index is   " + i);
      console.log(crystalValues[i]);
    
    }
  }
  generateCV();
   $(".crystals").on("click", function() {
      
      var temp = $(this).attr("value");
      var tempInt= parseInt(temp);
      console.log(temp);
      var number= crystalValues[tempInt];
      
      console.log(number);
      counter += number;
      $("#sum").text(counter);
      // alert("New score: " + counter);

    if (counter === targetNumber) {
      // alert("You win!");
      wins+=1;
      $("#no-of-wins").text(wins);
      generateCV();
      counter=0;
      $("#sum").text(counter);
      targetNumber= Math.floor(Math.random() * 100)+19;
      console.log("win"+targetNumber);
      $("#number-to-guess").text(targetNumber);
    }

    else if (counter > targetNumber) {
      losses+=1;
      $("#no-of-losses").text(losses);
      generateCV();
      counter=0;
      $("#sum").text(counter);
      targetNumber= Math.floor(Math.random() * 100)+19;
      console.log("lose"+targetNumber);
      $("#number-to-guess").text(targetNumber);

    }

  });
    // var imageAttr = imgArray[i];

    // imgArray[i].attr = "data-crystalvalue", crystalValues[i];
    // console.log(imageAttr);
 
    // For each iteration, we will create an imageCrystal
    // var Crystal = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
  //   Crystal.addClass("crystal-image");

  //   // Each Crystal will be given a src link to the crystal image
  //   imageCrystal.attr("src", assets/images/);

  //   // Each Crystal will be given a data attribute called data-crystalValue.
  //   // This data attribute will be set equal to the array value.
  //   imageCrystal.attr("data-crystalvalue", numberOptions[i]);

  //   // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
  //   $("#crystals").append(imageCrystal);
 
  // var temp = "";
  // This time, our click event applies to every single crystal on the page. Not just one.
 
    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
    
    
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    

    // All of the same game win-lose logic applies. So the rest remains unchanged.
      // var imgArray = [];
  // imgArray[0] = new Image();
  // imgArray[0].src = 'assets/images/crystal1.png';
  // imgArray[1] = new Image();
  // imgArray[1].src = 'assets/images/crystal2.png';
  // imgArray[2] = new Image();
  // imgArray[2].src = 'assets/images/crystal3.png';
  // imgArray[3] = new Image();
  // imgArray[3].src = 'assets/images/crystal4.png';



