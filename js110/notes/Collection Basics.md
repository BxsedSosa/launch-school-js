# Collection Basics

Think of `Collections` as individual elements

## Element Reference

### Array Element Reference

`Arrays` are zero index based collections, so trying to access the very first element of an array requires the bracket notation with 0 in-between `[0]`

```
[ element1, element2, element3, element,4 ] => Array length = 4
   idx=0      idx=1     idx=2     idx=3
```

```js
let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
arr[2]; // => 'c'
```

### String Element Reference

Just like `Arrays`, Strings are integer-based indexing. Meaning that accessing an element within a string requires you to use the bracket notation. Also indexing is zero based so the first element will be at index 0

```js
let str = "abcdefghi";
str[2]; // => 'c'
```

### Object Element Reference

`Objects` are slightly different from `Arrays` & `Strings`, instead of integer-based indexing. Instead we have `Key / Value` pair indexing. Meaning we make our own way of indexing a collection. A `Key` is like a dictionary word that you are trying to look up, while the `Value` would be the definition of that `Key`.

Object Keys can also be called **Properties**

```js
let obj = {
  fruit: "apple",
  vegetable: "carrot",
}
obj.fruit; // => 'apple'
obj.fruit[3]; // => 'l'
obj['vegetable']; // => 'carrot'
obj['vegetable']; // => 'c'
```

Within the `object` on the left are the `Keys` then delimited with a `:` semi-colon after. The `Value` is on the right side being assigned to that `Key`, `Value`'s can be any data type within an object.

We can use the `.` dot notation with the `Key` to access the `Value` of an object. Or we can use the `[]` bracket notation with the `Key` within parentheses (single or double) to access that `Value`

When creating a `object` each `Key`  have to be unique. If not when using the same `Key` name will make the `Key` last written overwrite all other identical `Key`.

```js
> let obj = { fruit: 'apple', vegetable: 'carrot', fruit: 'pear' }
> obj
// { fruit: 'pear', vegetable: 'carrot' }
```

## Element Reference Gotchas

### Out of bounds Indices

When trying to access an `Out of Bounds` index, js will return you `undefined`. So either going over the `Array.length` or `String.length` property or using negative indexing such as numbers below `0` will return you `undefined`

```js
let string = 'abcde';
let array = ['a', 'b', 'c', 'd', 'e'];

string[2]; // => 'c'
array[2];  // => 'c'
string[5]; // => undefined
array[5];  // => undefined
string[-1]; // => undefined
array[-1];  // => undefined
```

### Invalid Object Keys

Trying to access a `Key` from a object that doesn't exist will also return `undefined`

But lets say that a `key/value` pair contains the value of `undefined` the way to check that is using the `.hasOwnProperty` method which will verify that there is a `key/value` pair.

```js
let obj = {a: 'foo', b: 'bar'};
obj['c']; // => undefined

obj = { a: 'foo', b: 'bar', c: undefined};
obj.hasOwnProperty('c'); // => true
obj.hasOwnProperty('d'); // => false
```

### Arrays are Objects

Its important to remember that `Arrays` are objects. The difference between `Objects` and `Arrays` is that `Arrays` use non-negative indexes for its primary keys. `Arrays` also have the `length` property which `Objects` do not have, you have to implement that yourself for the object.

Since `Arrays` are objects, we can add properties to them as well, but with a catch:

```js
let arr = ['foo', 'bar', 'qux'];
arr['boo'] = 'hoo';
arr[-1] = 374;
arr;               // => [ 'foo', 'bar', 'qux', boo: 'hoo', '-1': 374 ]
arr.length;        // => 3 (not 5!)
arr.forEach(element => console.log(element)); // prints: foo, bar, qux
Object.keys(arr);  // => [ '0', '1', '2', 'boo', '-1' ]
```

By using bracket notation, we can add properties to an `Array`. Since `Arrays` are non-negative indexing using `-1` will work as a key instead of trying to access a element in some other languages. These properties will be added to the end of an array as if you were to `push` them to the end. 

Its important to note that the `properties` DO NOT count as part of the `Array`'s length. Nor does using the `forEach` method on the array use the properties as elements.

---
Created on: 2024-12-27 10:04
Tags: #fleeting #thinking #thoughts
References:

