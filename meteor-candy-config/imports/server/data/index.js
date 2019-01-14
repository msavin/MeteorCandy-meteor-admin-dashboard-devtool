import { helpers } from '../_helpers';

var data = [
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
	}
]

export { data };