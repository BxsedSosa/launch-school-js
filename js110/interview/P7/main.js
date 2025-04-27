let helper = (pairs, outerIdx, innerIdx) => {
  if (pairs.length === 0) return true;

  for (let pair of pairs) {
    if (pair.includes(outerIdx) || pair.includes(innerIdx)) {
      return false;
    }
  }
  return true;
};

let pairCounter = (numbers) => {
  let pairs = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] === numbers[j] && helper(pairs, i, j)) {
        pairs.push([i, j]);
        break;
      }
    }
  }

  return pairs.length;
};

let p = console.log;

p(pairCounter([3, 1, 4, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7]) === 3);
p(pairCounter([2, 7, 1, 8, 2, 8, 1, 8, 2, 8, 4]) === 4);
p(pairCounter([]) === 0);
p(pairCounter([23]) === 0);
p(pairCounter([997, 997]) === 1);
p(pairCounter([32, 32, 32]) === 1);
p(pairCounter([7, 7, 7, 7, 7, 7, 7]) === 3);
