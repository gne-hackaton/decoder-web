Ext.define('decoder.profile.Phone',{
	extend: 'Ext.app.Profile',
	config: {
		name: 'Phone',
		views: ['Main','Home']
	},
	isActive: function() {
		var isPhone = Ext.os.is.Phone;
		
		var deviceType = Ext.os.deviceType;
		
		console.log(deviceType);

		if (deviceType == 'Desktop') {
			isPhone = false;
		}
		
		//return Ext.os.is.Phone;
		return isPhone;
	},
	launch: function() {
		//Ext.create('Mail.view.phone.Main');
		// Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('decoder.view.phone.Main'));
	}
});