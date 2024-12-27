function calculateLeftoverBlocks(cubes) {
  if (cubes === 1 || cubes === 0) {
    return 0;
  }
  let blocks = cubes - 1;

  for (let idx = 2; idx <= cubes; idx++) {
    let power = Math.pow(idx, 2);
    let remainder = blocks - power;

    if (remainder < 0) {
      break;
    } else if (remainder === 0) {
      blocks = 0;
      break;
    }

    blocks = remainder;
  }

  return blocks;
}

console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true
