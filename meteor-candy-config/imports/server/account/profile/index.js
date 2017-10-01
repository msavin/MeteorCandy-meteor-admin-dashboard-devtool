import { helpers } from '../../_helpers'

profile = [
	{
		name: "_id",
		field: "_id",
		content: function (data) {
			return data;
		} 
	}, {
		name: "_displayName",
		field: null,
		content: function (data) {
			return helpers.account.displayName(data);
		} 
	}, {
		name: "_avatar",
		field: null,
		content: function (data) {
			return helpers.account.avatar(data);
		} 
	}, {
		name: '_hasPassword',
		field: "services.password",
		content: function (data) {
			if (data) {
				return true;
			}
		}
	}, {
		name: "Emails",
		field: "emails",
		content: function (data) {
			return helpers.account.email(data)
		}
	}, {
		name: "Facebook Email",
		field: "services.facebook.email"
	}, {
		name: "Username",
		field: "username",
		content: function (data) {
			return data;
		}
	}, {
		name: "Join Date",
		field: "createdAt",
		content: function (data) {
			return helpers.account.date(data);
		}
	}, {
		name: "Join Time",
		field: "createdAt",
		content: function (data) {
			return helpers.account.time(data);
		}
	}, {
		name: "Login Sessions",
		field: "services.resume.loginTokens",
		content: function (data) {
			return data.length || "0";
		}
	}
]

export { profile };