$(document).ready(function() {


  DataHandler = (function() {



    getData = function(user, queryString, callback) {

      var data;
      var sql = new cartodb.SQL({
        user: user
      });
      sql.execute(queryString)
        .done(function(data) {
          callback(data);
        })
        .error(function(errors) {
          // errors contains a list of errors
          console.log("errors:" + errors);
        });

    };


    exportJSON = function(queryString){
      var data;
      $.getJSON('https://andreasroeed.cartodb.com/api/v2/sql/?q='+queryString, function(data) {
        $.each(data.rows, function(key, val) {
          "https://andreasroeed.cartodb.com/api/v2/sql?filename=export.csv&q=SELECT * FROM table_1_merge";
          // console.log(key);
          // console.log(val);
          // do something!
        });
      });
    };


    return {
      getData: getData,
      exportJSON: exportJSON
    }


  })();

});