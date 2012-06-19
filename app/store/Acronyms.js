Ext.define('decoder.store.Acronyms',{
	extend: 'Ext.data.Store',
	xtype: 'acronyms',
	requires: [
		'Ext.data.proxy.JsonP'
	],
	config:{
		autoLoad: false,
		model: 'decoder.model.Acronym',
		sorters: 'acronym',
		proxy: {
			type: 'ajax',
			reader: {
				type: 'json',
				rootProperty:'result',
			}
		}
	}
});
