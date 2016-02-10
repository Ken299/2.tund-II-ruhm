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

			// KÕIK MUUTUJAD, mis on üldised ja muudetavad
			this.click_count = 0;


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
					//console.log(event);
					this.click_count++;
					console.log(this.click_count);

				}

			};


		window.onload = function(){
			var app = new Moosipurk();
		};

	})();
