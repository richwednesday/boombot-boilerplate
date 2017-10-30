// A model for the user
class User {
  constructor (id, location) {
    this.id = id;
    this.location = location;
  }

  setLocation(location) {
  	this.location = location;
  }

  getLocation() {
  	return this.location;
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
	constructor(id, location) {
		super(id, location)
	}

	/***********************************************
	** Pass any new thing you may need here as well
	************************************************/
}
