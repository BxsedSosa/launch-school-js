1. Concatenate two or more strings, one with your first name and one with your last, to create a string with your full name as its value. For example, if your name is John Doe, think about how you can put 'John' and 'Doe' together to get 'John Doe'.

```javascript
console.log("Donovan " + "Abad");
```

2. Using arithmetic operators, get the individual digits of a 4-digit number like 4936:

   1. Thousands place is 4

   ```javascript
    console.log((4936 % 10000 - (4936 % 1000)) / 1000);
    > 4
   ```

   2. Hundreds place is 9

   ```javascript
   console.log((4936 % 1000 - (4936 % 100)) / 100);
   > 9
   ```

   3. Tens place is 3

   ```javascript
   console.log((4936 % 100 - (4936 % 10)) /10);
   > 3
   ```

   4. Onces place is 6

   ```javascript
    console.log(4936 % 10);
    > 6
   ```

3. Identify the data type for each of the following values:

- 'true'
- false
- 1.5
- 2
- undefined
- {foo: 'bar'}

```
String
Boolean
Number
Number
undefined
Object
```

4. Explain why this code logs '510' instead of 15.

```javascript
console.log("5" + 10);
```

```
This code logs `510` instead of 15 because in the expression we have 2 different types the first operand is a string and the second operand is a number. JS will implicently coerce the data type of the number into a string. Then will concat the two operands together making a string '510'
```

5. Recator the code from the previous exercise to use explicit coercion, so it logs `15` instead.

```javascript
console.log(Number("5") + 10);
```

6. Use the template literal syntax along with the expression `Number('5') + 10` to log the following sentence to the console:

```
the value of 5 + 10 is 15.
```

```javascript
console.log(`The value of 5 + 10 is ${Number("5") + 10}.`);
```

7. Will an error occur if you try to access and array element with an index that is greater than or equal to the length of the array? For example:

```javascript
let foo = ["a", "b", "c"];
console.log(foo.length); // => 3
console.log(foo[3]);
```

```
In this example if you were to index larger than the array length JS will search the array seeing that the index given is larger then the amount of elements in the array and return a `undefined`
```

8. Create an array named `names` that contains a list of pet names. For instance:

| Name         |
| ------------ |
| asta         |
| butterscotch |
| pudding      |
| neptune      |
| darwin       |

```javascript
let names = ["asta", "butterscotch", "pudding", "neptune", "darwin"];
```

9. Create an Object Named `pets` that contains a list of pet names and the type of animal. For instance:

| Name         | Animal |
| ------------ | ------ |
| asta         | dog    |
| butterscotch | cat    |
| pudding      | cat    |
| neptune      | fish   |
| darwin       | lizard |

```javascript
let pets = {
  asta: "dog",
  butterscotch: "cat",
  pudding: "cat",
  neptune: "fish",
  darwin: "lizard",
};
```

10. What value does the following expression evaluate to?

```javascript
"foo" === "Foo";
```

```
This would evaluate to `false` since the first string operand is all lowercase and the second string operand has a capitalized `F` which makes these 2 strings completely unique from each other
```

11. What value does the following expression evaluate to?

```javascript
parseInt("3.1415");
```

```
This would evaluate to `3` sine parseInt looks for whole numbers in series of each other. The period character bbreaks that and thats why it returns `3`
```

12. What value does the following expression evaluate to?

```javascript
"12" < "9";
```

```
In this example we are evaluating 2 strings and since the first operand has 2 characters it ends up being larger then the second operand returning `false`

Answer:

Since its two strings the first operand gets evaluated as `1` and `1` is less than `9` so it returns `true`
```
