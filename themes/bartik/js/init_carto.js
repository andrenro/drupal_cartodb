//Global Map Object
var map;
var layerUrl = "https://andreasroeed.cartodb.com/api/v2/viz/12bc1e9c-16aa-11e6-9485-0ecd1babdde5/viz.json";
var sublayers = [];


var cssyes = "#merged_maps_data{line-color: #000000;polygon-fill:#41834B}";
var cssno = "#merged_maps_data{line-color: #000000;polygon-fill:#940E19}";

function main() {
    
$(document).ready(function(){

      //Creates a new chart 
      ChartHandler.initChart();

      // Choose center and zoom level
    var options = {
        center: [63.44,10.42], // Trondheim
        zoom: 5,
        minZoom: 5,
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
  No: function(){
   sublayers[0].setSQL("SELECT * FROM merged_maps_data WHERE NEI > JA");
   sublayers[0].setCartoCSS(cssno);
   sublayers[0].setInteractivity("cartodb_id","name_munic");
   cartodb.vis.Vis.addInfowindow(map,sublayers[0],["ja","nei","blank","name_munic"]);
  

  },
  Yes: function(){
   sublayers[0].setSQL("SELECT * FROM merged_maps_data WHERE JA > NEI");
   sublayers[0].setCartoCSS(cssyes);
   cartodb.vis.Vis.addInfowindow(map,sublayers[0],["ja","nei","blank","name_munic"]);
  },
  byCount: function(attribute, input){
   sublayers[0].setSQL("SELECT * FROM merged_maps_data WHERE "+attribute+" >= "+input+"");
   sublayers[0].setCartoCSS(cssyes);
   cartodb.vis.Vis.addInfowindow(map,sublayers[0],["ja","nei","blank","name_munic"]);
  },
  byName: function(attribute,input){
   var inputString = "'"+input+"'";
   var mapQuery = "SELECT * FROM merged_maps_data WHERE "+attribute+" ILIKE "+inputString;
   sublayers[0].setSQL(mapQuery);
   sublayers[0].setCartoCSS(cssyes);
   cartodb.vis.Vis.addInfowindow(map,sublayers[0],["ja","nei","blank"]);
  }
}




//Handle click events
$(document).ready(function(){

  $("#No").click(function(){
    layerSelections["No"]();
  });

  $("#byCount").change(function(){
    layerSelections["byCount"]("NEI",$(this).val());
  });

  $("#byName").change(function(){
    if($(this).val() === ""){
      query = "SELECT ja,nei,blank,name_munic,deltakelse FROM merged_maps_data";
    }else{
      query = "SELECT ja,nei,blank,name_munic,deltakelse FROM merged_maps_data WHERE name_munic ILIKE '"+$(this).val()+"'";
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