$(document).ready(function() {

      PopulationChartHandler = (function() {


        function populationGraph(data) {
          new Highcharts.Chart({
            chart: {
              renderTo: "population_graph",
              type: 'line',

            },
            title: {
              text: '',
              x: "" //center
            },
            xAxis: {
              categories: ["2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026"]
            },
            yAxis: {
              title: {
                text: ' Personer'
              },
              plotLines: [{
                value: 0,
                width: 2,
                color: '#003762'
              }]
            },
            tooltip: {
              valueSuffix: ' Personer'
            },
            legend: {
              layout: 'vertical',
              align: 'right',
              verticalAlign: 'middle',
              borderWidth: 0
            },
            series: [{
              name: '',
              data: data
            }]
          });

        }

        function fundingPerInhabitantChart(data) {

          new Highcharts.Chart({
            chart: {
              renderTo: "funding_chart_container",
              type: 'column',

            },
            colors: ['#003762', '#940E19'],
            title: {
              text: ''
            },
            xAxis: {
              categories: ["Vedtatt inntekt per innbygger", "Inntekt per innbygger (justert etter behov)"]
            },
            yAxis: {
              title: {
                text: 'Kroner'
              }
            },
            series: [{
              name: "Norske Kroner",
              data: [{
                name: "Vedtatt inntekt per innbygger",
                y: parseFloat(data[1].toFixed(2)),
                color: "#003762"
              }, {
                name: "Inntekt per innbygger (justert etter behov)",
                y: parseFloat(data[0].toFixed(2)),
                color: "#940E19"
              }]
            }]
          });
        }
        //Due to the fact that the general case only shows small changes, a chart seems to be redundant.
        function showQuarterlyDelta(data) {
          var diff = (data[1] - data[0]) < 0 ? +(data[1] - data[0]) : "+" + (data[1] - data[0]);
          var cal = MathHandler.percentageOf(data[1], data[0]);

          var deltaVal = (cal - 100).toFixed(2);
          var delta = deltaVal < 0 ? deltaVal : "+" + deltaVal


          $("#entrance-quarter").html("Inngangen av kvartalet: <strong>" + parseInt(data[0]) + "</strong>");
          $("#exit-quarter").html("Utgangen av kvartalet: <strong>" + parseInt(data[1]) + "</strong>");
          $("#delta").html("Antall personer: <strong>" + diff + "</strong>");
          $("#delta-percentage").html("Prosentvis endring: <strong>" + delta + "%</strong>");



          // new Highcharts.Chart({
          //     chart: {
          //         renderTo: "chart_container",
          //         type: 'column'
          //     },
          //     title: {
          //         text: "Kvartalsmessig endring i folketall: " + diff + " personer<br>(" + delta + " %)"
          //     },
          //     xAxis: {
          //         categories: ["Inngangen av kvartalet", "Utgangen av kvartalet"]
          //     },
          //     yAxis: {
          //         title: {
          //             text: 'Antall personer'
          //         }
          //     },
          //     series: [{
          //         name: "Antall Personer",
          //         data: [{
          //             name: "Inngangen av kvartalet",
          //             y: parseInt(data[0].toFixed(2)),
          //             color: "#003762"
          //         }, {
          //             name: "Utgangen av kvartalet",
          //             y: parseInt(data[1].toFixed(2)),
          //             color: "#940E19"
          //         }]
          //     }]
          // });
        }

        return {
          showQuarterlyDelta: showQuarterlyDelta,
          fundingPerInhabitantChart: fundingPerInhabitantChart,
          populationGraph: populationGraph
        }

      })();

      //Handles the top 10 and bottom 10 list over municipality and their expenditure needs and yearly government based income
      RankingsHandler = (function() {

        //Returns a sorted list of municipality-elements based on the expenditure_needs value
        function getSortedList(data) {

          var temp = data.sort(function(a, b) {
            if (parseFloat(a["expenditure_needs"]) > parseFloat(b["expenditure_needs"])) {
              return 1;
            }
            if (parseFloat(a["expenditure_needs"]) < parseFloat(b["expenditure_needs"])) {
              return -1;
            }
            return 0;
          });
          return temp;
        }


        //returns a sorted top list of municipalities, based on values related to expenditure needs
        function getTopList(data) {
          return data.slice(0, 10);
        }

        //returns a sorted bottom list of municipalities, based on values related to expenditure needs
        function getBottomList(data) {
          var bottom = data.slice(-10);
          return bottom.reverse();
        }

        //Highcharts graphics
        function bottomListChart(data) {

          var columnColor = {};
          columnColor.first = "#940E19";
          columnColor.second = "#bb111f";
          columnColor.third = "#e91627";


          new Highcharts.Chart({
            chart: {
              renderTo: "bottom-list",
              type: 'bar'
            },
            colors: [],
            title: {
              text: "De " + data.length + " kommunene med høyest utgiftsbehov per innbygger"
            },
            xAxis: {
              categories: [data[0]["kommune"], data[1]["kommune"], data[2]["kommune"], data[3]["kommune"], data[4]["kommune"], data[5]["kommune"], data[6]["kommune"], data[7]["kommune"], data[8]["kommune"], data[9]["kommune"]]
            },
            yAxis: {
              title: {
                text: "Utgiftsbehov"
              }
            },
            tooltip: {
              formatter: function() {
                let needs = this.point;
                return "<strong>" + this.key + "</strong><br>Kommunens inntekt per innbygger: <strong>" + needs.z + "(NOK)</strong> <br> Beregnet utgiftsbehov per innbygger: <strong>" + needs.y + "(NOK)</strong>";
              },
              shared: false,
              useHTML: true
            },
            series: [{
              name: "Beregnet utgiftsbehov, i norske kroner",
              data: [{
                y: parseFloat(data[0]["expenditure_needs"]),
                z: parseFloat(data[0]["calculated_income"].toFixed(2)),
                color: columnColor.third
              }, {
                y: parseFloat(data[1]["expenditure_needs"]),
                z: parseFloat(data[1]["calculated_income"].toFixed(2)),
                color: columnColor.second
              }, {
                y: parseFloat(data[2]["expenditure_needs"]),
                z: parseFloat(data[2]["calculated_income"].toFixed(2)),
                color: columnColor.second
              }, {
                y: parseFloat(data[3]["expenditure_needs"]),
                z: parseFloat(data[3]["calculated_income"].toFixed(2)),
                color: columnColor.first
              }, {
                y: parseFloat(data[4]["expenditure_needs"]),
                z: parseFloat(data[4]["calculated_income"].toFixed(2)),
                color: columnColor.first
              }, {
                y: parseFloat(data[5]["expenditure_needs"]),
                z: parseFloat(data[5]["calculated_income"].toFixed(2)),
                color: columnColor.first
              }, {
                y: parseFloat(data[6]["expenditure_needs"]),
                z: parseFloat(data[6]["calculated_income"].toFixed(2)),
                color: columnColor.first
              }, {
                y: parseFloat(data[7]["expenditure_needs"]),
                z: parseFloat(data[7]["calculated_income"].toFixed(2)),
                color: columnColor.first
              }, {
                y: parseFloat(data[8]["expenditure_needs"]),
                z: parseFloat(data[8]["calculated_income"].toFixed(2)),
                color: columnColor.first
              }, {
                y: parseFloat(data[9]["expenditure_needs"]),
                z: parseFloat(data[9]["calculated_income"].toFixed(2)),
                color: columnColor.first
              }]
            }]
          });
        }

        //Highcharts graphics
        function topListChart(data) {

          var columnColor = {};
          columnColor.first = "#003762";
          columnColor.second = "#00457c";
          columnColor.third = "#0062af";


          new Highcharts.Chart({
            chart: {
              renderTo: "top-list",
              type: 'bar'
            },
            colors: [],
            title: {
              text: "De " + data.length + " kommunene med lavest utgiftsbehov per innbygger"
            },
            xAxis: {
              categories: [data[0]["kommune"], data[1]["kommune"], data[2]["kommune"], data[3]["kommune"], data[4]["kommune"], data[5]["kommune"], data[6]["kommune"], data[7]["kommune"], data[8]["kommune"], data[9]["kommune"]]
            },
            yAxis: {
              title: {
                text: "Utgiftsbehov"
              }
            },
            tooltip: {
              formatter: function() {
                let needs = this.point;
                return "<strong>" + this.key + "</strong><br>Kommunens inntekt per innbygger: <strong>" + needs.z + " (NOK)</strong> <br> Beregnet utgiftsbehov per innbygger: <strong>" + needs.y + "(NOK)</strong>";
              },
              shared: false,
              useHTML: true
            },
            series: [{
              name: "Beregnet utgiftsbehov, i norske kroner",
              data: [{
                y: parseFloat(data[0]["expenditure_needs"]),
                z: parseFloat(data[0]["calculated_income"].toFixed(2)),
                color: columnColor.third
              }, {
                y: parseFloat(data[1]["expenditure_needs"]),
                z: parseFloat(data[1]["calculated_income"].toFixed(2)),
                color: columnColor.second
              }, {
                y: parseFloat(data[2]["expenditure_needs"]),
                z: parseFloat(data[2]["calculated_income"].toFixed(2)),
                color: columnColor.second
              }, {
                y: parseFloat(data[3]["expenditure_needs"]),
                z: parseFloat(data[3]["calculated_income"].toFixed(2)),
                color: columnColor.first
              }, {
                y: parseFloat(data[4]["expenditure_needs"]),
                z: parseFloat(data[4]["calculated_income"].toFixed(2)),
                color: columnColor.first
              }, {
                y: parseFloat(data[5]["expenditure_needs"]),
                z: parseFloat(data[5]["calculated_income"].toFixed(2)),
                color: columnColor.first
              }, {
                y: parseFloat(data[6]["expenditure_needs"]),
                z: parseFloat(data[6]["calculated_income"].toFixed(2)),
                color: columnColor.first
              }, {
                y: parseFloat(data[7]["expenditure_needs"]),
                z: parseFloat(data[7]["calculated_income"].toFixed(2)),
                color: columnColor.first
              }, {
                y: parseFloat(data[8]["expenditure_needs"]),
                z: parseFloat(data[8]["calculated_income"].toFixed(2)),
                color: columnColor.first
              }, {
                y: parseFloat(data[9]["expenditure_needs"]),
                z: parseFloat(data[9]["calculated_income"].toFixed(2)),
                color: columnColor.first
              }]
            }]
          });
        }

        //Call the relevant functions to init the two charts, showing both the top and the bottom list
        function init() {
          var sorted = getSortedList(next_ten_years);
          var bottom = getBottomList(sorted);
          var top = getTopList(sorted);
          topListChart(top);
          bottomListChart(top);
        }

        return {
          init: init
        };

      })();

});