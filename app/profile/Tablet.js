Ext.define('decoder.profile.Tablet',{
	extend: 'Ext.app.Profile',
	config: {
		name: 'Tablet',
		views: ['Main','Home']
	},
	isActive: function() {
		console.log('is Tablet:'+Ext.os.is.Tablet);
		
		var browserStr = "Browser CodeName: " + navigator.appCodeName;
		browserStr+= "  -Browser Name: " + navigator.appName;
		browserStr+= "  -Browser Version: " + navigator.appVersion;
		browserStr+= "  -Cookies Enabled: " + navigator.cookieEnabled;
		browserStr+= "  -latform: " + navigator.platform;
		browserStr+= "  -User-agent: " + navigator.userAgent;
		console.log('device type:'+Ext.os.deviceType);
		console.log(browserStr);
		
		return Ext.os.is.iPad;
	},
	launch: function() {
		// Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('decoder.view.tablet.Main'));
	}
});