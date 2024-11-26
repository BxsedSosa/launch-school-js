1. Create a directory named `my_folder` and navigate to that directory. Create two files named `one.js` and `two.js` in `my_folder`. Add the following JavaScript code to `one.js`

```JavaScript
console.log("this is file one");
```

Add some code to `two.js` that logs `this is file two`.

2. When you finish Exc 1, navigate to the dir above the `my_folder` dir and delete all the content you generated in exc 1 with one command

3. Create a file named `foo.js` in a dir named `preparations_exercises`. Add the following code to the file.

```JavaScript
let foo = "bar";
console.log(foo);
foo;
```

4.  1. Use `node` to run the `foo.js` file using `node`. What does it output?

    ```
    bar
    ```

    2. Copy and paste the code from `foo.js` into the `node` REPL. What does it output?

    ```
    'bar'
    ```

    3. Copy and paste the code from `foo.js` into the Chrome console REPL. What does it output?

    ```
    bar
    "bar"
    ```

5.  Identify the Consructors for each of the following methods and classify each method as either a "Static" or an "Instance" method:

- substring

```
Instance
String
```

- create

```
Static
Object
```

- fromCharCode

```
Static
String
```

- slice

```
Instance
Array
String
```

- toString

```
Instance
Number
String
Object
Array
```

It might be that more than one constructor provides a method with a given name. Make sure you list them all in your answer. You can limit your search for methods to the `String`, `Object`, `Array`, and `Number` constructors.

6. Which of the following names satisfy the style guidelines for variable names? For the purposes of this question, constants are not variables.

```
Names
-----
index
CatName
snake_case
lazyDog
quick_fox
1stCharacter
operand2
BIG_NUMBER
```

```
Correct Styles
--------
index
lazyDog
operand2
```

7. Which of the following names satisfy the style guidelines for function names?

```
Names
-----
index
CatName
snake_case
lazyDog
quick_fox
1stCharacter
operand2
BIG_NUMBER
```

```
Correct Styles
--------
index
lazyDog
CatName
operand2
```

8. Which of the following names satify the style guidelines for constants used to represent magic numbers?

```
Names
-----
index
CatName
snake_case
lazyDog
quick_fox
1stCharacter
operand2
BIG_NUMBER
```

```
Correct Styles
--------
BIG_NUMBERS
```

9. Which of the following names don't satisfy the style guidelines for naming variables, functions, or constants?

```
Names
-----
index
CatName
snake_case
lazyDog
quick_fox
1stCharacter
operand2
BIG_NUMBER
```

```
Correct Styles
--------
snake_case
quick_fox
1stCharacter
```
