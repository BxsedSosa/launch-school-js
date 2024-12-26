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

6. Staggered Caps (Part 1)

Write a function that takes a string as an argument and returns that string with a staggered capitalization scheme. Every other character, starting from the first, should be capitalized and should be followed by a lowercase or non-alphabetic character. Non-alphabetic characters should not be changed, but should be counted as characters for determining when to switch between upper and lower case.

Examples:

```javascript
staggeredCase("I Love Launch School!"); // "I LoVe lAuNcH ScHoOl!"
staggeredCase("ALL_CAPS"); // "AlL_CaPs"
staggeredCase("ignore 77 the 4444 numbers"); // "IgNoRe 77 ThE 4444 nUmBeRs"
```

My Answer:

```javascript
function staggeredCase(string) {
  let caseSwitch = true;

  return string
    .split("")
    .map((char) => {
      if (caseSwitch) {
        caseSwitch = false;
        return char.toUpperCase();
      } else {
        caseSwitch = true;
        return char.toLowerCase();
      }
    })
    .join("");
}
```

7. Staggered Caps (Part 2)

Modify the function from the previous exercise so it ignores non-alphabetic characters when determining whether it should uppercase or lowercase each letter. The non-alphabetic characters should still be included in the return value; they just don't count when toggling the desired case.

Example:

```javascript
console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs",
);
```

My Answer:

```javascript
function staggeredCase(string) {
  let caseSwitch = true;
  return string
    .split("")
    .map((char) => {
      if (char.search(/[a-z]/gi) >= 0) {
        if (caseSwitch) {
          caseSwitch = false;
          return char.toUpperCase();
        } else {
          caseSwitch = true;
          return char.toLowerCase();
        }
      }
      return char;
    })
    .join("");
}
```

8. How long are you?

Write a function that takes a string as an argument and returns an array that contains every word from the string, with each word followed by a space and the word's length. If the argument is an empty string or if no argument is passed, the function should return an empty array.

You may assume that every pair of words in the string will be separated by a single space.

Examples:

```javascript
wordLengths("cow sheep chicken");
// ["cow 3", "sheep 5", "chicken 7"]

wordLengths("baseball hot dogs and apple pie");
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

wordLengths("It ain't easy, is it?");
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

wordLengths("Supercalifragilisticexpialidocious");
// ["Supercalifragilisticexpialidocious 34"]

wordLengths(""); // []
wordLengths(); // []
```

My Answer:

```javascript
function wordLengths(strings) {
  if (!strings) {
    return [];
  }

  return strings.split(" ").map((string) => {
    return `${string} ${string.length}`;
  });
}
```

9.  Search Word (Part 1)

Write a function that takes two arguments, a word and a string of text, and returns an integer representing the number of times the word appears in the text.

You may assume that the word and text inputs will always be provided, and that all word breaks are spaces. Thus, some words will include punctuation such as periods and commas. Also assume that the search is case-insensitive.

Example:

```javascript
const text =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";

searchWord("sed", text); // 3
```

My Answer:

```javascript
function searchWord(searchWord, text) {
  let regex = new RegExp(searchWord, "gi");
  return text.split(" ").reduce((accum, current) => {
    if (current.search(regex) >= 0) {
      accum += 1;
    }
    return accum;
  }, 0);
}
```

10. Search Word (Part 2)

The function from the previous exercise returns the number of occurrences of a word in some text. Although this is useful, there are also situations in which we just want to find the word in the context of the text.

For this exercise, write a function that takes a word and some text as arguments, and returns the text with every instance of the word highlighted. To highlight a word, enclose the word with two asterisks ('**') on each side and change every letter of the word to uppercase (e.g., '**HIGHLIGHTEDWORD\*\*').

Example:

```javascript
const text =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?";

searchWord("sed", text);
// returns
// "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? **SED** quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?"
```

My Answer:

```javascript
function searchWord(searchWord, text) {
  let regex = new RegExp(searchWord, "gi");
  return text
    .split(" ")
    .map((word) => {
      if (word.search(regex) >= 0) {
        return `**${word.toUpperCase()}**`;
      }
      return word;
    })
    .join(" ");
}
```
