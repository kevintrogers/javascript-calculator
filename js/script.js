$(document).ready(function() {

  let temp = '',
    firstNum = 0,
    secondNum = 0,
    total, display = $('#display'),
    displayValue, storedOperator, performOperation;

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
    }
    else {
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


  display.keypress(function(e) {
    //if value !num check for existence num 1 
    //store operation value
    //if no num display val is num 1 else is num 2
    //perform operation
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
      // Allow: Ctrl/cmd+A
      (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
      // Allow: Ctrl/cmd+C
      (e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true)) ||
      // Allow: Ctrl/cmd+X
      (e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true)) ||
      // Allow: home, end, left, right
      (e.keyCode >= 35 && e.keyCode <= 39)) {
      // let it happen, don't do anything
      return;
    }
    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
      e.preventDefault();
    }

    if (temp === 0) {

      temp = $(this).val().toString();

    }
    else {

      temp += $(this).val().toString();

    }


  });


  $('.int').click(function() {

    if (temp === 0) {
      temp = $(this).val().toString();
      displayValue(temp);
    }
    else {
      temp += $(this).val().toString();
      displayValue(temp);
    }
  });



  $('.operation').click(function() {
    setOperation();
  });

  function setOperation() {


    operation = $(this).val();
    if (firstNum === 0) {
      firstNum = temp;
      displayValue(temp);
      temp = 0;
      storedOperator = operation;
    }
    else {
      secondNum = temp;
      performOperation(firstNum, secondNum, storedOperator);
      displayValue(total);
      storedOperator = operation;
    }


  }


  $('.imm-op').click(function() {
    operation = $(this).val();
    performOperation(firstNum, secondNum, operation);
  });

  performOperation = function(a, b, operation_type) {
    let computationString = a + operation_type + b;
    total = eval(computationString);

    displayValue(total);
    temp = 0;
    firstNum = total;
  };

  displayValue = function(value) {
    display.val(value);

  };

});
