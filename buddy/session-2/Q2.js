/*
 * 2. Identify what concpet is being used
 */

let foo = (bar, ls) => {
  bar(ls);
};

function qux(baz) {
  baz.push(" ");
}

let thing = [1, 2, 3];

for (let i = 0; i < 5; i++) {
  foo(qux, thing);
}
