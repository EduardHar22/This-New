"use strict"

function Calculator(){};
Calculator.prototype.add = function(a,b){return a + b};
Calculator.prototype.multiply = function(a,b){return a * b};
Calculator.prototype.divide = function(a,b){return a / b};
Calculator.prototype.subtract = function(a,b){return a - b};
const calculator = new Calculator();

console.log(calculator.subtract(3,3))