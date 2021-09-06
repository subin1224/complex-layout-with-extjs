Ext.define('CL.view.EastGrid', {
    extend: 'Ext.grid.PropertyGrid',
    alias:  'widget.eastGrid',

    title:  'Property Grid',

    closable: true,
    
    source: {
        "(name)":   "Properties Grid",
        "grouping": false,
        "autoFitColumns":   true,
        "productionQuality":    false,
        "created":  Ext.Date.format(new Date(), 'm/d/Y'),
        "tested":   false,
        "version":  0.01,
        "borderWidth":  1
    }
});

