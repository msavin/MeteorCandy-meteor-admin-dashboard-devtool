import { Meteor } from "meteor/meteor"

actions = [
	{
		name: "Sign Into Account",
		_impersonation: true,
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
		require: "_hasPassword",
		server: function (userId, param) {
			Accounts.setPassword(userId, param)
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

export { actions };