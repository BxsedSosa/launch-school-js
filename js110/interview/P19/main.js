let oddFellow = (numArr) => {
  let occurrences = {};

  numArr.forEach((num) => {
    num = String(num);
    if (Object.keys(occurrences).includes(num)) {
      occurrences[num] += 1;
    } else {
      occurrences[num] = 1;
    }
  });

  return Number(
    Object.keys(occurrences).find((num) => occurrences[num] % 2 === 1),
  );
};

const p = console.log;
p(oddFellow([4]) === 4);
p(oddFellow([7, 99, 7, 51, 99]) === 51);
p(oddFellow([7, 99, 7, 51, 99, 7, 51]) === 7);
p(oddFellow([25, 10, -6, 10, 25, 10, -6, 10, -6]) === -6);
p(oddFellow([0, 0, 0]) === 0);
