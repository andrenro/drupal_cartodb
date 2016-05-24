$(document).ready(function() {

  /**
   * 
   * @return public object literal containing function objects
   */
  LayersHandler = (function() {


    function showTotal() {
      sublayers[0].setSQL("SELECT * FROM partial_results");
      sublayers[0].setCartoCSS("#partial_results[resultat='ja']{line-color: #000000;polygon-fill:#003762} #partial_results[resultat='nei']{line-color: #000000;polygon-fill:#940E19} #partial_results[resultat='']{line-color: #000000;polygon-fill:#ACACAC}");
      cartodb.vis.Vis.addInfowindow(map, sublayers[0], ["valgdeltakelse","prosent_ja", "prosent_nei", "prosent_blankt", "kommunenavn"]);

      var ja_count = 0;
      var nei_count = 0;
      var no_results = 0;
      var total = 0;

      DataHandler.getData("andreasroeed", "SELECT resultat,valgdeltakelse,prosent_ja,prosent_nei,prosent_blankt FROM partial_results", function(data) {
        var has_results = 0;
        var mean_participation = 0;

        for (var x = 0; x < data.rows.length; x++) {

          mean_participation += data.rows[x].valgdeltakelse;
          if (data.rows[x].resultat == "ja") {
            has_results++;
            ja_count++;
          } else if (data.rows[x].resultat == "nei") {
            nei_count++;
            has_results++;
          } else if (data.rows[x].resultat == "") {
            no_results++;
          } else {
            continue;
          }
        }

        total = ja_count + nei_count + no_results;

        var percent_ja = ((ja_count * 100) / has_results)
        var percent_nei = ((nei_count * 100) / has_results)
        //var percent_na = (no_results * 100) / total;


        mean_participation = (mean_participation/ has_results);
        var data = [percent_ja,percent_nei,mean_participation];

        ChartHandler.showTotal(data);

      });
    };
    /**
     * @param  {string} css - styling
     * @param  {string} bigger - The value to compare with smaller
     * @param  {string} smaller - The value to compare with bigger
     * @return {undefined} 
     */
    function showResults(css, bigger, smaller) {
      sublayers[0].setSQL("SELECT * FROM partial_results WHERE " + bigger + " > " + smaller + "");
      sublayers[0].setCartoCSS(css);
      var bigger = bigger;

      DataHandler.getData("andreasroeed", "SELECT prosent_nei,prosent_ja,prosent_blankt,resultat,kommunenavn,valgdeltakelse FROM partial_results WHERE " + bigger + " > " + smaller + " ORDER BY valgdeltakelse DESC", function(data) {
        var data = [data.rows[0], data.rows[1], data.rows[2]];
        ChartHandler.decidedChart(data, bigger);

      });

      sublayers[0].setInteractivity("cartodb_id", "kommunenavn");
    };
    /**
     * NOT in USE
     * @param  {string} attribute - The attribute to check
     * @param  {string} input - The input value to compare with @param attribute
     * @return {undefined} 
     */
    function byCount(attribute, input) {
      sublayers[0].setSQL("SELECT * FROM partial_results WHERE " + attribute + " >= " + input + "");
      sublayers[0].setCartoCSS(cssyes);
    };
    /**
     * @param  {string} attribute
     * @param  {string} input
     * @return {[undefined]}
     */
    function byName(attribute, input) {

      var result = "";
      var color = "";
      console.log(sublayers[0]);

      var inputString = "'" + input + "'";
      var mapQuery = "SELECT * FROM partial_results WHERE " + attribute + " ILIKE " + inputString;

      DataHandler.getData("andreasroeed",mapQuery,function(data){
        mapQuery = "SELECT * FROM partial_results WHERE " + attribute + " ILIKE " + inputString;
        sublayers[0].setSQL(mapQuery);
        sublayers[0].setCartoCSS(cssyes);


      });    
    };

    return {
      showTotal: showTotal,
      showResults: showResults,
      byCount: byCount,
      byName: byName
    }

  })();

});