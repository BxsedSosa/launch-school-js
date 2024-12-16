1. Write three different ways to remove all the elements from the following array:

```javascript
let numbers = [1, 2, 3, 4];
```

My Answer:

```javascript
// 1
numbers.length = 0;

// 2
while (numbers.length) {}
  numbers.pop();
}

// 3
numbers.splice(0, numbers.length);
```

2. What will the following code output?

```javascript
console.log([1, 2, 3] + [4, 5]);
```

My Answer:

```
This will output `1, 2, 34, 5` as a `String`
```

3. What will the following code output?

```javascript
let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);
```

My Answer:

```
This code will output `hello there`. This code only reassigns the variable `str2` and since its a primative its getting pass-by-value
```

4. What will the following code output?

```javascript
let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);
```

My Answer:

```
Output: [{ first: 42 }, { second: "value2" }, 3, 4, 5];

Even though the `slice` method creates a shallow copy of `arr1` the mutable objects within `arr1` are still mutable and which `arr2` now has the pointers to those objects lettings line 3 to be able to reassign that object
```

5. The following function unnecessarily uses two return statements to return boolean values. Can you rewrite this function so it only has one return statement and does not explicitly use either true or false?

```javascript
function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}
```

Try to come up with at least two different solutions

My Answer:

```javascript
// 1
function isColorValid(color) {
  return color === "blue" || color === "green";
}

// 2

function isColorValid(color) {
  return color.includes("blue") || color.includes("green");
}
```

6. Examine the following code carefully. Can you identify all of the variables, primitive values, and objects that exist when this code executes?

```javascript
let arr = [1, 2, 3];
let newArr = arr;

const num = arr[0];
let newNum = num;

function double(num) {
  return num * 2;
}

double(newNum);
```

My Answer:

```
// variables
line 1 : arr
line 2 : newArr
line 4 : num
line 5 : newNum
line 7 : double (function name)
line 7 & 8 : num used as a parameter
line 11 : double & newNum

// primitive
line 1 : 1, 2, 3
line 4 : arr[0]
line 5 : newNum
line 7 : num
line 8 : num & 2

// objects
line 1 : arr
line 2 : newArr
line 7 & 11 : double


```
