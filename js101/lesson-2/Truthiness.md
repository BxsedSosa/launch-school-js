`Truthiness`: Programming language to be able to evaluate `true` or `false` without actually using the boolean values. Helps with building conditional logic.

### Expressions & Conditionals

In real use case code, you usually wouldn't use `true` or `false` values. Instead you'd evaluate an expression that would evaluate to either `true` or `false` which is considered truthiness.

```javascript
let num = 5;

if (num < 10) {
  console.log("small number");
} else {
  console.log("large number");
}
```

In this example, we created a if statement and the conditional is if `num` is less than 10 log `small number` if `false` log `large number`

### Logical Operators

`Logical Operators`: Evaluation of an expression which involves two or more subexpressions, and returns a evaluated value of `true` or `false`

#### The `&&` Operator

`&&` is the **and** operator. Which needs **ALL** sub-expressions to evaluate as true for it to evaluate as `true`. If the first sub-expression were to be `false` the entire expression is evaluated as `false`:

```javascript
true && true; // true
true && false; // false
false && true; // false
false && false; // false

let num = 5;
num < 10 && num > 3; // true
num < 10 && num > 6; // false
num > 10 && num < 6; // false
num > 10 && num < 3; // false
```

#### The `||` Operator

`||` is the **OR** operator. This evaluates by seeing if one of the sub-expressions evaluates as `true`. So if it happens to be the first sub-expression that is `true` then it short circuits the entire expression and evaluates as `true` without needing to look at the second sub-expression.

```javascript
true || true; // true
true || false; // true
false || true; // true
false || false; // false

let num = 5;
num < 10 || num > 3; // true
num < 10 || num > 6; // true
num > 10 || num < 6; // true
num > 10 || num < 3; // false
```

#### Short-Circuit Operators

Both `||` and `&&` exhibit a behavior called **short-circuiting**. Which is when JS will stop evaluating a expression short if one condition is met.

If `||` was to short circuit it is due to any sub-expression evaluating as `true` that isn't the last sub-expression

if `&&` was to short circuit it is due to any sub-expression that evaluating as `false` that isn't the last sub-expression

```javascript
false && undefined.length
= false
```

This code would throw a `TypeError` if the first sub-expression evaluated as `true`. But short circuiting directs the code out of the expression as soon as it saw the first sub-expression evaluated as `false`

```javascript
true && undefined.length
TypeError: Cannot read property 'length' of undefined
```

This also works with `||` operator short circuiting:

```javascript
true || undefined.length
= true
```

This code doesn't raise a `TypeError` since the first sub-expression evaluates as `true` so it short circuits and the whole expression is evaluated as `true`

Relying on short circuiting could be dangerous but there are rare cases where it could be handy to use within your code.

```javascript
if (name && name.length > 0) {
  console.log(`Hi, ${name}.`);
} else {
  console.log("Hello, whoever you are.");
}
```

In this code if we had a variable called `name` and there was a `empty string`, `null` or `undefined`. This code would short circuit to `false` and not throw a error because of the second sub-expression if it were to make it there. So in this case short circuiting can be handy

### Truthiness

JS evaluates most values as `true` but here are the exceptions:

- false
- undefined
- null
- 0, -0, 0n
- "" `Empty String`
- NaN

Make sure to distinguish if you are talking about boolean `true` or `false`. Or if you are talking about truthiness evaluates as `true` or evaluates as `false`

---

Created on: 2024-12-03 08:55
Tags: #fleeting #thinking #thoughts
References:
