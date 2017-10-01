security = {
	// This function must return true for Meteor Candy to run in production
	permission: function (userId) {
		/* 
			For example:
			
			if (Meteor.user(userId).isAdmin()) {
				return true
			}
		*/
		return false;
	},

	// DDP Rate limiting
	requestLimit: 10,
	requestLimitForSearch: 50,
    requestTimeout: 5000
}

export { security };