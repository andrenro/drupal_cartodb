$(document).ready(function(){


	ApiManager = (function(){
		var instance;

		//Used first time ApiManager.getInstance() is called
		function create(){
			var obj = new Object();
			return obj;
		}


		getData = function(url,options,callback){

			






			if(callback){
				return callback();
			}


		}

		//Ensures only one global instance
		return {
			getData: getData,
			getInstance : function(){
				if(!instance){
					instance = create();
				}
				return instance;
			}
		}

	})();


}); 