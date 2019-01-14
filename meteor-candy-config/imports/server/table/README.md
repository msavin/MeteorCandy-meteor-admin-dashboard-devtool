Tables will take data out of MongoDB database and display it as a table. 

**Here are the core ideas behind it:**
 - Automate as much as possible. Everything from sorting, to searching and querying, to pagination, and more, is handled automatically. 
 - Display data in a human-friendly way. Instead of just showing raw values, Tables lets you choose what data to appear, change how it is returned, grab more data from other data sources, etc.
 - Tasks over Direct Editing. Direct editing to the database can be dangerous because the edit does not consider how the database and application as a whole may be impacted. Instead, Meteor Candy encourages you to write logic to control and verify every edit.

Of course, if you disagree with this approach, you will be happy to know that Meteor Candy also offers a JSON document editor, which let's you update any document. You can limit which fields can be viewed and updated, or disable entirely.

----

The Tables configuration is designed to be easy to grok. The idea is to make it easy enough for you to copy and paste the snippet below, and tune it to your preferences. All the fields that are optional could be deleted.

```
var table = {
	// todos2 is the unique table ID
	"todos2": {

		// Required: Specify which collection to get data from
		collection: "todos",

		// Optional: Group the table with other items. This is a cosmetic feature for the UI.
		group: "Transactions",

		// Optional: This is how you want the name to appear in the UI.
		label: "Todo Items",

		// Optional: Allow some queries to be 
		queries: [{
			label: "Checked Only",
			query: '{"checked": true}',
			default: true
		}, {
			label: "Unchecked Only",
			query: '{"checked": false}',
		}],

		// Optional: Omit count of documents in that table
		count: false
		

		// Optional: disable or limit the MongoDB document editor. 
		// Choose one or the other
		// `false` value will disable it entirely
		// the array will limit reading and writing to the fields outlined
		editor: false,
		editor: ["name", "createdAt", "photo"],

		// Required: Tell Meteor Candy which fields to return to the client and how to display them
		// `field` indicates which field to grab from the document
		// `label` indicates how to display that fields name
		// `process` lets you mutate the value of that value accordingly
		// `column: false` will tell Meteor Candy not to display the item inside the table view
		// `editor: false` will tell Meteor Candy not to display the item inside the editor view
		// `sort` accepts `1` or `-1`, and will set that field to be the default sorting field
		// `search: false` will tell Meteor Candy to skip over the field while doing a keyword search

		fields: [ {
			field: "_id",
			label: "ID",
			column: false
		}, {
			label: "Amount",
			field: "amount",
			width: 200
		}, {
			label: "Customer",
			field: "business",
			sort: -1,
			column: false
		}, {
			label: "Name",
			field: "name",
			search: false,
			process: function (doc, field) {
			 	var document = SomeCollection.findOne(doc._id);
			 	return document[field];
			}
		}, {
			label: "Type",
			field: "type"
		}, {
			field: "date",
			label: "Date"
		}]

		// Optional: tasks let you perform actions on a particular row/document
		// They interact with the data that your table outputs, as is designed in the `fields` parameter
		// name - name to display on button
		// hide / show will hide or show the item of the field specified is truthy/falsey
		// hide / show accept a string or array
		// log specifies if the item should be logged or not
		// options are: true, [] for 		
		//  - `true` to log all data
		//  - ["inputs"] or ["outputs"] to log the event and then just the input or output passed into function
		// server is for the logic to be executed on the server
		// prompt - to prompt for additional input
		tasks: [{
			name: "Flag Item",
			hide: "flagged",
			log: true,
			server: function (docId, prompt) {
				Data.update({_id: docId}, {
					$set: {
						flagged: true
					}
				})
			}
		},{
			name: "Unflag Item",
			show: ["flagged"],
			log: true,
			server: function (docId, prompt) {
				Data.update({_id: docId}, {
					$set: {
						flagged: false
					}
				})
			}
		}]
	},
```

Note: similarly to Meteor's oplog tailing, Mongol currently only supports editing on the top fields of the document. This means if you were to edit `profile.name`, the entire field would be overwritten.