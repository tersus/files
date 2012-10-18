///<reference path="jquery.d.ts" />
///<reference path="TWidgets.ts" />
/*
Copyright (c) 2012, Tersus
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:
    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.
    * Neither the name of the Tersus nor the
      names of its contributors may be used to endorse or promote products
      derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL TERSUS BE LIABLE FOR ANY
DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

----------------------------------------------------------------------------

FileManager

Widgets and Objects used specifically for the file manager.

*/


module FileManager{

    //The possible types of a file system resource in Tersus
    export enum ResourceType{

	FileType,
	FolderType
    }

    //Function that converts the text representation of a 
    //resource into a ResourceType
    export var toResourceType = function(str: string){

	switch(str){
	    
	case "FileType":
	    return ResourceType.FileType;

	case "FolderType":
	    return ResourceType.FolderType;

	}
    }

    //Function that converts a JSON FileMetadata object
    //returned by Tersus into a FileMetadata object.
    export var toFileMetadata = function(obj: any){

	return {folder:obj.folder,name:obj.name,resourceType:toResourceType(obj.resourceType)};
    }

    //Function that loads the contents of the provided folder and creates TFileIcons which
    //are inserted into the given widget
    export var loadFolderContents = function(folder: string, container: TWidgets.TWidget){

	document.tersus.getFile(folder,(function(container: TWidgets.TWidget){
	    return function(contents: any[]){
		
		for(var i=0;i<contents.length;i++){
		    
		    new Resource(container,toFileMetadata(contents[i]));
		}
	    }
	})(container));
    }

    //Interface that represents the JSON objects returned
    //as a list when a list of files is requested to Tersus
    export interface FileMetadata{

	folder: string;
	name: string;
	resourceType: ResourceType;
    }

    //The css class that will be used for filesystem resources
    export var ResourceClass = "resource";

    //A widgets that provides a graphical representation
    //of a file system resource. The resource could
    //be a file or a folder
    export class Resource extends TWidgets.TWidget{

	private resource : FileMetadata;
	private resName : TWidgets.TLabel;
	private resIcon: TWidgets.TIcon;

	constructor(parent:any,resource: FileMetadata){

	    super(parent);

	    this.addClass(ResourceClass);

	    this.resource = resource;

	    if(this.resource.resourceType == ResourceType.FileType)
		this.resIcon = new TWidgets.TFileIcon(this);
	    
	    this.resName = new TWidgets.TLabel(this);
	    this.resName.setText(this.resource.name);

	    
	}
    }
}