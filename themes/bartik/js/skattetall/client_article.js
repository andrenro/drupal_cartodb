$(document).ready(function() {



	UI = (function() {

		var instance;

		function create() {
			var obj = new Object();
			obj.setYears = setYears;
			return obj;
		}


		setYears = function(){

			return; 
		}

		return {
			getInstance: function() {
				if (!instance) {
					instance = create();
				}
				return instance;
			},
		}



	})();



	TaxClient = (function() {

		var instance;
		//Used first time TaxClient.getInstance() is called
		function create() {
			var obj = new Object();

			//Functions
			obj.prepareCanvas = prepareCanvas;
			obj.populateLineChart = populateLineChart;

			return obj;
		}


		populateLineChart = function(data, container, canvas, title) {

			var chart = prepareCanvas(container, canvas);

			var dataObj = {
				labels: [],
				datasets: [{
					label: title,
					backgroundColor: "rgba(148,14,25,0.3)",
					data: []
				}]
			};

			new Chart(chart, {
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

		//Recycle canvas
		prepareCanvas = function(container, id) {
			$("#" + id).remove();
			$("#" + container).append("<canvas id='" + id + "'></canvas>");
			var chart = document.getElementById(id).getContext("2d");
			return chart;
		}

		return {
			getInstance: function() {
				if (!instance) {
					instance = create();
				}
				return instance;
			},
		}


	})();



});