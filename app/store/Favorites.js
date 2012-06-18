Ext.define('decoder.store.Favorites',{
	extend: 'Ext.data.Store',
	xtype: 'favorites',
	requires: [
		'Ext.data.proxy.LocalStorage'
	],
	config:{
		autoLoad: true,
		autoSync: true,
		model: 'decoder.model.Acronym',
		sorters: 'acronym',
		grouper: {
    		groupFn: 
				function(record) {
					var acronym = record.get('name');
					var letter = acronym.substring(0,1).toUpperCase();
      				return letter;
      		},
    	},
		proxy: {
			type:'localstorage',
			id:'favorites-store	'
		}
	}
});