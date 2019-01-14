# Security

`requestLimit`, `requestLimitForSearch`, and `requestTimeout` refer to the DDP rate limiting settings for Meteor Candy's Methods.

`permission` is a very important function - it must be secure because it is used to allow users to execute Meteor Candy's functionality on the server. When it returns true, the server code will execute. 

`ipWhitelist` lets you list which IP addresses are allowed to access Meteor Candy. If left empty, Meteor Candy will not verify IP addresses.