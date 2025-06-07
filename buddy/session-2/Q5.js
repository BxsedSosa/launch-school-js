/*
 * 5. What happens to the variables `paris`, `america`, `canada`, and what happens with `countries`
 */

let paris = "Paris";
let america = "America";
let canada = "Canda";

let countries = [paris, america, canada];

for (let i = 0; i < countries.length; i++) {
  countries[i] = `${countries[i]} ${countries[i].length}`;
}
