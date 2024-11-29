1. Add some code inside of the `for` loop below that logs the current value of `i` to the console on each iteration. Before you run the code: What sequence of numbers do you expect to be logged?

```javascript
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}
// This sequence would print out 0 2 4 6 8 10
```

2. The code below logs the numbers from 1 to 10. Change it, so that it instead logs the numbers from 10 to 1 in decreasing order, and then logs 'Launch!'.

```javascript
for (let i = 10; i > 0; i--) {
  console.log(i);
}
console.log("Launch!");
```

3. Write a loop that logs greeting three times.

```javascript
let greeting = "Aloha!";

for (let i = 0; i < 3; i++) {
  console.log(greeting);
}
```

4. Write a `for` loop that iterates over all numbers from 1 to 100, and outputs the result of multiplying each element by 2

```javascript
for (let i = 1; i <= 100; i++) {
  console.log(i * 2);
}
```

5. Using the code below as a starting point, write a `while` loop that logs the elements of `array` at each index, and terminates after logging the last element of the array

```javascript
let arr = [1, 2, 3, 4];
let index = 0;

while (index < arr.length) {
  console.log(arr[index]);
  index++;
}
```

6. Write a `for` loop that loops over the elements of the array `cities` and logs the length of each string to the console. If the element is `null`, skip forward to the next iteration without logging anything to the console.

```javascript
let cities = [
  "Istanbul",
  "Los Angeles",
  "Tokyo",
  null,
  "Vienna",
  null,
  "London",
  "Beijing",
  null,
];

for (let i = 0; i < cities.length; i++) {
  if (cities[i] !== null) {
    console.log(cities[i].length);
  }
}
```

7. The following code keeps looping forever. Why is that? Also modify it so that it stops after the first iteration.

```javascript
for (let i = 0; ; i += 1) {
  console.log("and on");
}
//This runs infinite due to their being no conditional statement
```

Fixed:

```javascript
for (let i = 0; i < 1; i += 1) {
  console.log("and on");
}
```

8. Write a `while` loop that logs all odd natural number between 1 and 40

```javascript
for (let i = 1; i <= 40; i++) {
  if (i % 2 == 1) {
    console.log("Odd");
  }
}
```

9. Loop over the elements of the array `fish`, logging each one. Terminate the loop immediately after loggin the string `'Nemo'`

```javascript
for (let i = 0; i < fish.length; i++) {
  console.log(fish[i]);

  if (fish[i] === "Nemo") {
    break;
  }
}
```

10. What is the difference between the following two code snippets? Check the MDN docs on `while` and `do...while`

```javascript
let counter = 0;

while (counter > 0) {
  console.log("Woooot!");
  counter -= 1;
}
```

```javascript
let counter = 0;

do {
  console.log("Woooot!");
  counter -= 1;
} while (counter > 0);
```

```
In the `while` example the conditonal statement would evaluate to falsy and run log anything to the console.

In the `do...while` example the it runs the code in the `do` block first then checks if the conditional statement is true to run the code again or not
```
