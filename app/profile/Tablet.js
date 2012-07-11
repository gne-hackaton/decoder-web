Ext.define('decoder.profile.Tablet',{
	extend: 'Ext.app.Profile',
	config: {
		name: 'Tablet',
		views: ['Main','Home'],
		controllers: ['Main'],
	},
	isActive: function() {
		console.log('Ext.os.is.Tablet:'+Ext.os.is.Tablet);
		var isTablet = Ext.os.is.iPad;
		var deviceType = Ext.os.deviceType;
		
		console.log(deviceType);
		
		if (deviceType == 'Desktop') {
			isTablet = true;
		}
		/*
		var browserStr = "Browser CodeName: " + navigator.appCodeName;
		browserStr+= "  -Browser Name: " + navigator.appName;
		browserStr+= "  -Browser Version: " + navigator.appVersion;
		browserStr+= "  -Cookies Enabled: " + navigator.cookieEnabled;
		browserStr+= "  -latform: " + navigator.platform;
		browserStr+= "  -User-agent: " + navigator.userAgent;
		console.log('device type:'+Ext.os.deviceType);
		console.log(browserStr);
		*/
		
		//return Ext.os.is.iPad;
		return isTablet;
	},
	launch: function() {
		// Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('decoder.view.tablet.Main'));
	}
});