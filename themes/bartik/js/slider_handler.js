$(document).ready(function() {

  SliderHandler = (function() {

    changeLegend = function(start, end) {
      var startMonth = new Date(start).getMonth() + 1;
      var endMonth = new Date(end).getMonth() + 1;
      $('#legend').html("" + new Date(start).getDate() + "/" + startMonth + "/" + new Date(start).getFullYear() + " - " + new Date(end).getDate() + "/" + endMonth + "/" + new Date(end).getFullYear());
    }

    addTimeSlider = function(sublayer) {
      var sql = cartodb.SQL({
        user: 'andreasroeed'
      });
      // fetch time range
      DataHandler.getData('andreasroeed', 'SELECT max(vedtatt_dato), min(vedtatt_dato) FROM norge', function(data) {
        var range = data.rows[0];
        var max = new Date(range.max).getTime();
        var min = new Date(range.min).getTime();


        // update slider with range
        $("#slider").slider({
          min: min,
          max: max,
          range: "min",
          values: [min, max],
          value: min,
          slide: function(event, ui) {
            // give feedback to the user on slide change
            changeLegend(ui.values[0], ui.values[1]);

          },
          stop: function(event, ui) {
            var startDate = new Date(ui.values[0]);
            var endDate = new Date(ui.values[1]);
            var startMonth = startDate.getMonth() + 1;
            var endMonth = endDate.getMonth() + 1;

            var start = startMonth + "/" + startDate.getDate() + "/" + startDate.getFullYear();
            var end = endMonth + "/" + endDate.getDate() + "/" + endDate.getFullYear();

            var query = "SELECT * FROM norge WHERE vedtatt_dato >=" + "'" + start + "'" + " AND vedtatt_dato <=" + "'" + end + "'";


            sublayers[0].setSQL(query);
            sublayers[0].setCartoCSS(cssyes);
            cartodb.vis.Vis.addInfowindow(map, sublayers[0], ["kommunenavn", "ja", "nei", "blank"]);
          }
        });
        changeLegend(min, max);
      });
    }

    return {
      addTimeSlider: addTimeSlider,
      changeLegend: changeLegend
    }



  })();


});