# Client Security 

The settings here define how the client would be opened, and under what conditions it should happen.

`keyCode` refers to which key would trigger Meteor Candy to open. Currently, its set to the character D, and so, pressing Control + D would trigger Meteor Candy to launch.

To find an alternative keycode, you can go to:
http://keycode.info/

`permission` refers to which logic must return true for Meteor Candy to be imported. With-in it, you can write virtually any client side logic, such as:

```javascript
if (Meteor.user() && Meteor.user().admin) {
	return true;
}
```

Even though the client side code could be patched to return true, it should not matter because Meteor Candy has different permission rules for the server.