# Account Actions

Account Actions are quick tasks that you can perform on accounts. By default, they has no inputs, or if they do, it would just be one input from a prompt window. 

Each action is placed into an array as an object, with the following configuration options;

 - `name`: a string to represent the name of the action
 - `_impersonation`: an internal function that triggers the impersonation widget
 - `server`: a function that runs of server
 - `client`: a function that runs on the client
 - `refresh`: tells Meteor Candy to refresh the accounts data after the action has executed
 - `require`: this will check the user profile that you generated in `imports/server/account/profile` for a specific field. If that field is not present, then Meteor Candy will not display field to the end users. In the code examples, you can see how it's used to ensure that the "Change Password" button is only available for accounts that actually have a password. 

Meteor Candy will take the userId, parameter (if exists), and the parent of the method (so you can access internal properties of the method, such as setUserId), and pass it into the server-side function.

Assuming the server function executes successfully, Meteor Candy will then run the client side callback if there is one.