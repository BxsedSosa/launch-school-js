1. Write a function that returns the first element of an input array. For example:

```javascript
first(["Earth", "Moon", "Mars"]);

function first(arr) {
  return arr[0];
}
```

2. Write a function that returns the lat element of an input array. For example:

```javascript
last(["Earth", "Moon", "Mars"]);

function last(arr) {
  return arr[arr.length - 1];
}
```

3. We are given the following array of energy sources.

```javascript
let energy = ["fossil", "solar", "wind", "tidal", "fusion"];
```

Remove `"fossil"` from the array, then add `"geothermal"` to the end of the array.

```javascript
energy.splice(0, 1);
energy.push("geothermal");
```

4. Split the string `alphabet` into an array of characters

```javascript
let alphabet = "abcdefghijklmnopqrsuvwxyz";

alphabet.split("");
```

5. Count the number of elements in `scores` that are 100 or above.

```javascript
let scores = [96, 47, 113, 89, 100, 102];
let count = 0;

for (let i = 0; i < scores.length; i++) {
  if (scores[i] >= 100) {
    count += 1;
  }
}

console.log(count);
```

6. We've been given an array of vocab words grouped into sub-arrays by meaning. This is a 2D array or a nested array. Write some code that iterates throug the sub-arrays and logs each vocab word to the console.

```javascript
let vocabulary = [
  ["happy", "cheerful", "merry", "glad"],
  ["tired", "sleepy", "fatigued", "drained"],
  ["excited", "eager", "enthused", "animated"],
];

for (let i = 0; i < vocabulary.length; i++) {
  for (let j = 0; j < vocabulary[i].length; j++) {
    console.log(vocabulary[i][j]);
  }
}
```

7. Predict the output of the below code. When you run the code, do you see what you expected? Why or why not?

```javascript
let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 === array2);
```

```
This code would output `false` since JS compares objects by their address location in memeory instead of the elements wihtin the object itself
```

8. How can you check whether a variable holds a value that is an array? For example, imagine you start writing a function and want to check whether its arguments is an array:

```javascript
function filter(input) {
  return Array.isArray(input);
}
```

9. The `destinations` array contains a list of travel destinations.

```javascript
let destinations = [
  "Prague",
  "London",
  "Sydney",
  "Belfast",
  "Rome",
  "Aruba",
  "Paris",
  "Bora Bora",
  "Barcelona",
  "Rio de Janeiro",
  "Marrakesh",
  "New York City",
];
```

Write a function that checks whether or not a particular destination is included within `destinations`, without using the built-in method `Array.prototype.includes()`.

For example: When checking whether `Barcelona` is contained in `destinations`, the expected output is `true`, whereas the expected output for `Nashville` is `false`

```javascript
function contains(location, destinations) {
  for (let i = 0; i < destinations.length; i++) {
    if (location == destinations[i]) {
      return true;
    }
  }
  return false;
}
```

10. We generated parts of a passcode and now want to combine them into a string. Write some code that returns a string, with each portion of the passcode separated by a hyphen (-).

```javascript
let passcode = ["11", "jZ5", "hQ3f*", "8!7g3", "p3Fs"];

console.log(passcode.join("-"));
```

11. We have made a grocery list, and as we check off items on that list, we would like to remove them.

Write code that removes the items from `groceryList` one by one, until it is empty. If you log the elements you remove, the expected behavior would look as follows.

```javascript
let groceryList = [
  "paprika",
  "tofu",
  "garlic",
  "quinoa",
  "carrots",
  "broccoli",
  "hummus",
];

for (let i = groceryList.length; i > 0; i--) {
  console.log(groceryList.pop());
}

console.log(groceryList); // []
```
