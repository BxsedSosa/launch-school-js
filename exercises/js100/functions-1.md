1. Examine the example function invocation below. Write the function sum, such that it accepts two arguments and returns the sum of its arguments. You may assume that the function arguments will always be numbers.

```javascript
sum(22, 10);

function sum(num1, num2) {
  return num1 + num2;
}
```

2. Write a function that logs Brendan Eich's quote `Always bet on JavaScript` to the console. What is the return value of the function?

```javascript
brendanEichQuote();

function brendanEichQuote() {
  console.log("Always bet on JavaScript.");
}
```

3. Let's generalize the function from the previous exercise a bit. Implement a function cite that takes two string arguments: the author of the quote and what they said. It then logs the quote to the console, as in the following example.

```javascript
cite("Brendan Eich", "Always bet on JavaScript.");

function cite(author, quote) {
  console.log(`${author} said: ${quote}`);
}
```

4. Write a function that accepts a single arugment, a number, and returns the result of multiplying its argument by and exponent of 2

```javascript
squaredNumber(3);

function squaredNumber(number) {
  return number ** 2;
}
```

5. Determine the output that the follwing code will log to the console.

```javascript
function multiplesOfThree() {
  let divisor = 1;

  for (let dividend = 3; dividend <= 30; dividend += 3) {
    console.log(dividend + " / " + divisor + " = 3");
    divisor += 1;
  }
}

multiplesOfThree;
```

```
This code doesn't do anything since on line 10 the function isnt being called properly
```

6. Write a function that compares the length of two strings. It should return -1 if the first string is shorter, 1 if the second string is shorter, and 0 if they're of equal length, as in the following example:

```javascript
compareByLength("patience", "perseverance"); // -1
compareByLength("strength", "dignity"); //  1
compareByLength("humor", "grace"); //  0

function compareByLength(string1, string2) {
  let string1Len = string1.length;
  let string2Len = string2.length;

  if (string1Len > string2Len) {
    return 1;
  }
  if (string1Len < string2Len) {
    return -1;
  }
  if (string1Len === string2Len) {
    return 0;
  }
}
```

7. Use JS string methods on the string `Captain Ruby` to produce the string `Captin JavaScript`

```javascript
transformation("Captain Ruby");

function transformation(str) {
  return str.replace("Ruby", "JavaScript");
}
```

8. Write a function that takes an ISO 639-1 language code and returns a greeting in that language. You can take the examples below or add whatever languages you like.

```javascript
function greet(languageCode) {
  switch (languageCode) {
    case "en":
      return "Hi!";
    case "fr":
      return "Salut!";
    case "pt":
      return "Olá!";
    case "de":
      return "Hallo!";
    case "sv":
      return "Hej!";
    case "af":
      return "Haai!";
  }
}
```
