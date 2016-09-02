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




	function latestChanges(){
		let data = DataManager.getData();
		let changes = undefined;

		//Yields 01/01/1970 which is smaller than all relevant ROBEK dates.
		let latestInDate = new Date("01/01/70");
		let latestOutDate = new Date("01/01/70");

		let latestMunicipalityIn = {};
		let latestMunicipalityOut = {};

		for (let x = 0;x < data.length; x++){
			if(data[x]["antall_aar"] > 0){

				let lastOut = new Date(data[x]["sist_ut"]);
				let lastIn = new Date(data[x]["sist_inn"]);

				if(lastOut > latestOutDate){
					latestOutDate = lastOut;
					latestMunicipalityOut = data[x];
				}
				if(lastIn > latestInDate){
					latestInDate = lastIn;
					latestMunicipalityIn= data[x];
				}
			}
		}

		// changes = {
		// 	"latestMunicipalityOut": latestMunicipalityOut,
		// 	"latestMunicipalityIn": latestMunicipalityIn
		// }
		// console.log(changes);
		// 
		// 
		// 
		let inHTML = document.getElementById("latest-in");
		let outHTML = document.getElementById("latest-out");

		//TODO: more info?
		inHTML.innerHTML = "<strong>"+latestMunicipalityIn["kommune"] + "</strong> er den kommunen som nyligst gikk inn i ROBEK. Kommunen ble oppført den <strong>"+latestMunicipalityIn["sist_inn"]+"</strong>. <strong>"+latestMunicipalityIn["kommune"]+"</strong> har vært i registeret <strong>"+latestMunicipalityIn["antall_aar"]+"</strong> år totalt, fordelt på <strong>"+latestMunicipalityIn["antall_ganger"]+"</strong> periode(r).";
		outHTML.innerHTML = "<strong>"+latestMunicipalityOut["kommune"] + "</strong> er den kommunen som sist gikk ut av ROBEK. Kommunen ble fjernet fra listen den <strong>"+latestMunicipalityOut["sist_ut"]+"</strong> etter å ha vært inne siden <strong>"+latestMunicipalityOut["sist_inn"]+"</strong>. Kommunen har vært i registeret i <strong>"+latestMunicipalityOut["antall_aar"]+"</strong> år totalt, fordelt på <strong>"+latestMunicipalityOut["antall_ganger"]+"</strong> periode(r).";

	}

	// let newest = latestChanges();

	latestChanges();


	function percentageIncrease(offset, end) {
		let diff = (end - offset);
		return (diff / offset) * 100;
	}

	//TODO: make this data available before app starts
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

	//Manual text-search in array, due to weird weights in lunr.js
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

	//Sets proper visibility for fields
	// function toggleListHeaders(){
	// 	$("#robek-comments-top").css("visibility","visible");
	// 	$("#robek-comments").css("visibility","visible");
	// }
	// 
	function removeSingleMunicipality() {
		$("#single-canvas").remove();
		$("#robek-comments").css("display", "none");
	}

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

		let letters = "";
		let explanation = "";
		if (input["antall_aar"] < 1) {
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
			var percentageDiff = percentageIncrease(nationalMean, input["antall_aar"]);
			var diffHTML = percentageDiff > 0 ? "<strong>" + Math.abs(percentageDiff.toFixed(2)) + "%</strong> lengre" : "<strong>" + Math.abs(percentageDiff.toFixed(2)) + "%</strong> kortere";
			$("#robek-comments").html("<br><strong>" + input["kommune"] + "</strong> er for øyeblikket " + in_or_out + " <strong>" + input["kommune"] + "</strong> har totalt ligget <strong>" + input["antall_aar"] + " år</strong> på ROBEK. Dette er " + diffHTML + " enn det nasjonale snittet på <strong>" + nationalMean.toFixed(2) + "</strong> år.<br>&nbsp;<p>" + explanation + "</p>");
			$("#robek-comments").css("display", "block");

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
					"sist_ut": globalData[indices[0].ref]["sist_ut"]
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

	//Looks better.. Refactor
	mapFrame.addEventListener("load", function() {

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