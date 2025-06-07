/*
 * 3. What are all the different scopes and what variables belong to each one
 */

let a = 0;

function foo() {
  let b = 20;

  while (b >= a) {
    let c = 902;
    a += 0.5;
  }

  b = 5;
}

b = 20;

foo();
console.log(a);
