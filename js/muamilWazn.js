const base = [0.3, 0.4, 0.1, 0.2];

const dataInput = [
	[9, 7, 8, 7],
	[8, 6, 6, 9],
	[7, 8, 10, 8],
	[6, 8, 6, 9],
];

const totalResult = [];

const input = dataInput.forEach((data) => {
	let newArr = [];
	for (let index in base) {
		const res = base[index] * data[index];
		newArr.push(res);
	}
	totalResult.push(newArr.reduce((plus, tot) => plus + tot));
});

console.log(`Result for mauqi 1 : `, totalResult[0]);
console.log(`Result for mauqi 2 : `, totalResult[1]);
console.log(`Result for mauqi 3 : `, totalResult[2]);
console.log(`Result for mauqi 4 : `, totalResult[3]);
