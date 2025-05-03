# 20

P:

Given an array of numbers, return the number that doesn't match the rest

E:

```
const p = console.log;
p(whatIsDifferent([0, 1, 0]) === 1);
p(whatIsDifferent([7, 7, 7, 7.7, 7]) === 7.7);
p(whatIsDifferent([1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1]) === 11);
p(whatIsDifferent([3, 4, 4, 4]) === 3);
p(whatIsDifferent([4, 4, 4, 3]) === 3);
```

D:

Data needed here is arrays and numbers

A:
SET occurrences equal to empty object

LOOP array
SET num = String(num)

- IF (object.keys(occurrences).includes(num))
  - occurrences[num] += 1
- ELSE
  - occurrences[num] = 1

RETURN object.keys(occurrences).find(num => occurrences[num] === 1)

C:

```javascript
let whatIsDifferent = (numArr) => {
  let occurrences = {};

  numArr.forEach((num) => {
    num = String(num);
    if (Object.keys(occurrences).includes(num)) {
      occurrences[num] += 1;
    } else {
      occurrences[num] = 1;
    }
  });

  return Number(Object.keys(occurrences).find((num) => occurrences[num] == 1));
};

const p = console.log;
p(whatIsDifferent([0, 1, 0]) === 1);
p(whatIsDifferent([7, 7, 7, 7.7, 7]) === 7.7);
p(whatIsDifferent([1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1]) === 11);
p(whatIsDifferent([3, 4, 4, 4]) === 3);
p(whatIsDifferent([4, 4, 4, 3]) === 3);
```
