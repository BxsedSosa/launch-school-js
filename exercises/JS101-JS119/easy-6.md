1. Double Char (Part 1)

Write a function that takes a string, doubles every character in the string, and returns the result as a new string.

Examples:

```javascript
repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""
```

My Answer:

```javascript
function repeater(string) {
    let newString = [];
    if (string.length === 0) {
        return ""
    }

    string.split('').forEach((char) => {
        newString.push(char, char);
        })

    return newString.join("");
}
``` 


2. Double Char (Part 2);

Write a function that takes a string, doubles every consonant character in the string, and returns the result as a new string. The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.


My Answer:

```javascript
function doubleConsonants(string) {
  let vowels = ["a", "e", "i", "o", "u"];
  let newString = [];
  if (string.length === 0) {
      return ""
  }

  string.split('').forEach((char) => {
      if (!(vowels.includes(char))) {        
        newString.push(char, char);
      } else {
          newString.push(char)
      }
    })
  return newString.join("");
}
```

3. Reversed Number

Write a function that takes a positive integer as an argument and returns that number with its digits reversed.

Examples:

```javascript
reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
reverseNumber(1);        // 1
```

My Answer:

```javascript
function reverseNumber(number) {
  console.log(Number(String(number).split('').reverse().join('')));
}
```

4. Counting Up

Write a function that takes an integer argument and returns an array containing all integers between 1 and the argument (inclusive), in ascending order.

You may assume that the argument will always be a positive integer.

Examples:

```javascript
sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]
```

My Answer:

```javascript
function sequence(number) {
    let arr = [];

    for (let i = 1; i <= number; i++) {
        arr.push(i);
    }
    return arr;
}
```

5. Name Swapping

Write a function that takes a string argument consisting of a first name, a space, and a last name, and returns a new string consisting of the last name, a comma, a space, and the first name.

Examples:

```javascript
swapName('Joe Roberts');    // "Roberts, Joe"
```

My Answer:

```javascript
function swapName(name) {
    let splitName = name.split(' ').reverse();
    splitName[0] = splitName += ',';
    return splitName.join(' ');
}
```

6. Sequence Count

Create a function that takes two integers as arguments. The first argument is a count, and the second is the starting number of a sequence that your function will create. The function should return an array containing the same number of elements as the count argument. The value of each element should be a multiple of the starting number.

You may assume that the count argument will always be an integer greater than or equal to 0. The starting number can be any integer. If the count is 0, the function should return an empty array.

Examples:

```javascript
sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []
```

My Answer:

```javascript
function sequence(occurances, start) {
    let arr = [];
    let sum = 0;

    for (let i = 0; i < occurances; i++) {
        sum += start;
        arr.push(sum);
    }

    console.log(arr);
}
```

7. Reverse It (Part 1)

Write a function that takes a string argument and returns a new string containing the words from the string argument in reverse order.

Examples:

```javascript
reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"
```

My Answer:

```javascript
function reverseSentence(string) {
    return string.split(" ").reverse().join(' ');
}
```

8. Reverse It (Part 2)

Write a function that takes a string argument containing one or more words and returns a new string containing the words from the string argument. All five-or-more letter words should have their letters in reverse order. The string argument will consist of only letters and spaces. Words will be separated by a single space.

Examples:

```javascript
reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"
```

My Answer:

```javascript
function reverseWords(string) {
    let strArr = string.split(' ');
    
    if (strArr.length === 1) {
        return string.split('').reverse().join('');
    }

    strArr = strArr.map((word) => {
        if (word.length > 4){
            return word.split('').reverse().join('');
        }
        return word;
        })
    return strArr.join(' ')
}
```

9. Reversed Arrays

Write a function that takes an Array as an argument and reverses its elements in place. That is, mutate the Array passed into this method. The return value should be the same Array object.

You may not use Array.prototype.reverse().

Examples:

```javascript
let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true
```

My Answer:

```javascript
function reverse(array) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex < array.length / 2) {
    [array[leftIndex], array[rightIndex]] =
      [array[rightIndex], array[leftIndex]];
    leftIndex += 1;
    rightIndex -= 1;
  }
  return array;
}
```

10.

My Answer:

```javascript

```
