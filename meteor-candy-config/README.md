# Welcome to Meteor Candy

To get started:

Step 1: Add Meteor Candy Config to your app 
	Move this folder in your local packages folder and run `meteor add meteor-candy-config`. 

Step 2: Add Meteor Candy to your app
	 - If you have the Business Edition, then move the package to the app/packages/ directory and run `meteor add meteor-candy`
	 - If you have the Developer Edition, then add it with `meteor add meteorcandy:core`

Step 3: Run Meteor Candy
	Open your web browser and press Control + D. Assuming your application is running in development mode, Meteor Candy should render into your browser window. For Meteor Candy to run in production mode, you must integrate your authorization system or configure the one that is built in.

Note: `meteor-candy-config` must be installed before `meteor-candy` to work. If you may have installed it the other way around, you can either remove it and re-add it or switch their position in the ./meteor/packages file.

# Package Structure 

The `meteor-candy-config` package is divided into two folders: imports and exports. The export folder assembles all the code with-in `./imports` and readies it to be used by Meteor Candy. The imports folder is where all the configuration settings are stores, and it is the only code that you would need to modify.

The imports folder is divided into three sets of files: client, server, and shared. With-in those folders, you can find different bits of functionality, with code examples and documentation built-in. Each feature works independently, so you can jump in anywhere you want to make changes. 

# Package Format [IN PROGRESS]

This configuration kit uses import/export statements to leverage dynamic imports. If you prefer not to use import/export statements, you can switch to ES5 version of the package, available here:

http://github.com/msavin/meteorcandy

# Settings Functionality

Meteor Candy allows you to control your application settings right from its interface. Here's how it works.

 - First, you have to set the standard settings in the configuration file.

 - Whenever your server starts up, Meteor Candy will check if the configuration has been seeded. If not, it will seed it. 

   - If the configuration has been seeded and you are in development mode, it will update automatically every time the server restarts.

   - If the configuration has been seeded but you are in production, you will have to trigger the update manually. This is to prevent bugs during deployment, rollbacks, and so on.

The following API is available for you to interact with Settings:

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

Now that you know how to install Meteor Candy and how it works, feel free to start tinkering with the imports folder.