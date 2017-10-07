var Calculator = require('./../js/scripts.js').calculatorModule;

$(document).ready(function() {
  $('#fizzForm').submit(function(event) {
    event.preventDefault();
    var userInput = $('#userInput').val();
    calc = new Calculator('hot pink')
    calc.fizz(userInput);
  });
  $('#reverse').click(function(event) {
    event.preventDefault();
    var userInput = $('#userInput').val();
    calc = new Calculator('hot pink')
    calc.reverseFizz(userInput);
  });
});
