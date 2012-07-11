Ext.define('decoder.view.phone.Home',{
	extend: 'Ext.navigation.View',
	xtype: 'homepanel',
	id: 'homepanel',
	
		requires: [
			'Ext.dataview.List',
			'Ext.field.Search'
		],

		config:{
		 	title: 'Home',
			iconCls: 'Home',
			navigationBar: {
				cls:'roundrect-top',
				docked:'top'
			},
			items: [
				{
					xtype:'finderpanel',
					title:'DECODER RING'
				}
			]
		}
	});