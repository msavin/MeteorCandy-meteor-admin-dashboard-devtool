import { packages } from "../account/packages"

var helpers = {}

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
	if (Package["accounts-base"]) {
		return Meteor.users.find(query).count();
	} else {
		return 0
	}
}

helpers.getContent = function (daysAgo, midnight) {
	var self = this;

	return packages.map(function (type) {
		var data;

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

helpers.getDummmy = function () {
	return [
		{
			name: "Meteor Candy can serve data any way that you would like. It will automatically try to detect the best way to display it."
		}, {
			name: "Lists Collection",
			value: "14 documents"
		},{
			name: "Email",
			value: "derp@me.<b>com</b>",
			sanitize: false
		}, {
			name: "HTML Injection",
			value: "<strong>Everything is sanitized by default, but you can opt out of it whenever</strong>"
		}, {
			name: "Hyperlink",
			value: "http://www.google.com",
			sanitize: false
		}, {
			name: "Big Hyperlink",
			value: "https://www.footasylum.com/mens/mens-footwear/trainers/nike-air-max-95-essential-trainer-light-pumice-dark-stucco-119233/?src=froogle&utm_source=Criteo&utm_medium=display&campaign=retargeting",
			sanitize: false
		}, {
			name: "Kind-of Invalid Hyperlink",
			value: "www.footasylum.com/mens/mens-footwear/trainers/nike-air-max-95-essential-trainer-light-pumice-dark-stucco-119233/?src=froogle&utm_source=Criteo&utm_medium=display&utm_campaign=retargeting",
			sanitize: false
		}, {
			name: "Image URL",
			value: "https://sneakerbardetroit.com/wp-content/uploads/2018/03/Nike-Air-Max-97-Ultra-White-Black-Red-AH6806-005-Release-Date.jpg",
			sanitize: false
		}, {
			name: "Lots of Text",
			value: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."
		}, {
			name: "The data for this view",
			value: function () {
				// when returning raw data, Meteor Candy will automatically pretty-print it as JSON
				return [{
					name: "Meteor Candy can serve data any way that you would like. It will automatically try to detect the best way to display it."
				}, {
					name: "Lists Collection",
					value: "14 documents"
				},{
					name: "Email",
					value: "derp@me.<b>com</b>",
					sanitize: false
				}, {
					name: "HTML Injection",
					value: "<strong>Everything is sanitized by default, but you can opt out of it whenever</strong>"
				}, {
					name: "Hyperlink",
					value: "http://www.google.com",
					sanitize: false
				}, {
					name: "Big Hyperlink",
					value: "https://www.footasylum.com/mens/mens-footwear/trainers/nike-air-max-95-essential-trainer-light-pumice-dark-stucco-119233/?src=froogle&utm_source=Criteo&utm_medium=display&campaign=retargeting",
					sanitize: false
				}, {
					name: "Kind-of Invalid Hyperlink",
					value: "www.footasylum.com/mens/mens-footwear/trainers/nike-air-max-95-essential-trainer-light-pumice-dark-stucco-119233/?src=froogle&utm_source=Criteo&utm_medium=display&utm_campaign=retargeting",
					sanitize: false
				}, {
					name: "Image URL",
					value: "https://sneakerbardetroit.com/wp-content/uploads/2018/03/Nike-Air-Max-97-Ultra-White-Black-Red-AH6806-005-Release-Date.jpg",
					sanitize: false
				}, {
					name: "Lots of Text",
					value: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."
				}]
			}()
		}
	]
}
export { helpers }