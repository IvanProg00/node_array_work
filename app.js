function map(arr, func) {
	for (let i in arr) {
		arr[i] = func(arr[i]);
	}
	return arr;
}

function printItem(arr) {
	for (let item of arr) {
		console.log(item);
	}
}

function reduce(arr, func) {
	let prev = 0;
	for (let curr of arr) {
		prev = func(prev, curr);
	}
	return prev;
}
