function Calculator(skinName) {
  this.skin = skinName;
}


Calculator.prototype.fizz = function(num) {
  $('#resultList ul').empty();
  for (var i = 1; i <= num; i++) {
    if (i % 15 == 0) {
      $('#resultList ul').append('<li>'+'fizz-pong'+'</li>');
    } else if (i % 5 == 0) {
      $('#resultList ul').append('<li>'+'pong'+'</li>');
    } else if (i % 3 == 0) {
      $('#resultList ul').append('<li>'+'fizz'+'</li>');
    } else {
      $('#resultList ul').append('<li>'+i+'</li>');
    }
  }
};

Calculator.prototype.reverseFizz = function(num) {
  $('#resultList ul').empty();
  for (var i = num; i >= 1; i--) {
    if (i % 15 == 0) {
      $('#resultList ul').append('<li>'+'fizz-pong'+'</li>');
    } else if (i % 5 == 0) {
      $('#resultList ul').append('<li>'+'pong'+'</li>');
    } else if (i % 3 == 0) {
      $('#resultList ul').append('<li>'+'fizz'+'</li>');
    } else {
      $('#resultList ul').append('<li>'+i+'</li>');
    }
  }
};

exports.calculatorModule = Calculator;
