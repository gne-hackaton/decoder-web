Ext.define('decoder.controller.Main', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
	
        },
        control: {
            'homepanel list': {
				itemtap: 'showDetail'
			}
		}
    },
    'showDetail': function() {
		console.log("detail");
	},
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});