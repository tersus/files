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
            this.holder = $(document.createElement('div'));
            this.children = [];
            if(parent instanceof TWidget) {
                this.setParent(parent);
            } else {
                if(parent instanceof jQuery) {
                    parent.append(this.holder);
                }
            }
        }
        TWidget.prototype.setParent = function (parent) {
            this.parent = parent;
            this.parent.addChild(this);
        };
        TWidget.prototype.getHolder = function () {
            return this.holder;
        };
        TWidget.prototype.addChild = function (child) {
            if(!TWidgets.contains(this.children, child)) {
                this.children.push(child);
                this.getHolder().append(child.getHolder());
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
            this.holder.click(function (event) {
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
            this.getHolder().addClass(TWidgets.IconClass);
        }
        TIcon.prototype.resize = function (x, y) {
            _super.prototype.resize.call(this, x, y);
            this.getHolder().css('background-size', x + 'px ' + y + 'px');
        };
        return TIcon;
    })(TWidget);
    TWidgets.TIcon = TIcon;    
    var TFileIcon = (function (_super) {
        __extends(TFileIcon, _super);
        function TFileIcon(parent) {
                _super.call(this, parent);
            this.getHolder().addClass(TWidgets.FileClass);
        }
        return TFileIcon;
    })(TIcon);
    TWidgets.TFileIcon = TFileIcon;    
})(TWidgets || (TWidgets = {}));

