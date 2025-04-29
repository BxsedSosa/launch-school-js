let greatestProduct = (numString) => {
  let largestProduct = 0;

  for (let i = 0; i + 4 <= numString.length; i++) {
    let product = numString
      .slice(i, i + 4)
      .split("")
      .map((ele) => Number(ele))
      .reduce((accum, currVal) => currVal * accum, 1);

    if (product > largestProduct) {
      largestProduct = product;
    }
  }

  return largestProduct;
};

const p = console.log;
p(greatestProduct("23456") === 360); // 3 * 4 * 5 * 6
p(greatestProduct("3145926") === 540); // 5 * 9 * 2 * 6
p(greatestProduct("1828172") === 128); // 1 * 8 * 2 * 8
p(greatestProduct("123987654") === 3024); // 9 * 8 * 7 * 6
