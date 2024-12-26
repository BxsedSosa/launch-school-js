1. Uppercase Check

Write a function that takes a string argument and returns true if all of the alphabetic characters inside the string are uppercase; false otherwise. Ignore characters that are not alphabetic.

Examples:

```javascript
isUppercase("t"); // false
isUppercase("T"); // true
isUppercase("Four Score"); // false
isUppercase("FOUR SCORE"); // true
isUppercase("4SCORE!"); // true
isUppercase(""); // true
```

My Answer:

```javascript
function isUppercase(string) {
  return string === string.toUpperCase();
}
```

2. Delete Vowels

Write a function that takes an array of strings and returns an array of the same string values, but with all vowels (a, e, i, o, u) removed.

Examples:

```javascript
removeVowels(["abcdefghijklmnopqrstuvwxyz"]); // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(["green", "YELLOW", "black", "white"]); // ["grn", "YLLW", "blck", "wht"]
removeVowels(["ABC", "AEIOU", "XYZ"]); // ["BC", "", "XYZ"]
```

My Answer:

```javascript
function removeVowels(strArr) {
  const VOWELS = /[AEIOU]/i;
  const NON_VOWELS = /[^AEIOU]/gi;

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].search(VOWELS) >= 0) {
      if (strArr[i].match(NON_VOWELS)) {
        strArr[i] = strArr[i].match(NON_VOWELS).join("");
      } else {
        strArr[i] = "";
      }
    }
  }
  return strArr;
}
```

3. Lettercase Counter

Write a function that takes a string and returns an object containing three properties: one representing the number of characters in the string that are lowercase letters, one representing the number of characters that are uppercase letters, and one representing the number of characters that are neither.

Examples:

```javascript
letterCaseCount("abCdef 123"); // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount("AbCd +Ef"); // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount("123"); // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount(""); // { lowercase: 0, uppercase: 0, neither: 0 }
```

My Answer:

```javascript
function letterCaseCount(string) {
  let regex = /[^a-z]/gi;
  let counter = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  };

  for (let char of string) {
    if (char.search(regex) === -1) {
      if (char === char.toUpperCase()) {
        counter["uppercase"] += 1;
      } else if (char === char.toLowerCase()) {
        counter["lowercase"] += 1;
      }
    } else {
      counter["neither"] += 1;
    }
  }
  return counter;
}
```

4. Capitalize Words

Write a function that takes a string as an argument and returns that string with the first character of every word capitalized and all subsequent characters in lowercase.

You may assume that a word is any sequence of non-whitespace characters.

Examples:

```javascript
wordCap("four score and seven"); // "Four Score And Seven"
wordCap("the javaScript language"); // "The Javascript Language"
wordCap('this is a "quoted" word'); // 'This Is A "quoted" Word'
```

My Answer:

```javascript
function wordCap(string) {
  return string
    .split(" ")
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");
}
```

5. Swap Case

Write a function that takes a string as an argument and returns that string with every lowercase letter changed to uppercase and every uppercase letter changed to lowercase. Leave all other characters unchanged.

Examples:

```javascript
swapCase("CamelCase"); // "cAMELcASE"
swapCase("Tonight on XYZ-TV"); // "tONIGHT ON xyz-tv"
```

My Answer:

```javascript
function swapCase(string) {
  return string
    .split("")
    .map((char) => {
      if (char.search(/[a-z]/) >= 0) {
        return char.toUpperCase();
      } else {
        return char.toLowerCase();
      }
    })
    .join("");
}
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
