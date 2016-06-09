$(document).ready(function() {
	var url = 'http://data.ssb.no/api/v0/dataset/1080.json?lang=no';

	/**
	 * JSONDataHandler singleton 
	 * @param {string} [queryString] [URL to be called]
	 * @param {function} [callback] [optional callback function]
	 */

	function JSONDataHandler() {
		var instance;
		console.log(url);



		JSONDataHandler = function() {
			return instance;
		}

		JSONDataHandler.prototype = this;
		instance = new JSONDataHandler();



		instance.getSpecificData = function(queryObject) {
			//Get data
			return instance;
		}
	}


	handler = new JSONDataHandler();
	var queryObject = {
		"Region":"0101",
		"Alder": 3,
		"Tid": "2016",
		"ContentsCode": "Personer"
	}

	EXAMPLE_URL = 'http://data.ssb.no/api/v0/no/table/03024'
	payload = {"query": [{"code": "VareGrupper2", "selection": {"filter": "item", "values": ["01", "02"] } }, {"code": "ContentsCode", "selection": {"filter": "item", "values": ["Vekt", "Kilopris"] } }, {"code": "Tid", "selection": {"filter": "top", "values": ["53"] } } ], "response": {"format": "json-stat"} }


	$.ajax({
		dataType:"json",
		url: EXAMPLE_URL,
		data: payload,
		success:function(data){
			console.log(data);
		}
	});



	JSONstat(EXAMPLE_URL,payload,function(data) {
		var data = data;

		console.log(data);

	});


});