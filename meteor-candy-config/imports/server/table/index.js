var getCollectionByName = function (name) {
	return Package['mongo'].MongoInternals.defaultRemoteCollectionDriver().open(name);
}

var table = {
	"logs": {
		collection: "candyLogs",
		group: "Meteor Candy",
		label: "Activity Log",
		count: false,
		editor: false,
		fields: [{ 
			field: "_id",
			label: "ID",
			column: false
		}, {
			label: "Name",
			field: "name",
			sanitize: false
		}, {
			label: "Date",
			field: "date",
			width: 250,
			sort: -1
		}, {
			label: "User ID",
			field: "userId",
			width: 250
		}, {
			label: "IP",
			field: "ip",
			width: 250
		}, {
			field: "data",
			label: "Data",
			column: false
		}]
	}
}

export { table }