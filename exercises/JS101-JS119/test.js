let triangle = (num1, num2, num3) => {
	let numbers = [num1, num2, num3];
	let occurrences = {};

	for (let num of numbers) {
		if (!occurrences[num]) {
			occurrences[num] = 1;
		} else {
			occurrences[num] += 1;
		}
	}

	const numKeys = Object.keys(occurrences);
	const numValues = Object.values(occurrences);

	if (numKeys.includes("0")) return "invalid";

	if (numValues.includes(3)) return "equilateral";

	if (numValues.includes(2)) {
		if (occurrences[Math.max(...numKeys)] === 2) return "isosceles";
		if (Math.min(...numKeys) * 2 >= Math.max(...numKeys)) return "isosceles";
	}

	if (numValues.length === 3) return "scalene";

	return "invalid";
};

console.log(triangle(3, 3, 3)); // "equilateral"
console.log(triangle(3, 3, 1.5)); // "isosceles"
console.log(triangle(3, 4, 5)); // "scalene"
console.log(triangle(0, 3, 3)); // "invalid"
console.log(triangle(3, 1, 1)); // "invalid"
