$(document).ready(function() {

  let add, subtract, divide, multiply, calculate, percentage, clear, allClear, plusMinus, temp = '',
    firstNum, secondNum, total = 0, displayValue, performOperation;

  subtract = function(num1, num2) {
    return num1 - num2;
  };
  
  var add = function(num1, num2) {
    return num1 + num2;
  };
  
  multiply = function(num1, num2) {
    return num1 * num2;
  };
  
  divide = function(num1, num2) {
    return num1 / num2;
  };
  
  plusMinus = function() {
    return temp * -1;
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
  
  $('.int').click(function() {
    if (temp === 0) {
      temp = $(this).val().toString();
      displayValue(temp);
    } else {
      temp += $(this).val().toString();
      displayValue(temp);
    }
  });
  
  $('.operation').click(function() {
    var operation = $(this).val();
    if (firstNum === 0) {
    firstNum = temp;
    displayValue(temp);
    temp = 0;
    } else {
      secondNum = temp;
      temp = 0;
      performOperation(firstNum, secondNum, operation);
    }
    
  });
  performOperation = function(a, b, operation_type) {
    switch (operation_type) {
      case '+':
        total = add(a,b);
        break;
      case '-':
        subtract(a,b);
        break;
      case '&#247;':
        divide(a,b);
        break;
      case 'x':
        multiply(a,b);
        break;
      case 'C':
        clear();
        break;
      case 'AC':
        allClear();
        break;
      case '%':
        percentage();
        break;
      case '&#177;':
        plusMinus(temp);
        break;
      case '=':
        displayValue(total);
        break;
    }

    firstNum = total;
  }
  
  displayValue = function(value) {
    $('#display').val(value);

  };

});