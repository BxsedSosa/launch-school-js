1. Sum Of Digits

Write a function that takes one argument, a positive integer, and returns the sum of its digits. Do this without using for, while, or do...while loops - instead, use a series of method calls to perform the sum.

Examples:

```javascript
sum(23); // 5
sum(496); // 19
sum(123456789); // 45
```

My Answer:

```javascript
function sum(number) {
  return String(number)
    .split("")
    .reduce((accum, num) => {
      accum + Number(num);
    }, 0);
}
```

2.  Alphabetical Numbers

Write a function that takes an array of integers between 0 and 19 and returns an array of those integers sorted based on the English word for each number:

    zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen

Example:

My Answer:

```javascript
const NUMBER_WORDS = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];

function wordSort(num1, num2) {
  if (NUMBER_WORDS[num1] > NUMBER_WORDS[num2]) {
    return 1;
  } else if (NUMBER_WORDS[num1] < NUMBER_WORDS[num2]) {
    return -1;
  } else {
    return 0;
  }
}

function alphabeticNumberSort(array) {
  return [...array].sort(wordSort);
}
```

3. Multiply All Pairs

Write a function that takes two array arguments, each containing a list of numbers, and returns a new array containing the products of all combinations of number pairs that exist between the two arrays. The returned array should be sorted in ascending numerical order.

You may assume that neither argument will be an empty array.

Example:

```javascript
multiplyAllPairs([2, 4], [4, 3, 1, 2]); // [2, 4, 4, 6, 8, 8, 12, 16]
```

My Answer:

```javascript
function multiplyAllPairs(arr1, arr2) {
  return arr1
    .map((element) => {
      return arr2.map((ele) => element * ele);
    })
    .flat()
    .sort((a, b) => a - b);
}
```

4. Leading Substrings

Write a function that takes a string argument and returns a list of substrings of that string. Each substring should begin with the first letter of the word, and the list should be ordered from shortest to longest.

Examples:

```javascript
leadingSubstrings("abc"); // ["a", "ab", "abc"]
leadingSubstrings("a"); // ["a"]
leadingSubstrings("xyzzy"); // ["x", "xy", "xyz", "xyzz", "xyzzy"]
```

My Answer:

```javascript
function leadingSubstrings(string) {
  let arr = [];

  for (let i = 1; i <= string.length; i++) {
    arr.push(string.slice(0, i));
  }
  return arr;
}

function leadingSubstrings(string) {
  return string.split("").map((char, idx) => string.slice(0, idx + 1));
}
```

5. All Substrings

Write a function that returns a list of all substrings of a string. Order the returned list by where in the string the substring begins. This means that all substrings that start at index position 0 should come first, then all substrings that start at index position 1, and so on. Since multiple substrings will occur at each position, return the substrings at a given index from shortest to longest.

You may (and should) use the leadingSubstrings function you wrote in the previous exercise:

Example:

```javascript
substrings("abcde");

// returns
[
  "a",
  "ab",
  "abc",
  "abcd",
  "abcde",
  "b",
  "bc",
  "bcd",
  "bcde",
  "c",
  "cd",
  "cde",
  "d",
  "de",
  "e",
];
```

My Answer:

```javascript
function substrings(string) {
  return string
    .split("")
    .map((char, idx) => leadingSubstrings(string.slice(idx)))
    .flat();
}

function leadingSubstrings(string) {
  return string.split("").map((char, idx) => string.slice(0, idx + 1));
}
```

6. Palindromic Substrings

Write a function that returns a list of all palindromic substrings of a string. That is, each substring must consist of a sequence of characters that reads the same forward and backward. The substrings in the returned list should be sorted by their order of appearance in the input string. Duplicate substrings should be included multiple times.

You may (and should) use the substrings function you wrote in the previous exercise.

For the purpose of this exercise, you should consider all characters and pay attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' are not. In addition, assume that single characters are not palindromes.

Examples:

```javascript
palindromes("abcd"); // []
palindromes("madam"); // [ "madam", "ada" ]

palindromes("hello-madam-did-madam-goodbye");
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes("knitting cassettes");
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
```

My Answer:

