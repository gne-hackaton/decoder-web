Ext.define('decoder.model.Acronym', {
	extend: 'Ext.data.Model',
	xtype: 'acronym',
	requires: [
		'Ext.data.identifier.Uuid'
	],

	config: {
		identifier:'uuid',
		fields: [
			{name:'name',type:'string'},
			{name:'id',type:'string'},
			{name:'dict',type:'string'},
			{name:'def',type:'string'}
		]
	}
});