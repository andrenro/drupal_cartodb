$(document).ready(function(){

 LayersHandler = (function(){


  function showTotal(){
    sublayers[0].setSQL("SELECT * FROM norge");
    sublayers[0].setCartoCSS("#norge[resultat='ja']{line-color: #000000;polygon-fill:#41834B} #norge[resultat='nei']{line-color: #000000;polygon-fill:#940E19} #norge[resultat='N/A']{line-color: #000000;polygon-fill:#ACACAC}");
    cartodb.vis.Vis.addInfowindow(map,sublayers[0],["ja","nei","blank","kommunenavn"]);

    var ja_count = 0;
    var nei_count = 0;
    var na_count = 0;
    var total = 0;

    DataHandler.getData("andreasroeed","SELECT * FROM norge",function(data){

      for(var x = 0; x < data.rows.length;x++){
        if(data.rows[x].resultat == "ja"){
          ja_count++;
        }else if(data.rows[x].resultat == "nei"){
          nei_count++;
        }else if(data.rows[x].resultat == "N/A"){
          na_count++;
        }else{
          continue;
        }
      }

      total = ja_count + nei_count + na_count;

      var percent_ja = (ja_count*100) / total;
      var percent_nei = (nei_count *100) / total;
      var percent_na = (na_count*100) / total;

      var data = [percent_ja,percent_nei,percent_na];

      ChartHandler.showTotal(data);

    });
  };

  function showResults(css, bigger,smaller){
   sublayers[0].setSQL("SELECT * FROM norge WHERE " + bigger+" > " + smaller+"");
   console.log(css);
   sublayers[0].setCartoCSS(css);
   var bigger = bigger;

    DataHandler.getData("andreasroeed","SELECT nei,ja,blank,resultat,kommunenavn,deltakelse FROM norge WHERE "+bigger+" > "+smaller+" ORDER BY deltakelse DESC",function(data){
      var data = [data.rows[0],data.rows[1],data.rows[2]];
      ChartHandler.decidedChart(data,bigger);

    });

   sublayers[0].setInteractivity("cartodb_id","kommunenavn");
   cartodb.vis.Vis.addInfowindow(map,sublayers[0],["ja","nei","blank","kommunenavn"]);
  };

  function byCount(attribute, input){
   sublayers[0].setSQL("SELECT * FROM norge WHERE "+attribute+" >= "+input+"");
   sublayers[0].setCartoCSS(cssyes);
   cartodb.vis.Vis.addInfowindow(map,sublayers[0],["ja","nei","blank","kommunenavn"]);
  };

  function byName(attribute,input){
   var inputString = "'"+input+"'";
   var mapQuery = "SELECT * FROM norge WHERE "+attribute+" ILIKE "+inputString;
   sublayers[0].setSQL(mapQuery);
   sublayers[0].setCartoCSS(cssyes);
   cartodb.vis.Vis.addInfowindow(map,sublayers[0],["kommunenavn","ja","nei","blank"]);
  };

  return {
    showTotal : showTotal,
    showResults : showResults,
    byCount : byCount,
    byName : byName
  }

})();

});