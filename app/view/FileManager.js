/*
 * File: app/view/FileManager.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('FileManager.view.FileManager', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.filemanager',

    requires: [
        'FileManager.view.FileContainer'
    ],

    width: 577,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'container',
                    height: 44,
                    itemId: 'navigationBar',
                    layout: {
                        align: 'stretch',
                        pack: 'end',
                        type: 'hbox'
                    },
                    items: [
                        {
                            xtype: 'container',
                            itemId: 'locationBar',
                            layout: {
                                align: 'stretch',
                                type: 'hbox'
                            }
                        },
                        {
                            xtype: 'button',
                            flex: 1,
                            itemId: 'goButton',
                            maxWidth: 100,
                            text: 'Go'
                        }
                    ]
                },
                {
                    xtype: 'filecontainer'
                }
            ]
        });

        me.callParent(arguments);
    }

});