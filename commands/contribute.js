const FBMessenger = require('../ui/messenger')
const messenger = new FBMessenger(process.env.FB_PAGE_TOKEN)

module.exports = function(id) {
	messenger.sendTextMessage(id, "You can contribute to this boilerplate on " +
		"Github by making a pull request here: \n\n" + 
		"https://github.com/richwednesday/boombot-boilerplate") 
}
