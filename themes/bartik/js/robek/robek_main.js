$(document).ready(function() {

	initUI();

	let searchField = document.getElementById('search');
	let searchButton = document.getElementById('search-button');

	const lawLetters = {
		"d": "kommunestyret eller fylkestinget har vedtatt å fastsette et årsbudsjett uten at alle utgifter er dekket inn på budsjettet",
		"b": "kommunestyret eller fylkestinget har vedtatt å fastsette en økonomiplan uten at alle utgifter er dekket inn på økonomiplanen",
		"c": "kommunestyret eller fylkestinget etter § 48 nr. 4 annet punktum har vedtatt at et regnskapsmessig underskudd skal fordeles ut over det påfølgende budsjettår etter at regnskapet er framlagt",
		"d": "at kommunen eller fylkeskommunen ikke følger vedtatt plan for dekning av underskudd"
	}


	/**
	 * Cleanup functions
	 */
	//Aggregates data on the form "2003-Inn" to an array containing all dates when the muni got registered in ROBEK.
	// function clean() {

	// 	let data = DataManager.getData();

	// 	for(let x = 0; x < data.length; x++){
	// 		let properties = Object.keys(data[x]);
	// 		let inn = [];
	// 		let ut = [];
	// 		data[x]["inn"]= [];
	// 		data[x]["ut"]= [];

	// 		for(let y = 0; y < properties.length; y++){
	// 			if(properties[y].split("-")[1] === "Inn"){
	// 				let dateIn = moment(data[x][properties[y]],"DD/MM/YY").format("MM/DD/YY");
	// 				inn.push(dateIn);
	// 				delete data[x][properties[y]];
	// 			}
	// 			if(properties[y].split("-")[1] === "Ut"){
	// 				let dateOut= moment(data[x][properties[y]],"DD/MM/YY").format("MM/DD/YY");
	// 				ut.push(dateOut);
	// 				delete data[x][properties[y]];
	// 			}
	// 		}

	// 		data[x]["inn"] = inn;
	// 		data[x]["ut"] = ut;
	// 	}

	// 	console.log(data);
	// }

	// clean();

	// datas = DataManager.getData();

	// for(let x = 0; x < datas.length;x++){

	// 	if(datas[x]["antall_aar"] > 0){
	// 		datas[x]["sist_ut"] = moment(datas[x]["sist_ut"], "DD/MM/YY").format("MM/DD/YY");
	// 		datas[x]["sist_inn"] = moment(datas[x]["sist_inn"], "DD/MM/YY").format("MM/DD/YY");
	// 	}else{
	// 		datas[x]["sist_inn"] = "";
	// 		datas[x]["sist_ut"] = "";
	// 	}
	// }
	// console.log(datas);

	//The arrays must be sorted.. 
	function getTotalNumberOfMilliseconds(inArr, outArr, inRegNow) {
		let today = new Date();
		let millis = 0;

		for (let x = 0; x < inArr.length; x++) {

			//If the muni is out of the ROBEK, this will be the case for all values of x
			if (inArr[x] && outArr[x]) {
				millis += (new Date(outArr[x]) - new Date(inArr[x]));

			}
		}

		//The muni is still in ROBEK, so outArr.length < inArr.length -> So we add todays date with the latest date in inArr to get the number of days  the Muni has been in ROBEK since it was registered.
		if (inRegNow) {
			let lastIn = new Date(inArr[inArr.length - 1]);
			//Add days from today to last time the municipality was added to the register.
			millis += (today - lastIn);
			return millis;
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
		let years = getYears(millis);

		let obj = {
			"inputMillis": millis,
			"years": Math.floor(years),
			"days": Math.floor((years % 1) * 365)
		}
		return obj;
	}

	function getNationalAverageMillis(data) {
		let sum = 0;
		let counter = 0;
		for (let x = 0; x < data.length; x++) {
			sum += getTotalNumberOfMilliseconds(data[x]["inn"], data[x]["ut"], data[x]["inne_naa"]);
			counter++;
		}
		//Skip decimals
		return Math.floor(sum / counter);
	}


	var nationalMeanYearsAndDays = getYearsAndDays(getNationalAverageMillis(fetchData()));


	function latestChanges() {
		let data = DataManager.getData();
		let changes = undefined;

		//Yields 01/01/1970 which is smaller than all relevant ROBEK dates.
		let latestInDate = new Date("01/01/70");
		let latestOutDate = new Date("01/01/70");

		let totalInRegister = 0;

		let latestMunicipalityIn = {};
		let latestMunicipalityOut = {};

		for (let x = 0; x < data.length; x++) {
			if (data[x]["inne_naa"]) {
				totalInRegister++;
			}


			if (data[x]["antall_aar"] > 0) {

				let lastOut = new Date(data[x]["sist_ut"]);
				let lastIn = new Date(data[x]["sist_inn"]);

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

		let millisOut = getTotalNumberOfMilliseconds(latestMunicipalityOut["inn"], latestMunicipalityOut["ut"], latestMunicipalityOut["inne_naa"]);
		let millisIn = getTotalNumberOfMilliseconds(latestMunicipalityIn["inn"], latestMunicipalityIn["ut"], latestMunicipalityIn["inne_naa"]);

		let yearsAndDaysOut = getYearsAndDays(millisOut);
		let yearsAndDaysIn = getYearsAndDays(millisIn);


		let inHTML = document.getElementById("latest-in");
		let outHTML = document.getElementById("latest-out");
		let numberInROBEK = document.getElementById("total-in-register");

		numberInROBEK.innerHTML = "Antall kommuner i registeret nå: <strong>" + totalInRegister + "</strong>";

		//TODO: more info?
		inHTML.innerHTML = "<strong>" + latestMunicipalityIn["kommune"] + "</strong> er den kommunen som nyligst gikk inn i ROBEK. Kommunen ble oppført den <strong>" + latestMunicipalityIn["sist_inn"] + "</strong>. <strong>" + latestMunicipalityIn["kommune"] + "</strong> har vært i registeret <strong>" + yearsAndDaysIn["years"] + " år</strong> og <strong>" + yearsAndDaysIn["days"] + " dager</strong> totalt, fordelt på <strong>" + latestMunicipalityIn["antall_ganger"] + "</strong> periode(r). <p>Perioder kommunen har vært i ROBEK: </p><ul id='latest-in-periods'></ul>";
		outHTML.innerHTML = "<strong>" + latestMunicipalityOut["kommune"] + "</strong> er den kommunen som sist gikk ut av ROBEK. Kommunen ble fjernet fra listen den <strong>" + latestMunicipalityOut["sist_ut"] + "</strong> etter å ha vært inne siden <strong>" + latestMunicipalityOut["sist_inn"] + "</strong>. Kommunen har vært i registeret i <strong>" + yearsAndDaysOut["years"] + " år</strong>  og <strong>" + yearsAndDaysIn["days"] + " dager</strong>  totalt, fordelt på <strong>" + latestMunicipalityOut["antall_ganger"] + "</strong> periode(r). <p>Perioder kommunen har vært i ROBEK: </p><ul id='latest-out-periods'></ul>";
		createListFromArrays(latestMunicipalityIn["inn"],latestMunicipalityIn["ut"],"dates-li","latest-in-periods");
		createListFromArrays(latestMunicipalityOut["inn"],latestMunicipalityOut["ut"],"dates-li","latest-out-periods");
	}

	function percentageChange(offset, end) {
		let diff = (end - offset);
		return (diff / offset) * 100;
	}

	function fetchData() {
		var reduced = [];
		//Fetches the big json-datafile
		var robek_data = DataManager.getData();

		for (let x = 0; x < robek_data.length; x++) {
			//Top list would not be populated ..
			if (robek_data[x]["antall_aar"] > 0) {
				reduced.push(robek_data[x]);
			}
		}

		return reduced;
	};

	//Manual text-search in array, due to weird weighting of some words in lunr.js
	function basicSearch(array, key, searchValue) {
		for (let x = 0; x < array.length; x++) {
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
			for (let x = 0; x < input.length; x++) {

				let temp = {
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

	//Removes bar charts for single municipalities, and the relevant comments attached to it.
	function removeSingleMunicipality() {
		$("#single-canvas").remove();
		$("#robek-comments").css("display", "none");
	}

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
		for (let x = 0; x < data.length; x++) {
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

		let letters = "";
		let explanation = "";
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

			let milliSecondsTotal = getTotalNumberOfMilliseconds(input["inn"], input["ut"], input["inne_naa"]);
			let yearsAndDays = getYearsAndDays(milliSecondsTotal);

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
						}]
					}
				}
			});



			let in_or_out = input["inne_naa"] ? "registrert i ROBEK. Kommunen ble sist oppført den <strong>" + input["sist_inn"] + "</strong>." : "ikke registrert i ROBEK. Kommunen gikk sist ut av ROBEK den <strong>" + input["sist_ut"] + "</strong>.";

			//Comments?
			if (input["bokstaver"] !== "") {
				letters = input["bokstaver"].split("-");

				if (letters.length > 1) {
					explanation = "<strong>" + input["kommune"] + "</strong> er oppført i ROBEK med hjemmel i kommunelovens §60, bokstav: <strong>" + letters[0] + ".</strong> " + lawLetters[letters[0]] + " og <strong>" + letters[1] + ".</strong> " + lawLetters[letters[1]] + " .";
				} else {
					explanation = "<strong>" + input["kommune"] + "</strong> er oppført i ROBEK med hjemmel i kommunelovens §60, bokstav: <strong>" + letters[0] + ".</strong> " + lawLetters[letters[0]] + ".";
				}
			}



			var percentageDiff = percentageChange(nMean["inputMillis"], milliSecondsTotal);
			var diffHTML = percentageDiff > 0 ? "<strong>" + Math.abs(percentageDiff.toFixed(2)) + "%</strong> lengre" : "<strong>" + Math.abs(percentageDiff.toFixed(2)) + "%</strong> kortere";
			$("#robek-comments").html("<br><strong>" + input["kommune"] + "</strong> er for øyeblikket " + in_or_out + " <strong>" + input["kommune"] + "</strong> har totalt ligget <strong>" + yearsAndDays["years"] + " år</strong> og <strong>" + yearsAndDays["days"] + " dager</strong> på ROBEK. Dette er " + diffHTML + " enn det nasjonale snittet på <strong>" + nMean["years"] + " år</strong> og <strong>"+nMean["days"]+" dager</strong>. <p>Perioder kommunen har vært i ROBEK: </p> <ul id='date-ul'></ul><p>" + explanation + "</p>");

			createListFromArrays(input["inn"],input["ut"],"dates-li","date-ul");

			$("#robek-comments").css("display", "block");

		}
	}

	function createListFromArrays(array1,array2,liClass,ulId){

		var ul = document.getElementById(ulId);

		for(let x = 0; x < array1.length;x++){
			let li = document.createElement("li");
			li.setAttribute("class",liClass);
			if(array1[x] && array2[x]){
				li.appendChild(document.createTextNode("Inn: "+array1[x]+" - Ut: "+array2[x]));
			}else{
				li.appendChild(document.createTextNode("Inn: "+array1[x]+" - Fortsatt i registeret."));
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
		let formValue = searchField.value;

		if (formValue !== "") {

			var indices = indexedSearch.search(formValue);
			if (indices.length == 1) {

				var obj = {
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
			let value = $(this).text();
			if (value) {
				return basicSearch(globalData, "kommune", value);
			}
		});
	}

	//Generic method for populating a list
	function populateResultSuggestions(input, key, container, htmlID, callback) {
		//Populate list of "valid" search words
		document.getElementById(container).innerHTML = "Fant flere treff på søket,vennligst prøv et av disse søkeordene: <ul class='lunr-ul' id='" + htmlID + "'></ul>";
		let liClass = "lunr-element";
		for (let x = 0; x < input.length; x++) {
			var node = document.createElement("li");
			node.setAttribute("class", liClass);
			var textnode = document.createTextNode(globalData[input[x].ref][key]);
			node.appendChild(textnode);
			document.getElementById(htmlID).appendChild(node);
		}
		handleResultClicks("." + liClass);

	};

	function createRegionList(){
		var regions = DataManager.getRegionList();

		var ul = document.getElementById("region-list");

		for(let x = 0; x < 5;x++){
			let li = document.createElement("li");
			li.setAttribute("class","li-elem");
			if(regions[x]){
				li.appendChild(document.createTextNode(regions[x]["fylke"]+": "+regions[x]["antall_inne"]));
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

	//INIT Carto MAP
	var url = "https://andreasroeed.carto.com/viz/abbb8a44-6464-11e6-a199-0e233c30368f/embed_map";
	var mapFrame = document.getElementById("carto");
	document.getElementById("carto").src = url;

	//INIT
	latestChanges();
	//Looks better.. Refactor
	mapFrame.addEventListener("load", function() {

		createRegionList();
		
		createBottomList();
		createTopList();
		showLists();

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