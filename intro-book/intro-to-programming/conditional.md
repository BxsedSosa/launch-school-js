1. What values do the following expressions evaluate to?

```javascript
false || (true && false);
true || 1 + 2;
1 + 2 || true;
true && 1 + 2;
false && 1 + 2;
1 + 2 && true;
32 * 4 >= 129;
false !== !true;
true === 4;
false === (847 === "847");
false === (847 == "847");
!true || !(100 / 5) === 20 || 328 / 4 === 82 || false;
```

```
false
true
true
true
false
true
false
false
false
true
false
true
```

2. Write a function, `evenOrOdd`, that determines whether its argument is an even number. if it is, the function should log `even` to the console; otherwise, it should log `odd`. For now, assume that the argument is always and int

```javascript
function evenOrOdd(number) {
  if (!Number.isInteger(number)) {
    console.log("Please enter a number");
    return;
  }

  if (number % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}
```

3. Let's improve our previous implementation of evenOrOdd. Add a validation check to ensure that the argument is an integer. If it isn't, the function should issue and error message and return

4. What does the following code log to the console, and why?

```javascript
function barCodeScanner(serial) {
  switch (serial) {
    case "123":
      console.log("Product1");
    case "113":
      console.log("Product2");
    case "142":
      console.log("Product3");
    default:
      console.log("Product not found!");
  }
}

barCodeScanner("113");
```

```
This code would log `Product2 Product3 Product not found` since the case `113` starts the the switch and thers no break it will continue all the other cases
```

5. Reafactor this statement to use an `if` statemenet instead.

```javascript
return foo() ? "bar" : qux();
```

```javascript
if (foo()) {
  return "bar";
} else {
  return qux();
}
```

6. What does this code output to the console?

```javascript
function isArrayEmpty(arr) {
  if (arr) {
    console.log("Not Empty");
  } else {
    console.log("Empty");
  }
}

isArrayEmpty([]);
```

```
This code would log `Not Empty` to the console since empty array are considered `truthy`
```

7. Write a function that takes a string as an argument and returns an all-caps version of the string when the string is longer than 10 characters. Otherwise, it should return the original string.

```javascript
function over10Chars(string) {
  if (string.length > 10) {
    return string.toUpperCase();
  }
  return string;
}
```

8. Write a function that logs whether an int is between 0 and 50 (inclusive), between 51 and 100 (inclusive), greater than 100, or less than 0

```javascript
function numberRange(number) {
  if (number >= 0 || number <= 50) {
    console.log("inbetween 0 and 50");
    return;
  }
  if (number >= 51 || number <= 100) {
    console.log("inbetween 0 and 50");
    return;
  }
  if (number > 100) {
    console.log("Greather than 100");
    return;
  }
  if (number < 0) {
    console.log("less than 0");
    return;
  }
}
```

9. Without running this code, what will it print?

```javascript
console.log(false ?? null);
console.log(true ?? 1 + 2);
console.log(1 + 2 ?? true);
console.log(null ?? false);
console.log(undefined ?? 1 + 2);
console.log(1 + 2 ?? null);
console.log(null ?? undefined);
console.log(undefined ?? null);
```

```
false
true
3
false
3
3
undefined
null
```

10. Without running this code, what will it print?

```javascript
function show(foo = undefined, bar = null) {
  console.log(`foo is ${foo ?? 3}, bar is ${bar ?? 42}`);
}

show(5, 7);
show(0, 0);
show(4);
show();
```

```
foo is 5, bar is 7
foo is 0, bar is 0
foo is 4, bar is 42
foo is 3, bar is 42
```
