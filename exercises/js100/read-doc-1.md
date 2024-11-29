1. What is an excellent destination when looking for JS docs?

```
MDN
https://developer.mozilla.org/en-US/docs/Web/JavaScript
```

2. Find out wether JS has a method to lowercase a string.

```
Method is called `toLowerCase`
```

3. Is there a method to capitalize a string?

```
There is not a method to capitalize a string
```

4. Locate the doc for the `Array` built-in object on MDN.

How can we access the element `and` in the Array `['fish', 'and', 'chips']`

```
We could the direct index to access `and`

or if the array is too large to find it by looking we can use `Array.prototype.findIndex()` which we can check every element within the array until it reaches `and` then we would be able to get the index of that element.
```

5. What happens if we take the array `['fish', 'and', 'chips']` and try to access the element at index position 10? Try this in your JS console.

```
JS happens to handle situations like this instead of quitting out JS would return `undefined` if you were to go over the length of an array
```

6. What are the return values of the statements on lines 3 to 5? Refer to the MDN docs about the `Array` object for help.

```
'palm tree'
'sequoia'

on line 4 when it pops the element of the array it would change the length of the array and adjust for line 5
```

7. Look up the MDN doc for the `typeof` operator. What is its return value? Determine what the following statements will return:

```JavaScript
typeof 23.5;
typeof 'Call me Ishmael.';
typeof false;
typeof 0;
typeof null;
typeof undefined;
```

```
The `typeof` opertor takes 1 operand and returns which data type it is.

number
string
boolean
number
object
undefined
```

7. Consider the following code snippet:

```JavaScript
let tweet = "I'm learning to program! Woooot :-) #JavaScript #launchschool";
let words = tweet.split(' ');
let isValid = tweet.length < 140;
```

what will the follwing statements return?

```JavaScript
typeof tweet;
typeof words;
typeof isValid;
```

```
string
object
boolean
```

8. Given the following tweet:

```JavaScript
let tweet = 'Starting to get the hang of it... #javascript #launchschool';
```

What will the following statements evaluate to?

```JavaScript
tweet.split(' ');
tweet.split(' ').reverse();
tweet.split(' ').reverse().join(' ');
```

```
the first Method would split the string apart from each space
the second method would split then reverse the order
the third method would split then reverse and rejoin the string together but in reverse
```

9. In your JS console, execute the following two lines of code to check whether their return values differ and if so, how. Take a look at the MDN docs on equality comparisons to read about how `==` and `===` differ.

```javascript
"8" == 8;
"8" === 8;
```

```
This code would print true on the first line and false for the second. because the double equal sign is the strict equality operator. So one operand will be implicintly coerced to a matching type and then they would compare which made it true
```
