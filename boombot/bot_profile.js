const FBMessenger = require('../ui/messenger')
const messenger = new FBMessenger(process.env.pageAccessToken)

// Sets up greeting screen for the bot
BotProfile = {
	enable() {
		// Set call to action button when user is about to address bot
		// for the first time. Handle the payload in postbacks.
		messenger.setMessengerProfile({ 
		  "get_started": {
		    "payload":"Start"
		  }
		})
		// NOTE: You can user {{user_last_name}} or {{user_full_name}} to
		// personalize greeting.
		messenger.setMessengerProfile({
		  greeting: [
		    {
		      locale: 'default',
		      text: "Hello and welcome, {{user_first_name}}! Say 'hi!'"
		    },
		    {
		      locale: 'fr_FR',
		      text: 'Bienvenue, {{user_first_name}}!'
		    }
		  ]
		})
	}
}

module.exports = BotProfile
