Ext.define('CL.view.Center', {
    extend: 'Ext.tab.Panel',
    alias:  'widget.centerTab',

    activeTab: 0,
    width: 600,
    height: 250,
    enableTabScroll: true,
    defaults :{
        autoScroll: true,
        bodyPadding: 10
    },
    
    items : [{
            title: 'Close Me',
            closable:   true,
            autoScroll: true,
            contentEl:  'center1'
        },
        {
            title: 'Center Panel',
            autoScroll: true,
            contentEl:  'center2',
            html:   '<a id="hideit" href="#" onclick="CL.app.getController(\'ComplexLayout\').toggleWest(); return false;">Toggle the west region</a>',
        }
    ],

    
    bbar:    ['->', {
        xtype:  'button',
        text:   'Add Tab',
        action: 'addTab'
    }],
    
    initComponent: function () {
        this.callParent(arguments);
    }

});
