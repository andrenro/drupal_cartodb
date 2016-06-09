//Global Map Object
var map;
var layerUrl = "https://andreasroeed.cartodb.com/api/v2/viz/a2f54382-2e0e-11e6-8140-0e31c9be1b51/viz.json";
var sublayers = [];


function main() {

  $(document).ready(function() {

    //Check if DOM-element exists on this page
    if ($("#map").length == 0) {
      return false;
    }

    $("#warning_").hide();

    // Choose center and zoom level
    var options = {
      center: [63.44, 10.42], // Trondheim
      zoom: 4,
      minZoom: 4,
      maxZoom: 7
    }

    // Instantiate map on specified DOM element
    map = new L.Map('map', options);
    var standard = 'http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png'
    var stamen = 'http://tile.stamen.com/toner/{z}/{x}/{y}.png'
      // Add a basemap to the map object just created
    L.tileLayer(standard, {
      attribution: 'Stamen'
    }).addTo(map);

    cartodb.createLayer(map, layerUrl)
      .addTo(map)
      .on("done", function(layer) {
        var sublayer = layer.getSubLayer(0);
        sublayers.push(sublayer);
        LayersHandler.showTotal();
        // SliderHandler.addTimeSlider(sublayer[0]); // Not in use
      })
      .on("error", function(err) {
        alert("err: " + err);
      });
  });
} //main ends

window.onload = main;


//Handle click events
$(document).ready(function() {




  $("#total").click(function() {
    LayersHandler.showTotal();
  });

  $("#No").click(function() {
    var cssno = "#table_1_merge{line-color: #000000;polygon-fill:#940E19}";
    LayersHandler.showResults(cssno, "prosent_nei", "prosent_ja","nei");
  });

  $("#Yes").click(function() {
    var cssyes = "#table_1_merge{line-color: #000000;polygon-fill:#003762}";
    LayersHandler.showResults(cssyes, "prosent_ja", "prosent_nei","ja");
  });

  $("#byCount").change(function() {
    LayersHandler.byCount("prosent_nei", $(this).val());
  });

  $("#byName").change(function() {
    if ($(this).val() === "") {
      return false;
    } else {
      query = "SELECT prosent_ja,prosent_nei,prosent_blankt,kommune,valgdeltakelse FROM table_1_merge WHERE kommune ILIKE '" + $(this).val() + "'";
    }

    DataHandler.getData("andreasroeed", query, function(data) {
      dataArray = [];
      if(data.rows[0] === undefined){
        $("#warning_").html("Beklager, fant ingen kommuner med det navnet..");
        $("#byName").val("");
        $("#warning_").show();
        setTimeout(function(){$("#warning_").hide();
          return undefined;
         }, 3000);
      }
      

      
      if(data.rows[0].prosent_nei < 1 || data.rows[0].prosent_ja < 1){
        $("#warning_").html("Ingen, eller manglende data for denne kommunen");
        $("#warning_").show();
        setTimeout(function(){$("#warning_").hide();
          return undefined;
         }, 3000);

        
      }else{

        var search_value = data.rows[0].kommune;
        dataArray.push(data.rows[0].prosent_ja);
        dataArray.push(data.rows[0].prosent_nei);
        dataArray.push(data.rows[0].prosent_blankt);
        dataArray.push(data.rows[0].valgdeltakelse);
        dataArray.push(data.rows[0].kommune);

        ChartHandler.updateChart(dataArray,function(){
          LayersHandler.byName("kommune", search_value);
          $("#byName").val("");
        });


      }
    });
    

    


  });

});