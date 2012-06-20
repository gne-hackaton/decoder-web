Ext.define("decoder.view.phone.Main", {
    extend: 'Ext.tab.Panel',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        tabBarPosition: 'bottom',
		tabBar: {
			cls: 'roundrect-bottom'
		},
        items: [
            {
              xtype:'homepanel'
            },
            {
				xtype:'favoritespanel'
            },
            {
				xtype:'recentspanel'
            }
        ]
    }
});
