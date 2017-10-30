const FBMessenger = require('../ui/messenger')
const messenger = new FBMessenger(process.env.pageAccessToken)

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
              title: 'Get Events',
              payload: 'EVENTS'
            },
            {
              type: 'postback',
              title: 'Set Location',
              payload: 'LOCATION'
            },
            {
              type: 'postback',
              title: 'Feedback',
              payload: 'FEEDBACK'
            }
          ]
        }
      ]
    })
  }
}

module.exports = PersistentMenu
