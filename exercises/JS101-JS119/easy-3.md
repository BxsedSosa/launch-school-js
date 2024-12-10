1. ddaaiillyy ddoouubbllee

Write a function that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.

Examples:

```javascript
crunch("ddaaiillyy ddoouubbllee"); // "daily double"
crunch("4444abcabccba"); // "4abcabcba"
crunch("ggggggggggggggg"); // "g"
crunch("a"); // "a"
crunch(""); // ""
```

My Answer:

```javascript
function crunch(string) {
  let previousChar = "";
  let stringArr = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== previousChar) {
      previousChar = string[i];
      stringArr.push(string[i]);
    }
  }
  return stringArr.join("");
}
```

2. Bannerizer

Write a function that will take a short line of text, and write it to the console log within a box.

Examples:

```javascript
logInBox("To boldly go where no one has gone before.");
```

```
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+
```

My Answer:

```javascript
function logInBox(string) {
  banner = {
    border: "+--+",
    middle: "|  |",
  };
  console.log(addChar(banner.border, string.length, "-"));
  console.log(addChar(banner.middle, string.length, " "));
  console.log(addString(banner.middle, string));
  console.log(addChar(banner.middle, string.length, " "));
  console.log(addChar(banner.border, string.length, "-"));
}

function addString(oldString, newString) {
  let stringArr = oldString.split("");
  let newStringArr = newString.split("");
  let last2elements = stringArr.splice(stringArr.length - 2);
  return stringArr.concat(newStringArr).concat(last2elements).join("");
}

function addChar(string, length, char) {
  let stringArr = string.split("");
  let lastChar = stringArr.pop();
  for (let i = 0; i < length; i++) {
    stringArr.push(char);
  }

  return stringArr.concat(lastChar).join("");
}
```

3.

My Answer:

```javascript
function stringy(number) {
  let string = "";
  for (let i = 0; i < number; i++) {
    if (i % 2 == 0) {
      string + "1";
    } else {
      string + "0";
    }
  }
  return string;
}
```

4. Fibonacci Number Location By Length [OBSOLETE]

You may skip this exercise at this time; it may be too difficult for most beginners at this stage. We have moved it to one of the Medium exercise sets, but leave this one here to preserve the student answers.

The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...) such that the first two numbers are 1 by definition, and each subsequent number is the sum of the two previous numbers. Fibonacci numbers often appear in mathematics and nature.

Computationally, the Fibonacci series is a simple series, but the results grow at an incredibly rapid rate. For example, the 100th Fibonacci number is 354,224,848,179,261,915,075—that's enormous, especially considering that it takes six iterations just to find the first 2-digit Fibonacci number.

Write a function that calculates and returns the index of the first Fibonacci number that has the number of digits specified by the argument. (The first Fibonacci number has an index of 1.)

You may assume that the argument is always an integer greater than or equal to 2.

Examples:

```javascript
findFibonacciIndexByLength(2n) === 7n; // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n; // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
findFibonacciIndexByLength(1000n) === 4782n;
findFibonacciIndexByLength(10000n) === 47847n;

// The last example may take a minute or so to run.
```

My Answer:

```javascript
function nthFib(number) {
  if (number < 2) {
    return number;
  }

  return nthFib(number - 1) + nthFib(number - 2);
}

function findFibonacciIndexByLength(number) {
  let count = 0;
  while (true) {
    let fibLength = String(nthFib(count)).length;

    if (fibLength === number) {
      return count;
    }
    count += 1;
  }
}
```

5. Write a function that takes a positive integer, n, as an argument and logs a right triangle whose sides each have n stars. The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of the triangle, and the other end at the upper-right.

Examples:

```javascript
triangle(5);

    *
   **
  ***
 ****
*****

triangle(9);

        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********
```

My Answer:

```javascript
function triangle(number) {
  let counter = 1;
  for (let i = number; i > 0; i--) {
    let difference = number - counter;
    console.log(`${" ".repeat(difference)}${"*".repeat(counter)}`);
    counter += 1;
  }
}
```

6. Madlibs

Madlibs is a simple game where you create a story template with "blanks" for words. You, or another player, then construct a list of words and place them into the story, creating an often silly or funny story as a result.

Create a simple madlib program that prompts for a noun, a verb, an adverb, and an adjective, and injects them into a story that you create.

Example:

```
Enter a noun: dog
Enter a verb: walk
Enter an adjective: blue
Enter an adverb: quickly

// console output
Do you walk your blue dog quickly? That's hilarious!
The blue dog walks quickly over the lazy dog.
The dog quickly walks up blue Joe's turtle.
```

