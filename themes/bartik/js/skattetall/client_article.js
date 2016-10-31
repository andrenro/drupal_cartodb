$(document).ready(function() {



	UI = (function() {

		var instance;

		function create() {
			var obj = new Object();
			obj.setOnClick = setOnClick;
			obj.setOnChange = setOnChange;
			obj.setEnterClick = setEnterClick;
			return obj;
		}

		setOnClick = function(id, callback) {
			$("#" + id).on("click", callback);
		}

		setOnChange = function(id, callback) {
			$("#" + id).on("change", callback);
		}

		//Handles click from the enter button
		setEnterClick = function(textBox, button) {
			$("#" + textBox).keyup(function(event) {
				if (event.keyCode == 13) {
					$("#" + button).click();
				}
			});
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
			obj.percentageIncrease = percentageIncrease;

			return obj;
		}

		percentageIncrease = function(num1, num2) {
			var diff = (num2 - num1);
			return (diff / num1) * 100;
		}


		populateLineChart = function(data, container, canvas, label, dataPoints, title) {
			var chart = prepareCanvas(container, canvas);

			var whole_year = data;
			var labels = [];
			var sum = [];

			var step = 0;


			for (var x = 0; x < whole_year.length; x++) {
				labels.push(whole_year[x][label]);
				sum.push(whole_year[x][dataPoints]);
			}

			if(sum[0] < 500){
				step = 10;
			}else if (sum[0] > 10000){
				step = 1000;
			}else if (sum[0] > 100000){
				step = 10000;
			}


			var dataObj = {
				labels: labels,
				datasets: [{
					label: title,
					backgroundColor: "rgba(0,55,98,0.7)",
					data: sum
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
								stepSize: step
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