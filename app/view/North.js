Ext.define('CL.view.North', {
    extend: 'Ext.container.Container',
    alias:  'widget.northComponent',

    height: 32,

    items :    [{
        xtype:  'component',
        html:   '<p>north - generally for menus, toolbars and/or advertisements</p>'
    }],

    initComponent: function () {
        this.callParent(arguments);
    }
});
