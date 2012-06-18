Ext.define('decoder.view.Recents',{
	extend: 'Ext.navigation.View',
	xtype: 'recentspanel',
	id: 'recentspanel',
	
		requires: [
			'Ext.dataview.List'
		],

		config:{
		 	title: 'Recent Searches',
			iconCls: 'time',
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
					itemTpl: '<div class="def">{term}</div>',
					onItemDisclosure: false,
				}
			]
		}
	});