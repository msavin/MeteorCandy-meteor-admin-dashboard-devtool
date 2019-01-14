# Account Profile

# How It Works

Account Profiles are generated created and displayed through the following steps:
    1- Meteor Candy queries the `Meteor.users` collection for the appropriate accounts
    2- Meteor Candy runs the returned documents through a series of functions to create a user profile object that can be displayed by the client
    3- The functions that create the user profile use the profile variable in this folder to generate the profile.

The other way to do this would have been to publish documents from the user collection. However, that creates a number of risks, like exposing the login tokens and other sensitive data. By taking this approach, we have greater control over what we show, what we don't show, as well as integrating with other data sources.

# How the Profile is Generated

Once Meteor Candy queries the `Meteor.users` collection, it then loops each of the documents through the profile configuration. 

The profile configuration is an array of objects, with three fields:

    `name` - this is what you want to display as the "label" in the interface. If you pre-fix the name with _, it will be returned but it will not be displayed in the interface.

    `content` - this is what Meteor Candy will display as the data in the user profile. Meteor Candy will run the function and inside of it, you can specify any logic that you would like. 

    `field` - the content function contains the entire user document, meaning, you might have to do some work to extract the right value from it. To save you the trouble of having to do that over and over, you can just tell Meteor Candy where to look in the object. Then, rather than passing in the entire user document, it will just pass in that value.

# Helpers

The configuration is totally up to you, but Meteor Candy provides some helper functions here to help you generate timestamps and whatnot. These are yours to keep or remove.

# Synchronous Code Execution

An important thing to keep in mind is maintaing synchronous code execution, so that the function returns value at the right time. In the most basic sense, it means defining 
