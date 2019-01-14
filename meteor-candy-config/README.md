# Welcome to Meteor Candy Configuration Package

# Getting Started

With-in Meteor Candy, the only files that you need to tinker with are the files with-in the `imports` directory of this package. Each folder represents a feature, and has a README file to explain how things work. 

You should be able to jump into any folder and adjust things as you wish. Enjoy your journey!

# Package Structure 

Meteor Candy configuration is divided into two folders: imports and exports. The export folder simply assembles all the code with-in `./imports` and readies it to be used by Meteor Candy. The only place you need to work with is `./imports`. 

Meteor Candy's `./imports` folder is divided into three sets of files: client, server, and shared. With-in those folders, you can find different bits of functionality, with code examples and documentation built-in.

# Server-Side API

Meteor Candy can be easily integrated into the rest of your application to access features

```javascript
// use MC authorizion in any method or publication
Candy.authorize()

// get settings data as an object
// name - string - optional
// fields - [string] - option
Candy.settings.fetch(name, fields)

// return settings data into a publication
Candy.settings.publish(name, fields, publicationInstance)

// 
Candy.settings.update()

// 
Candy.settings.reset()

// 
Candy.logging.collection()

// 
Candy.logging.add()
```