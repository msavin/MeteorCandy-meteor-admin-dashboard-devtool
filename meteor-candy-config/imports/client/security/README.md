# Client Security 

The settings here define how the client would be opened, and under what conditions it should happen.

`permission` refers to which logic must return true for Meteor Candy to be imported. With-in it, you can write  any client side logic, such as:

```javascript
if (Meteor.user() && Meteor.user().profile && Meteor.user().profile.admin) {
	return true;
}
```

Even though the client side code could be patched to return true, it should not matter because Meteor Candy has different permission rules for the server.