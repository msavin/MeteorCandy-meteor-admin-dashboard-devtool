Package.describe({
  name: 'meteor-candy-config',
  summary: 'Meteor Candy configuration package',
  version: '4.0.0'
});

Package.onUse(function(api) {
	api.mainModule('exports/client.js', 'client', {lazy: true});
	api.mainModule('exports/server.js', 'server');
	api.use('ecmascript');
});