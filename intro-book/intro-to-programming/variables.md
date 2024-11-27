1. Write a program named greeter.js that greets `Victor` three times. Your program should use a vairable and not hard code the string value `Victor` in each greeting. Here's an example run of the program

```
$ node greeter.js
Good Morning, Victor.
Good Afternoon, Victor.
Good Evening, Victor.
```

2. Write a program named `age.js` that includes someone's age and then calculates and reports the future age in 10, 20, 30 and 40 years. Below is the output for someone 20 years old.

```
You are 20 years old.
In 10 years, you will be 30 years old.
In 20 years, you will be 40 years old.
In 30 years, you will be 50 years old.
In 40 years, you will be 60 years old.
```

3. What happens when you run the following program? Why do we get that result?

```javascript
{
  let foo = "bar";
}

console.log(foo);
```

```
You would get a `ReferenceError` since `foo` is initalized within a block scope then is garbage collected once that block scope is ended. So when the `console.log` is invoked the `foo` variable is no longer initalized
```

4. What happens when you run the following code? Why?

```javascript
const NAME = "Victor";
console.log("Good Morning, " + NAME);
console.log("Good Afternoon, " + NAME);
console.log("Good Evening, " + NAME);

NAME = "Joe";
console.log("Good Morning, " + NAME);
console.log("Good Afternoon, " + NAME);
console.log("Good Evening, " + NAME);
```

```
In this example the code would result in a error because we are trying to reassign a `Const` with `NAME`

SOLUTION:
The first 3 `console.log` would work properly but once the reassignment of `NAME` happens then the code would throw an error to the user
```

5. Take a look at this code snippet:

```javascript
let foo = "bar";
{
  let foo = "qux";
}

console.log(foo);
```

```
In this code snippet the code would log `bar` since the block scope which initalized another `foo` only exist within the block scope
```

6. Will this program produce an error when run? Why or Why not?

```javascript
const FOO = "bar";
{
  const FOO = "qux";
}

console.log(FOO);
```

```
This code wouldn't run into any runtime errors because FOO gets initalized again within the block scope instead of being reassigned
```
