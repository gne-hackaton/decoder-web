Ext.define('decoder.store.Recents',{
	extend: 'Ext.data.Store',
	xtype: 'recents',
	requires: [
		'Ext.data.proxy.LocalStorage'
	],
	config:{
		autoLoad: true,
		autoSync: true,
		model: 'decoder.model.Term',
		sorters: 'term',
		grouper: {
    		groupFn: 
				function(record) {
					var srch = record.get('term');
					var letter = srch.substring(0,1).toUpperCase();
      				return letter;
      		},
    	},
		proxy: {
			type:'localstorage',
			id:'recents-store	'
		}
	}
});