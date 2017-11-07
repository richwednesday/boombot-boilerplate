const commands = require('../commands/commands') 

// Routing for postbacks
function PostbackDispatch(event) {
	let senderID = event.sender.id
  let payload = event.postback.payload

  PostbackFilter(senderID, payload)
}

function PostbackFilter(id, payload) {
	let split = payload.split('~');
	console.log(payload);
	switch (payload) {
		case "Start":
			commands.start(id)
			break;

		case "Question":
			commands.question(id)
			break; 

		case "Feedback":
			commands.feedback(id)
			break;

		case "Contribute":
			commands.contribute(id)
			break;
	}
}

module.exports = {
	PostbackDispatch,
	PostbackFilter
}