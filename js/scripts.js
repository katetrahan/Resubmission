// Business Logic
var numbers = function(userNumber) { //taking in num from user
  var result = []; //declaring and init new array called results


  for (var index = 0; index <= userNumber ; index += 1) {
    //push current lap you are on into the array
    var stringNumber = index.toString();// turns index to string in order to use includes.

    if (index % 3 === 0 && index > 0) {
    result.push("I'm sorry Dave, I'm afraid I can't do that"); //checking if index is div by three, if yes:
    // //push dave
  } else if (stringNumber.includes("0")) {
    result.push("beep!");
  } else if (stringNumber.includes("1")) {
    result.push("boop!");
  } else {
    result.push(index);
  }


}
  return result; //do not delete me.
}


//User Interface Logic
$(document).ready(function() {
    $("#formOne").submit(function(event) {
      event.preventDefault();
      var userNumber = parseInt($("input").val()); // userInput;
      var result= numbers(userNumber); //result is an array.
      $("#result").show();                                //

      $("<li>" + result + "</li>").appendTo("#result");
      $("#result").last().click(function() {
      $("#result").empty();
})
  })
});
