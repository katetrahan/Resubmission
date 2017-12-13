// Business Logic
var numbers = function(number) {
  var result = [];

  for (var index = 0; index <= number ; index += 1) {
        result.push(index);

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
