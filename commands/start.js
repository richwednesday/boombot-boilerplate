const FBMessenger = require('../ui/messenger')
const messenger = new FBMessenger(process.env.FB_PAGE_TOKEN)
const userStore = require('../boombot/user_store')

module.exports = function(id) {
	messenger.sendTextMessage(id, "Hello and Welcome 👋", (err, body) => {
    	if (err) return console.log(err);

		messenger.sendTextMessage(id, "This is the demo bot for the Boombot " +
			"boilerplate.", (err, body) => {
    		if (err) return console.log(err)
    		
    		let text = "Feel free to contribute, give a feedback, " +
				"ask a question or just say hello 😊";
			let elements = [
	            {
	              content_type: 'text',
	              title: 'Ask a Question',
	              payload: 'Question'
	            },
	            {
	              content_type: 'text',
	              title: 'Give Feedback',
	              payload: 'Feedback'
	            },
	            {
	              content_type: 'text',
	              title: 'Contribute',
	              payload: 'Contribute'
	            }
	        ]
    		messenger.sendQuickRepliesMessage(id, text, elements)
    	})
	})

	userStore.add(id, "User just started!")
}
