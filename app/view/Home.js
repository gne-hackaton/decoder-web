Ext.define('decoder.view.Home',{
	extend: 'Ext.navigation.View',
	xtype: 'homepanel',
	id: 'homepanel',
	
		requires: [
			'Ext.dataview.List',
			'Ext.field.Search'
		],

		config:{
		 	title: 'Home',
			iconCls: 'home',
			items: [
				{
					xtype:'toolbar',
					docked: 'top',
					items:[
						{
			          		xtype: 'searchfield',
							id: 'searchField',
			            	placeHolder: 'Search',
							autoCapitalize: false,
							autoCorrect: false,
							centered: true
			          	}
					]
				},
				{
					xtype: 'list',
					id: 'results',
					title: 'DECODER RING',
					store: 'Acronyms',
					disableSelection: true,
					grouped: false,
					itemTpl: '<div class="def">{acronym} <span class="sub">{def}</span></div>',
					onItemDisclosure: false,
				}
			]
		}
	});// Search List