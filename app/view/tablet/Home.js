Ext.define('decoder.view.tablet.Home',{
	extend: 'Ext.Container',
	xtype: 'hometablet',
	id: 'hometablet',

		config:{
		 	title: 'Home',
			iconCls: 'Home',
			layout: 'hbox',
			items: [
				{
					xtype:'panel',
					width:300,
					flex: 1,
					layout: 'fit',
					items: [
						{
							xtype:'titlebar',
							title:'Acronyms',
							docked:'top'	
						},
						{
							xtype:'finderpanel'
						}
					]
				},
				{
					xtype: 'panel',
					flex:2,
					items: [
						{
							xtype:'titlebar',
							title:'DECODER RING',
							docked:'top'
						},
						{
							xtype:'detailpanel'
						}
					]
				}
			]
		},
		
	});