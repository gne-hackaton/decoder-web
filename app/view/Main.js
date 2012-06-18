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
				xtype:'favoritespanel'
            },
            {
				xtype:'recentspanel'
            }
        ]
    }
});
