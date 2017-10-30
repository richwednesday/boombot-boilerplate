// In-memory storage for users
let UserStore = function() {	
	let users = [];

	return {
		find_or_create_user(id) {
	    find(id) || add(id)
		}
	}

	function find(id) {
		return users.find(user => user.id === id);
	}

	function add(user) {
		users.push(user) 
	}
 
}

module.exports = UserStore;