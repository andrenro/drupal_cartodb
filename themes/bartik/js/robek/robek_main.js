$(document).ready(function() {


	const lawLetters = {
		"d": "kommunestyret eller fylkestinget har vedtatt å fastsette et årsbudsjett uten at alle utgifter er dekket inn på budsjettet",
		"b": "kommunestyret eller fylkestinget har vedtatt å fastsette en økonomiplan uten at alle utgifter er dekket inn på økonomiplanen",
		"c": "kommunestyret eller fylkestinget etter § 48 nr. 4 annet punktum har vedtatt at et regnskapsmessig underskudd skal fordeles ut over det påfølgende budsjettår etter at regnskapet er framlagt",
		"d": "at kommunen eller fylkeskommunen ikke følger vedtatt plan for dekning av underskudd"
	}

	$("#showTopLists").css("visibility", "hidden");
	$("#no-results").css("visibility", "hidden");

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
				console.log(temp);
				index.add(temp);
			}
		}
		return index;
	};

	//Sets proper visibility for fields
	function initLayout() {
		$("#robek-comments").html("<div class='col-lg-12'>De 10 kommunene som har vært lengst inne på ROBEK.</div>");
		$("#robek-comments-top").html("<div class='col-lg-12'>De 8 kommunene som har vært kortest inne på ROBEK.</div>")
	};


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
		var barChart = prepareCanvas("#canvas-container-bottom", "canvas");

		var dataObj = {
			labels: [input[0]["kommune"], input[1]["kommune"], input[2]["kommune"], input[3]["kommune"], input[4]["kommune"], input[5]["kommune"], input[6]["kommune"], input[7]["kommune"], input[8]["kommune"], input[9]["kommune"]],
			datasets: [{
				label: "Antall år på ROBEK-listen",
				backgroundColor: "rgba(148,14,25,0.8)",
				data: [input[0]["antall_aar"], input[1]["antall_aar"], input[2]["antall_aar"], input[3]["antall_aar"], input[4]["antall_aar"], input[5]["antall_aar"], input[6]["antall_aar"], input[7]["antall_aar"], input[8]["antall_aar"], input[9]["antall_aar"]]
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
		var barChart = prepareCanvas("#canvas-container-top", "canvas-top");

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
		$("#showTopLists").css("visibility", "visible");
		$("#robek-comments-top").css("visibility", "hidden");
		let letters = "";
		let explanation = ""; 
		// var barChart = document.getElementById("canvas").getContext("2d");

		var barChart = prepareCanvas("#canvas-container-bottom", "canvas");

		var dataObj = {
			labels: ["Antall år " + input["kommune"] + " har vært inne på ROBEK", "Nasjonalt Gjennomsnitt"],
			datasets: [{
				label: "Oversikt for " + input["kommune"],
				backgroundColor: "rgba(148,14,25,0.8)",
				data: [input["antall_aar"], input["nasjonalt_snitt"]]
			}]
		};

		var robekChart = new Chart(barChart, {
			type: "horizontalBar",
			data: dataObj,
			options: {
				scales: {
					yAxes: [{
						ticks: {
							max: input["antall_aar"] > input["nasjonalt_snitt"] ? (input["antall_aar"]) : (input["nasjonalt_snitt"]),
							min: 0,
							stepSize: 1
						}
					}]
				}
			}
		});

		let in_or_out  = input["inne_naa"] ? "registrert i ROBEK. Kommunen ble sist oppført den <strong>"+input["sist_inn"]+"</strong>." : "ikke registrert i ROBEK. Kommunen gikk sist ut av ROBEK den <strong>"+input["sist_ut"]+"</strong>.";


		//Comments?
		if(input["bokstaver"] !== ""){
			letters = input["bokstaver"].split("-");

			if (letters.length > 1) {
				explanation = "<strong>"+input["kommune"]+"</strong> er oppført i ROBEK med hjemmel i kommunelovens §60, bokstav: <strong>"+letters[0]+".</strong> "+lawLetters[letters[0]]+ " og <strong>" + letters[1]+".</strong> "+lawLetters[letters[1]]+" .";
			}else{
				explanation = "<strong>"+input["kommune"]+"</strong> er oppført i ROBEK med hjemmel i kommunelovens §60, bokstav: <strong>"+letters[0]+".</strong> "+lawLetters[letters[0]]+".";
			}
		}	
		var percentageDiff = percentageIncrease(input["nasjonalt_snitt"], input["antall_aar"]);
		var diffHTML = percentageDiff > 0 ? "<strong>" + Math.abs(percentageDiff.toFixed(2)) + "%</strong> lengre" : "<strong>" + Math.abs(percentageDiff.toFixed(2)) + "%</strong> kortere";
		$("#robek-comments").html("<br><strong>"+input["kommune"]+"</strong> er for øyeblikket "+in_or_out+" <strong>" + input["kommune"] + "</strong> har totalt ligget <strong>" + input["antall_aar"] + " år</strong> på ROBEK. Dette er " + diffHTML + " enn det nasjonale snittet på <strong>" + input["nasjonalt_snitt"].toFixed(2) + "</strong> år.<br>&nbsp;<p>"+explanation+"</p>");

	}


	function createBottomList(input) {
		var bottom = input.slice(-10);
		return bottom;
	}

	function createTopList(input) {
		return input.slice(0, 8);
	}

	function prepareCanvas(container, id) {
		$(id).remove();
		$(container).append("<canvas id='" + id + "'></canvas>");
		var chart = document.getElementById(id).getContext("2d");
		return chart;
	}

	var globalData = fetchData();

	var indexedSearch = setupLunrSearch(globalData);
	var searchField = document.getElementById('search');

	searchField.addEventListener('change', function(e) {


		if (document.getElementById("lunr-index").innerHTML != "") {
			document.getElementById("lunr-index").innerHTML = "";
		}
		formValue = e.target.value;
		var indices = indexedSearch.search(formValue);
		var stemmed = lunr.stemmer(formValue);
		console.log(indices[0].score);
		if (indices.length == 1) {
			// if (globalData[indices[0].ref]["antall_aar"] < 1) {
			// 	var response = globalData[indices[0].ref]["kommune"] + " har til nå aldri vært oppført i ROBEK.";
			// 	$("#no-results").html(response);
			// 	$("#no-results").css("visibility", "visible");
			// 	setTimeout(function() {
			// 		$("#no-results").css("visibility", "hidden");
			// 		return;
			// 	}, 2000);
			// } else {

				var nationalM = nationalMean(globalData, "antall_aar");

				var obj = {
					"kommune": globalData[indices[0].ref]["kommune"],
					"antall_aar": globalData[indices[0].ref]["antall_aar"],
					"nasjonalt_snitt": nationalM,
					"bokstaver": globalData[indices[0].ref]["bokstaver"],
					"inne_naa": globalData[indices[0].ref]["inne_naa"],
					"sist_inn": globalData[indices[0].ref]["sist_inn"],
					"sist_ut": globalData[indices[0].ref]["sist_ut"]
				};
				singleMunicipality(obj);

			// }
		} else if (indices.length == 0) {
			$("#no-results").html("Ooops! Søket ga ingen treff, kommunen har til nå aldri vært oppført i ROBEK.");
			$("#no-results").css("visibility", "visible");
			setTimeout(function() {
				$("#no-results").css("visibility", "hidden");
				return undefined;
			}, 2000);
		} else if (indices.length > 1) {
			populateResultSuggestions(indices.slice(1,5), "kommune", "lunr-index", "lunr-list");
		}
	});

	//Generic method for populating a list
	function populateResultSuggestions(input, key, container, htmlID) {
		//Populate list of search words
		document.getElementById(container).innerHTML = "Fant flere treff på søket,vennligst prøv et av disse søkeordene: <ul style='font-weight:bold;list-style-type:none' id='" + htmlID + "'></ul>";
		
		for (let x = 0; x < input.length; x++) {
			var node = document.createElement("li");
			var textnode = document.createTextNode(globalData[input[x].ref][key]);
			node.appendChild(textnode);
			document.getElementById(htmlID).appendChild(node);
		}
	};

	function showBottomList() {
		$("#showTopLists").css("visibility", "hidden");
		var sort = fetchData();
		var sortedBottom = createBottomList(getSortedList(sort, "antall_aar"));
		bottomListChart(sortedBottom.reverse());
		var meanYears = nationalMean(globalData, "antall_aar");
	};

	function showTopList() {
		var sort = fetchData();
		var sortedBottom = createTopList(getSortedList(sort, "antall_aar"));
		topListChart(sortedBottom);
		var meanYears = nationalMean(globalData, "antall_aar");
	};

	//INIT
	var url = "https://andreasroeed.carto.com/viz/abbb8a44-6464-11e6-a199-0e233c30368f/embed_map";
	var mapFrame = document.getElementById("carto");
	document.getElementById("carto").src = url;
	mapFrame.addEventListener("load", function() {

		showBottomList();
		showTopList();
		initLayout();

	});

	//When in Single Municipality Mode
	$("#showTopLists").on("click", function() {
		$("#robek-comments").html("");
		initLayout();
		showBottomList();
		showTopList();
	});

});