Ext.define('decoder.view.Finder',{
	extend: 'Ext.Panel',
	xtype: 'finderpanel',
	
		requires: [
			'Ext.dataview.List',
			'Ext.field.Search'
		],

		config:{
			layout:'fit',
			items: [
				{
					xtype:'toolbar',
					id:'searchbar',
					top: 0,
					width:'100%',
					items:[
						{
			          		xtype: 'searchfield',
							id: 'searchfield',
			            	placeHolder: 'Search',
							autoCapitalize: false,
							autoCorrect: false,
							centered: true
			          	}
					]
				},
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
				}
			]
		}
	});