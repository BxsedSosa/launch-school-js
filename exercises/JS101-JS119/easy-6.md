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

4.

My Answer:

```javascript

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
