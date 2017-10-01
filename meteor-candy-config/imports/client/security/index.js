security = {
	keyCode: 68,

	// This function must return true for Meteor Candy to run in production
	permission: function (userDoc) {
		return false; 
	}
}

export { security }