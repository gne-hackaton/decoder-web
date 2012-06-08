Ext.define('decoder.model.Acronym', {
	extend: 'Ext.data.Model',
	xtype: 'acronym',

	config: {
		fields: [
			{name:'acronym',type:'string'},
			{name:'id',type:'string'},
			{name:'dict',type:'string'},
			{name:'def',type:'string'}
		]
	}
});