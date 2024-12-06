# Mortgage Calculator

This CLI calculator will determine the monthly payments that someone would have within compounding interest

## Information Needed from User:

- Loan amount
- Loan APR/APY
- Loan duration in years

## With the given info we will need:

- Monthly interst rate `APR / 12`
- Loan duration in months

This following formula is to retrieve the monthly payments:

```javascript
let m = p * (j / (1 - Math.pow(1 + j, -n)));
```

- `m` = Monthly payments
- `p` = Loan amount
- `j` = Monthly interest rate
- `n` = Loan duration in months

Print the amount out with dollar and cents: `$123.45`

---

## Ask User for loan amount

Get loan amount from user: - Check if commas are used - Verify that its a number being input

## Ask User for APR

Clarify it to be a whole number: - Check if input from user is a whole number

## Ask User for duration

Clarify it will be number of years: - Check if input from user is a whole number

## Convert APR/APY into monthly rate

Will take the users input of `APR` and return the monthly rate of it

```javascript
userInput = 5;

return userInput / 12;
```

## Convert the yearly duration into months

Will take the user input of `duration` and return it to months

```javascript
userInput = 5;

return userInput * 12;
```

## Calculate the monthly payments

Then using all the user input we will display the monthly payments

```javascript
return p * (j / (1 - Math.pow(1 + j, -n)));
```
