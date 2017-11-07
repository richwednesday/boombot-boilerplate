const FBMessenger = require('../ui/messenger')
const messenger = new FBMessenger(process.env.FB_PAGE_TOKEN)
const userStore = require('../boombot/user_store')

module.exports = function(id) {
	messenger.sendTextMessage(id, "Let's have your feedback here: ")
	// always check if the user instance exists first before calling any user method
	let user = userStore.find(id);
	if (user) {
		user.setSession("Asking for users feedback")
	}
	else {
		userStore.add(id, "Asking for users feedback")
	} 
}
