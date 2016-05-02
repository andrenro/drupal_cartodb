//Global Map Object
var map;
var layerUrl = "https://andreasroeed.cartodb.com/api/v2/viz/a499d7c2-0dd7-11e6-83b7-0ea31932ec1d/viz.json";
var sublayers = [];

var cssyes = "#n2000_kommunekart_uten_hav_data{line-color: #000000;polygon-fill:#008000}";
var cssno = "#n2000_kommunekart_uten_hav_data{line-color: #000000;polygon-fill:#ff0000}";

function main() {
    
$(document).ready(function(){

  // Choose center and zoom level
  var options = {
    center: [63.44,10.42], // Trondheim
    zoom: 4
  }

  // Instantiate map on specified DOM element
  map = new L.Map('map',options);

  // Add a basemap to the map object just created
  L.tileLayer('http://tile.stamen.com/toner/{z}/{x}/{y}.png', {
    attribution: 'Stamen'

  }).addTo(map);



  cartodb.createLayer(map,layerUrl).addTo(map).on("done",function(layer){
        var sublayer = layer.getSubLayer(0);
        sublayers.push(sublayer);

      }).on("error",function(err){
          alert("err: "+err);
      });
      
  });

}//main ends



window.onload = main;




var layerSelections = {
  No: function(){
   sublayers[0].setSQL("SELECT * FROM n2000_kommunekart_uten_hav_data WHERE NEI > JA");
   sublayers[0].setCartoCSS(cssno);
   return true;
  },
  Yes: function(){
   sublayers[0].setSQL("SELECT * FROM n2000_kommunekart_uten_hav_data WHERE JA > NEI");
   sublayers[0].setCartoCSS(cssyes);
  }

}



//Handle click events
$(document).ready(function(){

  $("#No").click(function(){
    layerSelections["No"]();
  });

  $("#Yes").click(function(){
    layerSelections["Yes"]();
  });

});