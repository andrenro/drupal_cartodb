$(document).ready(function() {



	var base_url = "http://localhost:8000/api/v1";
	var manager = ApiManager.getInstance();
	var taxClient = TaxClient.getInstance();

	var uiHandler = UI.getInstance();

	var monthNames = ["Januar", "Februar", "Mars", "April", "Mai", "Jun",
  "Jul", "August", "September", "Oktober", "November", "Desember"];

	var latest_month = new Date().getMonth();
	var this_year = new Date().getFullYear();

	if (latest_month == 0) {
		latest_month += 1;
	}

	//Reduce big ints to more readable values..
	function convertBigNumbers(arr, indexValue, reduceBy) {
		for (var y = 0; y < arr.length; y++) {
			arr[y][indexValue] /= reduceBy;
		}
		return arr;
	}

	function initStartScreen() {


		//Add 1 because API does not index months from 0, but from 1
		var data = manager.getData(base_url + "/tax/date/" + this_year + "/" + (latest_month) + "/?q=totals", function(data) {

			var gross = convertBigNumbers(data["gross_whole_year"], "sum", 1000000000);
			var net = convertBigNumbers(data["net_whole_year"], "net_sum", 1000000000);

			var total_inhabitants = data["current_month_totals"] / data["national_average_pr_in"][1]["national_average"];

			//Convert to billions
			var summary_object = {
				"current_month": data["current_month_totals"] / 1000000000,
				"last_month": data["last_month_totals"] / 1000000000,
				"last_year_current_month": data["same_month_last_year_totals"] / 1000000000,
				"gross_whole_year": gross,
				"net_whole_year": net,
				"average_per_in": data["national_average_pr_in"][1]["national_average"],
				"average_per_in_last": data["national_average_pr_in"][0]["national_average"]
			}
			$("#data-title").html("<h1>Nasjonal oversikt</h1>");
			var increase = taxClient.percentageIncrease(summary_object["last_month"], summary_object["current_month"]);
			$("#total-inhabitants").html("<ul class='overview-list'><li>Folketallet benyttet i beregningene er hentet fra fjerde kvartal " + (this_year - 1) + ": " + total_inhabitants.toFixed(0) + "</li></ul>")
			$("#first-section").html("<ul class='overview-list'><li>Brutto årlige skatteinntekter totalt (hele landet), rapportert denne måneden: " + summary_object["current_month"].toFixed(3) + " milliarder kroner (" + increase.toFixed(2) + "% økning siden forrige måned)</li><li>Brutto  årlige skatteinntekter totalt (hele landet), rapportert forrige måned: " + summary_object["last_month"].toFixed(3) + " milliarder kroner</li><li>Brutto årlige skatteinntekter totalt (hele landet), rapportert samme måned i fjor: " + summary_object["last_year_current_month"].toFixed(3) + " milliarder kroner</li><br><li>Gjennomsnittlig brutto skatteinntekt per innbygger denne måned: " + summary_object["average_per_in"] + " kr</li><li>Gjennomsnittlig brutto skatteinntekt per innbygger forrige måned: " + summary_object["average_per_in_last"] + " kr</li></ul>");

			taxClient.populateLineChart(summary_object["gross_whole_year"], "gross-yearly-movement", "gross-year-line-canvas", "month", "sum", "Årlig skatteinntekter (brutto totalt, oppgitt i mrd.kroner)");
			//taxClient.populateLineChart(summary_object["net_whole_year"],"net-yearly-movement","net-year-line-canvas","month","net_sum","Årlig skatteinntekter (netto totalt, oppgitt i mrd.kroner)");

		});
	}

	initStartScreen();

	//trigger click event for search-button if 'Enter' is pressed
	uiHandler.setEnterClick("search", "search-button");

	uiHandler.setOnClick("search-button", function() {


		var inputValue = $("#search").val();
		var searchString = base_url + "/tax/search/?q=" + inputValue;

		manager.getData(searchString, function(data) {


			if(data["status"])

			var curr_m = {};
			var last_m = {};
			var same_month_last_year = {};
			var current_date = new Date();

			var yearly_income = [];

			for(var x = 0; x < data.length; x++){

				if(data[x]["year"] == current_date.getFullYear()){
					yearly_income.push({"month":data[x]["month"],"year":data[x]["year"],"gross_tax_per_inhabitant":data[x]["tax_income_per_inhabitant"]});
				}

				//Previous monthly reported data
				if(data[x]["month"] == (current_date.getMonth() - 1) && data[x]["year"] == (current_date.getFullYear())){
					last_m = data[x];
				}
				//Latest reported monthly data
				if (data[x]["month"] == (current_date.getMonth()) && data[x]["year"] == (current_date.getFullYear())) {
					curr_m = data[x];
				}
				//Same month - 1 last year
				if (data[x]["month"] == (current_date.getMonth() -1) && data[x]["year"] == (current_date.getFullYear() - 1)) {
					psame_month_last_year = data[x];
				}
				//Same month last year
				if (data[x]["month"] == (current_date.getMonth()) && data[x]["year"] == (current_date.getFullYear() - 1)) {
					same_month_last_year = data[x];
				}
			}

			//TODO: put in function
			var pdiff_net_gross = (same_month_last_year["net_tax_and_adjustment"] - same_month_last_year["tax_income_per_inhabitant"]);

			var pdiff_net_gross_lm = (psame_month_last_year["net_tax_and_adjustment"] - psame_month_last_year["tax_income_per_inhabitant"]);

			//Adjustment from jan to curr_m
			var padjustment_only = pdiff_net_gross * same_month_last_year["inhabitants"];
			//Adjustment from jan to curr_m - 1
			var padjustment_only_lm = pdiff_net_gross_lm * psame_month_last_year["inhabitants"];


			//net_pr - gross_pr = adjustment_per_inhabitant whole year.
			
			var diff_net_gross = (curr_m["net_tax_and_adjustment"] - curr_m["tax_income_per_inhabitant"]);
			var diff_net_gross_lm = (last_m["net_tax_and_adjustment"] - last_m["tax_income_per_inhabitant"]);

			//Adjustment from jan to curr_m
			var adjustment_only = diff_net_gross * curr_m["inhabitants"];

			//Adjustment from jan to curr_m - 1
			var adjustment_only_lm = diff_net_gross_lm * last_m["inhabitants"];





			var total_adjustment_month = (adjustment_only - adjustment_only_lm);
			var total_adjustment_month_ly = (padjustment_only - padjustment_only_lm);

			//Months in API starts at 1 instead of JS' Date-objects which starts at 0
			var summary = {
				"national_average_adj":curr_m["national_average"],
				"percentage_of_national_average": (curr_m["net_tax_and_adjustment"] * 100) / curr_m["national_average"],
				"net_increased_per_inhabitant_percentage": taxClient.percentageIncrease(last_m["net_tax_and_adjustment"],curr_m["net_tax_and_adjustment"]),
				"net_tax_income_per_lm" : last_m["net_tax_and_adjustment"],
				"net_tax_income_per":curr_m["net_tax_and_adjustment"],
				"gross_tax_income_per": curr_m["tax_income_per_inhabitant"],
				"total_tax_income_monthly": curr_m["total_tax_income_month"],
				"diff_gross_since_last_month": (curr_m["total_tax_income_month"] - last_m["total_tax_income_month"]),
				"total_adjustment_month": total_adjustment_month,
				"total_adjustment_month_ly": total_adjustment_month_ly,
				"change_since_last_year": taxClient.percentageIncrease(total_adjustment_month_ly, total_adjustment_month),
				"inhabitants": curr_m["inhabitants"],
				"month": curr_m["month"],
				"year":curr_m["year"],
				"kommune":curr_m["kommune"],
				"fylke":curr_m["fylke"],
				"knr": curr_m["knr"],
				"movement": yearly_income
			}

			$("#data-title").html("<h1>"+summary["kommune"]+" ("+summary["knr"]+" - "+summary["fylke"]+")</h1><h2>"+monthNames[summary["month"] - 1]+" - "+summary["year"]+"</h2>");
			// var increase = taxClient.percentageIncrease(summary_object["last_month"], summary_object["current_month"]);
			$("#total-inhabitants").html("<ul class='overview-list'><li>Brutto skatteinntekt per innbygger denne måneden: "+summary['gross_tax_income_per']+" kr</li><li>Netto skatteinntekt per innbygger fra "+monthNames[0]+" - "+monthNames[summary["month"] - 1]+": "+summary['net_tax_income_per']+" kr</li><li>Netto skatteinntekt per innbygger forrige måned: "+summary['net_tax_income_per_lm']+" kr</li><li>Totale skatteinntekter denne måneden: "+summary['total_tax_income_monthly']+" kr</li><li>Brutto differanse siden forrige måned: "+summary['diff_gross_since_last_month']+" kr</li><li>Innbyggertall benyttet i beregningene: "+summary['inhabitants']+"</li><li>Gjennomsnittlig netto skatteinntekt per innbygger (nasjonalt): "+summary['national_average_adj']+" kr</li><li>"+summary["kommune"]+" hadde en netto skatteinntekt tilsvarende "+summary['percentage_of_national_average'].toFixed(1)+"% av landsgjennomsnittet</li><li>Prosentvis endring i netto skatteinntekt siden forrige måned: "+summary['net_increased_per_inhabitant_percentage'].toFixed(1)+"%</li><li>Endring siden sammen måned forrige år: "+summary['change_since_last_year'].toFixed(1)+"%</li></ul>");
			$("#first-section").html("<ul class='overview-list'></ul>");
				
			taxClient.populateLineChart(summary["movement"], "gross-yearly-movement", "gross-year-line-canvas", "month", "gross_tax_per_inhabitant", "Månedlige brutto skatteinntekt per innbygger (oppgitt i kroner)");

		});
	});



});