2. Create a function that takes an array of integers as an argument. The function should return the minimum sum of 5 consecutive numbers in the array. If the array contains fewer than 5 elements, the function should return null.

```javascript
const p = console.log;
p(minimumSum([1, 2, 3, 4]) === null);
p(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
p(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
p(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
p(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);
```

P: Given an array of numbers find the lowest sum of 5 consecutive elements and return that number

E:

[1, 2, 3, 4] === null
[1, 2, 3, 4, 5, -5] === 9
[1, 2, 3, 4, 5, 6] === 15
[55, 2, 6, 5, 1, 2, 9, 3, 5, 100] === 16
[-1, -5, -3, 0, -1, 2, -4] === -10

D:

Need array for the numbers given and needs to return a number as result

A:

if given array is less than 5 elements return `null`

Using forEach on the `arr` if the current idx + 5 is less than or equal to the arr length
get a slice of the `arr` starting at the idx and ends at the idx + 5 then using the reduce method on the slice add up the accumative value and the current value together

once the reduce method is saved to the variable `sum` check if `sum` is less than the `lowestNum`. If so reassign `lowestNum` to `sum`

return `lowestNum` once all the looping is finished

C:

```javascript
function minimumSum(arr) {
  let lowestNum = Infinity;
  if (arr.length < 5) {
    return null;
  }

  arr.forEach((_, idx) => {
    if (idx + 5 <= arr.length) {
      let sum = arr.slice(idx, idx + 5).reduce((acc, curr) => acc + curr);
      if (sum < lowestNum) {
        lowestNum = sum;
      }
    }
  });

  return lowestNum;
}
```
