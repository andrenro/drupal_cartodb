//Global Map Object
var map;
var layerUrl = "https://andreasroeed.cartodb.com/api/v2/viz/30d7d54e-3e8f-11e6-b439-0e31c9be1b51/viz.json";
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
      })
      .on("error", function(err) {
        alert("err: " + err);
      });
  });
} //main ends

window.onload = main;


//Handle click events
$(document).ready(function() {


  $("#ownage").click(function() {
    var css = "#oversikt_havner_data_2[eiendeler_i_mill_kr < 100]{marker-fill-opacity: 0.9;marker-line-color: #FFF;marker-line-width: 1;marker-line-opacity: 1;marker-placement: point;marker-type: ellipse;marker-width: 10;marker-fill: #008fff;marker-allow-overlap: true;}#oversikt_havner_data_2[eiendeler_i_mill_kr  >= 100]{marker-fill-opacity: 0.9;marker-line-color: #FFF;marker-line-width: 1;marker-line-opacity: 1;marker-placement: point;marker-type: ellipse;marker-width: 15;marker-fill: #0063b0;marker-allow-overlap: true;}#oversikt_havner_data_2[eiendeler_i_mill_kr  >= 500]{marker-fill-opacity: 0.9;marker-line-color: #FFF;marker-line-width: 1;marker-line-opacity: 1;marker-placement: point;marker-type: ellipse;marker-width: 20;marker-fill: #2167AB;marker-allow-overlap: true;}#oversikt_havner_data_2[eiendeler_i_mill_kr >= 1000]{marker-fill-opacity: 0.9;marker-line-color: #FFF;marker-line-width: 1;marker-line-opacity: 1;marker-placement: point;marker-type: ellipse;marker-width: 32;marker-fill: #003762;marker-allow-overlap: true;}";
    LayersHandler.showResults(css);
  });

  $("#income").click(function() {
    var css = "#oversikt_havner_data_2[driftsinntekter_i_mill_kr < 10]{marker-fill-opacity: 0.9;marker-line-color: #FFF;marker-line-width: 1;marker-line-opacity: 1;marker-placement: point;marker-type: ellipse;marker-width: 10;marker-fill: #008fff;marker-allow-overlap: true;}#oversikt_havner_data_2[driftsinntekter_i_mill_kr  >= 10]{marker-fill-opacity: 0.9;marker-line-color: #FFF;marker-line-width: 1;marker-line-opacity: 1;marker-placement: point;marker-type: ellipse;marker-width: 15;marker-fill: #0063b0;marker-allow-overlap: true;}#oversikt_havner_data_2[driftsinntekter_i_mill_kr  >= 50]{marker-fill-opacity: 0.9;marker-line-color: #FFF;marker-line-width: 1;marker-line-opacity: 1;marker-placement: point;marker-type: ellipse;marker-width: 20;marker-fill: #2167AB;marker-allow-overlap: true;}#oversikt_havner_data_2[driftsinntekter_i_mill_kr >= 100]{marker-fill-opacity: 0.9;marker-line-color: #FFF;marker-line-width: 1;marker-line-opacity: 1;marker-placement: point;marker-type: ellipse;marker-width: 32;marker-fill: #003762;marker-allow-overlap: true;}";
    LayersHandler.showResults(css);
  });

  $("#capital").click(function() {
    var css = "#oversikt_havner_data_2[egenkapital_2015_i_mill_kr < 100]{marker-fill-opacity: 0.9;marker-line-color: #FFF;marker-line-width: 1;marker-line-opacity: 1;marker-placement: point;marker-type: ellipse;marker-width: 10;marker-fill: #008fff;marker-allow-overlap: true;}#oversikt_havner_data_2[egenkapital_2015_i_mill_kr  >= 100]{marker-fill-opacity: 0.9;marker-line-color: #FFF;marker-line-width: 1;marker-line-opacity: 1;marker-placement: point;marker-type: ellipse;marker-width: 15;marker-fill: #0063b0;marker-allow-overlap: true;}#oversikt_havner_data_2[egenkapital_2015_i_mill_kr  >= 500]{marker-fill-opacity: 0.9;marker-line-color: #FFF;marker-line-width: 1;marker-line-opacity: 1;marker-placement: point;marker-type: ellipse;marker-width: 20;marker-fill: #2167AB;marker-allow-overlap: true;}#oversikt_havner_data_2[egenkapital_2015_i_mill_kr>= 1000]{marker-fill-opacity: 0.9;marker-line-color: #FFF;marker-line-width: 1;marker-line-opacity: 1;marker-placement: point;marker-type: ellipse;marker-width: 32;marker-fill: #003762;marker-allow-overlap: true;}";
    LayersHandler.showResults(css);
  });

  $("#capital_shares").click(function() {
    var css = "#oversikt_havner_data_2[egenkapitalandel_i_prosent  < 25]{marker-fill-opacity: 0.9;marker-line-color: #FFF;marker-line-width: 1;marker-line-opacity: 1;marker-placement: point;marker-type: ellipse;marker-width: 10;marker-fill: #008fff;marker-allow-overlap: true;}#oversikt_havner_data_2[egenkapitalandel_i_prosent   >= 25]{marker-fill-opacity: 0.9;marker-line-color: #FFF;marker-line-width: 1;marker-line-opacity: 1;marker-placement: point;marker-type: ellipse;marker-width: 15;marker-fill: #0063b0;marker-allow-overlap: true;}#oversikt_havner_data_2[egenkapitalandel_i_prosent   >= 50]{marker-fill-opacity: 0.9;marker-line-color: #FFF;marker-line-width: 1;marker-line-opacity: 1;marker-placement: point;marker-type: ellipse;marker-width: 20;marker-fill: #2167AB;marker-allow-overlap: true;}#oversikt_havner_data_2[egenkapitalandel_i_prosent >= 65]{marker-fill-opacity: 0.9;marker-line-color: #FFF;marker-line-width: 1;marker-line-opacity: 1;marker-placement: point;marker-type: ellipse;marker-width: 32;marker-fill: #003762;marker-allow-overlap: true;}";
    LayersHandler.showResults(css);
  });

});
