Ext.application({
    controllers: ["Main"],

    name: 'decoder',

    requires: [
		'Ext.MessageBox',
		'decoder.util.Config'
    ],

    views: ['Main','Home','Detail','Favorites','Recents'],
    models:['Acronym'],
	stores: ['Acronyms','Favorites','Recents'],

    icon: {
        '57': 'resources/icons/app-icon-iphone.png',
        '72': 'resources/icons/app-icon-ipad.png',
        '114': 'resources/icons/app-icon-iphone@2x.png',
        '144': 'resources/icons/app-icon-ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },
	viewport: {
		automaximize: true
	},
    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('decoder.view.Main'));
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
