//Global Map Object
var map;
var layerUrl = "https://andreasroeed.cartodb.com/api/v2/viz/b88ab2b8-1108-11e6-9018-0e674067d321/viz.json";
var sublayers = [];


var cssyes = "#n2000_m_datestamps{line-color: #000000;polygon-fill:#008000}";
var cssno = "#n2000_m_datestamps{line-color: #000000;polygon-fill:#ff0000}";

function main() {
    
$(document).ready(function(){

      //Creates a new chart 
      ChartHandler.initChart();

      // Choose center and zoom level
    var options = {
        center: [63.44,10.42], // Trondheim
        zoom: 4,
        minZoom: 4,
        maxZoom: 6
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
   sublayers[0].setSQL("SELECT * FROM n2000_m_datestamps WHERE NEI > JA");
   sublayers[0].setCartoCSS(cssno);
   sublayers[0].setInteractivity("cartodb_id","navn");
   cartodb.vis.Vis.addInfowindow(map,sublayers[0],["ja","nei","blank","navn"]);
  

  },
  Yes: function(){
   sublayers[0].setSQL("SELECT * FROM n2000_m_datestamps WHERE JA > NEI");
   sublayers[0].setCartoCSS(cssyes);
   cartodb.vis.Vis.addInfowindow(map,sublayers[0],["ja","nei","blank","navn"]);
  },
  byCount: function(attribute, input){
   sublayers[0].setSQL("SELECT * FROM n2000_m_datestamps WHERE "+attribute+" >= "+input+"");
   sublayers[0].setCartoCSS(cssyes);
   cartodb.vis.Vis.addInfowindow(map,sublayers[0],["ja","nei","blank","navn"]);
  },
  byName: function(attribute,input){
   var inputString = "'"+input+"'";
   var mapQuery = "SELECT * FROM n2000_m_datestamps WHERE "+attribute+" ILIKE "+inputString;
   sublayers[0].setSQL(mapQuery);
   sublayers[0].setCartoCSS(cssyes);
   cartodb.vis.Vis.addInfowindow(map,sublayers[0],["ja","nei","blank","navn"]);
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
      query = "SELECT ja,nei,blank,navn,deltakelse FROM n2000_m_datestamps";
    }else{
      query = "SELECT ja,nei,blank,navn,deltakelse FROM n2000_m_datestamps WHERE navn ILIKE '"+$(this).val()+"'";
    }

    DataHandler.getData("andreasroeed",query, function(data){
            dataArray = [];
            dataArray.push(data.rows[0].ja);
            dataArray.push(data.rows[0].nei);
            dataArray.push(data.rows[0].blank);
            dataArray.push(data.rows[0].navn);
            dataArray.push(data.rows[0].deltakelse);

            ChartHandler.updateChart(dataArray);
    });

    layerSelections["byName"]("navn",$(this).val());


  });

  $("#Yes").click(function(){
    layerSelections["Yes"]();
  });

});