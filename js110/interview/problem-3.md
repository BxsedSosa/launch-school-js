3. Create a function that takes a string argument and returns a copy of the string with every second character in every third word converted to uppercase. Other characters should remain the same.

```javascript
let original = 'Lorem Ipsum is simply dummy text of the printing world';
let expected = 'Lorem Ipsum iS simply dummy tExT of the pRiNtInG world';
p(toWeirdCase(original) === expected);

original = 'It is a long established fact that a reader will be distracted';
expected = 'It is a long established fAcT that a rEaDeR will be dIsTrAcTeD';
p(toWeirdCase(original) === expected);

p(toWeirdCase('aaA bB c') === 'aaA bB c');

original = "Mary Poppins' favorite word is " +
           "supercalifragilisticexpialidocious";
expected = "Mary Poppins' fAvOrItE word is " +
           "sUpErCaLiFrAgIlIsTiCeXpIaLiDoCiOuS"
p(toWeirdCase(original) === expected);
```

P:

Given a string for every third within the string make that work alternate lower and uppercase lettering

E:

let original = 'Lorem Ipsum is simply dummy text of the printing world';
let expected = 'Lorem Ipsum iS simply dummy tExT of the pRiNtInG world';


original = 'It is a long established fact that a reader will be distracted';
expected = 'It is a long established fAcT that a rEaDeR will be dIsTrAcTeD';


original = "Mary Poppins' favorite word is " +
           "supercalifragilisticexpialidocious";
expected = "Mary Poppins' fAvOrItE word is " +
           "sUpErCaLiFrAgIlIsTiCeXpIaLiDoCiOuS"

D:

Strings and Arrays are needed for this problem

A:

create a function called alternateUpperCase with 1 parameter:
    we will split the parameter using map method we will use 2 parameters `ele` and `idx`
        if idx % 2 === 1
            return that `ele` using toUpperCase

        otherwise return ele
    return it by joining the join back together into a string

create a fuction called toWeirdcase with 1 parameter:
    return we will split the string delimiting it by a whitespace.
        using the map method we will have 2 parameters `ele` and `idx`
            if the idx + 1 % 3 === 0
                return alternateUpperCase(`ele`)
            otherweise return `ele`

C:

```javascript
function alternateUpperCase(word) {
    return word.split('').map((char, idx) => {
        if ((idx + 1) % 3 === 0) {
            return char.toUpperCase();
        }
        return char;
    })
}

function toWeirdCase(string) {
    return string.split(' ').map((word, idx) => {
        if ((idx + 1) % 3 === 0) {
            return alternateUpperCase(word);
        }

        return word;
    })
}
```
