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
      LayersHandler.showTotal();

      // SliderHandler.addTimeSlider(sublayer[0]);
  })
  .on("error",function(err){
          alert("err: "+err);
      });
  });
}//main ends

window.onload = main;


//Handle click events
$(document).ready(function(){


  $("#total").click(function(){
    LayersHandler.showTotal();
  });

  $("#No").click(function(){
    LayersHandler.showResults(cssno,"nei","ja");
  });

  $("#Yes").click(function(){ 
    LayersHandler.showResults(cssyes,"ja","nei"); 
  });

  $("#byCount").change(function(){
    LayersHandler.byCount("NEI",$(this).val());
  });

  $("#byName").change(function(){
    if($(this).val() === ""){
      query = "SELECT ja,nei,blank,kommunenavn,deltakelse FROM norge";
    }else{
      query = "SELECT ja,nei,blank,kommunenavn,deltakelse FROM norge WHERE kommunenavn ILIKE '"+$(this).val()+"'";
    }

    DataHandler.getData("andreasroeed",query, function(data){
            dataArray = [];
            dataArray.push(data.rows[0].ja);
            dataArray.push(data.rows[0].nei);
            dataArray.push(data.rows[0].blank);
            dataArray.push(data.rows[0].deltakelse);

            ChartHandler.updateChart(dataArray);
    });

    LayersHandler.byName("kommunenavn",$(this).val());


  });

});