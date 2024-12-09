1. Isn't it Odd?

Write a function that takes one integer argument, which may be positive, negative, or zero. This method returns true if the number's absolute value is odd. You may assume that the argument is a valid integer value.

Examples:

```javascript
console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true
```

My Answer:

```javascript
function isOdd(number) {
  return Math.abs(number) % 2 === 0;
}
```

2. Odd Numnbers

Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

My Answer:

```javascript
function oddNums() {
  for (let i = 1; i <= 99; i += 2) {
    console.log(i);
  }
}
```

3. Even Numbers

Log all even numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

My Answer:

```javascript
function evenNums() {
  for (let i = 2; i <= 99; i += 2) {
    console.log(i);
  }
}
```

4. How big is the room?

Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.

Example:

```
Enter the length of the room in meters:
10
Enter the width of the room in meters:
7
The area of the room is 70.00 square meters (753.47 square feet).
```

My Answer:

```javascript
const RL_SYNC = require("readline-sync");

let length = Number(
  RL_SYNC.question("Enter the length of the room in meters:\n"),
);
let width = Number(
  RL_SYNC.question("Enter the width of the room in meters:\n"),
);
let sqaureMeter = length * width;
let squareFeet = convertMeasurement(length) * convertMeasurement(width);

function convertMeasurement(number) {
  return number * 10.7639;
}

console.log(
  `The area of the room is ${sqaureMeter.toFixed(2)} square meters (${squareFeet.toFixed(2)} square feet)`,
);
```

5. Tip Calculator

Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. The program must compute the tip, and then log both the tip and the total amount of the bill to the console. You can ignore input validation and assume that the user will enter numbers.

Example:

```
What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00
```

My Answer:

```javascript
const RL_SYNC = require("readline-sync");

let bill = Number(RL_SYNC.question("What is the bill?\n"));
let tipPercentage = convertTip(
  Number(RL_SYNC.question("What is the tip percentage?\n")),
);
let tip = bill * tipPercentage;
let total = bill + tip;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);

function convertTip(number) {
  return number * 0.01;
}
```

6. Sum or Product of Consecutive Integers

My Answer:

```javascript

```

7. Short Long Short

My Answer:

```javascript

```

8. Leap Years Part 1

My Answer:

```javascript

```

9. Leap Years Part 2

My Answer:

```javascript

```

10. Multiples of 3 & 5

My Answer:

```javascript

```

11. UTF-16 String Values

My Answer:

```javascript

```
