## To take in CLI from user

```
npm init -y
npm install readline-sync --save
```

### Within the JS file

```Javascript
let rlSync = require("readline-sync");
let name = rlSync.question("What's your name?\n");
console.log(`Good Morning, ${name}!`);
```

1. Write a dynamic greeter program named `greeter.js`. The program should ask for your name, then output `Hello, {name}!` where `{name}` is the name your entered:

```
$ node greeter.js
What is your name? Sue
Hello, Sue!
```

```Javascript
let rlSync = require("readline-sync");
let name = rlSync.question("What's your name?\n");
console.log(`Good Morning, ${name}!`);
```

2. Modify the `greeter.js` program to ask the user's first and last names separetely, then greet the user with their full name.

```
$ node greeter.js
What is your first name? Sue
What is your last name? Roberts
Hello, Sue Roberts
```

```Javascript
let rlSync = require("readline-sync");
let firstName = rlSync.question("What's your first name?\n");
let lastName = rlSync.question("What's your last name?\n");
console.log(`Hello, ${firstName} ${lastName}!`);
```
