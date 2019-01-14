var security = {
	authorize: function () {
		// This function must return true for Meteor Candy to display in production
		return true; 
	}
}

export { security }