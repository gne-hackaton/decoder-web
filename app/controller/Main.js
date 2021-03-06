Ext.define('decoder.controller.Main', {
    extend: 'Ext.app.Controller',
    require: [
		'decoder.model.Term'
	],
    config: {
        refs: {
        	view: 'homepanel',
        	detail: 'detailpanel',
        	finder: 'finderpanel',
			list: 'finderpanel list'
        },
        control: {
			'finderpanel': {
				activeitemchange: 'searchBarDisplay'
			},
            'finderpanel list': {
				//itemtap: 'showDetail',
				itemswipe: 'actionBarReveal'
			},
			'finderpanel #searchfield': {
				action: 'loadResults'
			},
			'detailpanel #add': {
				tap:'addToFavorites'
			},
			'detailpanel': {
				activate: 'pushData'
			}
		}
    },
    showDetail: function(dataview,index,target,record) {
		//Add to recents when tapped; do this regardless of type
		var name = record.data.name;
		var def = record.data.def;
		var rec = Ext.ModelManager.getModel('decoder.model.Acronym').create('Acronym');
		rec.set({
			name:name,
			def:def
		});
		Ext.StoreMgr.get('Recents').add(rec);

		var title = name + ' Decoded';

			this.getView().push({
      			xtype: 'detailpanel',
      			title: title,
      			data: record.getData()
      		});
   	},
	searchBarDisplay: function(container) {
		var searchbar = Ext.getCmp('searchbar');
		var itemId = container.getActiveItem().getId();
		if (itemId == "home-list") {
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
		var fieldval = field.getValue().toUpperCase();
		console.log(env+','+fieldval);

		var url = decoder.util.Config.getUsestatic().url;
		if (env == 'poc') {
			url = decoder.util.Config.getPoc().url + fieldval
		}
		var acronymstore = Ext.StoreMgr.get('Acronyms');
		console.log(this.getList().getStore());
		acronymstore.getProxy().setUrl(url);
		console.log(url);
		acronymstore.load();
	},
	actionBarReveal: function(dataView, index, target, record, e, eOpts) {
		var act = target.down('.actionbar-list');
		var def = target.down('.def');
		var display = act.getStyle('display');
		if (display == 'none') {
			act.show();
			//target.up().suspendEvents();
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
		console.log('Activate Detail Panel');
		var acronym = container.getData();
		var panels = container.query('panel');
		Ext.each(panels, function(item, index, thearray) {
			item.setData(acronym);
		});
    },
    //called when the Application is launched, remove if not needed
    launch: function(app) {
    	var pans = this.getDetail().query('panel');
    	//temporary hack to load data from static while testing ipad profile
        var url = decoder.util.Config.getUsestatic().url;
        var acronymstore = Ext.StoreMgr.get('Acronyms');
		acronymstore.getProxy().setUrl(url);
		console.log(url);
		acronymstore.load({
			callback : function() {
				var record = acronymstore.getAt(0).getData();
				Ext.each(pans, function(item, index, thearray) {
					item.setData(record);
				});
			}
		});
    }
});