$(document).ready(function() {
	var url = 'http://data.ssb.no/api/v0/dataset/1080.json?lang=no';
	var dataset = JSONstat(url).Dataset(0);
	var kommuner = dataset.Dimension("Region").Category();
	var koder = dataset.Dimension("Region");
	formValue = "";

	/**
	 * JSONDataHandler singleton 
	 * @param {string} [queryString] [URL to be called]
	 * @param {function} [callback] [optional callback function]
	 */

	function JSONDataHandler() {
		var instance;
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

	getIndex = function(query) {
		if (dataset) {
			for (var l = 0; l < kommuner.length; l++) {
				if (kommuner[l].label.toLowerCase() === query.toLowerCase()) {
					let index = kommuner[l].index;
					return index;
				}
			}
		} else {
			console.error("Dataset not present");
			return -1;
		}
	}
	//Get raw values, based on municipality name -> code
	getValues = function(index) {
		if (dataset) {
			let objects = [];
			//Specific code for Region
			let code = dataset.Dimension('Region').id[index];
			//Data values for Region with 'code' as identifier
			let values = dataset.Data({"Region":code});

			//Array of values "0 år..n År"
			let ages = dataset.Dimension('Alder').Category();
			let total = 0;	
			if(values.length === ages.length)	{
				for(let x = 0; x < values.length;x++){
					objects[x] = {"age":ages[x].label,"value":values[x].value};
					total += values[x].value;
				}
			}

			appendToHTML(objects,"datalist");
			return values;
				
		} else {
			console.error("Dataset not present");
		}
	}

	generateObjects = function(arrays){
		objects = [];
		return objects;
	}

	appendToHTML = function(data,elemId){
		var element = document.getElementById(elemId);
		var div = document.getElementById("summary");
		var p = document.createElement('p');
		var totalt = 0
		for(let x = 0; x < data.length;x++){
			var li = document.createElement('li');
			li.appendChild(document.createTextNode("Alder: "+data[x].age+" Antall Personer: "+data[x].value+" "));
			element.appendChild(li);
			totalt += data[x].value;

		}
		p.appendChild(document.createTextNode("Totalt: "+totalt));
		div.appendChild(p);

	}

	var searchField = document.getElementById('search');

	searchField.addEventListener('change', function(e) {
		formValue = e.target.value;
		var index = getIndex(formValue);
		var values = getValues(index);
	});
});