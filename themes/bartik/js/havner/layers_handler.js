$(document).ready(function() {

  /**
   *
   * @return public object literal containing function objects
   */
  LayersHandler = (function() {

    /**
     * @param  {string} css - styling
     * @param  {string} bigger - The value to compare with smaller
     * @param  {string} smaller - The value to compare with bigger
     * @return {undefined}
     */
    function showResults(css) {

      sublayers[0].setSQL("SELECT * FROM oversikt_havner_data_2 WHERE driftsinntekter_i_mill_kr IS NOT NULL");
      sublayers[0].setCartoCSS(css);

      var query = "SELECT * FROM oversikt_havner_data_2 WHERE driftsinntekter_i_mill_kr IS NOT NULL";
      DataHandler.getData("andreasroeed",query, function(data) {
      });
    };

    return {
      showResults: showResults
    }

  })();

});
