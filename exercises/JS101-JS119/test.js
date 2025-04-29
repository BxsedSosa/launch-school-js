let triangle = (num1, num2, num3) => {
	let degrees = [num1, num2, num3];
	const degreeSum = degrees.reduce((accum, currVal) => accum + currVal, 0);

	if (degreeSum !== 180 || degrees.includes(0)) return "invalid";
	if (degrees.includes(90)) return "right";
	if (degrees.every((degree) => degree < 90)) return "acute";
	if (degrees.some((degree) => degree > 90)) return "obtuse";
};

let tests = [
	triangle(60, 70, 50), // "acute"
	triangle(30, 90, 60), // "right"
	triangle(120, 50, 10), // "obtuse"
	triangle(0, 90, 90), // "invalid"
	triangle(50, 50, 50), // "invalid"
];

for (test of tests) {
	console.log(test);
}
