const getBaseData = () => {
	const documentInput = document.querySelectorAll('input.baseData');
	const data = [];
	documentInput.forEach((elem) => {
		data.push(elem.value);
	});
	return data;
};
const getPlace1 = () => {
	const documentInput = document.querySelectorAll('input.m1Data');
	const data = [];
	documentInput.forEach((elem) => {
		data.push(elem.value);
	});
	return data;
};
const getPlace2 = () => {
	const documentInput = document.querySelectorAll('input.m2Data');
	const data = [];
	documentInput.forEach((elem) => {
		data.push(elem.value);
	});
	return data;
};
const getPlace3 = () => {
	const documentInput = document.querySelectorAll('input.m3Data');
	const data = [];
	documentInput.forEach((elem) => {
		data.push(elem.value);
	});
	return data;
};
const getPlace4 = () => {
	const documentInput = document.querySelectorAll('input.m4Data');
	const data = [];
	documentInput.forEach((elem) => {
		data.push(elem.value);
	});
	return data;
};

const submitForm = document.getElementById('formInput');
submitForm.addEventListener('submit', function SendData(e) {
	e.preventDefault();
	const baseDataInput = getBaseData();
	const place1Input = getPlace1();
	const place2Input = getPlace2();
	const place3Input = getPlace3();
	const place4Input = getPlace4();
	console.log(baseDataInput);
	console.log(place1Input);
	console.log(place2Input);
	console.log(place3Input);
	console.log(place4Input);
	sendData(baseDataInput, place1Input, place2Input, place3Input, place4Input);
});
