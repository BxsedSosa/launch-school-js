# PEDAC Guided Practice: Leftover Blocks

**Leftover Blocks**

You have a number of building blocks that can be used to build a valid structure. There are certain rules about what determines the validity of a structure:

    - The building blocks are cubes
    - The structure is built in layers
    - The top layer is a single block
    - A block in an upper layer must be supported by four blocks in a lower layer
    - A block in a lower layer can support more than one block in an upper layer
    - You cannot leave gaps between blocks

Write a program that, given the number for a specific amount of cubes, calculates the number of blocks left over after building the tallest possible valid structure.

---

**Tasks**

You are provided with the problem description above. Your tasks for this step are:

    - To make notes of your mental model for the problem, including explicit and implicit rules
    - Write a list of questions for things that aren't clear about the problem from the description provided

## P: Understand the problem

Input: Integer of how many cubes are wanted to be used
Output: integer of how many cubes were NOT used in making the structure

Explicit:

- Building blocks are cubes
- Structure is build in layers
- Top layer is a single block
- Upper layer needs to be supported by 4 block under it
- Lower layer can support more than one block in the upper layer
- No gaps between blocks

Implicit:

- How are the blocks made

Given a number of cubes need to return the number of blocks left over that werent used to build the tallest structure.

## E: Example & Test Cases

```js
console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true
```

## D: Data structure

```
[
                         [cube1]
                [cube2 cube3 cube4 cube5]
[cube6 cube7 cube8 cube9 cube10 cube11 cube12 cube13 cube14]
]
```

## A: Algorithm

```
START

# Given a integer called `Cubes`

IF `Cubes` is equal to 1 or 0
    return 0

SET Cubes = Cubes - 1

FOR iterator = 2 <= Cubes
    SET power = Math.pow(iterator, 2);
    SET remainder = Cubes - power
    IF remainder < 0
        return cubes
    ELSE IF remainder == 0
        return 0
    ELSE
        continue

END
```

## C: Code

```js
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
```
