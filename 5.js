// you have two numbers in two variables, called: num1, num2


// now declare a variable called result.
// if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

// write a simple if-else.

// also, write it using ternary operator.

var num1 = 10;
var num2 = 20;
var result;
console.log("Before:-------------------------------");
console.log(num1 + '\n' + num2 + '\n' + result + '\n');

num1 > num2? result = 2 * num1: result = num1 + num2;
console.log("After:--------------------------------");
console.log(num1 + '\n' + num2 + '\n' + result + '\n');