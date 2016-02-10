	(function(){
		"use strict";


		var Moosipurk = function(){

			//Singleton pattern (4 rida)
			if(Moosipurk.instance){
				return Moosipurk.instance;
			}
			Moosipurk.instance = this; // this viitab

			console.log(this);
			//console.log('moosipurgi sees');

			//panen rakenduse tööle
			this.init();
		};
			//kõik moosipurgi funktsioonid tulevad siia sisse
			Moosipurk.prototype = {
				init: function(){
					console.log('rakendus käivitus');
					//siia tuleb esialgne loogika
					// hakka kuulama hiireklõpse
					this.bindMouseEvents();
				},
				bindMouseEvents: function(){
					document.querySelector('.add-new-jar').addEventListener('click', this.addNewClick.bind(this));
				},
				addNewClick: function(event){
					console.log(event);

				}

			};


		window.onload = function(){
			var app = new Moosipurk();
		};

	})();
