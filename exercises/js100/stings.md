1. Determine the length of the string `"These aren't the droids you're looking for."`.

```javascript
let str = "These aren't the droids you're looking for.";

console.log(str.length);
```

2. Take the string and transform it to upper case

```javascript
let str = "confetti floating everywhere";

console.log(str.toUpperCase());
```

3. Implement a function `repeat` that repeats an input string a given number of times, as shown in the example below; without using the pre-defined string method `String.prototype.repeat()`.

```javascript
repeat(3, "ha");

function repeat(times, str) {
  let newStr = "";
  for (let i = 0; i < times; i++) {
    newStr = newStr + str;
  }
  return newStr;
}
```

4. Take the following rhyme:

```
A pirate I was meant to be!
Trim the sails and roam the sea!
```

How can you assign this string to a single variable, preserving the line break?

```javascript
let str = "A pirate I was meant to be!\nTrim the sails and roam the sea!";
```

5. Given strings like the following, how can you check whether they're equal irrespective of whether the characters they contain are upper or lower case?

```javascript
let string1 = "Polar Bear";
let string2 = "Polar bear";
let string3 = "Penguin";

function compare(str1, str2) {
  return str1.toLowerCase() === str2.toLowerCase();
}

compare(string1, string2);
compare(string1, string3);
```

6. Write code that checks whether the string byteSequence contains the character x.

```javascript
let byteSequence = "TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu";

byteSequence.includes("x");
```

7. Write a function that checks whether a string is empty or not. For example:

```javascript
isBlank('mars'); // false
isBlank('  ');   // false
isBlank('');     // true

function isBlank(str) {
    return str !== "": true ? false;
}
```

8. Change your isBlank function from the previous exercise to return true if the string is empty or only contains whitespace. For example:

```javascript
isBlank("mars"); // false
isBlank("  "); // true
isBlank(""); // true

function isBlank(str) {
  return str.trim().length === 0;
}
```

9. Write code that capitalizes the words in the string 'launch school tech & talk', so that you get the string 'Launch School Tech & Talk'.

```javascript
function capitalize(str) {
  let arr = str.split(" ");
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let word = words[i];

    newArr.push(word[0].toUpperCase() + word.slice(1));
  }
  return newArr.join(" ");
}
```
