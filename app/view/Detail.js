Ext.define('decoder.view.Detail',{
	extend: 'Ext.Container',
	xtype: 'detailpanel',
	id: 'detailpanel',
	
	config:{
		//title: '{acronym} Decoded',
		layout: 'vbox',
		margin: '0 40',
		items: [
			{
				xtype:'panel',
				flex: 1,
				id: 'title',
				tpl: '<h2 style="text-align:center">{name}</h2>',
				height: 32
			},
			{
				xtype:'panel',
				id: 'info',
				flex: 2,
				id: 'definition',
				tpl: '<p>{def}</p><p>{dict}',
				height:100
			},
			{
				xtype:'panel',
				id: 'controls',
				flex:3,
				margin: '20 auto 10',
				width:220,
				items: [
					{
						xtype:'button',
						id: 'suggest',
						text: 'Suggest/Comment',
						ui: 'action',
						width: 200,
						margin: '10 0'
					},
					{
						xtype:'button',
						id: 'add',
						text: 'Add to Favorites',
						ui: 'action',
						width: 200,
						margin: '10 0'
					},
					{
						xtype:'button',
						id: 'share',
						text: 'Share',
						ui: 'action',
						width: 200,
						margin: '10 0'
					},
					{
						xtype:'button',
						id: 'flag',
						text: 'Flag',
						ui: 'action',
						width: 200,
						margin: '10 0'
					}
				]
			}
		]
	}
});