1.

My Answer:

```javascript

```

2. Combining Arrays

Write a function that takes two arrays as arguments and returns an array containing the union of the values from the two. There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. You may assume that both arguments will always be arrays.

Example:

```javascript
union([1, 3, 5], [3, 6, 9]); // [1, 3, 5, 6, 9]
```

My Answer:

```javascript
function union(arr1, arr2) {
  for (const arr2Element of arr2) {
    if (!arr1.includes(arr2Element)) {
      arr1.push(arr2Element);
    }
  }
  console.log(arr1);
}
```

3. Halvsies

Write a function that takes an array as an argument and returns an array that contains two elements, each of which is an array. Put the first half of the original array elements in the first element of the return value, and put the second half in the second element. If the original array contains an odd number of elements, place the middle element in the first half array.

Examples:

```javascript
halvsies([1, 2, 3, 4]); // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]); // [[1, 5, 2], [4, 3]]
halvsies([5]); // [[5], []]
halvsies([]); // [[], []]
```

My Answer:

```javascript

```

4.

My Answer:

```javascript

```

5.

My Answer:

```javascript

```

6.

My Answer:

```javascript

```

7.

My Answer:

```javascript

```

8.

My Answer:

```javascript

```

9.

My Answer:

```javascript

```

10.

My Answer:

```javascript

```
