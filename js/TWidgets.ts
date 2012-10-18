///<reference path="jquery.d.ts" />
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

TWidgets

General purpose widgets that can be used to build Tersus applications

*/




module TWidgets{

    //Css class for icons
    export var IconClass = 'icon';

    //Css class for file icons
    export var FileClass = 'file';

    //Check if the given element is contained in the given array
    export var contains = function(array:any[],obj:any){

	for(var i=0;i<array.length;i++){

	    if(array[i]===obj)
		return true;
	}

	return false;
    }

    //Generic widget. This is basically a wrapper for div elements
    //which can hold other widgets
    export class TWidget{

	private parent: TWidget;
	private holder: JQuery;
	private children: TWidget[];

	//Construct a widget and either place it on an
	//existing widget or inside the given div element
	constructor(parent: any){
	    
	    this.holder = $(document.createElement('div'));
	    this.children = [];

	    if(parent instanceof TWidget){
		this.setParent(parent);
		
	    }
	    else if(parent instanceof jQuery){
		parent.append(this.holder);
	    }
	}

	//Change the parent of the widget
	public setParent(parent: TWidget){

	    this.parent = parent;
	    this.parent.addChild(this);
	}

	//Return the div element wich holds this widget
	public getHolder(){
	    
	    return this.holder;
	}

	//Add a child element to this widget
	public addChild(child: TWidget){

	    if(!contains(this.children,child)){

		this.children.push(child);
		this.getHolder().append(child.getHolder());
	    }
	}

	//Add a css class to this widget
	public addClass(cssClass: String){

	    this.getHolder().addClass(cssClass);
	}

	//Resize the widget
	public resize(x:number,y:number){

	    this.holder.css('width',x+'px');
	    this.holder.css('height',y+'px');
	}

	//Single click handler for the widget, it takes
	//a function that takes two parameters, the 
	//first is the widget that was clicked and
	//the second the JQuery click event
	public onClick(f:Function){
	    
	    this.holder.click((event: JQueryEventObject) => {
		f(this,event);
	    });
	}
    }

    //Widget designed to display text
    export class TLabel extends TWidget{

	constructor(parent: any){

	    super(parent);

	    this.addClass('label');
	}

	public setText(text: String){

	    this.getHolder().html(text);
	}
    }

    //Widget designed to have a background image
    //this widget will resize the image if the
    //widget is resized
    export class TIcon extends TWidget{

	constructor(parent: any){

	    super(parent);
	    this.getHolder().addClass(IconClass);
	}

	public resize(x:number,y:number){

	    super.resize(x,y);
	    this.getHolder().css('background-size',x+'px '+y+'px');
	}

    }

    //Icon used to represent a file
    export class TFileIcon extends TIcon{
	
	constructor(parent: any){

	    super(parent);
	    this.getHolder().addClass(FileClass);
	}
    }	
}
