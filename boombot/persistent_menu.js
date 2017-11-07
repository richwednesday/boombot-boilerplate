const FBMessenger = require('../ui/messenger')
const messenger = new FBMessenger(process.env.FB_PAGE_TOKEN)

// Enables persistent menu for your bot
PersistentMenu = {
  enable() {
  	// Design your persistent menu here:
  	messenger.setMessengerProfile({
      persistent_menu: [
        {
          locale: 'default',
          // If this option is set to true,
          // user will only be able to interact with bot
          // through the persistent menu
          // (composing a message will be disabled)
          composer_input_disabled: false,
          call_to_actions: [
            {
            	type: 'postback',
              title: 'Ask a Question',
              payload: 'Question'
            },
            {
              type: 'postback',
              title: 'Give Feedback',
              payload: 'Feedback'
            },
            {
              type: 'postback',
              title: 'Contribute',
              payload: 'Contribute'
            }
          ]
        }
      ]
    })
  }
}

module.exports = PersistentMenu
