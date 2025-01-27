1.

My Answer:

```javascript

```

2.

My Answer:

```javascript

```

3.  Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

Write a function that takes an integer as an argument and returns the maximum rotation of that integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

My Answer:

```javascript
function maxRotation(num) {
  let strNum = String(num).split("");
  if (strNum.length === 1) {
    return num;
  }

  for (let i = 0; i < strNum.length - 1; i++) {
    strNum.push(strNum.splice(i, 1));
  }

  return Number(strNum.join(""));
}
```

4.  A stack is a list of values that grows and shrinks dynamically. A stack may be implemented as an Array that uses two Array methods: Array.prototype.push and Array.prototype.pop.

A stack-and-register programming language is a language that uses a stack of values. Each operation in the language operates on a register, which can be thought of as the current value. The register is not part of the stack. An operation that requires two values pops the topmost item from the stack (i.e., the operation removes the most recently pushed value from the stack), operates on the popped value and the register value, and stores the result back in the register.

This sounds complex, but the behavior is straightforward and easy to walk through manually. Consider a MULT operation in a stack-and-register language. It removes the value from the stack, multiplies the removed stack value with the register value, then stores the result back in the register. For example, if we start with a stack of [3, 6, 4] (where 4 is the topmost item in the stack) and a register value of 7, the MULT operation mutates the stack to [3, 6] (the 4 is removed), and the result of the multiplication, 28, is left in the register. If we do another MULT at this point, the stack is mutated to [3], and the register is left with the value 168.

Write a function that implements a miniature stack-and-register-based programming language that has the following commands (also called operations or tokens):

- n : Place a value, n, in the register. Do not modify the stack.
- PUSH : Push the register value onto the stack. Leave the value in the register.
- ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
- SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
- MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
- DIV : Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
- REMAINDER : Pop a value from the stack and divide the register value by the popped stack value, storing the integer remainder of the division back in the register.
- POP : Remove the topmost item from the stack and place it in the register.
- PRINT : Print the register value.

All operations are integer operations (which is only important with DIV and REMAINDER).

Programs will be supplied to your language function via a string argument. Your function may assume that all arguments are valid programs — i.e., they will not do anything like trying to pop a non-existent value from the stack, and they won't contain any unknown tokens.

Initialize the stack and register to the values [] and 0, respectively.

```
PEDAC

P: Create a program that takes a string of commands seperated by spaces. Commands can contain a number that needs to be used. And there are also commands to manipulate the numbers or printing them


E:

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)

D:

Creating a stack using an array and a register that will start at 0, will also need to save the number for when it is needed

A:

Need to verify is the current command is a number or not:

if (!isNaN(Number(commands[i])) {
  register = Number(commands[i]);
}

create a function that handles all string commands:

if (command === "PRINT") {
  console.log(register);
}
if (command === "PUSH") {
  stack.push(register);
}
if (command === "POP") {
  register = stack.pop();
}
if (command === "ADD") {
  register += stack.pop();
}
if (command === "SUB") {
  register -= stack.pop();
}
if (command === "MULT") {
  register *= stack.pop();
}
if (command === "DIV") {
  register /= stack.pop();
}
if (command === "REMAINDER") {
  register %= stack.pop();
}

C:
```

My Answer:

```javascript
function minilang(statements) {
  let commands = statements.split(" ");
  let stack = [];
  let register = 0;

  while (commands.length > 0) {
    let command = commands.shift();

    if (!isNaN(Number(command))) {
      register = Number(command);
      continue;
    }

    register = execCommand(command, stack, register);
  }
}

function execCommand(command, stack, register) {
  if (command === "PRINT") {
    console.log(register);
  } else if (command === "PUSH") {
    stack.push(register);
  } else if (command === "POP") {
    register = stack.pop();
  } else if (command === "ADD") {
    register += stack.pop();
  } else if (command === "SUB") {
    register -= stack.pop();
  } else if (command === "MULT") {
    register *= stack.pop();
  } else if (command === "DIV") {
    register = Math.floor(register / stack.pop());
  } else if (command === "REMAINDER") {
    register %= stack.pop();
  }

  return register;
}
```

5.  Write a function that takes a sentence string as an argument and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

Example:

```javascript
wordToDigit("Please call me at five five five one two three four. Thanks.");
// "Please call me at 5 5 5 1 2 3 4. Thanks."
```

My Answer:

```javascript
const numbers = {
  "zero": 0;
  "one": 1;
  "two": 2,
  "three": 3,
  "four": 4,
  "five": 5,
  "six": 6,
  "seven": 7,
  "eight": 8,
  "nine": 9
}

function wordToDigit(string) {
  return strArr.split(' ').map((ele) => {
    if (Object.keys(numbers).includes(ele)) {
        return numbers[ele];
    }
    return ele;
  })
}
```

6. The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...) such that the first two numbers are 1 by definition, and each subsequent number is the sum of the two previous numbers. Fibonacci numbers often appear in mathematics and nature.

Computationally, the Fibonacci series is a simple series, but the results grow at an incredibly rapid rate. For example, the 100th Fibonacci number is 354,224,848,179,261,915,075—that's enormous, especially considering that it takes six iterations just to find the first 2-digit Fibonacci number.

Write a function that calculates and returns the index of the first Fibonacci number that has the number of digits specified by the argument. (The first Fibonacci number has an index of 1.)

You may assume that the argument is always an integer greater than or equal to 2.

```
PEDAC

P:

Given a integer return how many iterations it took for the Fibonacci length to reach that given integer

E:

findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
findFibonacciIndexByLength(1000n) === 4782n;
findFibonacciIndexByLength(10000n) === 47847n;

D:

Numbers and keeping track of how many iterations that occur


A:

Need to create a Fibonacci function


C:
```

My Answer:

```javascript
function findFibonacciIndexByLength(maxFibLength) {
  let fib;
  let counter = 0n;
  let fib1 = 1n;
  let fib2 = 1n;
  while (String(fib).length < maxFibLength) {
    counter += 1n;

    if (counter > 2) {
      temp = fib1;
      fib1 = fib1 + fib2;
      fib2 = temp;
    }
  }
  return counter;
}
```

7. The Fibonacci series is a sequence of numbers in which each number is the sum of the previous two numbers. The first two Fibonacci numbers are 1 and 1. The third number is 1 + 1 = 2, the fourth is 1 + 2 = 3, the fifth is 2 + 3 = 5, and so on. In mathematical terms, this can be represented as:

```
F(1) = 1
F(2) = 1
F(n) = F(n - 1) + F(n - 2) where n > 2

```

My Answer:

```javascript
function fibonacci(number) {
  if (number <= 2) {
    return 1;
  }

  return fibonacci(number - 1) + fibonacci(number - 2);
}
```

8.

My Answer:

```javascript
function fib(maxFib) {
  let fib1 = 1;
  let fib2 = 1;
  for (let i = 2; i < maxFib; i++) {
    temp = fib1;
    fib1 = fib1 + fib2;
    fib2 = temp;
  }
  return fib1;
}
```

9.

My Answer:

```javascript
function fibonacci(number) {
  let cache = {};
  let string = "fibonacci(number - 1) + fibonacci(number - 2)";
  if (number <= 2) {
    return 1;
  }

  if (!Object.keys(cache).includes(string)) {
    cache[string] = fibonacci(number - 1) + fibonacci(number - 2);
    return cache[string];
  } else {
    return;
  }
}
```

10.

My Answer:

```javascript

```
