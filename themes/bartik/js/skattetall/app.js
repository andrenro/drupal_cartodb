$(document).ready(function(){




	var manager = ApiManager.getInstance();
	var taxClient = TaxClient.getInstance();

	var base_url = "http://localhost:8000/api/v1";


	var latest_month = new Date().getMonth();

	if(latest_month == 0){
		latest_month += 1;
	}
	


	//Add 1 because API does not index months from 0, but from 1
	var data = manager.getData(base_url+ "/tax/date/2016/"+(latest_month)+"/?q=totals",function(data){

		//Convert to billions
		var summary_object = {
			"current_month":data["current_month_totals"] / 1000000000,
			"last_month": data["last_month_totals"] / 1000000000,
			"last_year_current_month" :data["same_month_last_year_totals"] / 1000000000,
		}


		$("#first-section").html("<ul class='overview-list'><li>Brutto årlige skatteinntekter totalt(hele landet) rapportert denne måneden: "+summary_object["current_month"].toFixed(3)+" milliarder kroner</li><li>Brutto  årlige skatteinntekter totalt(hele landet) rapportert forrige måned: "+summary_object["last_month"].toFixed(3)+" milliarder kroner</li><li>Brutto årlige skatteinntekter totalt(hele landet), rapportert samme måned i fjor: "+summary_object["last_year_current_month"].toFixed(3)+" milliarder kroner</li></ul>");


		taxClient.populateLineChart(data,"yearly-movement","year-line-canvas","Årlig bevegelse");


	});
}); 