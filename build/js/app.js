(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./../js/scripts.js":2}],2:[function(require,module,exports){
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
}

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
}

exports.calculatorModule = Calculator;

},{}]},{},[1]);
