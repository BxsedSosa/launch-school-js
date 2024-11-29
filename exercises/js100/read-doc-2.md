1. In the following code snippet, find all violations of the style guide. Rewrite it so that it conforms with the guide.

```javascript
let ice_cream_taste = "chocolate";
let ice_cream_density = 10;

while (ice_cream_density > 0) {
  console.log("Drip...");
  ice_cream_density -= 1;
}

console.log("The " + ice_cream_taste + " ice cream melted.");
```

```javascript
let iceCreamTaste = "chocolate";
let iceCreamDensity = 10;

while (iceCreamDensity > 0) {
  console.log("Drip...");
  iceCreamDensity -= 1;
}

console.log("The " + iceCreamTaste + " ice cream melted");
```

2. Without looking into your notes, try to rememeber which primitive data types are defined in JS. Then find this info on MDN

```
String
Number
Boolean
null
Undefined
symbols
bigint
```

3. Using the docs, detemine how we can find the largest numeric value that can be represented in javascript. Write a line of code that returns this value

```javascript
Number.MAX_VALUE;
```

4. Find the MDN docs on operator precedence, and use it to find out which result the expression `4 * 5 + 3 ** 2 / 10` evaluates to.

```javascript
4 * 5 + 3 ** 2 / 10;
4 * 5 + 9 / 10;
20 + 9 / 10;
20.9;
```

5. Find out what `Date.now()` returns.

```
A number representing the timestamp, in milliseconds, of the current time
```

6. The MDN page for `Date` lists two methods to get the year of a date

```javascript
let today = new Date();

today.getYear();
today.getFullYear();
```

What is the difference between the two methods and which one should you use?

```
124
2024
```

7. How many arguments does the `Array.prototype.join()` method expect? What happens if you call it with less or more arugments?

```
0 arguments are required but you can add a delimiter to space out the elements of that array
```

8. Find out how we can join two or more strings together

```
`String.prototype.concat()`
```

9. The below code raises a `SyntaxError`. If you run the code, you'll see the following error message:

```
SyntaxError: Unexpected token &&
```

Find and read the docs about this error on MDN. Then, fix the code.

```javascript
let speedLimit = 60;
let currentSpeed = 80;

if (currentSpeed > speedLimit) && ((currentSpeed - speedLimit) > 5) {
    console.log('"people are so bad at driving cars' + 'that computers don\'t have to be that good to be much better." ' + '-- Marc Andreessen');
}
```

Fixed:

```javascript
let speedLimit = 60;
let currentSpeed = 80;

if (currentSpeed > speedLimit && currentSpeed - speedLimit > 5) {
  console.log(
    '"people are so bad at driving cars' +
      "that computers don't have to be that good to be much better.\" " +
      "-- Marc Andreessen",
  );
}
```

10. Run the following code:

```javascript
let tweet = "Woohoo! :-)";

if (tweet.length() > 140) {
  console.log("Tweet is too long!");
}
```

You'll see that it raises an error:

```
TypeError: tweet.length is not a function
```

```
The method `tweet.length()` does not require using `()` since it is a string property not a method this is why the `TypeError` was raised
```
