var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
}
var TWidgets;
(function (TWidgets) {
    TWidgets.IconClass = 'icon';
    TWidgets.FileClass = 'file';
    TWidgets.contains = function (array, obj) {
        for(var i = 0; i < array.length; i++) {
            if(array[i] === obj) {
                return true;
            }
        }
        return false;
    };
    var TWidget = (function () {
        function TWidget(parent) {
            this.initHolder();
            this.initChildren();
            this.attachWidget(parent);
        }
        TWidget.prototype.initHolder = function () {
            this.holder = $(document.createElement('div'));
        };
        TWidget.prototype.initChildren = function () {
            this.children = [];
        };
        TWidget.prototype.attachWidget = function (parent) {
            if(parent instanceof TWidget) {
                this.setParent(parent);
            } else {
                if(parent instanceof jQuery) {
                    parent.append(this.getHolder());
                }
            }
        };
        TWidget.prototype.getParent = function () {
            return this.parent;
        };
        TWidget.prototype.setParent = function (parent) {
            this.parent = parent;
            if(this.parent) {
                this.parent.addChild(this);
            }
        };
        TWidget.prototype.getHolder = function () {
            return this.holder;
        };
        TWidget.prototype.setHolder = function (holder) {
            this.holder = holder;
        };
        TWidget.prototype.detach = function () {
            this.getHolder().remove();
        };
        TWidget.prototype.removeChild = function (child) {
            var index = this.children.indexOf(child);
            if(index >= 0) {
                this.children.splice(index, index + 1);
                child.detach();
                child.setParent(undefined);
            }
        };
        TWidget.prototype.removeAllChilds = function () {
            while(this.children.length > 0) {
                this.removeChild(this.children[0]);
            }
        };
        TWidget.prototype.remove = function () {
            if(this.parent) {
                this.parent.removeChild(this);
            } else {
                this.detach();
            }
        };
        TWidget.prototype.getChildrenHolder = function () {
            return this.holder;
        };
        TWidget.prototype.addChild = function (child) {
            if(!TWidgets.contains(this.children, child)) {
                this.children.push(child);
                this.getChildrenHolder().append(child.getHolder());
            }
        };
        TWidget.prototype.addClass = function (cssClass) {
            this.getHolder().addClass(cssClass);
        };
        TWidget.prototype.resize = function (x, y) {
            this.holder.css('width', x + 'px');
            this.holder.css('height', y + 'px');
        };
        TWidget.prototype.onClick = function (f) {
            var _this = this;
            this.getHolder().click(function (event) {
                f(_this, event);
            });
        };
        return TWidget;
    })();
    TWidgets.TWidget = TWidget;    
    var TLabel = (function (_super) {
        __extends(TLabel, _super);
        function TLabel(parent) {
                _super.call(this, parent);
            this.addClass('label');
        }
        TLabel.prototype.setText = function (text) {
            this.getHolder().html(text);
        };
        return TLabel;
    })(TWidget);
    TWidgets.TLabel = TLabel;    
    var TIcon = (function (_super) {
        __extends(TIcon, _super);
        function TIcon(parent) {
                _super.call(this, parent);
            this.addClass(TWidgets.IconClass);
        }
        TIcon.prototype.resize = function (x, y) {
            _super.prototype.resize.call(this, x, y);
            this.getHolder().css('background-size', x + 'px ' + y + 'px');
        };
        return TIcon;
    })(TWidget);
    TWidgets.TIcon = TIcon;    
    TWidgets.FolderClass = "folder";
    var TFolderIcon = (function (_super) {
        __extends(TFolderIcon, _super);
        function TFolderIcon(parent) {
                _super.call(this, parent);
            this.addClass(TWidgets.FolderClass);
        }
        return TFolderIcon;
    })(TIcon);
    TWidgets.TFolderIcon = TFolderIcon;    
    var TFileIcon = (function (_super) {
        __extends(TFileIcon, _super);
        function TFileIcon(parent) {
                _super.call(this, parent);
            this.getHolder().addClass(TWidgets.FileClass);
        }
        return TFileIcon;
    })(TIcon);
    TWidgets.TFileIcon = TFileIcon;    
    var TLinkWidget = (function (_super) {
        __extends(TLinkWidget, _super);
        function TLinkWidget() {
            _super.apply(this, arguments);

        }
        TLinkWidget.prototype.initHolder = function () {
            this.setHolder($(document.createElement('a')));
            this.getHolder().css("display", "block");
        };
        TLinkWidget.prototype.addClass = function (cssClass) {
            this.getChildrenHolder().addClass(cssClass);
        };
        TLinkWidget.prototype.setUrl = function (url) {
            this.getHolder().attr("href", url);
        };
        TLinkWidget.prototype.getUrl = function () {
            return this.getHolder().attr("href");
        };
        TLinkWidget.prototype.setTarget = function (target) {
            this.getHolder().attr("target", target);
        };
        TLinkWidget.prototype.getTarget = function () {
            return this.getHolder().attr("target");
        };
        return TLinkWidget;
    })(TWidget);
    TWidgets.TLinkWidget = TLinkWidget;    
})(TWidgets || (TWidgets = {}));

