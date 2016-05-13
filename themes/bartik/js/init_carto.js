//Global Map Object
var map;
var layerUrl = "https://andreasroeed.cartodb.com/api/v2/viz/f1c11650-18fe-11e6-90db-0e787de82d45/viz.json";
var sublayers = [];


var cssyes = "#norge{line-color: #000000;polygon-fill:#41834B}";
var cssno = "#norge{line-color: #000000;polygon-fill:#940E19}";

function main() {
    
$(document).ready(function(){
    //Check if DOM-element exists on this page
    if($("#map").length == 0){
      return false;
    }

    //Creates a new chart 
    ChartHandler.initChart();

      // Choose center and zoom level
    var options = {
        center: [63.44,10.42], // Trondheim
        zoom: 4,
        minZoom: 4,
        maxZoom: 7
    }

    // Instantiate map on specified DOM element
    map = new L.Map('map',options);
    var standard = 'http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png'
    var stamen = 'http://tile.stamen.com/toner/{z}/{x}/{y}.png'
    // Add a basemap to the map object just created
    L.tileLayer(standard, {
    attribution: 'Stamen'
    }).addTo(map);

  cartodb.createLayer(map,layerUrl)
  .addTo(map)
  .on("done",function(layer){
      var sublayer = layer.getSubLayer(0);
      sublayers.push(sublayer);
      SliderHandler.addTimeSlider(sublayer[0]);
  })
  .on("error",function(err){
          alert("err: "+err);
      });
  });
}//main ends

window.onload = main;




var layerSelections = {

  Total : function(){
    sublayers[0].setSQL("SELECT * FROM norge");
    sublayers[0].setCartoCSS("#norge[resultat='ja']{line-color: #000000;polygon-fill:#41834B} #norge[resultat='nei']{line-color: #000000;polygon-fill:#940E19} #norge[resultat='N/A']{line-color: #000000;polygon-fill:#ACACAC}");
    cartodb.vis.Vis.addInfowindow(map,sublayers[0],["ja","nei","blank","name_munic"]);

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

      var percent_ja = (ja_count*100)/total;
      var percent_nei = (nei_count *100)/total;
      var percent_na = (na_count*100)/total;

      var data = [percent_ja,percent_nei,percent_na];

      ChartHandler.showTotal(data);




    });

  },

  No: function(){
   sublayers[0].setSQL("SELECT * FROM norge WHERE NEI > JA");
   sublayers[0].setCartoCSS(cssno);
   sublayers[0].setInteractivity("cartodb_id","name_munic");
   cartodb.vis.Vis.addInfowindow(map,sublayers[0],["ja","nei","blank","name_munic"]);
  

  },
  Yes: function(){
   sublayers[0].setSQL("SELECT * FROM norge WHERE JA > NEI");
   sublayers[0].setCartoCSS(cssyes);
   sublayers[0].setInteractivity("cartodb_id","name_munic");
   cartodb.vis.Vis.addInfowindow(map,sublayers[0],["ja","nei","blank","name_munic"]);
  },
  byCount: function(attribute, input){
   sublayers[0].setSQL("SELECT * FROM norge WHERE "+attribute+" >= "+input+"");
   sublayers[0].setCartoCSS(cssyes);
   cartodb.vis.Vis.addInfowindow(map,sublayers[0],["ja","nei","blank","name_munic"]);
  },
  byName: function(attribute,input){
   var inputString = "'"+input+"'";
   var mapQuery = "SELECT * FROM norge WHERE "+attribute+" ILIKE "+inputString;
   sublayers[0].setSQL(mapQuery);
   sublayers[0].setCartoCSS(cssyes);
   cartodb.vis.Vis.addInfowindow(map,sublayers[0],["name_munic","ja","nei","blank"]);
  }
}




//Handle click events
$(document).ready(function(){


  $("#total").click(function(){
    layerSelections["Total"]();
  });

  $("#No").click(function(){
    layerSelections["No"]();
  });

  $("#byCount").change(function(){
    layerSelections["byCount"]("NEI",$(this).val());
  });

  $("#byName").change(function(){
    if($(this).val() === ""){
      query = "SELECT ja,nei,blank,name_munic,deltakelse FROM norge";
    }else{
      query = "SELECT ja,nei,blank,name_munic,deltakelse FROM norge WHERE name_munic ILIKE '"+$(this).val()+"'";
    }

    DataHandler.getData("andreasroeed",query, function(data){
            dataArray = [];
            dataArray.push(data.rows[0].ja);
            dataArray.push(data.rows[0].nei);
            dataArray.push(data.rows[0].blank);
            dataArray.push(data.rows[0].deltakelse);

            ChartHandler.updateChart(dataArray);
    });

    layerSelections["byName"]("name_munic",$(this).val());


  });

  $("#Yes").click(function(){
    layerSelections["Yes"]();
  });

});