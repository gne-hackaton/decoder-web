Ext.define('decoder.view.tablet.Home',{
	extend: 'Ext.Panel',
	xtype: 'hometablet',
	id: 'hometablet',
	
		requires: [
			'Ext.dataview.List',
			'Ext.field.Search'
		],

		config:{
		 	title: 'Home',
			iconCls: 'Home',
			layout: 'hbox',
			items: [
				{
					xtype: 'list',
					id: 'home-list',
					baseCls: 'ac-list',
					title: 'DECODER RING',
					store: 'Acronyms',
					disableSelection: true,
					//grouped: true,
					itemTpl: 
							'<div class="def">{name} <span class="sub">{def}</span></div>'+
							'<div class="actionbar-list" style="display:none">'+
							'<ul>'+
							'<li class="comment"></li>'+
							'<li id="favorite" class="star"></li>'+
							'<li class="share"></li>'+
							'<li class="flag"></li>'+
							 '</div>',
					onItemDisclosure: false,
					width: 250,
					docked: 'left'
				},
				{
					xtype: 'detailpanel'
				}
			]
		},
		
	});