1. Modify the `age.js` program you wrote in the exercises for the input/output chapter. The updated code should use a `for` loop to display the future ages.

2. Write a function that computs the returns the factorial of a number by using a `for` loop. The factorial of a positive integer `n`, signified by `n!`, is defined as the product of all integers between `1` and `n`, inclusive:

| n!  | Expanison             | result |
| --- | --------------------- | ------ |
| 1!  | 1                     | 1      |
| 2!  | 1 \* 2                | 2      |
| 3!  | 1 \* 2 \* 3           | 6      |
| 4!  | 1 \* 2 \* 3 \* 4      | 24     |
| 5!  | 1 \* 2 \* 3 \* 4 \* 5 | 120    |

```javascript
function factorial(number) {
  let total = 1;
  for (let i = 1; i <= number; i++) {
    total = i * total;
  }
  return total;
}

console.log(factorial(5));
```

3. The following code causes an infinite loop Why?

```javascript
let counter = 0;

while ((counter = 1)) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}
```

```
It is infinite because within the conditonal statement of the while loop it is saying `counter = 1` which is assigning counter to a truthy value and never incrementing that value
```

4. Does the following code produce an error? Why or Why not? What output does this code send to the console?

```javascript
for (let i = 0; i < 5; ) {
  console.log(i += 1));
}
```

```
I think the code would print out `1` and thats all because there is no increament happening within the for loop

Answer:
This loop doesn't produce any errors and would print out `1-5` to the console. since on line 2 `i` gets increameneted before the loop ends
```

5. The follwoing code uses a `randomNumberBetween` function to generate a number between its first and second arguments. It uses a `while` loop to try to generate a number grater than `2`. Refactor the code so that you don't need to call `randomNumberBetween` from two different locations, line 6 and 10. Do not change the arugments you pass to `randomNumberBetween`

```javascript
function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result = randomNumberBetween(1, 6);
tries += 1;

while (result <= 2) {
  result = randomNumberBetween(1, 6);
  tries += 1;
}

console.log(
  "It took " + String(tries) + " tries to get a number greater than 2",
);
```

Refactored

```javascript
function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result;

do {
  result = randomNumberBetween(1, 6);
  tries += 1;
} while (result <= 2);

console.log(
  "It took " + String(tries) + " tries to get a number greater than 2",
);
```

6. Reimplement the `factorial` function from exercise 2 using recursion. Once again you may assume that argument is always a postitive integer.

```javascript
main();

function main() {
  factorial(5);
}

function factorial(number) {
  if (number === 1) {
    return 1;
  }

  return number * factorial(number - 1);
}
```
