Ext.define('CL.view.East', {
    extend: 'Ext.tab.Panel',
    alias:  'widget.eastTab',

    title:  'East side',
    
    collapsible:    true,
    split:  true,
    width:  225,
    minSize:    175,
    maxSize:    400,
    margins:    '0 5 0 0',

    tabPosition:    'bottom',
    activeTab:  1,

    items: [
        {
            title: 'A Tab',
            xtype: 'datepicker',
        },
        {
            xtype:  'eastGrid'
        }
    ],
    tbar:    ['->', {
        xtype:  'button',
        text:   'test',
        tooltip:    '테스트'
    }],

    initComponent: function () {
        this.callParent(arguments);
    }

});

