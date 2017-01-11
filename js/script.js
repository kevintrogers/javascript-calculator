$(document).ready(function() {

  var add, subtract, divide, multiply, calculate, percentage, clear, allClear, plusMinus, temp = '',
    firstNum, secondNum, total, displayTotal, displayCurrent;

  subtract = function(num1, num2) {
    return num1 - num2;
  };
  add = function(num1, num2) {
    return num1 + num2;
  };
  multiply = function(num1, num2) {
    return num1 * num2;
  };
  divide = function(num1, num2) {
    return num1 / num2;
  };
  plusMinus = function(thisNum) {
    thisNum *= -1;
  };
  clear = function() {
    total = 0;
    displayTotal(total);
  };
  allClear = function() {
    total = 0;
    firstNum = 0;
    secondNum = 0;
    displayTotal(total);
  };
  $('input.int').click(function() {
    if (temp === 0) {
      temp = $(this).val().toString();
      displayCurrent(temp);
    } else {
      temp += $(this).val().toString();
      displayCurrent();
    }
  });
  displayCurrent = function() {
    $('#display').val(temp);

  };

});