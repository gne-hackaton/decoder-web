Ext.define('decoder.controller.Main', {
    extend: 'Ext.app.Controller',
    require: [
		'decoder.model.Term'
	],
    config: {
        refs: {
			list: 'homepanel'
        },
        control: {
			'homepanel': {
				activeitemchange: 'searchBarDisplay'
			},
            'homepanel list': {
				itemtap: 'showDetail',
				itemswipe: 'actionBarReveal'
			},
			'homepanel #searchfield': {
				action: 'loadResults'
			},
			'detailpanel button': {
				tap:'addToFavorites'
			},
			'detailpanel': {
				activate: 'pushData'
			},
		}
    },
    showDetail: function(dataview,index,target,record) {
		var title = record.data.name + ' Decoded';
		this.getList().push({
      		xtype: 'detailpanel',
            title: title,
        	data: record.getData()
      	});
	},
	searchBarDisplay: function(container) {
		var searchbar = Ext.getCmp('searchbar');
		var itemId = container.getActiveItem().getId();
		if (itemId == "results") {
			searchbar.hide();
		} else {
			searchbar.show({
				type:'slide',
				direction:'right'
			});
		}
	},
	loadResults: function(field) {
		var env = decoder.util.Config.getEnv();
		var fieldval = field.getValue();
		console.log(env+','+fieldval);

		/*Reimplement this on itemtap event listener
		var rec = Ext.ModelManager.getModel('decoder.model.Term').create('Term');
		rec.set('term',fieldval);
		console.log(rec);
		Ext.StoreMgr.get('Recents').add(rec);
		*/	
		var url = decoder.util.Config.getUsestatic().url;
		if (env == 'poc') {
			url = decoder.util.Config.getPoc.url + fieldval
		}
		var acronymstore = Ext.StoreMgr.get('Acronyms');
		acronymstore.getProxy().setUrl(url);
		console.log(url);
		acronymstore.load();
	},
	actionBarReveal: function(dataView, index, target, record) {
		var act = target.down('.actionbar-list');
		var def = target.down('.def');
		var display = act.getStyle('display');
		if (display == 'none') {
			act.show();
			target.suspendEvents();
			def.hide();
		} else {	
			act.hide();
			def.show();
		}
	},
	addToFavorites: function(button) {
		var record = button.up().getData();
	    Ext.StoreMgr.get('Favorites').add(record);	
	},
	pushData: function(container) { 
		var acronym = container.getData();
		var panels = container.query('panel');
		Ext.each(panels, function(item, index, thearray) {
			item.setData(acronym);
		});
    },
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});