Ext.define('decoder.view.Recents',{
	extend: 'Ext.navigation.View',
	xtype: 'recentspanel',
	id: 'recentspanel',
	
		requires: [
			'Ext.dataview.List'
		],

		config:{
		 	title: 'Recents',
			iconCls: 'Clock',
			navigationBar: {
				cls:'roundrect',
				docked:'top'
			},
			items: [
				{
					xtype: 'list',
					id: 'recents-list',
					baseCls: 'ac-list',
					title: 'RECENT SEARCHES',
					store: 'Recents',
					disableSelection: true,
					grouped: true,
					itemTpl: '<div class="def">{name} <span class="sub">{def}</span></div>',
					onItemDisclosure: false,
				}
			]
		}
	});