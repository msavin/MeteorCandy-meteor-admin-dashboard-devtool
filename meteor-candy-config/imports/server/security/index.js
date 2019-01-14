var security = {
	// This function must return true for Meteor Candy to execute tasks on the server
	// This function will be bypassed if you whitelist userIds in ../shared/security
	permission: function (userId) {
		return false;
		/* 
			For example:
			
			var userDoc = Meteor.users.findOne(userId);

			if (userDoc && userDoc.profile && userDoc.profile.admin === true) {
				return true;
			} 
		*/
	},

	// DDP Rate limiting
	requestLimit: 10,
	requestLimitForSearch: 50,
    requestTimeout: 5000,

    // IP White Listing
    // List which IP addresses are allowed to access Meteor Candy.
    // If left empty, Meteor Candy will not verify IP addresses.
    ipWhitelist: []
}

export { security };