// Initialize variables 
 var wins= 0;
 var losses= 0;
 var counter = 0;
 // Generate the target number by generating a random number between 19 and 120
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
   

