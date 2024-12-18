1. Will the following functions return the same results?

```javascript
function first() {
  return {
    prop1: "hi there",
  };
}

function second() {
  return;
  {
    prop1: "hi there";
  }
}

console.log(first());
console.log(second());
```

Try to answer without running the code or looking at the solution.

My Answer:

```
This will not return the same result in the same `second` function it will return undefined since the return statement would stop at the first line of the function.

The first function will return the object
```

2. What does the last line in the following code output?

```javascript
let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);
```

Try to answer without running the code or looking at the solution.

My Answer:

```
This code will output:

{ first: [1, 2]}
```

3. Given the following similar sets of code, what will each code snippet print?

A.

```javascript
function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);
```

B.

```javascript
function messWithVars(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);
```

C.

```javascript
function messWithVars(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);
```

My Answer:

```
A.
    > one is: one
    > two is: two
    > three is: three

B.
    > one is: one
    > two is: two
    > three is: three

C.
    > one is: two
    > two is: three
    > three is: one
```

4. Can you identify all of the variables, primitive values, and objects in the following code?

```javascript
function boo(scare) {
  let myBoo = scare.toUpperCase() + "!!!";
  console.log(myBoo);
}

const halloweenCollection = {
  greet: "Happy Halloween",
  scare: "Boo",
  wish: "May all your pumpkins be glowing",
};

let myBoo = boo(halloweenCollection["greet"]);
```

My Answer:

```
Variables:
    boo line 1
    scare line 1
    myBoo line 2
    halloweenCollection line 6
    myBoo line 12

Primitives:
    greet
    scare
    wish
    myBoo line 2
    myBoo line 3
    "Happy Halloween"
    "Boo"
    "May all your pumpkins be glowing"
    halloweenCollection["greet"]

Objects:
    boo line 1
    halloweenCollection line 6

```

5. Ben was tasked to write a simple JavaScript function to determine whether an input string is an IP address using 4 dot-separated numbers, e.g., 10.4.5.11. He is not familiar with regular expressions.

Alyssa supplied Ben with a function named isAnIpNumber. It determines whether a string is a numeric string between 0 and 255 as required for IP numbers and asked Ben to use it. Here's the code that Ben wrote:

```javascript
function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) {
    return false;
  }

  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      break;
    }
  }

  return true;
}
```

Alyssa reviewed Ben's code and said, "It's a good start, but you missed a few things. You're not returning a false condition, and you're not handling the case when the input string has more or less than 4 components, e.g., 4.5.5 or 1.2.3.4.5: both those values should be invalid."

Help Ben fix his code.

My Answer:

```javascript

```
