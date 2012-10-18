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
            this.parent.addChild(parent);
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
        TWidget.prototype.resize = function (x, y) {
            this.holder.css('width', x + 'px');
            this.holder.css('height', y + 'px');
        };
        return TWidget;
    })();
    TWidgets.TWidget = TWidget;    
    var Icon = (function (_super) {
        __extends(Icon, _super);
        function Icon(parent) {
                _super.call(this, parent);
            this.getHolder().addClass(TWidgets.IconClass);
        }
        Icon.prototype.resize = function (x, y) {
            _super.prototype.resize.call(this, x, y);
            this.getHolder().css('background-size', x + 'px ' + y + 'px');
        };
        return Icon;
    })(TWidget);
    TWidgets.Icon = Icon;    
    var FileIcon = (function (_super) {
        __extends(FileIcon, _super);
        function FileIcon(parent) {
                _super.call(this, parent);
            this.getHolder().addClass(TWidgets.FileClass);
        }
        return FileIcon;
    })(Icon);
    TWidgets.FileIcon = FileIcon;    
})(TWidgets || (TWidgets = {}));

