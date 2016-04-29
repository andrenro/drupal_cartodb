
function main() {




    $(document).ready(function(){


      var map;
      var layerUrl = 'https://andreasroeed.cartodb.com/api/v2/viz/042a9344-0dd7-11e6-8421-0e3ff518bd15/viz.json';

      map = cartodb.createVis('map', layerUrl)
      .done(function(vis, layers) {
      });


      var mapOptions = {
        zoom: 5,
        center: [10, 59]
      };
      map = new L.Map('map', mapOptions);

      var sublayers = [];

      cartodb.createLayer(map,layerUrl).addTo(map).on('done', function(layer) {
            // change the query for the first layer
        var subLayerOptions = {
          sql: "SELECT * FROM n2000_kommunekart_uten_hav_data WHERE JA >= 20000",
          cartocss: ""
        };


        var sublayer = layer.getSubLayer(0);

        sublayer.set(subLayerOptions);

        sublayers.push(sublayer);

        }).on('error', function(error) {
          console.log(error);
        });
});


      // var layerSource = {
      // user_name: 'andreasroeed',
      // type: 'cartodb',
      // sublayers: [{
      //   sql: "SELECT * FROM n2000_kommunekart_uten_hav_data",
      //   cartocss: '#table_name_1 '
      // }, 
      // {
      //   sql: "SELECT * FROM n2000_kommunekart_uten_hav_data WHERE JA >= 20000",
      //   cartocss: '#table_name_2 '
      // }]
      // };

    // cartodb.createVis('map', 'https://andreasroeed.cartodb.com/api/v2/viz/042a9344-0dd7-11e6-8421-0e3ff518bd15/viz.json', {
    //         shareable: true,
    //         title: true,
    //         description: true,
    //         search: true, tiles_loader: true, center_lat: 59, center_lon: 10, zoom: 5
    //     }).done(function(vis, layers) {
    
    //       // layer 0 is the base layer, layer 1 is cartodb layer
    //       // setInteraction is disabled by default
    //       layers[1].setInteraction(true);
    //       layers[1].on('featureOver', function(e, latlng, pos, data) {
    //         cartodb.log.log(e, latlng, pos, data);
    //       });
    //       // you can get the native map to work with it
    //       var map = vis.getNativeMap();
    //       // now, perform any operations you need
    //       // map.setZoom(3);
    //       // map.panTo([50.5, 30.5]);
    //     }).error(function(err) {
    //       console.log(err);
    //     });

    // });
}

function query(){
    var map;
    var mapOptions = {
    zoom: 5,
    center: [43, 0]
    };
  map = new L.Map('map', mapOptions);

  cartodb.createLayer(map, 'http://andreasroeed.cartodb.com/api/v2/viz/2b13c956-e7c1-11e2-806b-5404a6a683d5/viz.json').addTo(map).on('done', function(layer) {
    layer
      .on('featureOver', function(e, latlng, pos, data) {
        console.log(e, latlng, pos, data);
      })
      .on('error', function(err) {
        console.log('error: ' + err);
      });
  }).on('error', function(err) {
    console.log("some error occurred: " + err);
  });
}


window.onload = main;

