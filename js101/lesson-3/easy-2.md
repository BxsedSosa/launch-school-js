1. Given a string, return a new string that replaces every occurrence of the word "important" with "urgent":

```javascript
let advice =
  "Few things in life are as important as house training your pet dinosaur.";
```

My Answer:

```javascript
advice.replaceAll("important", "urgent");
```

2. The Array.prototype.reverse method reverses the order of elements in an array, and Array.prototype.sort can rearrange the elements in a variety of ways, including descending. Both of these methods mutate the original array as shown below. Write two distinct ways of reversing the array without mutating the original array. Use reverse for the first solution, and sort for the second.

```javascript
let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
numbers.sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]
```

Bonus Question: Can you do it using the Array.prototype.forEach() method?

My Answer:

```javascript
let numbers = [1, 2, 3, 4, 5];
numbers.toReversed();
console.log(numbers);

numbers = [1, 2, 3, 4, 5];
numbers.toSorted((num1, num2) => num2 - num1);
console.log(numbers);
```

3. Given a number and an array, determine whether the number is included in the array.

```javascript
let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8; // false
let number2 = 95; // true
```

My Answer:

```javascript
numbers.includes(number1);
numbers.includes(number2);
```

4. Starting with the string:

```javascript
let famousWords = "seven years ago...";
```

show two different ways to put the exprected "Four score and" in front of it.

My Answer:

```javascript
console.log(`Four score and ${famousWords}`);
console.log("Four score and".concat(" ", famousWords));
```

5. Given an array of numbers [1, 2, 3, 4, 5], mutate the array by removing the number at index 2 so that the array becomes [1, 2, 4, 5]

My Answer:

```javascript
let numbers = [1, 2, 3, 4, 5];

numbers.splice(2, 1);
console.log(numbers);
```

6.  Suppose we build an array like this:

```javascript
let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);
```

This code will create a nested array that looks like this:

```javascript
["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
```

Nesting data structures like we do here is commonplace in JavaScript and programming in general. We'll explore this in much greater depth in a future Lesson.

Create a new array that contains all of the above values, but in an un-nested format:

```javascript
["Fred", "Wilma", "Barney", "Betty", "Bambam", "Pebbles"];
```

My Answer:

```javascript
let newFlintstones = flintstones.flat();
```

7. Consider the following object:

```javascript
let flintstones = {
  Fred: 0,
  Wilma: 1,
  Barney: 2,
  Betty: 3,
  Bambam: 4,
  Pebbles: 5,
};
```

Create an array from this object that contains only two elements: Barney's name and Barney's number:

```javascript
["Barney", 2];
```

My Answer:

```javascript
for (const [key, value] of Object.entries(flintstones)) {
  if (key === "Barney") {
    return [key, value];
  }
}
```

8. How would you check whether the objects assigned to variables `numbers` and `table` below are arrays?

```javascript
let numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false
```

My Answer:

```javascript
Array.isArray(numbers);
Array.isArray(table);
```

9. Back in the stone age (before CSS), we used spaces to align things on the screen. If we have a 40-character wide table of Flintstone family members, how can we center the following title above the table with spaces?

```javascript
let title = "Flintstone Family Members";
```

My Answer:

```javascript
let titleLength = title.length;
let center = 40;

console.log(title.padStart(40, " "));
```

10. Write a one-line expression to count the number of lower-case t characters in each of the following strings:

```javascript
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";
```

My Answer:

```javascript
statement1.split("").filter((char) => char === "t").length;
statement2.split("").filter((char) => char === "t").length;
```
