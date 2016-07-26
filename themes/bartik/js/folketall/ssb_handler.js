$(document).ready(function() {
	//Links to CDN-stored json-data
	var datasets = {
		"folketall_kvartal": "https://cdn.rawgit.com/andrenro/project_source_files/ssb_api/folketall/kvartalstall.json",
		"framskrevet_folketall_2026": "https://cdn.rawgit.com/andrenro/project_source_files/ssb_api/folketall/framskrevet_2026.json",
		"folketall_aarlig_alder": 'http://data.ssb.no/api/v0/dataset/1080.json?lang=no'
	};
	//Gront hefte: https://www.regjeringen.no/no/tema/kommuner-og-regioner/kommuneokonomi/gront-hefte/id547024/

	var dataset = JSONstat(datasets["folketall_kvartal"]).Dataset(0);
	var kommuner = dataset.Dimension("Region").Category();
	var koder = dataset.Dimension("Region");
	formValue = "";




	//Return quasi-random array index, rounded to whole integer
	getRandomArbitrary = function(min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	}

	//Helper function
	//Takes input from web form, returns the index if a match is found
	searchIndex = function(query) {
			if (dataset) {
				for (var l = 0; l < kommuner.length; l++) {
					if (kommuner[l].label.toLowerCase() === query.toLowerCase()) {
						let index = kommuner[l].index;
						return {
							"title": kommuner[l].label,
							"index": index
						};
					}
				}

				alert(query+" ga ingen resultater!");

			} else {
				console.error("Dataset not present");
				return -1;
			}
		}
		//Helper function
		//Returns the dataset-index of a random 'kommune' to show in the article
	randomIndex = function(randInt) {
		if (dataset) {
			return {
				"title": kommuner[randInt].label,
				"index": randInt
			};
		}
	}

	//Search array for municipality
	findMunicipality = function(array, input) {
		for (let x = 0; x < array.length; x++) {
			if (array[x]["kommune"].toLowerCase() === input.toLowerCase()) {
				return array[x];
			}
		}
	}

	//Get raw json-stat values, based on municipality name -> code
	getValues = function(input) {
		if (dataset) {
			let objects = [];
			let code = dataset.Dimension('Region').id[input["index"]];
			let values = dataset.Data({
				"Region": code
			});
			let categories = dataset.Dimension('ContentsCode').Category();
			let total = 0;
			if (values.length === categories.length) {
				for (let x = 0; x < values.length; x++) {
					objects[x] = {
						"category": categories[x].label,
						"value": values[x].value
					};
				}
			}

			let deltaQuarter = [objects[0].value, objects[objects.length - 1].value];
			PopulationChartHandler.showQuarterlyDelta(deltaQuarter);
			appendToHTML(input["title"], objects, "datalist");
			return values;

		} else {
			console.error("Dataset not present");
		}
	}


	//Creates output showing some key economic stats for a given municipality
	economicStats = function(data) {
		var economicData = {
			"expenditure_needs": parseFloat(data["expenditure_needs"]),
			"expenditure_needs_mean": parseFloat(data["expenditure_needs_mean"]),
			"fundingPerInhabitant": 0.0,
			"totalFunding": 0.0,
			"percentageOfNationalMean": ((parseFloat(data["indexed_value"]) - 1) * 100).toFixed(2)

		};
		document.getElementById("economics-title").innerHTML = "Økonomi i "+data["kommune"];
		economics = document.getElementById("economics");
		var fundingPerInhabitant = 0.0;
		//Yearly regulated values that will be updated every year by SSB
		const offsetPerInhabitant = 22668;
		var thisYearsTotal = parseFloat(data["years"][0]); //Fetch this quarters
		var realExpenditureNeeds = parseFloat(data["expenditure_needs"]);
		var meanExpenditureNeeds = parseFloat(data["expenditure_needs_mean"]);
		var indexedNeed = parseFloat(data["indexed_value"]);

		var difference = (realExpenditureNeeds - meanExpenditureNeeds);
		if (difference < 0) {
			fundingPerInhabitant = parseFloat((offsetPerInhabitant - (Math.abs(difference))).toFixed(2));
		} else {
			fundingPerInhabitant = parseFloat((offsetPerInhabitant + difference).toFixed(2));
		}

		var percentageDiff = MathHandler.indexedToPercentageRemainder(data["indexed_value"]);
		var diff = percentageDiff < 0 ? Math.abs(percentageDiff.toFixed(2)) + "% lavere enn nasjonalt snitt" : Math.abs(percentageDiff.toFixed(2)) + "% høyere enn nasjonalt snitt";


		// var meanDiff = (fundingPerInhabitant - offsetPerInhabitant) < 0 ? ((fundingPerInhabitant - offsetPerInhabitant) * -1)+" kroner under nasjonalt gjennomsnitt" : (fundingPerInhabitant - offsetPerInhabitant)+" kroner over nasjonalt gjennomsnitt";
		// console.log(meanDiff);
		economicData["fundingPerInhabitant"] = fundingPerInhabitant;
		economicData["totalFunding"] = ((fundingPerInhabitant * thisYearsTotal) / 1000000).toFixed(2);
		$("#offsetFunding").html("Fastsatt inntekt per innbygger i 2016: <strong>" + offsetPerInhabitant + "</strong> kr");
		$("#totalFunding").html("Kommunens totalinntekter for 2016: <strong>" + economicData["totalFunding"] + " millioner </strong> kr");
		$("#perInhabitant").html("Behovsjustert inntekt per innbygger: <strong>" + economicData["fundingPerInhabitant"] + "</strong> kr");
		$("#meanExpenditureNeeds").html("Utgiftsbehov per innbygger 2016 (nasjonalt snitt): <strong>" + meanExpenditureNeeds + "</strong> kr");
		$("#realExpenditureNeeds").html("Utgiftsbehov per innbygger for kommunen: <strong>" + realExpenditureNeeds + "</strong> kr (" + diff + ")");

		var chartData = [];
		chartData.push(fundingPerInhabitant);
		chartData.push(offsetPerInhabitant);
		PopulationChartHandler.fundingPerInhabitantChart(chartData);
	}
	//Generate population list and populate the graph, showing an overview for the next 10 years
	populationList = function(htmlID, data) {
		PopulationChartHandler.populationGraph(data["years"]);
	}

	//Creates html output 
	appendToHTML = function(title, data, elemId) {
		document.getElementById(elemId).innerHTML = "";
		document.getElementById("title").innerHTML = "";
		document.getElementById("misc-stats").innerHTML = "Andre kvartalstall knyttet til folkemengde i "+title;
		var element = document.getElementById(elemId);
		var header = document.getElementById("title");
		var headerText = document.createTextNode(title);
		header.appendChild(headerText);


		var div = document.getElementById("summary");
		for (let x = 0; x < data.length; x++) {
			var li = document.createElement('li');
			li.innerHTML = data[x].category + ", antall personer: <strong>" + data[x].value + "</strong>";
			element.appendChild(li);
		}
	}

	//Init the evergreen-article with random municipality
	initRandomStats = function() {
		var index = randomIndex(getRandomArbitrary(0, dataset.Dimension('Region').id.length));
		var municipality = findMunicipality(next_ten_years, index["title"]);

		//Create the output
		populationList("next_ten_years", municipality);
		economicStats(municipality);
		getValues(index);
	}


	//Handle input from web search field
	var searchField = document.getElementById('search');

	searchField.addEventListener('change', function(e) {
		formValue = e.target.value;
		var index = searchIndex(formValue);

		var municipality = findMunicipality(next_ten_years, formValue);
		populationList("next_ten_years", municipality);
		economicStats(municipality);
		var values = getValues(index);
	});

	//INITIALIZE the whole thing
	RankingsHandler.init();
	initRandomStats();

});