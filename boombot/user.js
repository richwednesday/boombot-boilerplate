// A model for the user
class User {
  constructor (id, session) {
    this.id = id;
    this.session = session;
  }

  setSession(session) {
  	this.session = session;
  }

  getSession() {
  	return this.session;
  }

  
  /********************************************
  ** Add more methods for other
  ** things you may need to store
  ** 
  ** - First initialize it in the constructor
  ** - Add a method to set it
  ** - Lastly, add the method to get it
  **********************************************/

}

module.exports = class specificUser extends User {
	constructor(id, session) {
		super(id, session)
	}

	/***********************************************
	** Pass any new thing you may need here as well
	************************************************/
}
