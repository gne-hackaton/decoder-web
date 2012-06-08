Ext.define("decoder.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
              xtype:'homepanel'
            },
            {
                title: 'Favorites',
                iconCls: 'star',
				html: [
	            	" Favorites View "
				].join("")
            },
            {
                title: 'Recents',
                iconCls: 'time',
				html: [
	            	" Favorites View "
				].join("")
            },
        ]
    }
});
