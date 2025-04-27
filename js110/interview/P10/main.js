let evenSubstrings = (numbers) => {
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j <= numbers.length; j++) {
      if (Number(numbers.slice(i, j) % 2 === 0)) {
        count += 1;
      }
    }
  }
  return count;
};

const p = console.log;
p(evenSubstrings("1432") === 6);
p(evenSubstrings("3145926") === 16);
p(evenSubstrings("2718281") === 16);
p(evenSubstrings("13579") === 0);
p(evenSubstrings("143232") === 12);
