function doubleAll(numbers) {
	numbers.map(function(val, i, array){
		array[i] = 2 * val;
	});
	return numbers;
}

module.exports = doubleAll
