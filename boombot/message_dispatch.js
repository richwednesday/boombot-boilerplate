const commands = require('../commands/commands') 
const PostbackFilter = require('./postback_dispatch').PostbackFilter
const FBMessenger = require('../ui/messenger')
const messenger = new FBMessenger(process.env.FB_PAGE_TOKEN)
const userStore = require('../boombot/user_store')

function attachmentsHandler(senderID, attachments) {} 

function messageTextHandler(senderID, message) {
  let user = userStore.find(senderID);
  if (user) {
    let session = user.getSession()
    if (session === "Asking for users feedback") {
      messenger.sendTextMessage(senderID, "Thank you for your feedback. " +
        "Duly appreciated 👍")
    } else if (session === "Asking for users question") {
      messenger.sendTextMessage(senderID, "Thank you for your interest, " +
        "would respond to your question soonest.")
    }
    else {
      // for now echo back all messages received
      messenger.sendTextMessage(senderID, message.text)  
    }
  }
  else {
    // for now echo back all messages received
    messenger.sendTextMessage(senderID, message.text)
  }
	
}

// Routing for messages
function MessageDispatch(event) {
	const senderID = event.sender.id
  const message = event.message

  console.log(`Received message for user ${senderID} with message: `)
  console.log(message)

  // You may get a text, attachment, or quick replies but not all three
  let messageText = message.text;
  let messageAttachments = message.attachments;
  let quickReply = message.quick_reply;
  
  // Quick Replies contain a payload so we take it to the Postback
  if (quickReply) {
    PostbackFilter(senderID, quickReply.payload);
  }

  else if (messageAttachments) {
    attachmentsHandler(senderID, messageAttachments);
  } 
  
  else if (messageText) {
    messageTextHandler(senderID, message);
  }
}

module.exports = MessageDispatch