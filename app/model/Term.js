Ext.define('decoder.model.Term', {
	extend: 'Ext.data.Model',
	xtype: 'term',
	requires: [
		'Ext.data.identifier.Uuid'
	],
	config: {
		identifier:'uuid',
		fields: [
			{name:'term',type:'string'}
		]
	}
});