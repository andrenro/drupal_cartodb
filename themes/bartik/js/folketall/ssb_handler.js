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



	economicStats = function(data){
		console.log(data);
		var economicData = {
			"expenditure_needs" : parseFloat(data["expenditure_needs"]),
			"expenditure_needs_mean" : parseFloat(data["expenditure_needs_mean"]),
			"fundingPerInhabitant": 0.0,
			"totalFunding":0.0,
			"percentageOfNationalMean": ((parseFloat(data["indexed_value"]) -1 ) * 100).toFixed(2)

		};
    economics = document.getElementById("economics");
		var fundingPerInhabitant = 0.0;
		//Yearly regulated values that will be updated every year by SSB
		let offsetPerInhabitant = 22668;
	  let thisYearsTotal = parseFloat(data["years"][0]); //Fetch this quarters
		let realExpenditureNeeds = parseFloat(data["expenditure_needs"]);
		let meanExpenditureNeeds = parseFloat(data["expenditure_needs_mean"]);
		let indexedNeed = parseFloat(data["indexed_value"]);

		let difference = (realExpenditureNeeds - meanExpenditureNeeds);
		console.log(difference);
		if(difference < 0){
			fundingPerInhabitant = parseFloat((offsetPerInhabitant - (Math.abs(difference))).toFixed(2));
		}else{
			fundingPerInhabitant = parseFloat((offsetPerInhabitant + difference).toFixed(2));
		}

		var percentageDiff = MathHandler.indexedToPercentageRemainder(data["indexed_value"]);
		var diff = percentageDiff < 0 ? Math.abs(percentageDiff.toFixed(2)) + "% lavere enn nasjonalt snitt" : Math.abs(percentageDiff.toFixed(2))+"% høyere enn nasjonalt snitt";


		// let meanDiff = (fundingPerInhabitant - offsetPerInhabitant) < 0 ? ((fundingPerInhabitant - offsetPerInhabitant) * -1)+" kroner under nasjonalt gjennomsnitt" : (fundingPerInhabitant - offsetPerInhabitant)+" kroner over nasjonalt gjennomsnitt";
		// console.log(meanDiff);
		economicData["fundingPerInhabitant"] = fundingPerInhabitant;
		economicData["totalFunding"] = ((fundingPerInhabitant * thisYearsTotal) / 1000000).toFixed(2);
		$("#offsetFunding").html("Fastsatt inntekt per innbygger i 2016: <strong>"+offsetPerInhabitant+"</strong> kr");
		$("#totalFunding").html("Kommunens totalinntekter for 2016: <strong>"+economicData["totalFunding"]+" millioner </strong> kr");
		$("#perInhabitant").html("Behovsjustert inntekt per innbygger: <strong>"+economicData["fundingPerInhabitant"]+"</strong> kr");
		$("#meanExpenditureNeeds").html("Utgiftsbehov per innbygger 2016 (nasjonalt snitt): <strong>"+meanExpenditureNeeds+"</strong> kr");
		$("#realExpenditureNeeds").html("Utgiftsbehov per innbygger for kommunen: <strong>"+realExpenditureNeeds+"</strong> kr ("+diff+")");

		let chartData = [];
		chartData.push(fundingPerInhabitant);
		chartData.push(offsetPerInhabitant);
		PopulationChartHandler.fundingPerInhabitantChart(chartData);
	}

	populationList = function(htmlID,data){

		PopulationChartHandler.populationGraph(data["years"]);
		// document.getElementById(htmlID).innerHTML = "";
		// list = document.getElementById(htmlID);
		// var offsetYear = 2016;
		// for(let x = 0; x < data["years"].length;x++){
		// 	var li = document.createElement('li');
		// 	li.innerHTML = "Antall personer i "+(offsetYear + x)+": <strong>" +data["years"][x]+"</strong>";
		// 	list.appendChild(li);
		// }
		// var start = data["years"][0];
		// var end = data["years"][data["years"].length -1];
		// var growth = MathHandler.percentageOf(start,end);
		// var li = document.createElement('li');
		// var growthStr =  (end - start) < 0 ? (end - start) : "+" + (end - start);
		// li.innerHTML = "<strong>Estimert vekst i løpet av de neste 10 årene: "+ growthStr +" personer ("+ (100 - growth).toFixed(2)+ "%)</strong>";
		// list.appendChild(li);
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
			li.innerHTML = data[x].category+", antall personer: <strong>"+data[x].value+"</strong>";
			element.appendChild(li);
		}
	}

	//Init with random municipality
	initRandomStats = function(){
		var index = randomIndex(getRandomArbitrary(0,dataset.Dimension('Region').id.length));
		var municipality = findMunicipality(next_ten_years,index["title"]);
		populationList("next_ten_years",municipality);
		economicStats(municipality);
		getValues(index);
	}

  initRandomStats();

	//Handle search field
	var searchField = document.getElementById('search');
	searchField.addEventListener('change', function(e) {
		formValue = e.target.value;
		var index = searchIndex(formValue);

		var municipality = findMunicipality(next_ten_years,formValue);
		populationList("next_ten_years",municipality);
		economicStats(municipality);
		var values = getValues(index);
	});
});
