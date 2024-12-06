# Calculator

```
I know a calaculator is a simplier task for brainstorm on but I want to create a habit of creating these now so its easier in the future.
```

Task at hand:

- Add intro wording to console
- Make it seem like a continous loop without breaking immersion
- Ask the user for 2 numbers
- Ask the suer for the type of Operation
  - Add
  - Subtract
  - Multiply
  - Divide
- Perform the calculations and display the results

Extra:

- Support other language

### Intro wording to console

Will be using [Figlet](https://www.npmjs.com/package/figlet) for ASCII banner for a nice intro banner.

### Create a continous loop

After displaying the intro banner. Keep `Calculator` at the top

### Ask for 2 numbers

Create a function that gets 2 numbers from the user and return as an array. First index of array will be the first number and the second index will be the second input the user gives

Also creating a error loop if what the user enters is not a number displaying a string saying `This is not a number` or some sort

### Ask for operation type

Create a function that gets input from user and returns a string with 1 character. Either a number corresponding to the operation or the operation symbol itself.

```
1. Add (+)
2. Subtract (-)
3. Multiply (*)
4. Divide (/)
```

Also creating a error loop if the given input is not one of the following operations or numbers that is needed

### Display the calculations
