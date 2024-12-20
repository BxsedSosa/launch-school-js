1.

My Answer:

```javascript

```

2. Combining Arrays

Write a function that takes two arrays as arguments and returns an array containing the union of the values from the two. There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. You may assume that both arguments will always be arrays.

Example:

```javascript
union([1, 3, 5], [3, 6, 9]); // [1, 3, 5, 6, 9]
```

My Answer:

```javascript
function union(arr1, arr2) {
  for (const arr2Element of arr2) {
    if (!arr1.includes(arr2Element)) {
      arr1.push(arr2Element);
    }
  }
  console.log(arr1);
}
```

3. Halvsies

Write a function that takes an array as an argument and returns an array that contains two elements, each of which is an array. Put the first half of the original array elements in the first element of the return value, and put the second half in the second element. If the original array contains an odd number of elements, place the middle element in the first half array.

Examples:

```javascript
halvsies([1, 2, 3, 4]); // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]); // [[1, 5, 2], [4, 3]]
halvsies([5]); // [[5], []]
halvsies([]); // [[], []]
```

My Answer:

```javascript
function halvsies(arr) {
  let firstHalf, secondHalf;
  if (arr.length > 1) {
    if (arr.length % 2 === 0) {
      firstHalf = arr.slice(0, arr.length / 2);
      secondHalf = arr.slice(arr.length / 2);
      return [firstHalf, secondHalf];
    }
    let half = Math.floor(arr.length / 2);

    firstHalf = arr.slice(0, half + 1);
    secondHalf = arr.slice(half + 1);
    return [firstHalf, secondHalf];
  }

  if (arr.length === 1) {
    return [[arr[0]], []];
  }

  return [[], []];
}
```

4. Find the duplicate

Given an unordered array and the information that exactly one value in the array occurs twice (every other value occurs exactly once), determine which value occurs twice. Write a function that will find and return the duplicate value that is in the array.

Examples:

```javascript
findDup([1, 5, 3, 1]); // 1
findDup([
  18, 9, 36, 96, 31, 19, 54, 75, 42, 15, 38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
  14, 61, 90, 81, 8, 63, 95, 99, 30, 65, 78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
  89, 10, 84, 1, 47, 68, 12, 33, 86, 60, 41, 44, 83, 35, 94, 73, 98, 3, 64, 82,
  55, 79, 80, 21, 39, 72, 13, 50, 6, 70, 85, 87, 51, 17, 66, 20, 28, 26, 2, 22,
  40, 23, 71, 62, 73, 32, 43, 24, 4, 56, 7, 34, 57, 74, 45, 11, 88, 67, 5, 58,
]); // 73
```

My Answer:

```javascript
function findDup(arr) {
  let count = {};

  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] in count)) {
      count[arr[i]] = 1;
      continue;
    }
    count[arr[i]] += 1;
  }
  for (const element of Object.keys(count)) {
    if (count[element] > 1) {
      return element;
    }
  }
}
```

5. Combine Two Lists

Write a function that combines two arrays passed as arguments, and returns a new array that contains all elements from both array arguments, with each element taken in alternation.

You may assume that both input arrays are non-empty, and that they have the same number of elements.

Example:

```javascript
interleave([1, 2, 3], ["a", "b", "c"]); // [1, "a", 2, "b", 3, "c"]
```

My Answer:

```javascript
function interleave(arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i], arr2[i]);
  }
  return newArr;
}
```

6. Multiplicative Average

Write a function that takes an array of integers as input, multiplies all of the integers together, divides the result by the number of entries in the array, and returns the result as a string with the value rounded to three decimal places.

Examples:

```javascript
multiplicativeAverage([3, 5]); // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]); // "28361.667"
```

My Answer:

```javascript
function multiplicativeAverage(arr) {
  let sum = 1;
  for (const num of arr) {
    sum *= num;
  }
  return sum / arr.length;
}
```

7. Multiply Lists

Write a function that takes two array arguments, each containing a list of numbers, and returns a new array that contains the product of each pair of numbers from the arguments that have the same index. You may assume that the arguments contain the same number of elements.

Example:

```javascript
multiplyList([3, 5, 7], [9, 10, 11]); // [27, 50, 77]
```

My Answer:

```javascript
function multiplyList(arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i] * arr2[i]);
  }
  return newArr;
}
```

8. List of Digits

Write a function that takes one argument, a positive integer, and returns a list of the digits in the number.

Examples:

```javascript
digitList(12345); // [1, 2, 3, 4, 5]
digitList(7); // [7]
digitList(375290); // [3, 7, 5, 2, 9, 0]
digitList(444); // [4, 4, 4]
```

My Answer:

```javascript
function digitList(number) {
  let string = [...String(number)];
  return string.map(Number);
}
```

9. How Many?

Write a function that counts the number of occurrences of each element in a given array. Once counted, log each element alongside the number of occurrences. Consider the words case sensitive e.g. ("suv" !== "SUV").

Example:

```javascript
let vehicles = [
  "car",
  "car",
  "truck",
  "car",
  "SUV",
  "truck",
  "motorcycle",
  "suv",
  "motorcycle",
  "car",
  "truck",
];

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1
```

My Answer:

```javascript
function countOccurrences(arr) {
  let counter = {};

  for (const ele of arr) {
    if (!(ele in counter)) {
      counter[ele] = 1;
      continue;
    }

    counter[ele] += 1;
  }

  for (const key of Object.keys(counter)) {
    console.log(`${key} => ${counter[key]}`);
  }
  return " ";
}
```

10. Array Average

Write a function that takes one argument, an array of integers, and returns the average of all the integers in the array, rounded down to the integer component of the average. The array will never be empty, and the numbers will always be positive integers.

Examples:

```javascript
average([1, 5, 87, 45, 8, 8]); // 25
average([9, 47, 23, 95, 16, 52]); // 40
```

My Answer:

```javascript
function average(arr) {
  let sum = 0;

  arr.forEach((num) => (sum += num));
  return sum / arr.length;
}
```

11. After Midnight (Part 1)

The time of day can be represented as the number of minutes before or after midnight. If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

Write a function that takes a time using this minute-based format and returns the time of day in 24 hour format (hh:mm). Your function should work with any integer input.

You may not use javascript's Date class methods.

Examples:

```javascript
console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
```

My Answer:

```javascript
function timeOfDay(minutes) {
  let hours, mins;
  let beforeMidnight = 1440;

  if (minutes > 0) {
    hours = numUnder10(Math.floor(minutes / 60));
    mins = numUnder10(minutes % 60);

    if (hours > 24) {
      hours = numUnder10(hours % 24);
      return `"${hours}:${mins}"`;
    }

    return `"${hours}:${mins}"`;
  } else if (minutes < 0) {
    minutes = Math.abs(Math.abs(minutes) - beforeMidnight);
    hours = numUnder10(Math.floor(minutes / 60));
    mins = numUnder10(minutes % 60);

    if (hours > 24) {
      hours = numUnder10(Math.floor(hours / 24));
      mins = numUnder10(Math.abs(mins - 60));
      return `"${hours}:${mins}"`;
    }

    return `"${hours}:${mins}"`;
  } else {
    return "00:00";
  }
}

function numUnder10(num) {
  if (num < 10) {
    return num.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
  }
  return num;
}
```

12.

My Answer:

```javascript

```
