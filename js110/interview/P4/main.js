let difference = (num1, num2) => {
  return Math.abs(num1 - num2);
};

let closestNumbers = (numArr) => {
  let lowestDiff = Infinity;
  let lowestPair;

  numArr.forEach((num1, idx) => {
    numArr.slice(idx + 1).forEach((num2) => {
      if (difference(num1, num2) < lowestDiff) {
        lowestDiff = difference(num1, num2);
        lowestPair = [num1, num2];
      }
    });
  });

  return lowestPair;
};

const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

p(eq(closestNumbers([5, 25, 15, 11, 20]), [15, 11]));
p(eq(closestNumbers([19, 25, 32, 4, 27, 16]), [25, 27]));
p(eq(closestNumbers([12, 22, 7, 17]), [12, 7]));
