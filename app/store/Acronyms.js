Ext.define('decoder.store.Acronyms',{
	extend: 'Ext.data.Store',
	xtype: 'acronyms',
	requires: [
		'Ext.data.proxy.JsonP'
	],
	config:{
		autoLoad: true,
		model: 'decoder.model.Acronym',
		sorters: 'acronym',
		/*
		grouper: {
    		groupFn: 
				function(record) {
					var acronym = record.get('name');
					var letter = acronym.substring(0,1).toUpperCase();
      				return letter;
      		},
    	},
        */
		proxy: {
			type: 'ajax',
			url: 'resources/static/A.json',
			reader: {
				type: 'json',
				rootProperty:'result',
			}
		}
	}
});
