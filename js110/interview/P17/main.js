let helper = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }

  return true;
};

let nearestPrimeSum = (numArr) => {
  const sumArr = numArr.reduce((accum, currVal) => accum + currVal, 0);
  let notPrime = true;
  let closestPrime = sumArr + 1;

  while (notPrime) {
    if (!helper(closestPrime)) {
      closestPrime += 1;
    } else {
      notPrime = false;
    }
  }

  return Math.abs(closestPrime - sumArr);
};

const p = console.log;
p(nearestPrimeSum([1, 2, 3]) === 1); // Nearest prime to 6 is 7
p(nearestPrimeSum([5, 2]) === 4); // Nearest prime to 7 is 11
p(nearestPrimeSum([1, 1, 1]) === 2); // Nearest prime to 3 is 5
p(nearestPrimeSum([2, 12, 8, 4, 6]) === 5); // Nearest prime to 32 is 37

// Nearest prime to 163 is 167
p(nearestPrimeSum([50, 39, 49, 6, 17, 2]) === 4);
