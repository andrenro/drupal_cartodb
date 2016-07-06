$(document).ready(function() {
	var datasets = {
	"folketall_kvartal": "https://cdn.rawgit.com/andrenro/project_source_files/ssb_api/folketall/kvartalstall.json",
	"folketall_aarlig_alder":'http://data.ssb.no/api/v0/dataset/1080.json?lang=no'
};

	var dataset = JSONstat("https://cdn.rawgit.com/andrenro/project_source_files/ssb_api/folketall/kvartalstall.json").Dataset(0);
  var dd = JSONstat(datasets["folketall_aarlig_alder"]).Dataset(0);

	var kommuner = dataset.Dimension("Region").Category();
	var koder = dataset.Dimension("Region");
	formValue = "";



  //Return quasi-random array index, rounded to whole integer
	getRandomArbitrary = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
	}


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
				console.log(kommuner[l].label);
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
			let categories = dataset.Dimension('ContentsCode').Category();
			let total = 0;
			if(values.length === categories.length)	{
				for(let x = 0; x < values.length;x++){
					objects[x] = {"category":categories[x].label,"value":values[x].value};
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
		for(let x = 0; x < data.length;x++){
			var li = document.createElement('li');
			li.appendChild(document.createTextNode("Nøkkeltall: "+data[x].category+" - Antall Personer: "+data[x].value+" "));
			element.appendChild(li);

		}
	}

  getValues(getRandomArbitrary(0,dataset.Dimension('Region').id.length));
	var searchField = document.getElementById('search');


	searchField.addEventListener('change', function(e) {
		formValue = e.target.value;
		var index = getIndex(formValue);
		var values = getValues(index);
	});
});
