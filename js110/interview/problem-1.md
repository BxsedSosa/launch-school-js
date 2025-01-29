1. Create a function that takes an array of numbers as an argument. For each number, determine how many numbers in the array are smaller than it, and place the answer in an array. Return the resulting array.

When counting numbers, only count unique values. That is, if a number occurs multiple times in the array, it should only be counted once.

```javascript
const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

p(eq(smallerNumbersThanCurrent([8, 1, 2, 2, 3]), [3, 0, 1, 1, 2]));
p(eq(smallerNumbersThanCurrent([7, 7, 7, 7]), [0, 0, 0, 0]));
p(eq(smallerNumbersThanCurrent([6, 5, 4, 8]), [2, 1, 0, 3]));
p(eq(smallerNumbersThanCurrent([1]), [0]));

let myArray = [1, 4, 6, 8, 13, 2, 4, 5, 4];
let result = [0, 2, 4, 5, 6, 1, 2, 3, 2];
p(eq(smallerNumbersThanCurrent(myArray), result));
```

P:

Within the array, find how many times is that number less than all the other elements. so if the number is currently 2... What numbers are less than 2 within the array and keep that count. When incremening the count they must be unique numbers. So keeping track of what numbers that have been seen needs to be checked. once iteration is done on the array return array of occurances.

E:

[8, 1, 2, 2, 3] -> [3, 0, 1, 1, 2]
[7, 7, 7, 7] -> [0, 0, 0, 0]
[6, 5, 4, 8] -> [2, 1, 0, 3]
[1] -> [0]

D:

Need to use numbers and arrays

A:

Create a array called `seen` which will hold all unique elements

using the map method on the given array the return value will be the reduce method starting from 0 and if the element is unique and the current map number is less than the current reduce element increment the counter which will return the new element to the map array

C:

```javascript
function smallerNumbersThanCurrent(arr) {
  return arr.map((num1) => {
    let seen = [];
    return arr.reduce((accum, curr) => {
      if (!seen.includes(curr)) {
        seen.push(curr);
        if (curr < num1) {
          return (accum += 1);
        }
      }
      return accum;
    }, 0);
  });
}
```
