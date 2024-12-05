# Explicit Type Coercion

## Type Coercion

`Type coercion` is the conversion of a values type to be another type. Every programming language has its own form of `coercion` it just so happens JS has some eccentric behaviors. 

There are 2 types of coercion within JS:
- Explicit
- Implicit

## Explicit Type Coercion

`Explicit type coercion` is when the programmer intentionally uses the built-in functions to change a values type to another. The most popular way of `explicit coercion` is from `string` -> `number` or vice versa.

### Coercing values to numbers

```javascript
let one = Number('1');
console.log(one) // 1
console.log(typeof one) // "number"

one = Number('hello');
console.log(one) // NaN

console.log(Number('')) // 0
```

If the `string` is a valid `number` then it will return that `string` as a `number`. But if it is not a valid `number` then it will return `NaN`.

Whenever you try to coerce a `empty` string or a string with `whitespaces` it will return a `0`

Here is some examples that might seem weird:
```javascript
Number({})
// NaN
Number([])
// 0
Number([4])
// 4
Number([undefined])
// 0
Number([1, 2, 3])
// NaN
Number(undefined)
// NaN
Number(null)
// 0
```

For `booleans` using `Number()` to coerces it will return `1` and `0` respectively to `true` or `false`:

```javascript
Number(true)
// 1
Number(false)
// 0
```

## parseInt and parseFloat

These functions coerce `strings` to `numbers`

```javascript
parseInt("12")
// 12
parseInt("12.52")
// 12
parseInt("12oz")
// 12
parseInt("+12oz")
// 12
Number("12oz")
// NaN
```

In this example `parseInt` will try and find where the first number starts and ends in the string. Once it sees it then it will return that `number`

```javascript
parseFloat("12 grams")
// 12
parseFloat("12.2 grams")
// 12.2
```

`parseFloat` will return whole numbers or a number with floating point

```javascript
+""
// 0
+"1"
// 1
+"2.3"
// 2.3
+[]
// 0
+"abc"
// NaN
```

## Coercing values to strings

### The `toString` method

You can use `toString` method on everything but `null` and `undefined`
```javascript
let number = 42
number.toString()
// '42'
```

We cant use number literal to assign `42` to `toString` because JS thinks the `.` is part of a floating point number and not attaching a method

```javascript
// On Numbers

42.toString()
// SyntaxError: Invalid or unexpected token
(42).toString()
// '42'

// On Boolean

true.toString()
// 'true'
false.toString()
// 'false'

// On Array

[1, 2, 3].toString()
// "1,2,3"
[1, null, 2, undefined, 3].toString()
// "1,,2,,3"

// On Objects
let obj = {a: 'foo', b: 'bar'}
obj.toString()
// "[object Object]"
```

With `Boolean` it turns `true` into a string `'true'`

With `Array` it will take each element with a `,` delimiter. If there is `null` or `undefined` it treats those elements as if it was a `empty string` ('')

With `Objects` it will by default return `"[object Object]"`

## The `String` function

Another way to coerce values to a `String` is by using the `String` function. Works just like `toString` method
```javascript
String(42)
// "42"
String([1, 2, 3])
// '1,2,3'
String({a: "foo", b: "bar"})
// "[object Object]"
String(null)
// "null"
String(undefined)
// "undefined"
```

Using `String` function is safer since it will handle `null` and `undefined` without errors.

---
Created on: 2024-12-05 12:09
Tags: #fleeting #thinking #thoughts
References:
