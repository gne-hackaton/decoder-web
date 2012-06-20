Ext.define("decoder.view.tablet.Main", {
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
              xtype:'hometablet'
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
