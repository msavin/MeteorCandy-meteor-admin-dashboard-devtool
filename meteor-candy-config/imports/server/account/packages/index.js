packageList = {
	email: {
		name: "Email",
		package: "accounts-password",
		field: "emails.address",
		avatar: "emails.address",
		avatarLogic: function (emails) {
			return;
			// Could implement Gravatar here but its hard to find an MIT licensed MD5 library
			// If you end up doing it, you will probably want to use: emails[0].address; 
		}
	},
	username: {
		name: "Username",
		package: "accounts-password",
		field: "username"
	},
	facebook: {
		name: "Facebook",
		package: "accounts-facebook",
		field: "services.facebook.name",
		avatar: "services.facebook.id",
		avatarLogic: function (avatar) {
			return "http://graph.facebook.com/" + avatar + "/picture/?type=large";
		}
	},
	github: {
		name: "GitHub",
		package: "accounts-github",
		field: "services.github.username",
		avatar: "services.github.username",
		avatarLogic: function (avatar) {
			return "http://avatars.githubusercontent.com/" + avatar + "?s=200";
		}
	},
	google: {
		name: "Google",
		package: "accounts-google",
		field: "services.google.email",
		avatar: "services.google.picture",
		avatarLogic: function (avatar) {
			return avatar;
		}
	},
	meetup: {
		name: "Meetup",
		package: "accounts-meetup",
		field: "services.meetup.id",
		avatar: ""
	},
	twitter: {
		name: "Twitter",
		package: "accounts-twitter",
		field: "services.twitter.screenName",
		avatar: "services.twitter.profile_image_url_https",
		avatarLogic: function (avatar) {
			return avatar.replace("_normal", "_bigger");
		}
	},
	weibo: {
		name: "Weibo",
		package: "accounts-weibo",
		field: "services.weibo.screenName",
		avatar: ""
	}
};

packages = function () {
	result = []

	Object.keys(packageList).forEach(function (package) {
		packageData = packageList[package];

		if (Package[packageData.package]) {
			result.push(packageData);
		}
	});

	return result;
}();

export { packages }