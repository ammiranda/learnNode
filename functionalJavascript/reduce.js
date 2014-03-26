function countWords(inputWords) {
	return inputWords.reduce(function(countMap, curr, i, array) {
		if (countMap[curr]) {
			countMap[curr] += 1;
		}
		else {
			countMap[curr] = 1;
		}
		return countMap;
	}, {});
}

module.exports = countWords;
