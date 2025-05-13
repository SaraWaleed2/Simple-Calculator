var answer = document.getElementById("ans");
var num1 = null;
var num2 = null;
var operator = null;

function EnterNumber(elm) {
  answer.innerHTML += elm;
}

function EnterClear() {
  answer.innerHTML = " ";
  num1 = null;
  num2 = null;
  operator = null;
}

function EnterOperator(elm) {
  answer.innerHTML += elm;
}

function EnterEqual() {
  var numbers = answer.innerHTML.split(/[\+\-\*\/\%]/);
  operator = answer.innerHTML.match(/[\+\-\*\/\%]/)[0];

  for (var x = 0; x < numbers.length; x++) {
    numbers[x] = +numbers[x];
    num1 = numbers[0];
    num2 = numbers[1];
  }
  //   console.log(numbers);
  //   console.log(num1);
  //   console.log(num2);
  //   console.log(operator);

  if (operator == "+") {
    answer.innerHTML = num1 + num2;
  } else if (operator == "-") {
    answer.innerHTML = num1 - num2;
  } else if (operator == "*") {
    answer.innerHTML = num1 * num2;
  } else if (operator == "%") {
    num2 === 0
      ? (answer.innerHTML = "Error divide of Zero !!")
      : (answer.innerHTML = num1 % num2);
  } else if (operator == "/") {
    num2 !== 0
      ? (answer.innerHTML = num1 / num2)
      : (answer.innerHTML = "Error divide of Zero !!");
  } else {
    answer.innerHTML = "Invalid Operator";
  }
}

function backOne() {
  answer.innerHTML = answer.innerHTML.slice(0, -1);
}
