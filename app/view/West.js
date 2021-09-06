Ext.define('CL.view.West', {
    extend: 'Ext.panel.Panel',
    alias:  'widget.westAccordion',

    title:  'West',

    width: 200,
    minWidth: 175,
    maxWidth: 400,
    collapsible: true,
    split: true,
    margins: '0 0 0 5',
    
    layout: 'accordion',
    items: [{
        title:  'Navigation',
        html:   '<p>Hi. I\'m the west panel.</p>',
        iconCls:    'nav'
    }, {
        title:  'Settings',
        html:   '<p>Some settings in here.</p>',
        iconCls:    'settings'
    }, {
        title:  'Information',
        html:   '<p>Some info in here.</p>',
        iconCls:    'info'
    }]
});

