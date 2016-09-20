$(document).ready(function() {

	initUI();

	var searchField = document.getElementById('search');
	var searchButton = document.getElementById('search-button');

	const lawLetters = {
		"d": "kommunestyret eller fylkestinget har vedtatt å fastsette et årsbudsjett uten at alle utgifter er dekket inn på budsjettet",
		"b": "kommunestyret eller fylkestinget har vedtatt å fastsette en økonomiplan uten at alle utgifter er dekket inn på økonomiplanen",
		"c": "kommunestyret eller fylkestinget etter § 48 nr. 4 annet punktum har vedtatt at et regnskapsmessig underskudd skal fordeles ut over det påfølgende budsjettår etter at regnskapet er framlagt",
		"d": "at kommunen eller fylkeskommunen ikke følger vedtatt plan for dekning av underskudd"
	}



	//The arrays must be sorted.. 
	function getTotalNumberOfMilliseconds(inArr, outArr, inRegNow) {
		var today = new Date();
		if (inArr) {
			var millis = 0;
			for (var x = 0; x < inArr.length; x++) {
				//If the muni is out of the ROBEK, this will be the case for all values of x
				if (inArr[x] && outArr[x]) {
					millis += (new Date(outArr[x]) - new Date(inArr[x]));

				}
			}

			//The muni is still in ROBEK, so outArr.length < inArr.length -> So we add todays date with the latest date in inArr to get the number of days  the Muni has been in ROBEK since it was registered.
			if (inRegNow) {
				var lastIn = new Date(inArr[inArr.length - 1]);
				//Add days from today to last time the municipality was added to the register.
				millis += (today - lastIn);
				return millis;
			}
		}
		return millis;
	}

	function getYears(millis) {
		return millis / (1000 * 60 * 60 * 24) / 365;
	}

	function getDays(millis) {
		return millis / (1000 * 60 * 60 * 24);
	}

	function getYearsAndDays(millis) {
		var years = getYears(millis);

		var obj = {
			"inputMillis": millis,
			"years": Math.floor(years),
			"days": Math.floor((years % 1) * 365)
		}
		return obj;
	}

	function getNationalAverageMillis(data) {
		var sum = 0;
		var counter = 0;
		for (var x = 0; x < data.length; x++) {
			sum += getTotalNumberOfMilliseconds(data[x]["inn"], data[x]["ut"], data[x]["inne_naa"]);
			counter++;
		}
		//Skip decimals
		return Math.floor(sum / counter);
	}


	var nationalMeanYearsAndDays = getYearsAndDays(getNationalAverageMillis(fetchData()));


	function latestChanges() {
		var data = DataManager.getData();

		//Yields 01/01/1970 which is smaller than all relevant ROBEK dates.
		var latestInDate = new Date("01/01/1971");
		var latestOutDate = new Date("01/01/1971");


		var totalInRegister = 0;

		var latestMunicipalityIn = {};
		var latestMunicipalityOut = {};

			if (data) {

				for (var x = 0; x < data.length; x++) {
					if (data[x]["inne_naa"]) {
						totalInRegister++;
					}


					if (data[x]["antall_aar"] > 0) {
						
						//Firefox creates dates as 01/01/1913 while chrome creates 01/01/2013 per default
						var lastOut = new Date(data[x]["sist_ut"]);
						var lastIn = new Date(data[x]["sist_inn"]);

						if (lastOut > latestOutDate) {
							latestOutDate = lastOut;
							latestMunicipalityOut = data[x];
						}
						if (lastIn > latestInDate) {
							latestInDate = lastIn;
							latestMunicipalityIn = data[x];
						}
					}
				}
				var millisOut = getTotalNumberOfMilliseconds(latestMunicipalityOut["inn"], latestMunicipalityOut["ut"], latestMunicipalityOut["inne_naa"]);
				var millisIn = getTotalNumberOfMilliseconds(latestMunicipalityIn["inn"], latestMunicipalityIn["ut"], latestMunicipalityIn["inne_naa"]);
				var yearsAndDaysOut = getYearsAndDays(millisOut);
				var yearsAndDaysIn = getYearsAndDays(millisIn);


				var inHTML = document.getElementById("latest-in");
				var outHTML = document.getElementById("latest-out");
				var numberInROBEK = document.getElementById("total-in-register");

				numberInROBEK.innerHTML = "Antall kommuner i registeret nå: <strong>" + totalInRegister + "</strong>";

			}



			if (latestMunicipalityIn && latestMunicipalityOut) {
				//TODO: more info?
				inHTML.innerHTML = "<strong>" + latestMunicipalityIn["kommune"] + "</strong> er den kommunen som nyligst gikk inn i ROBEK. Kommunen ble oppført den <strong>" + latestMunicipalityIn["sist_inn"] + "</strong>. <strong>" + latestMunicipalityIn["kommune"] + "</strong> har vært i registeret <strong>" + yearsAndDaysIn["years"] + " år</strong> og <strong>" + yearsAndDaysIn["days"] + " dager</strong> totalt, fordelt på <strong>" + latestMunicipalityIn["antall_ganger"] + "</strong> periode(r). <p>Perioder kommunen har vært i ROBEK: </p><ul id='latest-in-periods'></ul>";
				outHTML.innerHTML = "<strong>" + latestMunicipalityOut["kommune"] + "</strong> er den kommunen som sist gikk ut av ROBEK. Kommunen ble fjernet fra listen den <strong>" + latestMunicipalityOut["sist_ut"] + "</strong> etter å ha vært inne siden <strong>" + latestMunicipalityOut["sist_inn"] + "</strong>. Kommunen har vært i registeret i <strong>" + yearsAndDaysOut["years"] + " år</strong>  og <strong>" + yearsAndDaysIn["days"] + " dager</strong>  totalt, fordelt på <strong>" + latestMunicipalityOut["antall_ganger"] + "</strong> periode(r). <p>Perioder kommunen har vært i ROBEK: </p><ul id='latest-out-periods'></ul>";
				createListFromArrays(latestMunicipalityIn["inn"], latestMunicipalityIn["ut"], "dates-li", "latest-in-periods");
				createListFromArrays(latestMunicipalityOut["inn"], latestMunicipalityOut["ut"], "dates-li", "latest-out-periods");
			}
	}

	function percentageChange(offset, end) {
		var diff = (end - offset);
		return (diff / offset) * 100;
	}

	function fetchData() {
		var reduced = [];
		//Fetches the big json-datafile
		var robek_data = DataManager.getData();

		for (var x = 0; x < robek_data.length; x++) {
			//Top list would not be populated ..
			if (robek_data[x]["antall_aar"] > 0) {
				reduced.push(robek_data[x]);
			}
		}

		return reduced;
	};

	//Manual text-search in array, due to weird weighting of some words in lunr.js
	function basicSearch(array, key, searchValue) {
		for (var x = 0; x < array.length; x++) {
			if (array[x][key].toLowerCase() === searchValue.toLowerCase()) {
				//Populate with single municipality

				return singleMunicipality(array[x]);
			}
		}
		return null;
	}

	//Matches indices to kommuner-array.
	function setupLunrSearch(input) {
		var index = lunr(function() {
			this.ref("id");
			this.field("kommune");
			this.field("fylke");
			this.field("kommunenr");
		});

		if (index) {
			for (var x = 0; x < input.length; x++) {

				var temp = {
					"id": x,
					"kommune": input[x]["kommune"],
					"fylke": input[x]["fylke"],
					"kommunenr": input[x]["kommunenr"]
				}
				index.add(temp);
			}
		}
		return index;
	};


	//Hides the containers which shows the lists of top/bottom municipalities
	function hideLists() {
		$("#canvas-container-bottom").css("display", "none");
		$("#canvas-container-top").css("display", "none");
	}

	function showLists() {
		$("#canvas-container-bottom").css("display", "inline");
		$("#canvas-container-top").css("display", "inline");
		$("#showTopLists").css("visibility", "hidden");
	}

	function initUI() {
		$("#createTopLists").css("visibility", "hidden");
		$("#showTopLists").css("visibility", "hidden");
		$("#no-results").css("visibility", "hidden");
	}
	//Sort array, provide the key for which the array should be sorted by
	function getSortedList(input, key) {
		var temp = input.sort(function(a, b) {
			if (a[key] > b[key]) {
				return 1;
			}
			if (a[key] < b[key]) {
				return -1;
			}
			return 0;
		});
		return temp;
	}

	//Kommuner that has been in ROBEK the longest period of time
	function bottomListChart(input) {
		//Takes id 'canvas' from html
		var barChart = prepareCanvas("#canvas-container-bottom", "bottom-canvas");

		var dataObj = {
			// labels: [input[0]["kommune"], input[1]["kommune"], input[2]["kommune"], input[3]["kommune"], input[4]["kommune"], input[5]["kommune"], input[6]["kommune"], input[7]["kommune"], input[8]["kommune"], input[9]["kommune"]],
			labels: [input[0]["kommune"], input[1]["kommune"], input[2]["kommune"], input[3]["kommune"], input[4]["kommune"], input[5]["kommune"], input[6]["kommune"], input[7]["kommune"]],
			datasets: [{
				label: "Antall år på ROBEK-listen",
				backgroundColor: "rgba(148,14,25,0.8)",
				// data: [input[0]["antall_aar"], input[1]["antall_aar"], input[2]["antall_aar"], input[3]["antall_aar"], input[4]["antall_aar"], input[5]["antall_aar"], input[6]["antall_aar"], input[7]["antall_aar"], input[8]["antall_aar"], input[9]["antall_aar"]]
				data: [input[0]["antall_aar"], input[1]["antall_aar"], input[2]["antall_aar"], input[3]["antall_aar"], input[4]["antall_aar"], input[5]["antall_aar"], input[6]["antall_aar"], input[7]["antall_aar"]]
			}]
		};

		var robekChart = new Chart(barChart, {
			type: "horizontalBar",
			data: dataObj,
			options: {
				scales: {
					xAxes: [{
						ticks: {
							max: 20,
							min: 0,
							stepSize: 1
						}
					}]
				}
			}
		});
	}
	//Kommuner that has been in ROBEK the longest period of time
	function topListChart(input) {
		//Takes id 'canvas' from html
		var barChart = prepareCanvas("#canvas-container-top", "top-canvas");

		var dataObj = {
			// labels: [input[0]["kommune"], input[1]["kommune"], input[2]["kommune"], input[3]["kommune"], input[4]["kommune"], input[5]["kommune"], input[6]["kommune"], input[7]["kommune"], input[8]["kommune"], input[9]["kommune"]],
			labels: [input[0]["kommune"], input[1]["kommune"], input[2]["kommune"], input[3]["kommune"], input[4]["kommune"], input[5]["kommune"], input[6]["kommune"], input[7]["kommune"]],
			datasets: [{
				label: "Antall år på ROBEK-listen",
				backgroundColor: "rgba(0,55,98,0.8)",
				// data: [input[0]["antall_aar"], input[1]["antall_aar"], input[2]["antall_aar"], input[3]["antall_aar"], input[4]["antall_aar"], input[5]["antall_aar"], input[6]["antall_aar"], input[7]["antall_aar"], input[8]["antall_aar"], input[9]["antall_aar"]]
				data: [input[0]["antall_aar"], input[1]["antall_aar"], input[2]["antall_aar"], input[3]["antall_aar"], input[4]["antall_aar"], input[5]["antall_aar"], input[6]["antall_aar"], input[7]["antall_aar"]]
			}]
		};

		var robekChart = new Chart(barChart, {
			type: "horizontalBar",
			data: dataObj,
			options: {
				scales: {
					xAxes: [{
						ticks: {
							max: 2,
							min: 0,
							stepSize: .2
						}
					}]
				}
			}
		});
	}

	function nationalMean(data, key) {
		var meanYears = 0.0;
		var count = 0;
		for (var x = 0; x < data.length; x++) {
			if (data[x][key] > 0) {
				count++;
				meanYears += data[x][key];
			}
		}
		return meanYears / count;
	};

	//Kommuner that has been in ROBEK the longest period of time
	function singleMunicipality(input) {

		if (nationalMeanYearsAndDays) {
			var nMean = nationalMeanYearsAndDays;
		}

		var letters = "";
		var explanation = "";
		if (input["antall_aar"] === 0) {
			$("#no-results").html(input["kommune"] + " har til nå aldri vært oppført i ROBEK.");
			$("#no-results").css("visibility", "visible");
			setTimeout(function() {
				$("#no-results").css("visibility", "hidden");
				return undefined;
			}, 2000);
			return;
		} else {
			$("#createTopLists").css("visibility", "visible");
			$("#showTopLists").css("visibility", "visible");

			var milliSecondsTotal = getTotalNumberOfMilliseconds(input["inn"], input["ut"], input["inne_naa"]);
			var yearsAndDays = getYearsAndDays(milliSecondsTotal);

			hideLists();

			var barChart = prepareCanvas("#single-canvas-container", "single-canvas");

			var dataObj = {
				labels: ["Antall år " + input["kommune"] + " har vært inne på ROBEK", "Nasjonalt Gjennomsnitt"],
				datasets: [{
					label: "Oversikt for " + input["kommune"],
					backgroundColor: "rgba(148,14,25,0.8)",
					data: [input["antall_aar"], nationalMean]
				}]
			};

			var robekChart = new Chart(barChart, {
				type: "horizontalBar",
				data: dataObj,
				options: {
					scales: {
						xAxes: [{
							ticks: {
								min: 0,
								stepSize: 0.5
							}
						}],
						yAxes: [{
							ticks: {
								min: 0,
								stepSize: 0.5
							}
						}]
					}
				}
			});



			var in_or_out = input["inne_naa"] ? "registrert i ROBEK. Kommunen ble sist oppført den <strong>" + input["sist_inn"] + "</strong>." : "ikke registrert i ROBEK. Kommunen gikk sist ut av ROBEK den <strong>" + input["sist_ut"] + "</strong>.";

			//Comments?
			if (input["bokstaver"] !== "") {
				letters = input["bokstaver"].split("-");

				if (letters.length > 1) {
					explanation = "<strong>" + input["kommune"] + "</strong> er oppført i ROBEK med hjemmel i kommunelovens §60, bokstav: <strong>" + letters[0] + ".</strong> " + lawLetters[letters[0]] + " og <strong>" + letters[1] + ".</strong> " + lawLetters[letters[1]] + " .";
				} else {
					explanation = "<strong>" + input["kommune"] + "</strong> er oppført i ROBEK med hjemmel i kommunelovens §60, bokstav: <strong>" + letters[0] + ".</strong> " + lawLetters[letters[0]] + ".";
				}
			}


			var url = "http://test.kr24.no/api/1.0/nav/" + input["kommunenr"] + "/8";


			$.ajax({
				url: url,
				dataType: "json",
				success: function(data) {

					//Clear up the containers before repopulation.
					cleanBarometer();

					$("#barometer-data").html("<h4>Relevante nøkkeltall fra Kommunebarometeret</h4>");
					var netCost = document.createElement("li");
					var debt = document.createElement("li");
					var dispFund = document.createElement("li");

					netCost.innerHTML = "<strong>" + data[0]["title"] + " - " + data[0]["subtitle"] + "</strong> (" + data[0]["specification"] + "): <strong>" + data[0]["value"] + "%</strong> <p>Rangering: <strong>#" + data[0]["rank"] + "/428</strong></p><p>Endring i prosentpoeng siden forrige år: <strong>" + data[0]["delta"] + "%</strong></p>";
					debt.innerHTML = "<strong>" + data[3]["title"] + " - " + data[3]["subtitle"] + "</strong> (" + data[3]["specification"] + "): <strong>" + data[3]["value"] + " </strong>% <p>Rangering: <strong>#" + data[3]["rank"] + "/428</strong></p><p>Endring i prosentpoeng siden forrige år: <strong>" + data[3]["delta"] + "%</strong></p><p></p>";
					dispFund.innerHTML = "<strong>" + data[4]["title"] + " - " + data[4]["subtitle"] + "</strong> (" + data[4]["specification"] + "): <strong>" + data[4]["value"] + " </strong>% <p>Rangering: <strong>#" + data[4]["rank"] + "/428</strong></p><p>Endring i prosentpoeng siden forrige år: <strong>" + data[4]["delta"] + "%</strong></p><p></p>";

					var list = document.getElementById("barometer-data-list");
					list.appendChild(netCost);
					list.appendChild(debt);
					list.appendChild(dispFund);
				}
			});



			var percentageDiff = percentageChange(nMean["inputMillis"], milliSecondsTotal);
			var diffHTML = percentageDiff > 0 ? "<strong>" + Math.abs(percentageDiff.toFixed(1)) + "%</strong> lengre" : "<strong>" + Math.abs(percentageDiff.toFixed(1)) + "%</strong> kortere";



			$("#robek-comments").html("<br><strong>" + input["kommune"] + "</strong> er for øyeblikket " + in_or_out + " <strong>" + input["kommune"] + "</strong> har totalt ligget <strong>" + yearsAndDays["years"] + " år</strong> og <strong>" + yearsAndDays["days"] + " dager</strong> på ROBEK. Dette er " + diffHTML + " enn det nasjonale snittet på <strong>" + nMean["years"] + " år</strong> og <strong>" + nMean["days"] + " dager</strong>. <p>Perioder kommunen har vært i ROBEK: </p> <ul id='date-ul'></ul><p>" + explanation + "</p>");

			createListFromArrays(input["inn"], input["ut"], "dates-li", "date-ul");



			$("#robek-comments").css("display", "block");

		}
	}

	//Removes bar charts for single municipalities, and the relevant comments attached to it.
	function removeSingleMunicipality() {
		$("#single-canvas").remove();
		$("#robek-comments").css("display", "none");
		cleanBarometer();
	}

	function cleanBarometer() {
		$("#barometer-data-list").html("");
		$("#barometer-data").html("");

	}


	function createListFromArrays(array1, array2, liClass, ulId) {

		var ul = document.getElementById(ulId);
		if (array1 && array2)
			for (var x = 0; x < array1.length; x++) {
				var li = document.createElement("li");
				li.setAttribute("class", liClass);
				if (array1[x] && array2[x]) {
					li.appendChild(document.createTextNode("Inn: " + array1[x] + " - Ut: " + array2[x]));
				} else {
					li.appendChild(document.createTextNode("Inn: " + array1[x] + " - Fortsatt i registeret."));
				}
				ul.appendChild(li);
			}
	}

	function getBottomList(input) {
		var bottom = input.slice(-10);
		return bottom;
	}

	function getTopList(input) {
		return input.slice(0, 8);
	}

	function prepareCanvas(container, id) {
		$("#" + id).remove();
		$(container).append("<canvas id='" + id + "'></canvas>");

		var chart = document.getElementById(id).getContext("2d");
		return chart;
	}

	function clearSearch(fieldID) {

		if (document.getElementById(fieldID).innerHTML != "") {
			document.getElementById(fieldID).innerHTML = "";
		}
	}

	// var globalData = fetchData();
	var globalData = DataManager.getData();
	var nationalMean = nationalMean(globalData, "antall_aar");

	var indexedSearch = setupLunrSearch(globalData);

	searchButton.addEventListener('click', function(e) {

		clearSearch("lunr-index");
		var formValue = searchField.value;

		if (formValue !== "") {

			var indices = indexedSearch.search(formValue);
			if (indices.length == 1) {

				var obj = {
					"kommunenr": globalData[indices[0].ref]["kommunenr"],
					"kommune": globalData[indices[0].ref]["kommune"],
					"antall_aar": globalData[indices[0].ref]["antall_aar"],
					"bokstaver": globalData[indices[0].ref]["bokstaver"],
					"inne_naa": globalData[indices[0].ref]["inne_naa"],
					"sist_inn": globalData[indices[0].ref]["sist_inn"],
					"sist_ut": globalData[indices[0].ref]["sist_ut"],
					"inn": globalData[indices[0].ref]["inn"],
					"ut": globalData[indices[0].ref]["ut"]
				};

				singleMunicipality(obj);
			} else if (indices.length == 0) {
				$("#no-results").html("Ooops! Søket ga ingen treff, eller så kommunen aldri vært oppført i ROBEK.");
				$("#no-results").css("visibility", "visible");
				setTimeout(function() {
					$("#no-results").css("visibility", "hidden");
					return undefined;
				}, 2000);
			} else if (indices.length > 1) {
				populateResultSuggestions(indices.slice(1, 5), "kommune", "lunr-index", "lunr-list");
			}
		}
	});

	//Sets onclicks to 'selector' HTML elements
	function handleResultClicks(selector) {
		$(selector).on("click", function(e) {
			e.preventDefault();
			// e.preventDefault();
			var value = $(this).text();
			if (value) {
				return basicSearch(globalData, "kommune", value);
			}
		});
	}

	//Generic method for populating a list
	function populateResultSuggestions(input, key, container, htmlID, callback) {
		//Populate list of "valid" search words
		document.getElementById(container).innerHTML = "Fant flere treff på søket,vennligst prøv et av disse søkeordene: <ul class='lunr-ul' id='" + htmlID + "'></ul>";
		var liClass = "lunr-element";
		for (var x = 0; x < input.length; x++) {
			var node = document.createElement("li");
			node.setAttribute("class", liClass);
			var textnode = document.createTextNode(globalData[input[x].ref][key]);
			node.appendChild(textnode);
			document.getElementById(htmlID).appendChild(node);
		}
		handleResultClicks("." + liClass);
	};

	function createRegionList() {
		var regions = DataManager.getRegionList();

		var ul = document.getElementById("region-list");

		for (var x = 0; x < 5; x++) {
			var li = document.createElement("li");
			li.setAttribute("class", "li-elem");
			if (regions[x]) {
				li.appendChild(document.createTextNode(regions[x]["fylke"] + ": " + regions[x]["antall_inne"]));
			}
			ul.appendChild(li);
		}
	}

	function createBottomList() {
		var sort = fetchData();
		var sortedBottom = getBottomList(getSortedList(sort, "antall_aar"));
		bottomListChart(sortedBottom.reverse());
	};

	function createTopList() {
		var sort = fetchData();
		var sortedBottom = getTopList(getSortedList(sort, "antall_aar"));
		topListChart(sortedBottom);
	};

	function createTimeSeries(data, container, canvas, title) {

		var chart = prepareCanvas(container, canvas);
		var keys = Object.keys(data);
		var values = [];
		for (var x = 0; x < keys.length; x++) {
			values.push(data[keys[x]]);
		}
		var dataObj = {
			labels: Object.keys(data),
			datasets: [{
				label: title + " " + keys[0] + " til " + keys[keys.length - 1],
				backgroundColor: "rgba(148,14,25,0.3)",
				data: values
			}]
		};

		var robekChart = new Chart(chart, {
			type: "line",
			data: dataObj,

			options: {
				scales: {
					yAxes: [{
						ticks: {
							min: 0,
							stepSize: 10
						}
					}]
				}
			}
		});
	}

	latestChanges();
	//INIT Carto MAP
	var url = "https://andreasroeed.carto.com/viz/abbb8a44-6464-11e6-a199-0e233c30368f/embed_map";
	var mapFrame = document.getElementById("carto");
	document.getElementById("carto").src = url;

	//INIT

	//Looks better.. Refactor
	mapFrame.addEventListener("load", function() {

		createRegionList();
		createBottomList();
		createTopList();
		showLists();
		window.setTimeout(createTimeSeries(DataManager.inRobek(), "#in-history-canvas-container", "in-history-canvas", "Årlig antall kommuner inn i ROBEK fra"), 1000);
		window.setTimeout(createTimeSeries(DataManager.outRobek(), "#out-history-canvas-container", "out-history-canvas", "Årlig antall kommuner ut av ROBEK fra"), 1000);
		window.setTimeout(createTimeSeries(DataManager.totalInRobek(), "#total-history-canvas-container", "total-history-canvas", "Antall kommuner i ROBEK ved utgangen av året, i perioden"), 2000);

	});

	//When in Single Municipality Mode
	$("#showTopLists").on("click", function() {

		clearSearch("lunr-index");
		searchField.value = "";

		removeSingleMunicipality();

		createBottomList();
		createTopList();
		showLists();

	});

});