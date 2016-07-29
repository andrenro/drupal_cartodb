$(document).ready(function() {
  //Handles charts related to population numbers, expenditure needs and income.
  PopulationChartHandler = (function() {


    function populationMovement(data) {
        Highcharts.theme = {
        colors: ['#940e19', '#003762', '#ED561B', '#DDDF00', '#24CBE5', '#64E572',
          '#FF9655', '#FFF263', '#6AF9C4'],
        chart: {
          backgroundColor: {
            linearGradient: [0, 0, 500, 500],
            stops: [
              [0, 'rgb(255, 255, 255)'],
              [1, 'rgb(255, 255, 255)']
            ]
          },
        },
        title: {
          style: {
            color: '#000',
            font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
          }
        },
        subtitle: {
          style: {
            color: '#666666',
            font: 'bold 12px "Trebuchet MS", Verdana, sans-serif'
          }
        },

        legend: {
          itemStyle: {
            font: '9pt Trebuchet MS, Verdana, sans-serif',
            color: 'black'
          },
          itemHoverStyle: {
            color: 'red'
          }
        }
      };

      Highcharts.setOptions(Highcharts.theme);

      new Highcharts.Chart({
        chart: {
          renderTo: "population_migration",
          type: "pie",
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        title: {
          text: 'Innvandring/Utvandring'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.y}</b>'
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            showInLegend:true,
            dataLabels: {
              enabled: true,
              format: '{point.y}',
              style: {
                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
              }
            }
          }
        },
        series: [{
          name: 'Innvandring/Utvandring',
          colorByPoint: true,
          data: [{
            name: data[4].category,
            y: data[4].value,
          }, {
            name: data[5].category,
            y: data[5].value,
          }]
        }]
      });

      new Highcharts.Chart({
        chart: {
          renderTo: "population_deaths_borned",
          type: "pie",
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        title: {
          text: 'Fødte/Døde'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.y}</b>'
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            showInLegend:true,
            dataLabels: {
              enabled: true,
              format: '{point.y}',
              style: {
                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
              }
            }
          }
        },
        series: [{
          name: 'Fødte/Døde',
          colorByPoint: true,
          data: [{
            name: data[1].category,
            y: data[1].value,
          }, {
            name: data[2].category,
            y: data[2].value,
          }]
        }]
      });

      //Shows inland movement in population for a single municipality
      new Highcharts.Chart({
        chart: {
          renderTo: "population_movement",
          type: "pie",
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        title: {
          text: 'Forflytning innenlands'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.y}</b>'
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            showInLegend:true,
            dataLabels: {
              enabled: true,
              format: '{point.y}',
              style: {
                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
              }
            }
          }
        },
        series: [{
          name: 'Forflytning innenlands',
          colorByPoint: true,
          data: [{
            name: data[6].category.split(",")[0],
            y: data[6].value,
          }, {
            name: data[7].category.split(",")[0],
            y: data[7].value,
          }]
        }]
      });


    }



    /**
     * [Shows a graph of the year by year growth in population for the next ten years]
     * @param  {[type]} data [json data fetched from the file 'next_ten_years']
     * @return {[undefined]} 
     */
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
          categories: ["2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"]
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
          valueSuffix: 'Personer'
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle',
          borderWidth: 0
        },
        series: [{
          name: '',
          data: data.slice(0,8)
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

    }

    return {
      showQuarterlyDelta: showQuarterlyDelta,
      fundingPerInhabitantChart: fundingPerInhabitantChart,
      populationGraph: populationGraph,
      populationMovement: populationMovement
    }

  })();

  //Handles the top 10 and bottom 10 list over municipality and their expenditure needs and yearly government based income
  RankingsHandler = (function() {
    var date = new Date();

    //Returns a sorted list of municipality-elements based on the expenditure_needs value
    function getSortedList(data) {

      var temp = data.sort(function(a, b) {
        if (parseFloat(a["calculated_income"]) > parseFloat(b["calculated_income"])) {
          return 1;
        }
        if (parseFloat(a["calculated_income"]) < parseFloat(b["calculated_income"])) {
          return -1;
        }
        return 0;
      });
      return temp;
    }
    //Taks the first element in the top-list and the first in the bottom-list, which represents the low/high municipalities
    function populationComments(top, bottom) {

      document.getElementById("top-comment").innerHTML = "<strong>" + top[0]["kommune"] + "</strong> har landets laveste utgiftsbehov i <strong>" + date.getFullYear() + "</strong>, beregnet til <strong>" + parseFloat(top[0]["expenditure_needs"]).toFixed(1) + "</strong> NOK (per innbygger). Kommunen får dermed også det laveste innbyggertilskuddet, beregnet til <strong>" + top[0]["calculated_income"].toFixed(1) + "</strong> NOK per innbygger. Dette forteller oss at <strong>" + top[0]["kommune"] + "</strong> (isolert sett) er den kommunen som er billigst i drift dette året.";
      document.getElementById("bottom-comment").innerHTML = "<strong>" + bottom[0]["kommune"] + "</strong> har landets høyeste utgiftsbehov i <strong>" + date.getFullYear() + "</strong>, beregnet til <strong>" + parseFloat(bottom[0]["expenditure_needs"]).toFixed(1) + "</strong> NOK (per innbygger). Kommunen får dermed også det høyeste innbyggertilskuddet, beregnet til <strong>" + bottom[0]["calculated_income"].toFixed(1) + "</strong> NOK per innbygger. Dette forteller oss at <strong>" + bottom[0]["kommune"] + "</strong> (isolert sett) er den kommunen som er dyrest i drift dette året.";

    }


    //returns a sorted top list of municipalities, based on values related to expenditure needs
    function createTopList(data) {
      return data.slice(0, 10);
    }

    //returns a sorted bottom list of municipalities, based on values related to expenditure needs
    function createBottomList(data) {
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
          text: "De " + data.length + " kommunene med høyest innbyggertilskudd"
        },
        xAxis: {
          categories: [data[0]["kommune"], data[1]["kommune"], data[2]["kommune"], data[3]["kommune"], data[4]["kommune"], data[5]["kommune"], data[6]["kommune"], data[7]["kommune"], data[8]["kommune"], data[9]["kommune"]]
        },
        yAxis: {
          title: {
            text: "Innbyggertilskudd"
          }
        },
        tooltip: {
          formatter: function() {
            let needs = this.point;
            return "<strong>" + this.key + "</strong><br>Kommunens inntekt per innbygger: <strong>" + needs.y + "(NOK)</strong> <br> Beregnet utgiftsbehov per innbygger: <strong>" + needs.z + "(NOK)</strong>";
          },
          shared: false,
          useHTML: true
        },
        series: [{
          name: "Beregnet innbyggertilskudd, i NOK",
          data: [{
            z: parseFloat(data[0]["expenditure_needs"]),
            y: parseFloat(data[0]["calculated_income"].toFixed(2)),
            color: columnColor.third
          }, {
            z: parseFloat(data[1]["expenditure_needs"]),
            y: parseFloat(data[1]["calculated_income"].toFixed(2)),
            color: columnColor.second
          }, {
            z: parseFloat(data[2]["expenditure_needs"]),
            y: parseFloat(data[2]["calculated_income"].toFixed(2)),
            color: columnColor.second
          }, {
            z: parseFloat(data[3]["expenditure_needs"]),
            y: parseFloat(data[3]["calculated_income"].toFixed(2)),
            color: columnColor.first
          }, {
            z: parseFloat(data[4]["expenditure_needs"]),
            y: parseFloat(data[4]["calculated_income"].toFixed(2)),
            color: columnColor.first
          }, {
            z: parseFloat(data[5]["expenditure_needs"]),
            y: parseFloat(data[5]["calculated_income"].toFixed(2)),
            color: columnColor.first
          }, {
            z: parseFloat(data[6]["expenditure_needs"]),
            y: parseFloat(data[6]["calculated_income"].toFixed(2)),
            color: columnColor.first
          }, {
            z: parseFloat(data[7]["expenditure_needs"]),
            y: parseFloat(data[7]["calculated_income"].toFixed(2)),
            color: columnColor.first
          }, {
            z: parseFloat(data[8]["expenditure_needs"]),
            y: parseFloat(data[8]["calculated_income"].toFixed(2)),
            color: columnColor.first
          }, {
            z: parseFloat(data[9]["expenditure_needs"]),
            y: parseFloat(data[9]["calculated_income"].toFixed(2)),
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
          text: "De " + data.length + " kommunene med lavest innbyggertilskudd"
        },
        xAxis: {
          categories: [data[0]["kommune"], data[1]["kommune"], data[2]["kommune"], data[3]["kommune"], data[4]["kommune"], data[5]["kommune"], data[6]["kommune"], data[7]["kommune"], data[8]["kommune"], data[9]["kommune"]]
        },
        yAxis: {
          title: {
            text: "Innbyggertilskudd"
          }
        },
        tooltip: {
          formatter: function() {
            let needs = this.point;
            return "<strong>" + this.key + "</strong><br>Kommunens innbyggertilskudd: <strong>" + needs.y + " (NOK)</strong> <br> Beregnet utgiftsbehov per innbygger: <strong>" + needs.z + "(NOK)</strong>";
          },
          shared: false,
          useHTML: true
        },
        series: [{
          name: "Beregnet utgiftsbehov, i norske kroner",
          data: [{
            z: parseFloat(data[0]["expenditure_needs"]),
            y: parseFloat(data[0]["calculated_income"].toFixed(2)),
            color: columnColor.third
          }, {
            z: parseFloat(data[1]["expenditure_needs"]),
            y: parseFloat(data[1]["calculated_income"].toFixed(2)),
            color: columnColor.second
          }, {
            z: parseFloat(data[2]["expenditure_needs"]),
            y: parseFloat(data[2]["calculated_income"].toFixed(2)),
            color: columnColor.second
          }, {
            z: parseFloat(data[3]["expenditure_needs"]),
            y: parseFloat(data[3]["calculated_income"].toFixed(2)),
            color: columnColor.first
          }, {
            z: parseFloat(data[4]["expenditure_needs"]),
            y: parseFloat(data[4]["calculated_income"].toFixed(2)),
            color: columnColor.first
          }, {
            z: parseFloat(data[5]["expenditure_needs"]),
            y: parseFloat(data[5]["calculated_income"].toFixed(2)),
            color: columnColor.first
          }, {
            z: parseFloat(data[6]["expenditure_needs"]),
            y: parseFloat(data[6]["calculated_income"].toFixed(2)),
            color: columnColor.first
          }, {
            z: parseFloat(data[7]["expenditure_needs"]),
            y: parseFloat(data[7]["calculated_income"].toFixed(2)),
            color: columnColor.first
          }, {
            z: parseFloat(data[8]["expenditure_needs"]),
            y: parseFloat(data[8]["calculated_income"].toFixed(2)),
            color: columnColor.first
          }, {
            z: parseFloat(data[9]["expenditure_needs"]),
            y: parseFloat(data[9]["calculated_income"].toFixed(2)),
            color: columnColor.first
          }]
        }]
      });
    }

    //Call the relevant functions to init the two charts, showing both the top and the bottom list
    function init() {
      var sorted = getSortedList(next_ten_years);
      if (sorted) {
        var bottom = createBottomList(sorted);
        var top = createTopList(sorted);
        topListChart(top);
        bottomListChart(bottom);
        //Generate comment about the "best" and "worst" municipality
        populationComments(top, bottom);
      }

    }

    return {
      init: init
    };

  })();

});