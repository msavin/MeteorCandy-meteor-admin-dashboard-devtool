# Shared Security

`whitelist` lets you enter a list of userIds that are allowed to access Meteor Candy.

This could be handy for projects where its not necessary to build a permission system.

When you use the whitelist feature, Meteor Candy will use it in place of your client and server security rules.

`disableDevelopmentMode` lets you disable Meteor Candy's use of Meteor.isDevelopment flag. This flag is typically used to lift authorization rules during development for an improved debugging experience.  This only works in Meteor Candy Business Edition, because the Developer Edition is `debugOnly`.