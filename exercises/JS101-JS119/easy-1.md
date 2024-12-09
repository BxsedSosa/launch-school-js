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

Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

Examples:

```
Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15.
```

```
Please enter an integer greater than 0: 6
Enter "s" to compute the sum, or "p" to compute the product. p

The product of the integers between 1 and 6 is 720.
```

My Answer:

```javascript
const RL_SYNC = require("readline-sync");

let userNumber = RL_SYNC.question("Please enter a integer greater than 0: ");
let userInput = RL_SYNC.question(
  "Enter 's' to computer the sum, or 'p' to compute the product: ",
);

if (userInput == 's') {
    console.log(`The sum of the integer between 1 and ${userNumber} is ${sum(userNumber)}.`
}

if (userInput == 'p') {
    console.log(`The product of the integer between 1 and ${userNumber} is ${product(userNumber)}.`
}

function sum(number) {
  let sum = 0;

  for (let i = 1; i < number; i++) {
    sum += i;
  }

  return sum;
}

function product(number) {
  let product = 1;

  for (let i = 1; i < number; i++) {
    product *= i;
  }

  return product;
}
```

7. Short Long Short

Write a function that takes two strings as arguments, determines the length of the two strings, and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. You may assume that the strings are of different lengths.

Examples:

```javascript
shortLongShort("abc", "defgh"); // "abcdefghabc"
shortLongShort("abcde", "fgh"); // "fghabcdefgh"
shortLongShort("", "xyz"); // "xyz"
```

My Answer:

```javascript
function shortLongShort(string1, string2) {
  let strLen1 = string1.length;
  let strLen2 = string2.length;

  if (strLen1 > strLen2) {
    return string2 + string1 + string2;
  }

  if (strLen2 > strLen1) {
    return string1 + string2 + string1;
  }
}
```

8. Leap Years Part 1

In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly divisible by 4, unless the year is also divisible by 100. If the year is evenly divisible by 100, then it is not a leap year, unless the year is also evenly divisible by 400.

Assume this rule is valid for any year greater than year 0. Write a function that takes any year greater than 0 as input and returns true if the year is a leap year, or false if it is not a leap year.

Examples:

```javascript
isLeapYear(2016); // true
isLeapYear(2015); // false
isLeapYear(2100); // false
isLeapYear(2400); // true
isLeapYear(240000); // true
isLeapYear(240001); // false
isLeapYear(2000); // true
isLeapYear(1900); // false
isLeapYear(1752); // true
isLeapYear(1700); // false
isLeapYear(1); // false
isLeapYear(100); // false
isLeapYear(400); // true
```

My Answer:

```javascript
function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      }
      return false;
    }
    return true;
  }
  return false;
}
```

9. Leap Years Part 2

This is a continuation of the previous exercise.

The British Empire adopted the Gregorian Calendar in 1752, which was a leap year. Prior to 1752, they used the Julian Calendar. Under the Julian Calendar, leap years occur in any year that is evenly divisible by 4.

Using this information, update the function from the previous exercise to determine leap years both before and after 1752.

Examples:

```javascript
isLeapYear(2016); // true
isLeapYear(2015); // false
isLeapYear(2100); // false
isLeapYear(2400); // true
isLeapYear(240000); // true
isLeapYear(240001); // false
isLeapYear(2000); // true
isLeapYear(1900); // false
isLeapYear(1752); // true
isLeapYear(1700); // true
isLeapYear(1); // false
isLeapYear(100); // true
isLeapYear(400); // true
```

My Answer:

```javascript
function isLeapYear(year) {
  if (year > 1752) {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          return true;
        }
        return false;
      }
      return true;
    }
    return false;
  }

  return year % 4 === 0;
}
```

10. Multiples of 3 & 5

Write a function that computes the sum of all numbers between 1 and some other number, inclusive, that are multiples of 3 or 5. For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

You may assume that the number passed in is an integer greater than 1.

Examples:

```javascript
multisum(3); // 3
multisum(5); // 8
multisum(10); // 33
multisum(1000); // 234168
```

My Answer:

```javascript
function multisum(number) {
  let sum = 0;

  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}
```

11. UTF-16 String Values

Write a function that determines and returns the UTF-16 string value of a string passed in as an argument. The UTF-16 string value is the sum of the UTF-16 values of every character in the string. (You may use String.prototype.charCodeAt() to determine the UTF-16 value of a character.)

Examples:

```
utf16Value('Four score');         // 984
utf16Value('Launch School');      // 1251
utf16Value('a');                  // 97
utf16Value('');                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
utf16Value(OMEGA);                  // 937
utf16Value(OMEGA + OMEGA + OMEGA);  // 2811
```

My Answer:

```javascript
function utf16Value(string) {
  let stringValue = 0;

  for (let i = 0; i < string.length; i++) {
    stringValue += string.charCodeAt(i);
  }
  return stringValue;
}
```
