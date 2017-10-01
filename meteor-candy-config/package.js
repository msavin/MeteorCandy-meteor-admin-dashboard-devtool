Package.describe({
  name: 'meteor-candy-config',
  summary: 'Configuration Kit for Meteor Candy',
  version: '2.0.0'
});

Package.onUse(function(api) {
	api.mainModule('exports/client.js', 'client', {lazy: true});
	api.mainModule('exports/server.js', 'server');
	api.use('ecmascript');
});