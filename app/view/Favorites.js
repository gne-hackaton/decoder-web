Ext.define('decoder.view.Favorites',{
	extend: 'Ext.navigation.View',
	xtype: 'favoritespanel',
	id: 'favoritespanel',
	
		requires: [
			'Ext.dataview.List'
		],

		config:{
		 	title: 'Favorites',
			iconCls: 'star',
			navigationBar: {
				cls:'roundrect',
				docked:'top'
			},
			items: [
				{
					xtype: 'list',
					id: 'favorites-list',
					baseCls: 'ac-list',
					title: 'FAVORITES',
					store: 'Favorites',
					disableSelection: true,
					grouped: true,
					itemTpl: '<div class="def">{name} <span class="sub">{def}</span></div>',
					onItemDisclosure: false,
				}
			]
		}
	});