let minimumSum = (numArr) => {
  if (numArr.length < 5) return null;
  let lowestSum;

  for (let i = 0; i < numArr.length; i++) {
    if (i + 5 <= numArr.length) {
      let currentSum = numArr.slice(i, i + 5).reduce((accum, currVal) => {
        return accum + currVal;
      }, 0);

      if (lowestSum === undefined || currentSum < lowestSum) {
        lowestSum = currentSum;
      }
    }
  }

  return lowestSum;
};

console.log(minimumSum([1, 2, 3, 4]));
console.log(minimumSum([1, 2, 3, 4, 5, -5]));
console.log(minimumSum([1, 2, 3, 4, 5, 6]));
console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]));
console.log(minimumSum([-1, -5, -3, -0, -1, 2, -4]));
