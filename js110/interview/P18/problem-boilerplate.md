# 18

P:

Given an array of ints, while looping the take the index elements that are less than the current `i` index and sum them together. Do the same for the right side excluding the currnet `i` index.

Now we have the left side of the array of elements summed up and we have the right side of the array of eleements summed up excluding `i` for both. IF both sides are equivalent return the `i` index.

IF there are multiple valid indexes return the min index

E:

```
const p = console.log;
p(equalSumIndex([1, 2, 4, 4, 2, 3, 2]) === 3);
p(equalSumIndex([7, 99, 51, -48, 0, 4]) === 1);
p(equalSumIndex([17, 20, 5, -60, 10, 25]) === 0);
p(equalSumIndex([0, 2, 4, 4, 2, 3, 2]) === -1);

// The following test case could return 0 or 3. Since we're
// supposed to return the smallest correct index, the correct
// return value is 0.
p(equalSumIndex([0, 20, 10, -60, 5, 25]) === 0);
```

D:

We will need arrays and numbers for this problem

A:

SET validIndexes equal to empty array

LOOP

- SET leftSum equal to 0
- SET rightSum equal to 0

- IF i === 0
  - rightSum = arr.slice(1, arr.length)
- ELSE IF i === arr.length - 1
  - leftSum = arr.slice(0, arr.length - 1)
- ELSE

  - leftSum = arr.slice(0, i)
  - rightSum = arr.slice(i + 1, arr.length)

- IF leftSum === rightSum
  - validIndexes.push(i)

IF validIndexes.length === 0

- return -1

return Math.min(validIndexes)

C:

```javascript
let helper = (numArray) => {
  return numArray.reduce((accum, currVal) => accum + currVal, 0);
};

let equalSumIndex = (numArray) => {
  const validIndexes = [];

  numArray.forEach((_, idx) => {
    let leftSum = 0;
    let rightSum = 0;

    if (idx === 0) {
      rightSum = helper(numArray.slice(1, numArray.length));
    } else if (idx === numArray.length - 1) {
      leftSum = helper(numArray.slice(1, numArray.length - 1));
    } else {
      leftSum = helper(numArray.slice(0, idx));
      rightSum = helper(numArray.slice(idx + 1, numArray.length));
    }

    if (leftSum === rightSum) {
      validIndexes.push(idx);
    }
  });

  return validIndexes.length === 0 ? -1 : Math.min(...validIndexes);
};
```
