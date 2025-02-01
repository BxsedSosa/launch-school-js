4. Create a function that takes an array of integers as an argument and returns an array of two numbers that are closest together in value. If there are multiple pairs that are equally close, return the pair that occurs first in the array.

```javascript
const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

p(eq(closestNumbers([5, 25, 15, 11, 20]), [15, 11]));
p(eq(closestNumbers([19, 25, 32, 4, 27, 16]), [25, 27]));
p(eq(closestNumbers([12, 22, 7, 17]), [12, 7]));
```

P:

Within the array find the difference between pairs and find the pair thats cloestest to 0

E:

[5, 25, 15, 11, 20] -> [15, 11]
[19, 25, 32, 4, 27, 16] -> [25, 27]
[12, 22, 7, 17] -> [12, 7]

D:

Arrays and numbers are needed

A:

Create a array of array pairs using the map method

once the pairs are created use the reduce method to retreieve the pair cloestest together

C:

```javascript
function helper(pair) {
  return Math.abs(pair[0] - pair[1]);
}

function closestNumbers(arrNum) {
  let pairs = arrNum.map((num, idx) => {
      return arrNum.slice(idx + 1).map(innerNum => [num, innerNum]);
  }).flat();

  return pairs.reduce((closestPair, nextPair) => {
      let closestPairDiff = helper(closestPair);
      let nextPairDiff = helper(nextPair);

      if (nextPairDiff < closestPairDiff) {
          return nextPair;
      }
      return closestPair;
  })
}
```