My Answer:

```javascript
const RL_SYNC = require("readline-sync");

function madLibs() {
  let noun = RL_SYNC.question("Enter a noun: ");
  let verb = RL_SYNC.question("Enter a verb: ");
  let adjective = RL_SYNC.question("Enter a adjective: ");
  let adverb = RL_SYNC.question("Enter a adverb: ");
  let passages = [
    `Do you walk your ${adjective} ${noun} ${adverb}? That's hilarious!`,
    `The ${adjective} ${noun} ${verb} ${adverb} over the lazy dog`,
    `The ${noun} ${adverb} ${verb} up ${adjective} Joe's turtle`,
  ];

  for (const passage of passages) {
    console.log(passage);
  }
}
```

7. Double Doubles

A double number is an even-length number whose left-side digits are exactly the same as its right-side digits. For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433, and 107 are not.

Write a function that returns the number provided as an argument multiplied by two, unless the argument is a double number; otherwise, return the double number as-is.

Examples:

```javascript
twice(37); // 74
twice(44); // 44
twice(334433); // 668866
twice(444); // 888
twice(107); // 214
twice(103103); // 103103
twice(3333); // 3333
twice(7676); // 7676
```

My Answer:

```javascript
function twice(number) {
  let stringNum = String(number);
  let midLen = Math.floor(stringNum.length / 2);
  let firstHalfString, secondHalfString;

  if (stringNum.length % 2 === 1) {
    return number * 2;
  }

  firstHalfString = stringNum.slice(0, midLen);
  secondHalfString = stringNum.slice(midLen);

  if (firstHalfString === secondHalfString) {
    return number;
  } else {
    return number * 2;
  }
}
```

8.Grade Book

Write a function that determines the mean (average) of the three scores passed to it, and returns the letter associated with that grade.

Numerical score letter grade list:

    90 <= score <= 100: 'A'
    80 <= score < 90: 'B'
    70 <= score < 80: 'C'
    60 <= score < 70: 'D'
    0 <= score < 60: 'F'

Tested values are all between 0 and 100. There is no need to check for negative values or values greater than 100.

Examples:

```javascript
getGrade(95, 90, 93); // "A"
getGrade(50, 50, 95); // "D"
```

My Answer:

```javascript
function getGrade(grade1, grade2, grade3) {
  let average = (grade1 + grade2 + grade3) / 3;

  if (average >= 90) {
    return "A";
  }

  if (average >= 80) {
    return "B";
  }

  if (average >= 70) {
    return "C";
  }

  if (average >= 60) {
    return "D";
  }

  return "F";
}
```

9. Clean up the words

Given a string that consists of some words and an assortment of non-alphabetic characters, write a function that returns that string with all of the non-alphabetic characters replaced by spaces. If one or more non-alphabetic characters occur in a row, you should only have one space in the result (i.e., the result string should never have consecutive spaces).

Example:

```javascript
cleanUp("---what's my +*& line?"); // " what s my line "
```

My Answer:

```javascript
function isAlpha(char) {
  return /^[a-z]$/i.test(char);
}

function tooManySpaces(string) {
  let newString = [];
  let counter = 1;
  while (counter < string.length) {
    if (string[counter] === " " && string[counter - 1] === " ") {
      counter += 1;
      continue;
    }
    newString.push(string[counter - 1]);
    counter += 1;
  }
  return newString.join("");
}

function cleanUp(string) {
  let stringArr = string.split("");
  for (let i = 0; i < stringArr.length; i++) {
    if (!isAlpha(stringArr[i])) {
      stringArr[i] = " ";
    }
  }
  return tooManySpaces(stringArr);
}
```

10. What Century is That?

Write a function that takes a year as input and returns the century. The return value should be a string that begins with the century number, and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century.

Examples:

```javascript
century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"
```

My Answer:

```javascript
function century(year) {
    let cent = Number(String(year).slice(0, -2))

    if (year < 101) {
        console.log("1st")
        return
    }
    
    if (Number(String(year).slice(-1)) > 0) {
        cent += 1;
        console.log(postfix(String(cent)));
    } else {
        console.log(postfix(String(cent)))
    }
}

function postfix(year) {
    if (Number(year.slice(-2)) > 10 && Number(year.slice(-2)) < 20) {
        return year + "th";
    }
    if (year[year.length - 1] === "1") {
        return year + "st";
    } else if (year[year.length - 1] === "2") {
        return year + "nd";
    } else if (year[year.length - 1] === "3") {
        return year + "rd";
    } else {
        return year + "th";
    }
}
```