```javascript
function palindromes(string) {
  return string
    .split("")
    .map((char, idx) => leadingSubstrings(string.slice(idx)))
    .flat()
    .filter((string) => {
      if (string && string.length > 1) {
        return string;
      }
    });
}

function leadingSubstrings(string) {
  return string.split("").map((char, idx, arr) => {
    if (isPalindrome(arr.join("").slice(0, idx + 1))) {
      return givePalindrome(arr.join("").slice(0, idx + 1));
    }
  });
}

function isPalindrome(string) {
  return string === string.split("").reverse().join("");
}

function givePalindrome(string) {
  return string.split("").reverse().join("");
}
```

7. Sum of Sums

Write a function that takes an array of numbers and returns the sum of the sums of each leading subsequence in that array. Examine the examples to see what we mean. You may assume that the array always contains at least one number.

Examples:

```javascript
sumOfSums([3, 5, 2]); // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]); // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]); // 4
sumOfSums([1, 2, 3, 4, 5]); // 35
```

My Answer:

```javascript
function sumOfSums(array) {
  return array
    .map((_, index) => array.slice(0, index + 1))
    .flat()
    .reduce((acc, num) => acc + num, 0);
}
```

8. Grocery List

Write a function that takes a grocery list in a two-dimensional array and returns a one-dimensional array. Each element in the grocery list contains a fruit name and a number that represents the desired quantity of that fruit. The output array is such that each fruit name appears the number of times equal to its desired quantity.

In the example below, we want to buy 3 apples, 1 orange, and 2 bananas. Thus, we return an array that contains 3 apples, 1 orange, and 2 bananas.

Example:

```javascript
buyFruit([
  ["apple", 3],
  ["orange", 1],
  ["banana", 2],
]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
```

My Answer:

```javascript
function buyFruit(groceries) {
  let arr = [];
  for (const fruit of groceries) {
    for (let i = 0; i < fruit[1]; i++) {
      arr.push(fruit[0]);
    }
  }
  return arr;
}
```

9. Inventory Item Transactions

Write a function that takes two arguments, an inventory item ID and a list of transactions, and returns an array containing only the transactions for the specified inventory item.

Example

```javascript
let transactions = [
  { id: 101, movement: "in", quantity: 5 },
  { id: 105, movement: "in", quantity: 10 },
  { id: 102, movement: "out", quantity: 17 },
  { id: 101, movement: "in", quantity: 12 },
  { id: 103, movement: "out", quantity: 20 },
  { id: 102, movement: "out", quantity: 15 },
  { id: 105, movement: "in", quantity: 25 },
  { id: 101, movement: "out", quantity: 18 },
  { id: 102, movement: "in", quantity: 22 },
  { id: 103, movement: "out", quantity: 15 },
];

transactionsFor(101, transactions);
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]
```

My Answer:

```javascript
function transactionsFor(id, transactions) {
  return transactions.filter((transaction) => transaction["id"] === id);
}
```

10. Inventory Item Availability

Building on the previous exercise, write a function that returns true or false based on whether or not an inventory item is available. As before, the function takes two arguments: an inventory item and a list of transactions. The function should return true only if the sum of the quantity values of the item's transactions is greater than zero. Notice that there is a movement property in each transaction object. A movement value of 'out' will decrease the item's quantity.

You may (and should) use the transactionsFor function from the previous exercise.

Examples:

```javascript
let transactions = [
  { id: 101, movement: "in", quantity: 5 },
  { id: 105, movement: "in", quantity: 10 },
  { id: 102, movement: "out", quantity: 17 },
  { id: 101, movement: "in", quantity: 12 },
  { id: 103, movement: "out", quantity: 20 },
  { id: 102, movement: "out", quantity: 15 },
  { id: 105, movement: "in", quantity: 25 },
  { id: 101, movement: "out", quantity: 18 },
  { id: 102, movement: "in", quantity: 22 },
  { id: 103, movement: "out", quantity: 15 },
];

isItemAvailable(101, transactions); // false
isItemAvailable(103, transactions); // false
isItemAvailable(105, transactions); // true
```

My Answer:

```javascript
function isItemAvailable(id, transactions) {
  sum = 0;

  transactionsFor(id, transactions).forEach((element) => {
    if (element["movement"] === "in") {
      sum += element["quantity"];
    } else {
      sum -= element["quantity"];
    }
  });

  return sum > 0;
}

function transactionsFor(id, transactions) {
  return transactions.filter((transaction) => transaction["id"] === id);
}
```
