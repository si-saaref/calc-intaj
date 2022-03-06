// GET DATA
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

const getDataColAndRow = () => {
	const rowData = document.querySelector('tbody.data-group');
	const columnDataTitle = document.querySelector('tr.title-group');
	const columnDataBody = document.querySelectorAll('tr.h-max-content');
	const totalRow = rowData.childElementCount;
	const totalColumn = columnDataTitle.childElementCount - 1;
	return { rowData, columnDataTitle, columnDataBody, totalRow, totalColumn };
};

// CREATE DOM

const createNewRow = (totRow, totCol) => {
	const newInput = document.createElement('input');
	newInput.classList.add(`w-full`, `py-3`, `px-2`, `text-center`, `baseData`);
	const newTd = document.createElement('td');
	const newTh = document.createElement('th');
	newTh.innerHTML = totRow + 1;
	const newTr = document.createElement('tr');
	newTd.appendChild(newInput);
	newTr.appendChild(newTh);
	newTr.appendChild(newTd);
	for (let i = 1; i < totCol; i++) {  
		const newInput = document.createElement('input');
		newInput.classList.add(`w-full`, `py-3`, `px-2`, `text-center`, `m${i}Data`);
		const newTd = document.createElement('td');
		newTd.appendChild(newInput);
		newTr.appendChild(newTd);
		console.log(i);
	}
	return newTr;
};

const addRow = (e) => {
	e.preventDefault();
	const { rowData, totalColumn, totalRow } = getDataColAndRow();
	if (totalRow < 10) {
		const newRow = createNewRow(totalRow, totalColumn);
		rowData.appendChild(newRow);
	} else {
    alert('Your maximum muaamil is just 10. Please be considered')
  }
};

const arabListNumb = ['الخامس', 'السادس', 'السابع', 'ثامن', 'التاسع', 'العاشر'];
const createNewColumn = (totalColumn) => {
	const newTh = document.createElement('th');
	newTh.innerText = `الموقع ${arabListNumb[totalColumn - 5]}`;
	newTh.classList.add('w-2');
	newTh.setAttribute('scope', 'col');
	return { newTh };
};

const addColumn = (e) => {
	e.preventDefault();
	const { columnDataTitle, columnDataBody, totalColumn } = getDataColAndRow();
	if (totalColumn <= 10) {
		const { newTh } = createNewColumn(totalColumn);
		columnDataTitle.appendChild(newTh);
		columnDataBody.forEach((newCol) => {
			const newTd = document.createElement('td');
			const newInput = document.createElement('input');
			newInput.classList.add(`w-full`, `py-3`, `px-2`, `text-center`, `m${totalColumn}Data`);
			newTd.appendChild(newInput);
			newCol.appendChild(newTd);
		});
	} else {
    alert('Your maximum الموقع is 10. Please considered');
  }
};

// Display Result
const displayResult = (resultData) => {
	const resultText = document.querySelectorAll('span.resultNumb');
	resultText.forEach((elem, id) => {
		console.log(elem);
		elem.innerHTML = resultData[id];
	});
};

const submitForm = document.getElementById('handleSubmit');
submitForm.addEventListener('click', function SendData(e) {
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
