var functions = [
	{
		name: "Test HTML Printing",
		parameters: {
			filler: {
				type: "readOnly",
				value: 'This function demonstrates how Meteor Candy would print HTML. When you click "Submit", it will run a function on the server and then display the result.'
			},
			text: {
				label: "Text",
				type: "string",
				value: "Greetings",
				required: true
			},
			number: {
				label: "Number",
				type: "number",
				value: "91310",
				required: true
			},
			image: {
				label: "Image URL",
				type: "string",
				value: "http://meteorcandy.com/vector/donut-planet.png",
				required: true
			}
		},
		server: function (parameters) {
			var output = "You passed in the following data:";

			Object.keys(parameters).forEach(function (key) {
				addOn = "<br>&nbsp;&bull; " + key + ", which was set to " + parameters[key];
				output = output + addOn;
			});

			output = output + "<br><br>As our thank you, please enjoy the image below:<br><br> <img src='" + parameters.image + "' width='176'>"

			return output;
		},
		client: function () {
			console.log('yo')
		}
	}, {
		name: "Test JSON Printing",
		parameters: {
			filler: {
				type: "readOnly",
				value: 'This function demonstrates how Meteor Candy would print JSON. When you click "Submit", it will run a function on the server and then display the result.'
			},
			number: {
				label: "Number",
				type: "number",
				value: "123",
				required: true
			},
			string1: {
				label: "String (required)",
				type: "string",
				value: "Greetings",
				required: false
			},
			string2: {
				label: "String (not required)",
				type: "string",
				value: "",
				required: false
			},
			boolean: {
				label: "boolean",
				type: "boolean",
				value: false,
				required: true
			}
		},
		server: function (parameters) {
			return {
				number: parameters.number,
				string_r: parameters.string1,
				string_nr: parameters.string2,
				boolean: parameters.boolean,
				theVoid: null,
				candy: {
					ingredients: ['sugar','spice','everything nice']
				}
			}
		},
		client: function () {
			// ...
		}
	}, {
			name: "Test String Printing",
			parameters: {
				filler: {
					type: "readOnly",
					value: 'This function demonstrates how Meteor Candy would print text. When you click "Submit", it will run a function on the server and then display the result.'
				},
				text: {
					label: "Text",
					type: "string",
					value: "Greetings",
					required: true
				},
			},
			server: function (parameters) {
				return parameters.text;
			},
			client: function () {
				// ...
			}
		}, {
		name: "Clear Temporary Data",
		parameters: {
			filler: {
				type: "readOnly",
				value: "This is a sample function of how data cleaning could work. For example, maybe you want to clear your MongoDB logs to save on storage, but prefer to do it on your initiative rather than a systems."
			},
			days: {
				label: "Number of Days Ago",
				type: "number",
				value: 30,
				required: true
			},
			confirm: {
				label: "Confirm",
				type: "boolean",
				value: false,
			}
		},
		server: function (parameters) {
			if (parameters.confirm) {
				// runs Magic.DeleteLogs() ... 
				return "OK - logs are deleted!";
			} else {
				return "You must confirm the action."
			}
			
		},
		client: function () {
			// ...
		}
	}, {
		name: "Send Push Notification",
		parameters: {
			filler: {
				type: "readOnly",
				value: "Your app may automatically send push notifications - but sometimes you might want to send something unique. Here's one way that you could make that work."
			},
			freeUsers: {
				label: "Send to Free Users",
				type: "boolean",
				value: true,
				required: true
			},
			paidUsers: {
				label: "Send to Paid Users",
				value: true,
				type: "boolean",
				required: true
			},
			admins: {
				label: "Send to Admins",
				value: true,
				type: "boolean",
				required: true
			},
			content: {
				label: "Content",
				type: "string",
				value: "There's an exciting new feature we just added to our app. We bet you'll spot it right away!",
				required: true
			},
			confirm: {
				label: "Confirm",
				type: "boolean",
				value: false,
				required: true
			}
		},
		server: function (parameters) {
			if (parameters.confirm) {
 				// Magic.sendPushNotification(parameters)
 				return "Account has been created, and an email was sent to " + parameters.email;
 			} else {
 				return "Please confirm action."
 			}
		}
	}, {
		name: "Export Member Emails (CSV) ",
		parameters: {
			filler: {
				type: "readOnly",
				value: "Your client may want to be able to export their member list emails. However, you have to run an expensive process to do that. One way to make life easier is to enable them to get it in an email when it's ready."
			},
			email: {
				label: "Send to Email Address",
				type: "string",
				value: "!",
				required: true
			},
			confirm: {
				label: "Confirm",
				type: "boolean",
				value: false,
				required: true
			},
			
		},
		server: function (parameters) {
			
			if (parameters.confirm) {
				function validateEmail(email) {
				    var re = /\S+@\S+\.\S+/;
				    return re.test(email);
				}

				if (validateEmail(parameters.email)) {
					// Magic.createCSV()
					return "CSV is being generated and will be sent to " + parameters.email;
				} else {
					return "Invalid email entered. Please try again."
				}
			} else {
				return "Please confirm this action, otherwise, it cannot run."
			}
			
		},
		client: function (parameters) {
			console.log('hi');
			console.log(parameters)
		}
	}, {
		name: "Get Package List",
		parameters: {
			filler: {
				type: "readOnly",
				value: 'This function has no inputs. Once you run it, it will get some data from the server and display it in the appropriate format.'
			},
		},
		server: function () {
			return Object.keys(Package).sort();
		}
	}, {
		name: "Get Free Coupon",
		parameters: {
			filler: {
				type: "readOnly",
				value: 'This function has no inputs. Once you run it, it will get some data from the server and display it in the appropriate format.'
			},
		},
		server: function () {
			return "Thank you for your curiosity! The coupon code is 'output'."
		}
	}, {
		name: "Test Client Callback",
		parameters: {
			filler: {
				type: "readOnly",
				value: 'This function will run a callback in the client after it gets the result from the server.'
			},
			name: {
				label: "Name",
				type: "string",
				value: "Max",
				required: true
			}
		},
		server: function (parameters) {
			return parameters;
		},
		client: function (parameters) {
			return "Hi " + parameters.name;
		}
	}, {
		name: "Test Client-Only Action",
		parameters: {
			filler: {
				type: "readOnly",
				value: 'This function will only run on the client. Could be handy for interacting with data on the client.'
			},
			name: {
				label: "Name",
				type: "string",
				value: "Max",
				required: true
			}
		},
		client: function (parameters) {
			return "Hi " + parameters.name;
		}
	}
]

export { functions };