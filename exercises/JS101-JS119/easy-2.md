1. Welcome Stranger

Create a function that takes 2 arguments, an array and an object. The array will contain 2 or more elements that, when combined with adjoining spaces, will produce a person's name. The object will contain two keys, "title" and "occupation", and the appropriate values. Your function should return a greeting that uses the person's full name, and mentions the person's title.

Example:

```javascript
console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" }),
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.
```

My Answer:

```javascript
function greeter(arr, obj) {
  let name = arr.join(" ");

  console.log(
    `Hello, ${name}! Nice to have a ${obj["title"]} ${obj["occupation"]} around.`,
  );
}
```

2. Greeting a user

Write a program that will ask for user's name. The program will then greet the user. If the user writes "name!" then the computer yells back to the user.

Examples:

```
What is your name? Bob
Hello Bob.
```

```
What is your name? Bob!
HELLO BOB. WHY ARE WE SCREAMING?
```

My Answer:

```javascript
const RL_SYNC = require("readline-sync");
function greetUser() {
  let name = RL_SYNC.question("What is your name? ");

  if (name[name.length - 1] === "!") {
    name = name.slice(0, -1);
    console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`);
  } else {
    console.log(`Hello ${name}.`);
  }
}
```

3. Multiplying Two Numbers

Create a function that takes two arguments, multiplies them together, and returns the result.

Example:

```
console.log(multiply(5, 3) === 15); // logs true
```

My Answer:

```javascript
function multiply(number1, number2) {
  return number1 * number2;
}
```

4. Square an Argument

Using the multiply() function from the "Multiplying Two Numbers" problem, write a function that computes the square of its argument (the square is the result of multiplying a number by itself).

Example:

```javascript
console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true
```

My Answer:

```javascript
function square(number)) {
    return multiply(number, number)
}

function multiply(number1, number2) {
  return number1 * number2;
}
```

5. Arithmetic Integer

Write a program that prompts the user for two positive integers, and then prints the results of the following operations on those two numbers: addition, subtraction, product, quotient, remainder, and power. Do not worry about validating the input.

Example

```
==> Enter the first number:
23
==> Enter the second number:
17
==> 23 + 17 = 40
==> 23 - 17 = 6
==> 23 * 17 = 391
==> 23 / 17 = 1
==> 23 % 17 = 6
==> 23 ** 17 = 1.4105003956066297e+23
```

My Answer:

```javascript
const RL_SYNC = require("readline-sync");

function arithmeticInt() {
  let operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
    "%": (a, b) => a % b,
    "**": (a, b) => a ** b,
  };
  let number1 = Number(RL_SYNC.question("==> Enter the first number:\n"));
  let number2 = Number(RL_SYNC.question("==> Enter the second number:\n"));
  let operationArray = Object.keys(operations);

  for (let i = 0; i < operationArray.length; i++) {
    console.log(
      `${number1} ${operationArray[i]} ${number2} = ${operations[operationArray[i]](number1, number2)}`,
    );
  }
}
```

6. Then End is Near But Not Here

Write a function that returns the next to last word in the String passed to it as an argument.

Words are any sequence of non-blank characters.

You may assume that the input String will always contain at least two words.

Examples:

```javascript
console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
```

My Answer:

```javascript
function penultimate(string) {
  let stringArr = string.split(" ");

  return stringArr[-2];
}
```

7. Exclusive Or

The || operator returns a truthy value if either or both of its operands are truthy, a falsey value if both operands are falsey. The && operator returns a truthy value if both of its operands are truthy, and a falsey value if either operand is falsey. This works great until you need only one, but not both, of two conditions to be truthy: the so-called exclusive or.

In this exercise, you will write a function named xor that takes two arguments, and returns true if exactly one of its arguments is truthy, false otherwise. Note that we are looking for a boolean result instead of a truthy/falsy value as returned by || and &&.

Examples:

```javascript
console.log(xor(5, 0) === true); // true
console.log(xor(false, true) === true); // true
console.log(xor(1, 1) === false); // true
console.log(xor(true, true) === false); // true
console.log(xor(0, false) === false); // true
console.log(xor(0, 0) === false); // true
```

My Answer:

```javascript
function xor(value1, value2) {
  if (value1 && !value2) {
    return true;
  }

  if (value2 && !value1) {
    return true;
  }

  return false;
}
```

8. Odd List

Write a function that returns an Array that contains every other element of an Array that is passed in as an argument. The values in the returned list should be those values that are in the 1st, 3rd, 5th, and so on elements of the argument Array.

Examples:

```javascript
console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []
```

My Answer:

```javascript
function oddities(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i += 2) {
    newArr.push(arr[i]);
  }
  return newArr;
}
```

9.

Build a program that randomly generates Teddy's age, and logs it to the console. Have the age be a random number between 20 and 120 (inclusive).

Example Output:

```
Teddy is 69 years old!
```

My Answer:

```javascript
function teddyAge() {
  console.log(`Teddy is ${randomInt()} years old!`);
}

function randomInt() {
  return Math.floor(Math.random() * (121 - 20) + 20);
}
```

10. When will I Retire?

Build a program that logs when the user will retire and how many more years the user has to work until retirement.

Example:

```
What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!
```

My Answer:

```javascript
const RL_SYNC = require("readline-sync");
const TIME = new Date().getFullYear();

function retireAge() {
  let age = RL_SYNC.question("What is your age?: ");
  let retirementAge = RL_SYNC.question("At what age would like to retire?: ");

  console.log(
    `It's ${TIME}. You will retire in ${TIME + (retirementAge - age)}`,
  );
  console.log(`You have only ${retirementAge - age} of work to go!`);
}
```

11. Get middle character

Write a function that takes a non-empty string argument and returns the middle character(s) of the string. If the string has an odd length, you should return exactly one character. If the string has an even length, you should return exactly two characters.

Examples:

```javascript
centerOf("I Love JavaScript"); // "a"
centerOf("Launch School"); // " "
centerOf("Launch"); // "un"
centerOf("Launchschool"); // "hs"
centerOf("x"); // "x"
```

My Answer:

```javascript
function centerOf(string) {
  let middle = Math.floor(string.length / 2);
  if (string.length % 2 === 0) {
    console.log(string.slice(middle - 1, middle + 1));
  } else {
    console.log(string.slice(middle, middle + 1));
  }
}
```

12. Always Return Negative

Write a function that takes a number as an argument. If the argument is a positive number, return the negative of that number. If the argument is a negative number, return it as-is.

Examples:

```javascript
negative(5); // -5
negative(-3); // -3
negative(0); // -0
```

My Answer:

```javascript
function negative(number) {
  if (number > 0) {
    return number * -1;
  }
  return number;
}
```
