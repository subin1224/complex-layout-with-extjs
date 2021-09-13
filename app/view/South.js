Ext.define('CL.view.South', {
    extend: 'Ext.panel.Panel',
    alias:  'widget.southPanel',

    title:  'South',

    split: true,
    collapsible: true,
    collapsed: true,
    height:  100,
    margins: '0 0 0 0',
   
    html:'<p>south - generally for informational stuff, also could be for status bar</p>',

    initComponent: function () {
        this.callParent(arguments);
    }
});
