Ext.define('CL.controller.ComplexLayout', {
    //requires: ['CL.view.West'],
    extend: 'Ext.app.Controller',
    views:  [
        'Center',
        'North',
        'West',
        'East',
        'EastGrid',
        'South'
    ],

    init:   function () {
        this.control({
            'centerTab button[action=addTab]':   {
                click:  this.addTab
            }
        });
    },
    
    addTab: function (button) {
        const centerTab = button.up("centerTab");
        
        const tab_count = centerTab.items.length + 1;
        const dynamicTab = centerTab.add({
            title:  tab_count + ' tab',
            html:   '<p>Add Tab</p>',
            closable:   true,
        })
        
        centerTab.setActiveTab(dynamicTab);
    },
    
    toggleWest: function () {
        //const w = Ext.getCmp('west-panel');
        //const w = Ext.widget('westAccordion);
        const w = Ext.ComponentQuery.query('westAccordion')[0];
        w.collapsed ? w.expand() : w.collapse();
    }
});