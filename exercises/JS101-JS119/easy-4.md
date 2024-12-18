1. Searching 101

Write a program that solicits six numbers from the user and logs a message that describes whether the sixth number appears among the first five numbers.

Examples:

```
Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in 25,15,20,17,23.

-----

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in 25,15,20,17,23.
```

My Answer:

```javascript
const RL_SYNC = require("readline-sync");

let num1 = RL_SYNC.question("Enter the 1st number: ");
let num2 = RL_SYNC.question("Enter the 2nd number: ");
let num3 = RL_SYNC.question("Enter the 3rd number: ");
let num4 = RL_SYNC.question("Enter the 4th number: ");
let num5 = RL_SYNC.question("Enter the 5th number: ");
let num6 = RL_SYNC.question("Enter the last number: ");
let nums = [num1, num2, num3, num4, num5];

for (const number of nums) {
  if (number === num6) {
    console.log(`The number ${num6} appears in ${nums.join(",")}`);
    return;
  }
}

console.log(`The number ${num6} does not appears in ${nums.join(",")}`);
```

2. Palindromic Strings (Part 1)

Write a function that returns true if the string passed as an argument is a palindrome, or false otherwise. A palindrome reads the same forwards and backwards. For this problem, the case matters and all characters matter.

Examples:

```
isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true
```

My Answer:

```javascript
let isPalindrome = (string) => {
  let firstHalf, secondHalf;
  let strLen = string.length;

  if (strLen % 2 === 0) {
    firstHalf = string.slice(0, strLen / 2 + 1);
    secondHalf = string
      .slice(strLen / 2 - 1)
      .split("")
      .reverse()
      .join("");
    if (firstHalf === secondHalf) {
      return true;
    }
  } else {
    firstHalf = string.slice(0, strLen / 2 + 1);
    secondHalf = string
      .slice(strLen / 2)
      .split("")
      .reverse()
      .join("");
    if (firstHalf === secondHalf) {
      return true;
    }
  }
  return false;
};
```

3. Palindromic Strings (Part 2)

Write another function that returns true if the string passed as an argument is a palindrome, or false otherwise. This time, however, your function should be case-insensitive, and should ignore all non-alphanumeric characters. If you wish, you may simplify things by calling the isPalindrome function you wrote in the previous exercise.

Examples:

```
isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false
```

My Answer:

```javascript
function isRealPalindrome(string) {
  string = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  return isPalindrome(string);
}
```

4. Palindromic Numbers

Write a function that returns true if its integer argument is palindromic, or false otherwise. A palindromic number reads the same forwards and backwards.

Examples:

```
isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true
```

My Answer:

```javascript
function isPalindrome(number) {
  return String(number) === String(number).split("").reverse().join("");
}
```

5. Write a function that takes an array of numbers and returns an array with the same number of elements, but with each element's value being the running total from the original array.

Examples:

```javascript
runningTotal([2, 5, 13]); // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]); // [14, 25, 32, 47, 67]
runningTotal([3]); // [3]
runningTotal([]); // []
```

My Answer:

```javascript
function runningTotal(numArr) {
  let newArr = [];
  let sum = 0;

  for (let i = 0; i < numArr.length; i++) {
    newArr.push((sum += numArr[i]));
  }

  return newArr;
}
```

6. Letter Counter (Part 1)

Write a function that takes a string consisting of zero or more space separated words and returns an object that shows the number of words of different sizes.

Words consist of any sequence of non-space characters.

Examples:

```javascript
wordSizes("Four score and seven."); // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes("Hey diddle diddle, the cat and the fiddle!"); // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?"); // { "2": 1, "4": 1, "6": 1 }
wordSizes(""); // {}
```

My Answer:

```javascript
function wordSizes(string) {
  let letterCounts = {};
  let strArr = string.split(" ");

  for (let i = 0; i < strArr.length; i++) {
    if (!(strArr[i].length in letterCounts)) {
      letterCounts[strArr[i].length] = 1;
      continue;
    }
    letterCounts[strArr[i].length] += 1;
  }
}
```

7. Letter Counter (Part 2)

Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size. For instance, the word size of "it's" is 3, not 4.

