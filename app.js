	(function(){
		"use strict";
		
		
		var Moosipurk = function(){
			
			//Singleton pattern (4 rida)
			if(Moosipurk.instance){
				return Moosipurk.instance;
			}
			Moosipurk.instance = this; // this viitab 
			
			
			console.log('moosipurgi sees');
		};
		
		
		window.onload = function(){
			var app = new Moosipurk();
		};
		
	})();