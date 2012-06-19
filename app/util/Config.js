Ext.define('decoder.util.Config', {
    singleton : true,
    config : {
		env: 'usestatic',
		usestatic: {
			url: 'resources/static/A.json',
		},
		poc: {
			url: 'http://mobile-poc.gene.com/search/',
		}
    },
    constructor : function(config) {
        this.initConfig(config);
        this.callParent([config]);
    }
});