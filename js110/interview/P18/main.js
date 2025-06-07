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

const p = console.log;
p(equalSumIndex([1, 2, 4, 4, 2, 3, 2]) === 3);
p(equalSumIndex([7, 99, 51, -48, 0, 4]) === 1);
p(equalSumIndex([17, 20, 5, -60, 10, 25]) === 0);
p(equalSumIndex([0, 2, 4, 4, 2, 3, 2]) === -1);

// The following test case could return 0 or 3. Since we're
// supposed to return the smallest correct index, the correct
// return value is 0.
p(equalSumIndex([0, 20, 10, -60, 5, 25]) === 0);
