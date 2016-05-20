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

    }


    return {
      getData: getData,
    }


  })();

});