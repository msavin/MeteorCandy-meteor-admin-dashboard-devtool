# Functions

The Functions array contains objects that can be configured to execute code on the server, and to process the result on the client.

Structure:
- name
- parameters
	- label
	- type
	- value: 30
	- required
- server
- client

`name` should be a string that will be used to represent the function on the interface 

`parameters` is an object that will be used to generate the form for the Meteor Candy interface. The inputs of the form will be verified on the client and then again on the server to ensure they are filled in (if necessary) and that they are the correct type.

The options for objects with-in for `parameters`:
 - `label` (required, string): label to to represent the input on the interface
 - `type` (required, string): the type of data; options are `readOnly`, `number`, `boolean` and `string`
 	- the `readOnly` type is cosmetic; it can be used to write in descriptions of what the function will do for the interface
 - `value` (optional, must match type): a pre-filled value for the input
 - `required` (optional): require the field to have something in it

`server` is a function that will run once the inputs are submitted from the client to the server. The inputs from the form will be passed in to the function. The key of the object will be used to mark it.

`client` is a function that will run once the result is returned from the server to the client. The result from the server will be passed in to the function.