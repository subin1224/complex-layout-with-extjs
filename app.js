Ext.application({
    requires: ['Ext.container.Viewport'],
    name:   'CL',   //ComplexLayout
    appFolder:  'app',
    controllers: [
        'ComplexLayout'
    ],
    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            items:  [{
                region: 'center',
                xtype:  'centerTab'
            },
            {
                region: 'north',
                xtype:  'northComponent'
            },
            {
                region: 'east',
                xtype:  'eastTab'
            },
            {
                region: 'south',
                xtype:  'southPanel',
            },
            {
                region: 'west',
                xtype:  'westAccordion'
            }]
        });   
    }
});


