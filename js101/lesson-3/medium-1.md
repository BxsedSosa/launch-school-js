1. Let's do some "ASCII Art": a stone-age form of nerd artwork from back in the days before computers had video screens.

For this practice problem, write a program that outputs The Flintstones Rock! 10 times, with each line indented 1 space to the right of the line above it. The output should start out like this:

```
The Flintstones Rock!
 The Flintstones Rock!
  The Flintstones Rock!
   The Flintstones Rock!
    ...
```

My Answer:

```javascript
function asciiPrint(string, spacing) {
  for (let i = 0; i < spacing; i++) {
    console.log(`${" ".repeat(i)}${string}`);
  }
}
```

2. Starting with the string:

```javascript
let munstersDescription = "The Munsters are creepy and spooky.";
```

Return a new string that swaps the case of all of the letters:

```javascript
`tHE mUNSTERS ARE CREEPY AND SPOOKY.`;
```

My Answer:

```javascript
function switchCase(string) {
  let strArr = string.split("");

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === strArr[i].toUpperCase()) {
      strArr[i] = strArr[i].toLowerCase();
    } else {
      strArr[i] = strArr[i].toUpperCase();
    }
  }
  return strArr.join("");
}
```

3. Alan wrote the following function, which was intended to return all of the factors of number:

```javascript
function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}
```

Alyssa noticed that this code would fail when the input is 0 or a negative number, and asked Alan to change the loop. How can he make this work without using a do/while loop? Note that we're not looking to find the factors for 0 or negative numbers, but we want to handle it gracefully instead of raising an exception or going into an infinite loop.

Bonus: What is the purpose of number % divisor === 0 in that code?

My Answer:

```javascript
function factors(number) {
  let divisor = number;
  let factors = [];

  for (let i = divisor; i > 0; i--) {
    if (number % i === 0) {
      factors.push(number / i);
    }
  }
  return factors;
}
```

Bonus: When using `number % divisor === 0` this is finding all the numbers that evenly divide into the given number that was sent

4. Alyssa was asked to write an implementation of a rolling buffer. You can add and remove elements from a rolling buffer. However, once the buffer becomes full, any new elements will displace the oldest elements in the buffer.

She wrote two implementations of the code for adding elements to the buffer. In presenting the code to her team leader, she said "Take your pick. Do you prefer push() or concat() for modifying the buffer?".

Is there a difference between these implementations, other than the method she used to add an element to the buffer? You may assume that newElement will always be a primitive value.

```javascript
function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}
```

My Answer:

```
The `RollingBuffer1` function is a mutating way to complete the task at hand while the `RollingBuffer2` function creates a shallow copy of when using `.concat` method and returns that buffer back. So in this case if memory is a issue the second method would be more taxing on the RAM
```

5. What will the following two lines of code output?

```javascript
console.log(0.3 + 0.6);
console.log(0.3 + 0.6 === 0.9);
```

Don't look at the solution before you answer.

My Answer:

```
the first log should be .089999999999999999999999>>>>
the second log should be `false`
since computers use complete accuracy on addtion of floating points
```

6. What do you think the following code will output?

```javascript
let nanArray = [NaN];

console.log(nanArray[0] === NaN);
```

**Bonus**

How can you reliably test if a value is NaN?

My Answer:

```
This code will output false because even though its not a number it still doesn't mean they are exactly the same

Using `isNaN` method is the reliable way to check if a variable is `NaN`

```

7. What is the output of the following code?

```javascript
let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8);
```

My Answer:

```
This will output `34` since using `answer` as a argument is only passing the value of the number and not a pointer to it
```

8. One day, Spot was playing with the Munster family's home computer, and he wrote a small program to mess with their demographic data:

```javascript
let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" },
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach((familyMember) => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}
```

After writing this function, he typed the following code:

```javascript
messWithDemographics(munsters);
```

Before Grandpa could stop him, Spot hit the Enter key with his tail. Did the family's data get ransacked? Why or why not?

My Answer:

```
Yes the data was changed in this case, due to how JS works with objects. The function was given the pointer address of the objects location and changed each values object to the new values
```

9. Function and method calls can take expressions as arguments. Suppose we define a function named rps as follows, which follows the classic rules of the rock-paper-scissors game, but with a slight twist: in the event of a tie, it just returns the choice made by both players.

```javascript
function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}
```

What does the following code output?

```javascript
console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));
```

My Answer:

```
This will output `paper`
```

10. Consider these two simple functions:

```javascript
function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}
```

What will the following function invocation return?

```javascript
bar(foo());
```

My Answer:

```
This will return "no"
```
