const User = require('../boombot/user') 

// In-memory storage for users
	
let users = [];

function find(id) {
	return users.find(user => user.id === id);
}

function add(id, session) {
	users.push(new User(id, session)) 
}

module.exports = { find, add }

