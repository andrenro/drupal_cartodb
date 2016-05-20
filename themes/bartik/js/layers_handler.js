$(document).ready(function() {

  /**
   * 
   * @return public object literal containing function objects
   */
  LayersHandler = (function() {


    function showTotal() {
      sublayers[0].setSQL("SELECT * FROM random_results");
      sublayers[0].setCartoCSS("#random_results[resultat='ja']{line-color: #000000;polygon-fill:#41834B} #random_results[resultat='nei']{line-color: #000000;polygon-fill:#940E19} #random_results[resultat='N/A']{line-color: #000000;polygon-fill:#ACACAC}");
      cartodb.vis.Vis.addInfowindow(map, sublayers[0], ["ja", "nei", "blankt", "kommunenavn"]);

      var ja_count = 0;
      var nei_count = 0;
      var na_count = 0;
      var total = 0;

      DataHandler.getData("andreasroeed", "SELECT * FROM random_results", function(data) {

        for (var x = 0; x < data.rows.length; x++) {
          if (data.rows[x].resultat == "ja") {
            ja_count++;
          } else if (data.rows[x].resultat == "nei") {
            nei_count++;
          } else if (data.rows[x].resultat == "N/A") {
            na_count++;
          } else {
            continue;
          }
        }

        total = ja_count + nei_count + na_count;

        var percent_ja = (ja_count * 100) / total;
        var percent_nei = (nei_count * 100) / total;
        var percent_na = (na_count * 100) / total;

        var data = [percent_ja, percent_nei, percent_na];

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
      sublayers[0].setSQL("SELECT * FROM random_results WHERE " + bigger + " > " + smaller + "");
      console.log(css);
      sublayers[0].setCartoCSS(css);
      var bigger = bigger;

      DataHandler.getData("andreasroeed", "SELECT nei,ja,blankt,resultat,kommunenavn,deltakelse FROM random_results WHERE " + bigger + " > " + smaller + " ORDER BY deltakelse DESC", function(data) {
        var data = [data.rows[0], data.rows[1], data.rows[2]];
        ChartHandler.decidedChart(data, bigger);

      });

      sublayers[0].setInteractivity("cartodb_id", "kommunenavn");
      cartodb.vis.Vis.addInfowindow(map, sublayers[0], ["ja", "nei", "blankt", "kommunenavn"]);
    };
    /**
     * @param  {string} attribute - The attribute to check
     * @param  {string} input - The input value to compare with @param attribute
     * @return {undefined} 
     */
    function byCount(attribute, input) {
      sublayers[0].setSQL("SELECT * FROM random_results WHERE " + attribute + " >= " + input + "");
      sublayers[0].setCartoCSS(cssyes);
      cartodb.vis.Vis.addInfowindow(map, sublayers[0], ["ja", "nei", "blankt", "kommunenavn"]);
    };
    /**
     * @param  {string} attribute
     * @param  {string} input
     * @return {[undefined]}
     */
    function byName(attribute, input) {
      var inputString = "'" + input + "'";
      var mapQuery = "SELECT * FROM random_results WHERE " + attribute + " ILIKE " + inputString;

      console.log(mapQuery);


      sublayers[0].setSQL(mapQuery);
      sublayers[0].setCartoCSS(cssyes);
      cartodb.vis.Vis.addInfowindow(map, sublayers[0], ["kommunenavn", "ja", "nei", "blankt"]);
    };

    return {
      showTotal: showTotal,
      showResults: showResults,
      byCount: byCount,
      byName: byName
    }

  })();

});