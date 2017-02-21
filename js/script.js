$(document).ready(function() {
//1-15-2017 calculator working RPN style
  let subtract, add, divide, multiply, calculate, percentage, clear, allClear, plusMinus, temp = '',
    setOperation,  operation_arr, firstNum = 0, secondNum = 0, total, display = $('#display'), displayValue, storedOperator, performOperation;

  subtract = function(num1, num2) {
    total = Number(num1) - Number(num2);
    return total;
  };
  
  add = function(num1, num2) {
    total = Number(num1) + Number(num2);
    return total;
  };
  
  multiply = function(num1, num2) {
    total = (Number(num1)) * (Number(num2));
    return total;
  };
  
  divide = function(num1, num2) {
    total = (Number(num1)) / (Number(num2));
    return total;
  };
  
  plusMinus = function() {
    if (total === 0) {
    total = Number(temp) * -1;
    } else {
      total = Number(total) * -1;
    }
    
   };
  
  clear = function() {
    total = 0;
    temp = 0;
    displayValue(total);
  };
  
  allClear = function() {
    total = 0;
    firstNum = 0;
    secondNum = 0;
    displayValue(total);
  };
  
   display.keypress(function() {
     //if value !num check for existence num 1 
     //store operation value
     //if no num display val is num 1 else is num 2
     //perform operation
     
    if (operation_arr.indexOf($(this).val().toString()) != -1) 
    {
      temp = display.slice(0,-1);
    }
       
    if (temp === 0) {

      temp = $(this).val().toString();

    } else {
  
      temp += $(this).val().toString();

    }
   });
  
  $('.int').click(function() {
    
    if (temp === 0) {
      temp = $(this).val().toString();
      displayValue(temp);
    } else {
      temp += $(this).val().toString();
      displayValue(temp);
    }
  }); 
  
 //display.keypress()
  
  $('.operation').click(function() {

    operation = $(this).val();
    if (firstNum === 0) {
    firstNum = temp;
    displayValue(temp);
    temp = 0;
    storedOperator = operation;
    } else {
      secondNum = temp;
      performOperation(firstNum, secondNum, storedOperator);
      displayValue(total);
      storedOperator = operation;
    }
    
    
  });
  $('.imm-op').click(function() {
    operation = $(this).val();
    performOperation(firstNum, secondNum, operation);
  });
  performOperation = function(a, b, operation_type) {
    switch (operation_type) {

      case '-':
        subtract(a,b);
        break;
      case '+':
        total = add(a,b);
        break;
      case '/':
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
      case 'plus_minus':
        plusMinus(temp);
        break;
      case '=':
        displayValue(total);
        break;
    }
    displayValue(total);
    temp = 0;
    firstNum = total;
  }
  
  displayValue = function(value) {
    display.val(value);

  };

});