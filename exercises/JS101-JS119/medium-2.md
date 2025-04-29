1.

Given a string, determine the ratio of:

- lowercase characters
- uppercase characters
- other characters

My Answer:

```javascript
let letterPercentages = (string) => {
	const lowerReg = /[a-z]/;
	const upperReg = /[A-Z]/;

	let counter = {
		lowercase: 0,
		uppercase: 0,
		neither: 0,
	};

	for (let char of string) {
		if (lowerReg.test(char)) {
			counter.lowercase += 1;
		} else if (upperReg.test(char)) {
			counter.uppercase += 1;
		} else {
			counter.neither += 1;
		}
	}

	Object.keys(counter).forEach((key) => {
		counter[key] = ((counter[key] / string.length) * 100).toFixed(2);
	});

	return counter;
};
```

2.

My Answer:

```javascript
let triangle = (num1, num2, num3) => {
	let numbers = [num1, num2, num3];
	let occurrences = {};

	for (let num of numbers) {
		if (!map[num]) {
			map[num] = 1;
		} else {
			map[num] += 1;
		}
	}

	const numKeys = Object.keys(occurrences);
	const numValues = Object.values(occurrences);

	if (numKeys.includes(0)) return "invalid";
	if (numValues.includes(3)) return "equilateral";
	if (numValues.includes(2)) {
		if (occurrences[Math.max(numKeys)] === 2) return "isosceles";
		if (Math.min(numKeys) * 2 > Math.max(numKeys)) {
			return "isosceles";
		} else {
			return "invalid";
		}
	}
	return "scalene";
};
```

3.

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
