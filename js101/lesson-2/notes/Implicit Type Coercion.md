# Implicit Type Coercion

`Implicit Type Coercion` is when a operation with 2 different types, JS will coerce one of the values to match the other type to be able to compare them.

When JS was created this feature was intended to be beginner friendly, but ended up being a big draw back for the programming language. It's good to know because older code bases may still have  `"=="`.

Most common operations:
- `"=="`
- `"+"`

## Implicit Coercion with the `"=="` Operator

`"=="` works just as `"==="` as long as the operands are the same type.  But when they are different types, the return value might not be what you expect at times

Common cases:
```javascript
'1' === 1 // strict
// false
'1' == 1 // non-strict
// true
```

In the `non-strict` comparison the `String` value gets coerced into a `Number` value

We can also compare `Numbers` with `Booleans`:
```javascript
1 == true
// true
3 == true
// false
0 == false
// true
```

In this example, JS will coerce the `Number` value into a `Boolean` value as long as the value equals to `1` it will return `true` and `false` otherwise

This is what happens when you compare `undefined` and `null`:
```javascript
undefined == null
// true
```

This could be useful because sometimes you want to test for both for a condition.

All the above examples are with `primitive` values

This is how JS reacts to `objects / arrays` using `non-strict` comparison:
```javascript
let arr = []
arr == []
// false
arr == arr
// true
```

JS reacts to `arrays` as if it was using `"==="`, so it compares the `arrays` memory location over the actual content of whats in the `array` itself

However when comparing a `object` with other `primitives`, JS will coerce the `object` to a `primitive` before comparison:
```javascript
"" == {}
// false
"[object Object]" == {}
// true
[] == ""
// true
```

In the second example the plain object `{}` is coerced into a `String` `"[object Object"]` and this is why it returns `true` when compared to the string value.

In the third example the empty array `[]` is coerced into a empty string `""` and thats why it would compare to `true`

This also means the a empty array `[]` will be coerced into a empty String `""` then coerced again to  Number `0` compared to a Number `0` and it will return `true`:
```javascript
[] == 0
// true
```

#### Things to Remember
1. When comparing `Number` to `String`, the `String` is coerced into a `Number`
2. When comparing `Boolean` to any other type, the other type is coerced to a `Number`
3. When comparing `Object` to any `Primitive` type, the `object` is coerced into a `primitve` value
4. Comparing `undefined` and `null` will evaluate as `true`

### Implicit Coercion with Binary `+` Operator
```javascript
'number ' + 1
// 'number 1'
```

In this example the Number `1` is coerced into a String `'1'` then concatenated to the String value `'number '` making `'number 1'`

A general rule working with `+` operator; whenever one operand is a `String` type the, other operand gets coerced into a string and concatenated together with the other operand:
```javascript
'' + [1, 2, 3]
// '1,2,3'
'' + true
// 'true'
'' + undefined
// 'undefined'
'' + {}
// '[object Object]'
```

If both operands are combination of:
- Numbers
- Booleans
- null
- undefined
They are converted into numbers and added together:
```javascript
1 + true; // 2
1 + false; // 1
true + false; // 1
null + false; // 0
null + null; // 0
1 + undefined; // NaN
```

When one of the operands is an `object`, both operands are converted to a strings and concatenated:
```javascript
[1] + 2; // "12"
[1] + '2'; // "12"
[1, 2] + 3; // "1,23"
[] + 5; // "5"
[] + true; // "true"
42 + {}; // "42[object Object]"
```

## Best Practices

Understanding Implicit coercion is important within JS, especially  when debugging code. When writing your own code, its best to:

- Always use explicit type coercion
- Always use strict comparison operators

There are 2 exceptions to always use explicit coercion:

- Don't use `String()` or `toString()` inside `${...}` expressions
- Feel free to use the unary `+` operator to convert string to numbers

---
Created on: 2024-12-06 06:16
Tags: #fleeting #thinking #thoughts
References:
