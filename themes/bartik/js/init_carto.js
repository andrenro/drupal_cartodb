//Global Map Object
var map;
var layerUrl = 'https://andreasroeed.cartodb.com/api/v2/viz/042a9344-0dd7-11e6-8421-0e3ff518bd15/viz.json';

function main() {
    $(document).ready(function(){

      map = cartodb.createVis('map', layerUrl,{
           shareable: false,
           title: false,
           search: false, 
           tiles_loader: true,
               center: [59,10],
           zoom: 5
      }).done(function(vis, layers) {
        console.log(vis);
        console.log(layers);
      });
      
    });

}//main ends

function addLayer(){
  var map = new L.Map('map', {
    center: [59,10],
    zoom: 5
  });     


  var subLayerOptions = {
    sql: "SELECT * FROM n2000_kommunekart_uten_hav_data WHERE JA >= 8000",
    cartocss: "#n2000_kommunekart_uten_hav_data{line-color: #44ffdd}"
  }


  var sublayers = [];

      cartodb.createLayer(map,layerUrl).addTo(map).on("done",function(layer){

        var sublayer = layer.getSubLayer(0);
        sublayer.set(subLayerOptions);
        sublayer.setInteractive(false);
        sublayers.push(sublayer);
        console.log(sublayers);

      }).on("error",function(err){
          alert("err: "+err);
      });


}//addLayer ends

window.onload = main;
$(document).ready(function(){
  $("#makeQuery").click(function(){
  addLayer();
});

});