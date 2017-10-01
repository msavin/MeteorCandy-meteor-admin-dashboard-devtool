# Welcome to Meteor Candy

To get started:

Step 1: Add Meteor Candy Config to your app 
	Move this configuration package into app/packages/ directory and run `meteor add meteor-candy-config`.

Step 2: Add Meteor Candy to your app
	 - If you have the business edition, then move the package to the app/packages/ directory and run `meteor add meteor-candy`
	 - If you have the developer edition, then add it with `meteor add meteorcandy:core`

Step 3: Run Meteor Candy
	Open your web browser and press Control + D. Assuming your application is running in development mode, Meteor Candy should render into your browser window. For Meteor Candy to run in production mode, you must integrate your authorization system or configure the one that is built in.

Note: `meteor-candy-config` must be installed before `meteor-candy` to work. If you may have installed it the other way around, you can either remove it and re-add it or switch their position in the ./meteor/packages file.

# Package Structure 

Meteor Candy configuration is divided into two folders: imports and exports. The export folder simply assembles all the code with-in `./imports` and readies it to be used by Meteor Candy. The only place you need to work with is `./imports`. 

Meteor Candy's `./imports` folder is divided into three sets of files: client, server, and shared. With-in those folders, you can find different bits of functionality, with code examples and documentation built-in.

# Package Format [IN PROGRESS]

This configuration kit uses import/export statements to leverage dynamic imports. If you prefer not to use import/export statements, you can switch to ES5 version of the package, available here:

http://github.com/msavin/meteorcandy

# Settings Functionality

Meteor Candy allows you to control your application settings right from its interface. Here's how it works.

 - First, you have to set the standard settings in the configuration file.

 - Whenever your server starts up, Meteor Candy will check if the configuration has been seeded. If not, it will seed it. 

 - If the configuration has been seeded and you are in development mode, it will update automatically every time the server restarts.

 - If the configuration has been seeded but you are in production, you will have to trigger the update manually. This is to prevent bugs during deployment, rollbacks, and so on.

 - The following API is available for you to interact with Settings:

```javascript
import { Candy } from "meteor/meteor-candy"

// Get data - id is optional
Candy.settings.get(id)

// Update parts of data
Candy.settings.set(id, {
	key: value
})

// Run the reconfiguration
Candy.settings.reconfig()

// Access the collection directly
Candy.settings.collection()
```

For convenience, the reconfig function could be made available through the Actions tab.

# Getting Started

With-in Meteor Candy, the only files that you need to tinker with are the files with-in the `imports` directory of this package. Each folder represents a feature, and has a README file to explain how things work. 

You should be able to jump into any folder and adjust things as you wish. Enjoy your journey.