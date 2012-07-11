Ext.define('decoder.controller.tablet.Main',{
	extend: 'decoder.controller.Main',

	config: {
        control: {
        	'finderpanel list': {
				itemtap: 'showDetail'
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
		var detail = this.getDetail();
	   	var pans = detail.query('panel');
	   	Ext.each(pans, function(item, index, thearray) {
			item.setData(record.getData());
		});
	}
});