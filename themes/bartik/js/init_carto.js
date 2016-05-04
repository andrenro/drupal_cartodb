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



      function changeLegend(start, end) {
          $('#legend').html("" + new Date(start).getDay()+"/"+new Date(start).getMonth()+"/"+new Date(start).getFullYear()+ " - "+new Date(end).getDay()+"/"+new Date(end).getMonth()+"/"+new Date(end).getFullYear());
      }
      function addTimeSlider(sublayer) {
         var sql = cartodb.SQL({ user: 'andreasroeed' });
         // fetch time range
         sql.execute('SELECT max(vedtatt_dato), min(vedtatt_dato) FROM n2000_m_datestamps', function(data) {
           var range = data.rows[0];
           var max = new Date(range.max).getTime();
           var min = new Date(range.min).getTime();

           // update slider with range
           $("#slider").slider({
              min: min,
              max: max,
              values: [min,max],
              slide: function(event, ui) {
                // give feedback to the user on slide change
                changeLegend(ui.values[0], ui.values[1]);
              },
              stop: function( event, ui ) { 
                // when user selects the dates, update the layer with the range
                // var start = new Date(ui.values[0]).toISOString()
                // var end = new Date(ui.values[1]).toISOString();

                startDate = new Date(ui.values[0]);
                endDate = new Date(ui.values[1]);

                start = startDate.getDay()+"/"+startDate.getMonth()+"/"+startDate.getFullYear()+"";
                end = endDate.getDay()+"/"+endDate.getMonth()+"/"+endDate.getFullYear()+"";

                var query = "SELECT * FROM n2000_m_datestamps WHERE vedtatt_dato >="+"'"+ start +"'"+" AND vedtatt_dato <="+"'"+ end +"'";
                sublayers[0].setSQL(query);
                sublayers[0].setCartoCSS(cssyes);
              }
            });
            changeLegend(min, (min + max)/ 2);
         });
      }
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
      addTimeSlider(sublayer[0]);
  })
  .on("error",function(err){
          alert("err: "+err);
      });
  });
}//main ends

window.onload = main;

function getData(queryString,callback){
  $(document).ready(function(){
    var data; 
    var sql = new cartodb.SQL({ user: 'andreasroeed' });
    sql.execute(queryString)
      .done(function(data) {

        callback(data.rows[0]);
    })
      .error(function(errors) {
      // errors contains a list of errors
      console.log("errors:" + errors);
    })
  }); 
}


var layerSelections = {
  No: function(){
   sublayers[0].setSQL("SELECT * FROM n2000_m_datestamps WHERE NEI > JA");
   sublayers[0].setCartoCSS(cssno);
   return true;
  },
  Yes: function(){
   sublayers[0].setSQL("SELECT * FROM n2000_m_datestamps WHERE JA > NEI");
   sublayers[0].setCartoCSS(cssyes);
  },
  byCount: function(attribute, input){
   sublayers[0].setSQL("SELECT * FROM n2000_m_datestamps WHERE "+attribute+" >= "+input+"");
   sublayers[0].setCartoCSS(cssyes);
  },
  byName: function(attribute,input){
   var inputString = "'"+input+"'";
   var mapQuery = "SELECT * FROM n2000_m_datestamps WHERE "+attribute+" ILIKE "+inputString;
   sublayers[0].setSQL(mapQuery);
   sublayers[0].setCartoCSS(cssyes);
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
    getData(query, function(data){
            console.log(data);
            dataArray = [];
            dataArray.push(data.ja);
            dataArray.push(data.nei);
            dataArray.push(data.blank);
            dataArray.push(data.navn);
            dataArray.push(data.deltakelse);
            ChartHandler.updateChart(dataArray);
    });

    layerSelections["byName"]("navn",$(this).val());


  });

  $("#Yes").click(function(){
    layerSelections["Yes"]();
  });

});