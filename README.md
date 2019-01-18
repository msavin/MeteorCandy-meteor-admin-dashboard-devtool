# Meteor Candy
### The Fast, Secure and Scalable Admin Panel for Meteor.js

Manage your production application with Meteor Candy, the admin panel made just for Meteor. With tight integrations into Meteor's core packages, such as `accounts` and `mongo`, this package is the ultimate way to add an admin panel to your application.

- Account Management
- Data Reports
- Data Tables
- Custom Functions
- Settings

**Meteor Candy comes pre-configured with features such as account impersonation, activity logging, and more.** However, the real magic is when you configure it work with your application and collections. For more information, and a live demo, please visit the <a href="https://www.meteorcandy.com">product website</a>.

<img src="https://raw.githubusercontent.com/msavin/MeteorCandy-meteor-admin/master/screenshot.png">

## Getting Started

Meteor Candy can be installed in a few minutes, and configured in a few hours. A free Development Kit is available for you to try it locally. To add it to your app, just follow these directions:

1. Copy the `./meteor-candy-config` folder from this repository to your packages folder 
    - You folder path should look like this: `mymeteorapp/packages/meteor-candy-config`
    - The package.js file path should look like this: `mymeteorapp/packages/meteor-candy-config/package.js`
2. Install the configuration package, then the front-end package, then the core package
    - run `meteor add meteor-candy-config meteor-candy-blaze meteor-candy`
3. Open your web app and press Control + D to launch Meteor Candy

## Configuration Sample

Feel free to browse the `./meteor-candy-config` folder to see configuration options and their associated documentation. Here is an example of how easy it is to configure a table. **Meteor Candy will automatically set up pagination, search, sorting, and more.** Meteor Candy will not release any additional data beyond what you specify in the `fields` array.

```javascript
var subscriberData = {
  collection: "subscribers",
  label: "Subscribers",
  queries: [{
    label: "Subscribed Only",
    query: '{"active": true}',
  }, {
    label: "Unsubscribed Only",
    query: '{"active": false}',
  }],
  fields: [{
    field: "_id",
    label: "ID",
  }, {
    field: "email",
    label: "Email",
  }, {
    field: "active",
    label: "Active",
  },{
    field: "created",
    label: "Joined",
    sort: -1
  }]
}
```

## Compared to yogiben:meteor-admin, gterrono:houston and related forks

**Meteor Candy is an up-to-date and constantly updated solution.**  First, it uses carefully scoped code and dynamic imports to ensure no burden is added to your client or server. Second, it uses methods to retrieve data in a scalable and performant way. Finally, it's all about your configuration, rather than trying to guess its way through plug and play.

## Premium Support

Every purchase of Meteor Candy comes with a free, one hour consultation. If you need additional help setting up Meteor Candy, or would like to have it done for you, please see <a href="https://www.toyshop.ooo">Toy Shop</a>.

## License

Meteor Candy is a proprietary product with a custom license. It's free to use in development, but requires a paid license to be used in production. For more information, please visit the <a href="https://www.meteorcandy.com">product website</a>.
