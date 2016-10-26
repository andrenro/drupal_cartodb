$(document).ready(function(){


	ApiManager = (function(){
		var instance;



		getData = function(url,callback){

			$.ajax({
				url:url,
				context: document.getElementsByClassName('premium-only')[0]

			}).done(callback);
		}
		
		//Used first time ApiManager.getInstance() is called
		function create(){
			var obj = new Object();
			obj.getData = getData;
			return obj;
		}

		//Ensures only one global instance
		return {
			getInstance : function(){
				if(!instance){
					instance = create();
				}
				return instance;
			}
		}

	})();


}); 