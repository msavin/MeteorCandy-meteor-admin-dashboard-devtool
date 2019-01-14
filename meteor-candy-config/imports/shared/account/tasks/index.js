import { Meteor } from "meteor/meteor"

if (Package['accounts-base']) {
	import { Accounts } from 'meteor/accounts-base';
}

var tasks = [
	{
		name: "Sign Into Account",
		_impersonation: true,
		debugOnly: true,
		server: function (userId, param, parent) {
			parent._setUserId(userId);
			return userId;
		},
		client: function (userId) {
			Meteor.connection.setUserId(userId);
		}
	}, {
		name: "Change Password",
		prompt: "To what would you like to change the password to?",
		show: "_hasPassword",
		// hide: ["_avatar"],
		log: true,
		server: function (userId, param) {
			if (Package['accounts-base']) {
				return Accounts.setPassword(userId, param)
			}
		},
		client: function (result) {
			if (result) {
				alert("The password has been changed.");
			}
		}
	}, {
		name: "Delete Account",
		prompt: "To remove, please enter REMOVE to confirm.",
		refresh: true,
		log: true,
		server: function (userId, param) {
			if (param === "REMOVE") {
				return Meteor.users.remove(userId)
			}
		},
		client: function (result) {
			if (result === 1) {
				alert("The account has been deleted.");	
			} else {
				alert("There might have been an error removing this account. Please reload and check.");
			}
		}
	}
]

export { tasks };