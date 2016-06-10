$(document).ready(function() {

  /**
   * 
   * @return public object literal containing function objects
   */
  LayersHandler = (function() {


    function showTotal() {
      sublayers[0].setSQL("SELECT * FROM table_1_merge");
      sublayers[0].setCartoCSS("#table_1_merge[resultat='ja']{line-color: #000000;polygon-fill:#003762} #table_1_merge[resultat='nei']{line-color: #000000;polygon-fill:#940E19} #table_1_merge[resultat='']{line-color: #000000;polygon-fill:#ACACAC}");
      cartodb.vis.Vis.addInfowindow(map, sublayers[0], ["valgdeltakelse","prosent_ja", "prosent_nei", "prosent_blankt", "kommune","kommentar","kommentar_2","kommentar_3"]);

      var ja_count = 0;
      var nei_count = 0;
      var no_results = 0;
      var total = 0;

      DataHandler.getData("andreasroeed", "SELECT resultat,valgdeltakelse,prosent_ja,prosent_nei,prosent_blankt,kommentar,kommentar_2,kommentar_3 FROM table_1_merge", function(data) {
        var has_results = 0;
        var mean_participation = 0;
        var has_participation = 0;

        for (var x = 0; x < data.rows.length; x++) {

          //Do not calculate stats from objects without valgdeltakelse set.
          if(data.rows[x].valgdeltakelse !== null && data.rows[x].valgdeltakelse > 0){
            has_participation++;
            mean_participation += data.rows[x].valgdeltakelse;
          }

          if (data.rows[x].resultat === "ja") {
            has_results++;
            ja_count++;
          } else if (data.rows[x].resultat === "nei") {
            nei_count++;
            has_results++;
          } else if (data.rows[x].resultat === "") {
            //Did not have 
            no_results++;
          } else {
            continue;
          }
        }

        total_municipalities = ja_count + nei_count + no_results;

        var percent_ja = ((ja_count * 100) / has_results)
        var percent_nei = ((nei_count * 100) / has_results)

        mean_participation = (mean_participation/ has_participation);
        var data = [percent_ja,percent_nei,mean_participation];

        ChartHandler.showTotal(data);

      });
    };


  //Basic implementation of the merge sort algorithm
  function mergeSort(items){

    // Terminal case: 0 or 1 item arrays don't need sorting
    if (items.length < 2) {
        return items;
    }

    var middle = Math.floor(items.length / 2),
        left    = items.slice(0, middle),
        right   = items.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
  }


  function merge(left, right){
    var result  = [],
        il      = 0,
        ir      = 0;

    while (il < left.length && ir < right.length){
        if (left[il].valgdeltakelse < right[ir].valgdeltakelse){
            result.push(left[il++]);
        } else {
            result.push(right[ir++]);
        }
    }

    return result.concat(left.slice(il)).concat(right.slice(ir));
  }

    /**
     * @param  {string} css - styling
     * @param  {string} bigger - The value to compare with smaller
     * @param  {string} smaller - The value to compare with bigger
     * @return {undefined} 
     */
    function showResults(css, bigger, smaller,result) {


      sublayers[0].setSQL("SELECT * FROM table_1_merge WHERE " + bigger + " > " + smaller + " OR resultat='"+result+"'");
      sublayers[0].setCartoCSS(css);
      var bigger = bigger;

      var query = "SELECT prosent_nei,prosent_ja,prosent_blankt,resultat,kommune,valgdeltakelse,kommentar,kommentar_2,kommentar_3 FROM table_1_merge WHERE (" + bigger + " > " + smaller + ") AND resultat='"+result+"'";
      DataHandler.getData("andreasroeed",query, function(data) {
        var topRated = [];
        var sorted = mergeSort(data.rows);
        //Get the highest elements
        topRated = sorted.slice(-10);
        topRated = topRated.reverse();
        var data = [topRated[0], topRated[1], topRated[2],topRated[3],topRated[4],topRated[5],topRated[6],topRated[7],topRated[8],topRated[9]];
        ChartHandler.decidedChart(topRated, bigger);
        
      });
    };
    /**
     * NOT in USE
     * @param  {string} attribute - The attribute to check
     * @param  {string} input - The input value to compare with @param attribute
     * @return {undefined} 
     */
    function byCount(attribute, input) {
      sublayers[0].setSQL("SELECT * FROM table_1_merge WHERE " + attribute + " >= " + input + "");
      sublayers[0].setCartoCSS(cssyes);
    };
    /**
     * @param  {string} attribute
     * @param  {string} input
     * @return {[undefined]}
     */
    function byName(attribute, input) {
      var cssyes = "#table_1_merge{line-color: #000000;polygon-fill:#003762}";
      var cssno = "#table_1_merge{line-color: #000000;polygon-fill:#940E19}";

      var result = "";
      var color = "";

      var inputString = "'" + input + "'";
      var mapQuery = "SELECT * FROM table_1_merge WHERE " + attribute + " ILIKE " + inputString;

      DataHandler.getData("andreasroeed",mapQuery,function(data){
        mapQuery = "SELECT * FROM table_1_merge WHERE " + attribute + " ILIKE " + inputString;
        var css = data.rows[0].resultat == "ja" ? cssyess : cssno;
        sublayers[0].setSQL(mapQuery);
        sublayers[0].setCartoCSS(css);
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