Examples:

```javascript
wordSizes("Four score and seven."); // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes("Hey diddle diddle, the cat and the fiddle!"); // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?"); // { "2": 1, "4": 1, "6": 1 }
wordSizes(""); // {}
```

My Answer:

```javascript
function wordSizes(string) {
  let letterCounts = {};
  let strArr = string.split(" ");

  if (string.length === 0) {
    return letterCounts;
  }

  for (let i = 0; i < strArr.length; i++) {
    let counter = 0;
    for (const char of strArr[i]) {
      if (char.toUpperCase() != char.toLowerCase()) {
        counter += 1;
      }
    }
    if (!(counter in letterCounts)) {
      letterCounts[counter] = 1;
      continue;
    }

    letterCounts[counter] += 1;
  }
  return letterCounts;
}
```

8. Letter Swap

Given a string of words separated by spaces, write a function that swaps the first and last letters of every word.

You may assume that every word contains at least one letter, and that the string will always contain at least one word. You may also assume that each string contains nothing but words and spaces, and that there are no leading, trailing, or repeated spaces.

Examples:

```javascript
swap("Oh what a wonderful day it is"); // "hO thaw a londerfuw yad ti si"
swap("Abcde"); // "ebcdA"
swap("a"); // "a"
```

My Answer:

```javascript
function swap(string) {
  let strArr = string.split(" ");
  let newArr = [];

  for (const element of strArr) {
    let wordArr = element.split("");
    let reserve = wordArr[0];
    wordArr[0] = wordArr[wordArr.length - 1];
    wordArr[wordArr.length - 1] = reserve;

    newArr.push(wordArr.join(""));
  }

  return newArr.join(" ");
}
```

9. Convert a String to a Number

The parseInt() method converts a string of numeric characters (including an optional plus or minus sign) to an integer. The method takes 2 arguments where the first argument is the string we want to convert and the second argument should always be 10 for our purposes. parseInt() and the Number() method behave similarly. In this exercise, you will create a function that does the same thing.

Write a function that takes a string of digits and returns the appropriate number as an integer. You may not use any of the methods mentioned above.

For now, do not worry about leading + or - signs, nor should you worry about invalid characters; assume all characters will be numeric.

You may not use any of the standard conversion methods available in JavaScript, such as String() and Number(). Your function should do this the old-fashioned way and calculate the result by analyzing the characters in the string.

Examples

```javascript
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
```

My Answer:

```javascript
function stringToInteger(numStr) {
  return +numStr;
}
```

10. Convert a String to a Signed Number

In the previous exercise, you developed a function that converts simple numeric strings to integers. In this exercise, you're going to extend that function to work with signed numbers.

Write a function that takes a string of digits and returns the appropriate number as an integer. The string may have a leading + or - sign; if the first character is a +, your function should return a positive number; if it is a -, your function should return a negative number. If there is no sign, return a positive number.

You may assume the string will always contain a valid number.

You may not use any of the standard conversion methods available in JavaScript, such as parseInt() and Number(). You may, however, use the stringToInteger() function from the previous lesson.

Examples

```javascript
console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true
```

My Answer:

```javascript
function stringToSignedInteger(numStr) {
  return +numStr;
}
```

11. Convert a Number to a String

In the previous two exercises, you developed functions that convert simple numeric strings to signed integers. In this exercise and the next, you're going to reverse those functions.

Write a function that converts a non-negative integer value (e.g., 0, 1, 2, 3, and so on) to the string representation of that integer.

You may not use any of the standard conversion functions available in JavaScript, such as String(), Number.prototype.toString, or an expression such as '' + number. Your function should do this the old-fashioned way and construct the string by analyzing and manipulating the number.

Examples:

```javascript
integerToString(4321); // "4321"
integerToString(0); // "0"
integerToString(5000); // "5000"
integerToString(1234567890); // "1234567890"
```

My Answer:

```javascript
const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function integerToString(number) {
  let result = "";

  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);

    result = DIGITS[remainder] + result;
  } while (number > 0);

  return result;
}
```

12.

My Answer:

```javascript

```
