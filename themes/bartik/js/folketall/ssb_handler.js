$(document).ready(function() {
	var datasets = {
	"folketall_kvartal": "https://cdn.rawgit.com/andrenro/project_source_files/ssb_api/folketall/kvartalstall.json",
	"framskrevet_folketall_2026": "https://cdn.rawgit.com/andrenro/project_source_files/ssb_api/folketall/framskrevet_2026.json",
	"folketall_aarlig_alder":'http://data.ssb.no/api/v0/dataset/1080.json?lang=no'
};
//Gront hefte: https://www.regjeringen.no/no/tema/kommuner-og-regioner/kommuneokonomi/gront-hefte/id547024/

	var dataset = JSONstat(datasets["folketall_kvartal"]).Dataset(0);
	var kommuner = dataset.Dimension("Region").Category();
	var koder = dataset.Dimension("Region");
	formValue = "";

 getTopList = function(){
	 //TODO: implement
 }

 getBottomList = function(){
	 //TODO: implement
 }

  //Return quasi-random array index, rounded to whole integer
	getRandomArbitrary = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
	}

	searchIndex = function(query) {
		if (dataset) {
			for (var l = 0; l < kommuner.length; l++) {
				console.log(kommuner[l].label);
				if (kommuner[l].label.toLowerCase() === query.toLowerCase()) {
					let index = kommuner[l].index;
					console.log(index);
					return {"title":kommuner[l].label,"index":index};
				}
			}
		} else {
			console.error("Dataset not present");
			return -1;
		}
	}

	randomIndex = function(randInt){
		if(dataset){
			return {"title":kommuner[randInt].label,"index":randInt};
		}
	}

	//Search array for municipality
	findMunicipality = function(array,input){
		for(let x = 0; x < array.length; x++){
			if(array[x]["kommune"].toLowerCase() === input.toLowerCase()){
				return array[x];
			}
		}
	}

	//Get raw values, based on municipality name -> code
	getValues = function(input) {
		if (dataset) {
			let objects = [];
			let code = dataset.Dimension('Region').id[input["index"]];
			let values = dataset.Data({"Region":code});
			let categories = dataset.Dimension('ContentsCode').Category();
			let total = 0;
			if(values.length === categories.length)	{
				for(let x = 0; x < values.length;x++){
					objects[x] = {"category":categories[x].label,"value":values[x].value};
				}
			}

			let deltaQuarter = [objects[0].value, objects[objects.length -1].value];
			PopulationChartHandler.showQuarterlyDelta(deltaQuarter);
			appendToHTML(input["title"],objects,"datalist");
			return values;

		} else {
			console.error("Dataset not present");
		}
	}

	//Fetch data from external source
	getJSONdata = function(url){
		$.getJSON(url, function( data ) {
		 	if(data){
				return data;
			}else{
				return undefined;
			}
		});
	}


	economicStats = function(data){
		document.getElementById("economics").innerHTML ="";
    economics = document.getElementById("economics");
		elem = document.createElement("div");
		//Yearly regulated values that will be updated every year by SSB
		let offsetPerInhabitant = 22668;
	  let thisYearsTotal = parseFloat(data["years"][0]); //Fetch this quarters
		let realExpenditureNeeds = parseFloat(data["expenditure_needs"]);
		let meanExpenditureNeeds = parseFloat(data["expenditure_needs_mean"]);
		let indexedNeed = parseFloat(data["indexed_value"]);

		let difference = ((realExpenditureNeeds + meanExpenditureNeeds) - meanExpenditureNeeds);
		
		let fundingPerInhabitant = offsetPerInhabitant - difference;
		economics.appendChild(document.createTextNode("Tilskudd totalt: "+fundingPerInhabitant * thisYearsTotal));



	}

	populateList = function(htmlID,data){
		document.getElementById(htmlID).innerHTML ="";
		list = document.getElementById(htmlID);
		var offsetYear = 2016;
		for(let x = 0; x < data["years"].length;x++){
			var li = document.createElement('li');
			li.appendChild(document.createTextNode("Antall personer i "+(offsetYear + x)+": " +data["years"][x]));
			list.appendChild(li);
		}
	}

	appendToHTML = function(title,data,elemId){
		document.getElementById(elemId).innerHTML ="";
		document.getElementById("title").innerHTML = "";
		var element = document.getElementById(elemId);
		var header  = document.getElementById("title");
		var headerText = document.createTextNode(title);
		header.appendChild(headerText);

		var div = document.getElementById("summary");
		for(let x = 0; x < data.length;x++){
			var li = document.createElement('li');
			li.appendChild(document.createTextNode(data[x].category+", antall personer: "+data[x].value+" "));
			element.appendChild(li);
		}
	}

	//Init with random municipality


	initRandomStats = function(){
		let index = randomIndex(getRandomArbitrary(0,dataset.Dimension('Region').id.length));
		let municipality = findMunicipality(next_ten_years,index["title"]);
		populateList("next_ten_years",municipality);
		economicStats(municipality);
		getValues(index);
	}

  initRandomStats();

	//Handle search field
	var searchField = document.getElementById('search');
	searchField.addEventListener('change', function(e) {
		formValue = e.target.value;
		var index = searchIndex(formValue);

		let municipality = findMunicipality(next_ten_years,formValue);
		populateList("next_ten_years",municipality);

		var values = getValues(index);
	});
});
