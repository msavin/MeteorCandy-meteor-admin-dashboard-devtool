import { helpers } from '../_helpers';

// Name -> The name that will be displayed on the sidebar
// Value -> The badge that will be displayed on the sidebar (optional)
// Content -> The data that will be displayed with-in the main view

data = [
	{
		name: "Total Accounts",
		value: function () {
			return helpers.data.getCount();
		}, 
		content: function () {
			return helpers.data.getContent();
		} 
	}, {
		name: "Past 30 Days",
		value: function () {
			return helpers.data.getCount(30);
		}, 
		content: function () {
			return helpers.data.getContent(30);
		} 
	}, {
		name: "Past 7 Days",
		value: function () {
			return helpers.data.getCount(7);
		}, 
		content: function () {
			return helpers.data.getContent(7);
		} 
	}, {
		name: "Today",
		value: function (dayStart) {
			return helpers.data.getCount(1, dayStart);
		}, 
		content: function (dayStart) {
			return helpers.data.getContent(1, dayStart);
		} 
	}, {
		name: "Sample Data",
		content: function () {
			// Data should be returned as an array of objects. 
			
			// Each object with-in an array must contain:
			//  - name : the label for the data field
			//  - value : the value for the data field

			// If value is JSON, then it will as such
			return [
				{
					name: "Lists Collection",
					value: "14 documents"
				},{
					name: "Todo Collection",
					value: "134 documents"
				},{
					name: "RandomDocument",
					// when returning raw data, Meteor Candy will automatically pretty-print it as JSON
					value: {
						"Settings": {
							appName: "Todos",
							inviteOnly: true
						}
					}
				}, {
					name: "Meteor.settings",
					value: Meteor.settings
				}
			]
		}
	}
]

export { data };