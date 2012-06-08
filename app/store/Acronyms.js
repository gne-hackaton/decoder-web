Ext.define('decoder.store.Acronyms',{
	extend: 'Ext.data.Store',
	xtype: 'acronyms',
	
	config:{
		autoLoad: true,
		model: 'decoder.model.Acronym',
		sorters: 'acronym',
		grouper: {
    		groupFn: 
				function(record) {
					var acronym = record.get('acronym');
					var letter = acronym.substring(0,1).toUpperCase();
      				return letter;
      		},
    	},
		proxy: {
			type: 'ajax',
			url: 'resources/static/acronyms_me.json',
			reader: {
				type: 'json',
				rootProperty:'result',
			}
		}
	}
});
