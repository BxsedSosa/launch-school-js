# Functions

## Function Definition

```javascript
function funcName(argument1, argument2) {
  // function body
  // function body
  // function body
}
```

1. What does this code log to the console? Does executing the `foo` function affect the output? Why or Why not?

```javascript
let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);
```

```
This code would log `1` since within the function `foo` it shadows the bar variable by initilizing its own variable `bar` and once that function ends that variable will be garbage collected then after log `bar` from line 1
```

2. In the exercises for the previous chapter, you wrote a dynamic greeter program named greeter.js. Add a function to this pgroam that solicits the user's first and last names in separate invocations; the function should return the appropriate name as a string. Use the return values to greet the user with their full name.

3. Write a program that uses a `multiply` funcition to multiply two numbers and returns the results. Ask the user to enter the two numbers, then output the numbers and result as a simple equation.

```
$ node multiply.js
Enter the first number: 3.141592653589793
Enter the second number: 2.718281828459045
3.141592653589793 * 2.718281828459045 = 8.539734222673566
```

```javascript
let rlSync = require("readline-sync");
main();

function main() {
  let firstNum = ask_user_number("first");
  let secondNum = ask_user_number("second");
  console.log(`${firstNum} * ${secondNum} = ${multiply(firstNum, secondNum)}`);
}

function ask_user_number(position) {
  return Number(rlSync.question(`Enter the ${position} number:\n`));
}

function multiply(num1, num2) {
  return num1 * num2;
}
```

4. What does the following code log to the console?

```javascript
function scream(words) {
  words = words + "!!!!";
  return;
  console.log(words);
}

scream("Yipeee");
```

```
This code would return nothing or log nothing
```

5. What does the following code log to the console?

```javascript
function scream(words) {
  return words + "!!!!";
}
scream("Yipeee");
```

```
This code would return `"Yipeee!!!!"` but nothing will be logged
```

6. In the code shown below, identify the following items:

- The function arguments
- The function body
- The function declaration
- The function invocation
- The function name
- The function parameters
- The function return value
- The names of all variables in this program

```javascript
function multiplyNumbers(num1, num2, num3) {
  let result = num1 * num2 * num3;
  return result;
}
let product = multiplyNumbers(2, 3, 4);
```

```
Arguments: 2, 3, 4
Body: Lines 2 & 3
declaration: line 1
invocation: line 4
name: multiplyNumbers
parameters: on line 1 & 2: num1, num2, num3
return value: line 4
All variables:
    on line 1: multiplyNumbers, num1, num2, num3
    on line 2: result, num1, num2, num3
    on line 3: result
    on line 4: product, multiplyNumbers

```

7. Without running the code, what do you think it will output?

```javascript
function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo("hello");
```

```
javascript would log the first arugment `hello` and print the second one with `undefined` since nothing was entered as a second parameter
```

8. Without running the following code what do you think will output?

```javascript
function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo(42, 3.1415, 2.718);
```

```
JS would print the first two arugments on line 6 and ignore the third arugment given
```
