Ext.define('CL.view.North', {
    extend: 'Ext.Component',
    alias:  'widget.northComponent',

    height: 32,

    
    autoEl: {
        tag: 'div',
        html:'<p>north - generally for menus, toolbars and/or advertisements</p>'
    },
/*
    items: [{
        tbar:   [{
            xtype:  'button',
            text:   'west'
        },{
            xtype:  'button',
            text:   'east'
        },{
            xtype:  'button',
            text:   'south'
        }]   
    }]
*/
    initComponent: function () {
        this.callParent(arguments);
    }

});
