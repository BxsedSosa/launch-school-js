1. Will the code below raise an error?

```javascript
let numbers = [1, 2, 3];
numbers[6] = 5;
```

**Bonus:**

```javascript
let numbers = [1, 2, 3];

numbers[6] = 5;
numbers[4]; // what will this line return?
```

My Answer:

```
The code won't raise an error in this case itll place `5` in the 6th index and the 3 empty elements before will be undefined

bonus:

This code wont raise an error either itll just return `undefined`
```

2. How can you determine whether a given string ends with an exclamation mark (!)?

```javascript
let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false
```

My Answer:

```javascript
str1.endsWith("!");
str2.endsWith("!");
```

3. Determine whether the following object of people and their age contains an entry for 'Spot':

```javascript
let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
```

My Answer:

```javascript
console.log("Spot" in ages);
```

4. Using the following string, create a new string that contains all lowercase letters except for the first character, which should be capitalized. (See the example output.)

```javascript
let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.
```

My Answer:

```javascript
let capitalized = (string) => {
  let strArr = string.split(" ");
  for (let i = 0; i < strArr.length; i++) {
    if (i === 0) {
      strArr[i] = strArr[i].toUpperCase();
    }
    strArr[i] = strArr[i].toLowerCase();
  }
  return strArr.join("");
};
```

5. What will the following code output?

```javascript
console.log(false == "0");
console.log(false === "0");
```

My Answer:

```
Line 1 would output `true` due to implicient coericion converting the string to a number then number into a boolean

line 2 would ouutput `false` due to boolean value `false` is not able to be compared to a string
```

6. We have most of the Munster family in our `ages` object:

```javascript
let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
```

Add entries for Marilyn and Spot to the object:

```javascript
let additionalAges = { Marilyn: 22, Spot: 237 };
```

My Answer:

```javascript
Object.assign(ages, additionalAges);
```

7. Determine whether the name `Dino` appears in the strings below -- check each string separately

```javascript
let str1 =
  "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";
```

My Answer:

```javascript
str1.includes("Dino");
str2.includes("Dino");
```

8. How can we add the family pet "Dino", to the following array?

```javascript
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
```

My Answer:

```javascript
flintstones.push("Dino");
```

9. In the previous problem, our first answer added "Dino" to the array like this:

```javascript
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push("Dino");
```

How can we add multiple items to our array ("Dino" and "Happy")

My Answer:

```javascript
flintstones.concat(["Dino", "Happy"]);
```

10. Return a new version of this sentence that ends just before the word house. Don't worry about spaces or punctuation: remove everything starting from the beginning of house to the end of the sentence.

```javascript
let advice =
  "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '
```

My Answer:

```javascript
let houseIndex = advice.indexOf("house");

advice = advice.slice(0, houseIndex);
```
