// Business Logic
var numbers = function(userNumber) { //taking in num from user
  var result = []; //declaring and init new array called results


  for (var index = 0; index <= userNumber ; index += 1) {
        result.push(index); //push current lap you are on into the array

      if (userNumber % 3 === 0) { //checking if index is div by three, if yes:
 //push dave
      }

      //stuff to consider: use .includes to check if a string includes another string
      //charAt to to check which char exists at a certain index?
      //
  }

  return result; //do not delete me.
}


//User Interface Logic
$(document).ready(function() {
    $("#formOne").submit(function(event) {
      event.preventDefault();
      var userNumber = parseInt($("input").val()); // userInput;
      var result= numbers(userNumber); //result is an array.
                                      //

//if inside of a loop
      $("<li>" + result[i] + "</li>").appendTo("#result");



  })
});
