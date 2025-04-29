let sevenEleven = (num) => {
  let sumTotal = 0;

  if (num >= 7) {
    for (let i = 7; i < num; i++) {
      if (i % 7 === 0 || i % 11 === 0) {
        sumTotal += i;
      }
    }
  }

  return sumTotal;
};

const p = console.log;
p(sevenEleven(10) === 7);
p(sevenEleven(11) === 7);
p(sevenEleven(12) === 18);
p(sevenEleven(25) === 75);
p(sevenEleven(100) === 1153);
p(sevenEleven(0) === 0);
p(sevenEleven(-100) === 0);
