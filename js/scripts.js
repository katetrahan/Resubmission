// Business Logic
var numbers = function(number) {
  var result = [];


  for (var index = 0; index <= number ; index += 1) {
        result.push(index);

    if (number % 3 === 0) {
    return "I'm sorry Dave. I'm afraid I can't do that."
}

} return result
}


//User Interface Logic
$(document).ready(function() {
    $("#formOne").submit(function(event) {
      event.preventDefault();
      var number = parseInt($("input").val()); // userInput;
      var result= numbers(number);

      $("<li>" + result + "</li>").appendTo("#result");



  })
});
