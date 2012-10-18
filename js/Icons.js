var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
}
var Icons;
(function (Icons) {
    Icons.IconClass = 'icon';
    Icons.FileClass = 'file';
    var Icon = (function () {
        function Icon(parent) {
            this.holder = $(document.createElement('div'));
            this.holder.addClass(Icons.IconClass);
            parent.append(this.holder);
        }
        return Icon;
    })();
    Icons.Icon = Icon;    
    var FileIcon = (function (_super) {
        __extends(FileIcon, _super);
        function FileIcon(parent) {
                _super.call(this, parent);
            this.holder.addClass(Icons.FileClass);
        }
        return FileIcon;
    })(Icon);
    Icons.FileIcon = FileIcon;    
})(Icons || (Icons = {}));

