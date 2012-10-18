var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
}
var FileManager;
(function (FileManager) {
    (function (ResourceType) {
        ResourceType._map = [];
        ResourceType._map[0] = "FileType";
        ResourceType.FileType = 0;
        ResourceType._map[1] = "FolderType";
        ResourceType.FolderType = 1;
    })(FileManager.ResourceType || (FileManager.ResourceType = {}));
    var ResourceType = FileManager.ResourceType;

    FileManager.toResourceType = function (str) {
        switch(str) {
            case "FileType": {
                return ResourceType.FileType;

            }
            case "FolderType": {
                return ResourceType.FolderType;

            }
        }
    };
    FileManager.toFileMetadata = function (obj) {
        return {
            folder: obj.folder,
            name: obj.name,
            resourceType: FileManager.toResourceType(obj.resourceType)
        };
    };
    FileManager.loadFolderContents = function (folder, container) {
        document.tersus.getFile(folder, (function (container) {
            return function (contents) {
                for(var i = 0; i < contents.length; i++) {
                    new Resource(container, FileManager.toFileMetadata(contents[i]));
                }
            }
        })(container));
    };
    FileManager.ResourceClass = "resource";
    var Resource = (function (_super) {
        __extends(Resource, _super);
        function Resource(parent, resource) {
                _super.call(this, parent);
            this.addClass(FileManager.ResourceClass);
            this.resource = resource;
            if(this.resource.resourceType == ResourceType.FileType) {
                this.resIcon = new TWidgets.TFileIcon(this);
            }
            this.resName = new TWidgets.TLabel(this);
            this.resName.setText(this.resource.name);
        }
        return Resource;
    })(TWidgets.TWidget);
    FileManager.Resource = Resource;    
})(FileManager || (FileManager = {}));

