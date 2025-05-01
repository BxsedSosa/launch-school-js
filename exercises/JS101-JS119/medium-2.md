1.

Given a string, determine the ratio of:

- lowercase characters
- uppercase characters
- other characters

My Answer:

```javascript
let letterPercentages = (string) => {
  const lowerReg = /[a-z]/;
  const upperReg = /[A-Z]/;

  let counter = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  };

  for (let char of string) {
    if (lowerReg.test(char)) {
      counter.lowercase += 1;
    } else if (upperReg.test(char)) {
      counter.uppercase += 1;
    } else {
      counter.neither += 1;
    }
  }

  Object.keys(counter).forEach((key) => {
    counter[key] = ((counter[key] / string.length) * 100).toFixed(2);
  });

  return counter;
};
```

2.

My Answer:

```javascript
let triangle = (num1, num2, num3) => {
  let numbers = [num1, num2, num3];
  let occurrences = {};

  for (let num of numbers) {
    if (!map[num]) {
      map[num] = 1;
    } else {
      map[num] += 1;
    }
  }

  const numKeys = Object.keys(occurrences);
  const numValues = Object.values(occurrences);

  if (numKeys.includes(0)) return "invalid";
  if (numValues.includes(3)) return "equilateral";
  if (numValues.includes(2)) {
    if (occurrences[Math.max(numKeys)] === 2) return "isosceles";
    if (Math.min(numKeys) * 2 > Math.max(numKeys)) {
      return "isosceles";
    } else {
      return "invalid";
    }
  }
  return "scalene";
};
```

3.

My Answer:

```javascript
let triable = (num1, num2, num3) => {
  let numbers = [num1, num2, num3];
  let occurrences = {};

  for (let num of numbers) {
    if (!occurrences[num]) {
      occurrences[num] = 1;
    } else {
      occurrences[num] += 1;
    }
  }

  const degrees = Object.keys(occurrences);
  const degreeOccurrences = Object.values(occurrences);
  const degreeSum = degrees.reduce((accum, currVal) => accum + currVal, 0);

  if (degreeSum !== 180 || degrees.includes(0)) return "invalid";
  if (degrees.includes(90) && occurrences["90"] === 1) return "right";
  if (degrees.every((degree) => degree < 90)) return "acute";
  if (degrees.some((degree) => degree > 120)) return "obtuse";
};
```

4.

My Answer:

```javascript
let triangle = (num1, num2, num3) => {
  let degrees = [num1, num2, num3];
  const degreeSum = degrees.reduce((accum, currVal) => accum + currVal, 0);

  if (degreeSum !== 180 || degrees.includes(0)) return "invalid";
  if (degrees.includes(90)) return "right";
  if (degrees.every((degree) => degree < 90)) return "acute";
  if (degrees.some((degree) => degree > 90)) return "obtuse";
};
```

5.

My Answer:

```javascript

```

6.

For a unique number the number needs to be a multiple of 7 & there can't be any repeating numbers. The max number is `9876543201`

My Answer:

```javascript
let helper = (nums) => {
  let seenNums = [];

  for (let num of String(nums)) {
    if (seenNums.includes(num)) {
      return false;
    } else {
      seenNums.push(num);
    }
  }
  return true;
};

let featured = (nums) => {
  let maxNum = 9876543201;
  let divisibleCount = Math.floor(nums / 7);
  let featureNum = (divisibleCount + 1) * 7;

  while (
    (!helper(featureNum) || featureNum % 2 === 0) &&
    featureNum <= maxNum
  ) {
    divisibleCount += 1;
    featureNum = (divisibleCount + 1) * 7;
  }

  if (featureNum <= maxNum) {
    return featureNum;
  }

  return "There is no possible number that fulfills those requirements.";
};
```

7.

My Answer:

```javascript
let sumSquareDifference = (num) => {
  if (num <= 1) return 0;

  let listOfNums = new Array(num).fill().map((_, idx) => idx + 1);

  let summedSquare = Math.pow(
    listOfNums.reduce((accum, currVal) => accum + currVal),
    2
  );
  let individualSumSquare = listOfNums.reduce(
    (accum, currVal) => accum + Math.pow(currVal, 2)
  );

  return summedSquare - individualSumSquare;
};
```

8.

My Answer:

```javascript
let bubbleSort = (nums) => {
  let swapped;

  do {
    swapped = false;

    for (let leftIdx = 0; leftIdx < nums.length; leftIdx++) {
      let leftElement = nums[leftIdx];
      let rightElement = nums[leftIdx + 1];

      if (leftElement > rightElement) {
        nums[leftIdx] = rightElement;
        nums[leftIdx + 1] = leftElement;
        swapped = true;
      }
    }
  } while (swapped);

  return nums;
};
```

9.

My Answer:

```javascript
let helper = (num, divisor) => {
  return num % divisor === 0;
};

let isPrime = (num) => {
  let primeCounter = [...Array(num)].reduce((accum, _, idx) => {
    helper(num, idx + 1);
  }, 0);

  return primeCounter === 2;
};
```
