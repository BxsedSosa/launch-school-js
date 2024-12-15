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

5.

My Answer:

```javascript

```

6.

My Answer:

```javascript

```

7.

My Answer:

```javascript

```

8.

My Answer:

```javascript

```

9.

My Answer:

```javascript

```

10.

My Answer:

```javascript

```
