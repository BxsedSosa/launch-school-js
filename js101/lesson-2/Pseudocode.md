# Pseudocode

`Pseudocode` is for creating human readable code before actually putting together language specific code together. This helps bring the code down to a simpler level for anyone to breakdown and read. Then to use to convert to actual coding.

Here is a example:

```
Given a collection of numbers.

Iterate through the collection one by one.
  - save the first value as the starting value.
  - for each iteration, compare the saved value with the current value.
  - if the current number is greater
    - reassign the saved value as the current value
  - otherwise, if the current value smaller or equal
    - move to the next value in the collection

After iterating through the collection, return the saved value.
```

The reason to do `pseudocode` before actually coding is so you can break the problem down in english language (or whatever language you natively speak) so you don't overload your brain. Trying to solve a problem in another language and trying to break it down at the same time takes a lot of thinking power.

So it's best to try and break things apart in a way you can actually break it down beforehand and putting it into code will be easier.

### Formalize Pseudocode

Before writing `pseudocode` it is best to formalize the writing to create structure and makes it easier to read

| Keyword             | Meaning                                  |
| ------------------- | :--------------------------------------- |
| START               | Start of the program                     |
| SET                 | Set a variable that we can use for later |
| GET                 | Retrieve input from user                 |
| PRINT               | Display output to user                   |
| READ                | Retrieve a value from a variable         |
| IF / ELSE IF / ELSE | Show conditional branches in logic       |
| WHILE               | Show looping logic                       |
| END                 | End of the program                       |

Here an example:

```
START

# Given a collection of integers called "numbers"

SET iterator = 1
SET savedNumber = value within numbers collection at space 1

WHILE iterator <= length of numbers
  SET currentNumber = value within numbers collection at space "iterator"
  IF currentNumber > savedNumber
    savedNumber = currentNumber
  ELSE
    do nothing

  iterator = iterator + 1

PRINT savedNumber

END
```

### Translate to Code

After creating pseudocode now we can translate it into actual code

```javascript
function findGreatest(numbers) {
  let savedNumber = numbers[0];

  numbers.forEach((num) => {
    if (num > savedNumber) {
      savedNumber = num;
    }
  });

  return savedNumber;
}
```

### Practice

- A function that returns the sum of two numbers

```
START

SET & GET numberOne = (User Input)
SET & GET numberTwo = (User Input)

SET total = numberOne + numberTwo
PRINT total

END
```

- A function that takes an array of strings, and returns a string that is all those strings concatenated together

```
START

SET stringArray = [(random amount of string)]
SET joinedString = stringArray with join method

PRINT joinedString

END
```

- A method that takes an array of integers, and returns a new array with every other element from the original array, starting with the first element. For instance:

```javascript
everyOther([1,4,7,2,5]) => [1, 7, 5]
```

```
START

SET givenArr = [(Parameter)]
SET newArr = []

FOR
	SET i = 0
	IF i < givenArr array length
	ADD i += 2

	READ newArr push givenArr[i]

PRINT newArr

END
```

- A function that determines the index of the 3rd occurrence of a given character in a string. For instance, if the given character is 'x' and the string is 'axbxcdxex', the function should return 6 (the index of the 3rd 'x'). If the given character does not occur at least 3 times, return `null`

```
START

GET string = "(FROM PARAMETER)"
GET selectedChar = "(FROM PARAMTER)"
SET count = 0

FOR
	SET i = 0
	IF i < string length
	ADD i++

	IF string[i] == selectedChar
		count += 1

	IF count == 3
		PRINT i

PRINT null

END
```

- A function that takes two arrays of numbers and returns the result of merging the arrays. The elements of the first array should become the elements at the even indexes of the returned array, while the elements of the second array should become the elements at the odd indexes. For instance:

```javascript
merge([1, 2, 3], [4, 5, 6]);
```

```
START

GET array1 = [(FIRST PARAMETER)]
GET array2 = [(SECOND PARAMETER)]
SET newArray = []
SET counter = 0

WHILE counter < array1 length
	newArray push array1[counter]
	newArray push array2[counter]

PRINT newArray

END
```

---

Created on: 2024-12-05 06:19
Tags: #fleeting #thinking #thoughts
References:
