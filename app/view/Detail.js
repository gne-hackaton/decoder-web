Ext.define('decoder.view.Detail',{
	extend: 'Ext.Container',
	xtype: 'detailpanel',
	id: 'detailpanel',
	
	requires: [
	],
	
	config:{
		//title: '{acronym} Decoded',
		layout: 'vbox',
		items: [
			{
				xtype:'panel',
				flex: 1,
				id: 'title',
				tpl: '<h2>{acronym}</h2>',
				height: 32
			},
			{
				xtype:'panel',
				id: 'infopanel',
				flex: 2,
				id: 'definition',
				tpl: '<p>{def}</p><p>{dict}'+
				     '<div id="actionbar"></div>',
				height:100
			},
			{
				xtype:'panel',
				id: 'addpanel',
				flex:3,
				margin: '20 0 0 10',
				items: [
					{
						xtype:'button',
						id: 'addtofavorites',
						iconCls: 'star',
						iconMask: true,
						ui: 'action',
						width: 50
					}
				]
			}
		]
	}
});