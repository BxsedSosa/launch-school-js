1. Without looking at your notes or MDN, try to recall all values that count as `falsy` in JS

```
false
undefined
NaN
null
0, -0, 0n
""
```

2. The code provided will randomly initialize `randomNumber` to eitehr 0 or 1 each time it is executed.

Write an `if` statement that logs `Yes!` if `randomNumber` is 1, and `'No.'` if `randomNumber` is 0.

```javascript
let randomNumber = Math.round(Math.random());

if (randomNumber === 1) {
  console.log("Yes!");
} else {
  console.log("No.");
}
```

3. Take your code from previous exercise and rewrite the conditional so that i uses the ternary if-then-else operator.

```javascript
let randomNumber = Math.round(Math.random());

console.log(randomNumber ? "Yes!" : "No.");
```

4. initialize a variable `weather` with a string value being "sunny", "rainy", or anything else.

Write an `if` statement that logs:

- "It's a beautiful day!" if weather is assigned to the string "sunny",
- "Grab your umbrella." if weather is assigned to the string "rainy", and
- "Let's stay inside." otherwise.

Test your code with different values for `weather`

```javascript
let weather = "sunny";

if (weather === "sunny") {
  console.log("It's a beautiful day!");
} else if (weather === "rainy") {
  console.log("Grab your umbrella");
} else {
  console.log("Let's stay inside");
}
```

5. Take a look at the code below. Without running it, determine what it will log to the console. If you're not sure, refer to the MDN docs on `switch` statements.

```javascript
let animal = "horse";

switch (animal) {
  case "duck":
    console.log("quack");
  case "squirrel":
    console.log("nook nook");
  case "horse":
    console.log("neigh");
  case "bird":
    console.log("tweet tweet");
  default:
    console.log("*cricket*");
}
```

```
This code would log:
- neigh
- tweet tweet
- *cricket*

This is due to the cases not having a break statement
```

6. Take your code from the previous Check the weather exercise and rewrite it as a `switch` statement.

```javascript
let weather = "sunny";

switch (weather) {
  case "sunny":
    console.log("It's a beautiful day!");
    break;
  case "sunny":
    console.log("Grab your umbrella");
    break;
  default:
    console.log("Let's stay inside");
}
```

7. Predict the output of the following code:

```javascript
if (false || true) {
  console.log("Yes!");
} else {
  console.log("No...");
}
```

```
This code would log `Yes!`
```

8. Predict the output of the following code:

```javascript
if (true && false) {
  console.log("Yes!");
} else {
  console.log("No...");
}
```

```
This code would log "No..."
```

9. Without running the below code, determine what will be logged to the console.

```javascript
let sale = true;
let admissionPrice = !sale ? 5.25 : 3.99;

console.log("$" + admissionPrice);
```

```
This code would print out `$3.99`
```

10. Determine what the following code snippet logs. First solve it in your head or on paper, and only then run it in your JS console to check the result

```javascript
let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);

console.log(isMoving);
```

_Bonus question:_ Do we need the parentheses in the boolean expression or could we also have written the following?

```javascript
let isMoving = (brakingForce < acceleration && speed > 0) || acceleration > 0;
```

```
This code would print out `true`.

In this question we do need parentheses and the rewritten code would still output `true`
```
