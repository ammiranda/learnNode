module.exports = function getShortMessages(messages) {
	var answers = [];
	messages.filter(function(val, i, array) {
		if (val["message"].length < 50) {
			answers.push(val["message"]);
		}
	});
	return answers;	
		
}
