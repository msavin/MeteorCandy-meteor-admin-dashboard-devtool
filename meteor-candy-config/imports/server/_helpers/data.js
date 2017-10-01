import { packages } from "../account/packages"

helpers = {}

helpers.getCount = function (daysAgo, midnight, field) {
	var query = {};

	if (daysAgo) { 
		timeLimit = new Date();
		timeLimit.setDate(timeLimit.getDate() - daysAgo);
		query['createdAt'] = { $gte: timeLimit };
	}

	if (midnight) {
		timeLimit = new Date(midnight);
		query['createdAt'] = { $gte: timeLimit };
	}

	if (field) {
		query[field] = { $exists: true };
	}

	return Meteor.users.find(query).count();
}

helpers.getContent = function (daysAgo, midnight) {
	self = this;
	return packages.map(function (type) {
		data = null;

		if (!daysAgo) {
			data = self.getCount(0,0,type.field);
		} else {
			if (midnight) {
				data = self.getCount(daysAgo,midnight,type.field);
			} else {
				data = self.getCount(daysAgo,0,type.field);
			}
		}
		
		return {
			name: type.name,
			value: data
		}
	});
}

export { helpers }