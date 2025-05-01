let helper = (num, divisor) => {
  return num % divisor === 0;
};

let isPrime = (num) => {
  let primeCount = [...Array(num)].reduce((accum, _, idx) => {
    if (helper(num, idx + 1)) {
      return accum + 1;
    }

    return accum;
  }, 0);

  return primeCount === 2;
};

console.log(isPrime(1) === false); // true
console.log(isPrime(2) === true); // true
console.log(isPrime(3) === true); // true
console.log(isPrime(4) === false); // true
console.log(isPrime(5) === true); // true
console.log(isPrime(6) === false); // true
console.log(isPrime(7) === true); // true
console.log(isPrime(8) === false); // true
console.log(isPrime(9) === false); // true
console.log(isPrime(10) === false); // true
console.log(isPrime(23) === true); // true
console.log(isPrime(24) === false); // true
console.log(isPrime(997) === true); // true
console.log(isPrime(998) === false); // true
console.log(isPrime(3_297_061) === true); // true
console.log(isPrime(23_297_061) === false); // true
