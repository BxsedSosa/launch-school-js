1. What will the following code log to the console and why? Don't run it until you have tried to answer

```javascript
console.log(greeting);

var greeting = "Hello world!";
```

```
This code would log `undefined`. This is due to greeting beging initalized after the console.log
```

2. What will the following code log to the console and why? Don't run it until you have tried to answer

```javascript
console.log(greeting);

let greeting = "Hello world!";
```

```
This code would throw an ReferenceError because console.log is trying use `greeting` and its not initalized yet
```

3. What will the following code log to the console and why? Don't run it until you have tried to answer

```javascript
if (true) {
  let myValue = 20;
}

console.log(myValue);
```

```
This code would throw a `ReferenceError` since the `myValue` is in the if statement and wasn't initalized before it
```

4. What will the following code log to the console and why? Don't run it until you have tried to answer

```javascript
function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
  }
}

myFunction();
```

```
This code would log `1`
```

5. What will the following code log to the console and why? Don't run it until you have tried to answer

```javascript
function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}

myFunction();
```

```
This code would print `1` then `2`

Answer:

Code logged `ReferenceError: Cannot access 'a' before initalization`

This is due to the second time `a` was initalized within the if statement. Since the if statement is in a different scope that blocks treats the second `a` variable initalized as if it was the only one in the code.
```

6. What will the following code log to the console and why? Don't run it until you have tried to answer

```javascript
let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}
console.log(b);
```

```
This code would log `false` since within the if statement `b` is being initalized not reassigned
```

7. What will the following code log to the console and why? Don't run it until you have tried to answer

```javascript
let a = 1;

function myFunction() {
  console.log(a);
}

myFunction();
```

```
This code would log `1`
```

8. What will the following code log to the console and why? Don't run it until you have tried to answer

```javascript
let a = 1;

function myFunction(a) {
  console.log(a);
}
let b = 2;

myFunction(b);
```

```
This code would print out `2`
```

9. What will the following code log to the console and why? Don't run it until you have tried to answer

```javascript
const a = 1;

function myFunction() {
  a = 2;
}

myFunction(a);
```

```
This code would throw a error because trying to reassign a constant
```

10. What will the following code log to the console and why? Don't run it until you have tried to answer

```javascript
const a = {
  firstName: "John",
  lastName: "Doe",
};

function myFunction() {
  a.firstName = "Jane";
}

myFunction();

console.log(a);
```

```
This code would print `firstName: Jane lastName: Doe`
```
