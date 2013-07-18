var prelude = require('prelude-ls');
document.FileManager = {};

(function(FileManager){

    FileManager.createFile = function(name){

	var f = Ext.create('FileManager.view.Resource',{
	    resourceName : name});
	return f;
    }

    FileManager.addFiles = prelude.curry(function(panel,files){	

	var addFile = function(file){

	    var res = FileManager.createFile(file.name);
	    panel.add(res);
	    console.log(res);
		
	}

	prelude.map(addFile,files.contents);
    });

    FileManager.loadFolder = function(folder,panel){

	document.tersus.getFile(folder,FileManager.addFiles(panel));
    }
})(document.FileManager);

