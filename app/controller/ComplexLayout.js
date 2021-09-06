Ext.define('CL.controller.ComplexLayout', {
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
            'centerTab #hideit':   {
                click:  this.toggleWest
            },

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

    toggleWest: function (target) {
        console.log('toggleWest 이벤트 !!!!!! ' + target);
        //const w = Ext.widget('westAccordion');
        //w.collapsed ? w.expand() : w.collapse();
        //console.log(target.up("centerTab"));
    }
});