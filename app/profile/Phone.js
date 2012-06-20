Ext.define('decoder.profile.Phone',{
	extend: 'Ext.app.Profile',
	config: {
		name: 'Phone',
		views: ['Main','Home']
	},
	isActive: function() {
		console.log('is Phone:'+Ext.os.is.Phone);
		return Ext.os.is.Phone;
	},
	launch: function() {
		//Ext.create('Mail.view.phone.Main');
		// Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('decoder.view.phone.Main'));
	}
});