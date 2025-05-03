# 15

P:

Given a string determine, how many times there was a occurance of duplicate characters. If duplicate character has been counted do NOT count anymore of that character

E:

```
const p = console.log;
p(distinctMultiples('xyz') === 0);              // (none)
p(distinctMultiples('xxyypzzr') === 3);         // x, y, z
p(distinctMultiples('xXyYpzZr') === 3);         // x, y, z
p(distinctMultiples('unununium') === 2);        // u, n
p(distinctMultiples('multiplicity') === 3);     // l, t, i
p(distinctMultiples('7657') === 1);             // 7
p(distinctMultiples('3141592653589793') === 4); // 3, 1, 5, 9
p(distinctMultiples('2718281828459045') === 5); // 2, 1, 8, 4, 5
```

D:

Will need the string given and also creating a make of character occurrences

A:

SET occurrences equal to empty object

LOOP the string given

- IF Object.keys(occurrences).includes(char)
  - occurrences[char] += 1
- ELSE
  - occurrences[char] = 1

RETRUN Object.values(occurrences).reduce((accum, currVal) => {

- IF currVal > 1
  - RETURN accum + 1
- RETURN accum
  },0)

C:

```javascript

```
