$(document).ready(function() {
  //Handles charts related to population numbers, expenditure needs and income.
  PopulationChartHandler = (function() {


    function populationMovement(data) {

      var migration = document.getElementById("population_migration").getContext("2d");
      var deathsBirths = document.getElementById("population_deaths_births").getContext("2d");
      var movement = document.getElementById("population_movement").getContext("2d");

      var popMigration = {
        labels: [
          data[4].category,
          data[5].category
        ],
        datasets: [{
          data: [data[4].value, data[5].value],
          backgroundColor: ["rgba(148,14,25,0.8)", "rgba(0,55,98,0.8)"]
        }]
      };

      var popDeathsBirths = {
        labels: [
          data[1].category,
          data[2].category
        ],
        datasets: [{
          data: [data[1].value, data[2].value],
          backgroundColor: ["rgba(148,14,25,0.8)", "rgba(0,55,98,0.8)"]
        }]
      };

      var popMovement = {
        labels: [
          data[6].category.split(",")[0],
          data[7].category.split(",")[0]
        ],
        datasets: [{
          data: [data[6].value, data[7].value],
          backgroundColor: ["rgba(148,14,25,0.8)", "rgba(0,55,98,0.8)"]
        }]
      };



      var populationMigration = new Chart(migration, {
        type: 'pie',
        data: popMigration
      });

      var populationDeathsBirths = new Chart(deathsBirths, {
        type: 'pie',
        data: popDeathsBirths
      });

      var populationMovement = new Chart(movement, {
        type: 'pie',
        data: popMovement
      });
    }

    /**
     * [Shows a graph of the year by year growth in population for the next ten years]
     * @param  {[type]} data [json data fetched from the file 'next_ten_years']
     * @return {[undefined]} 
     */
    function populationGraph(data) {

      var ctx = document.getElementById("population_graph").getContext("2d");

      if (data) {

        var fillColor = data[0] > data[9] ? "rgba(148,14,25,0.8)" : "rgba(0,55,98,0.8)";
        var strokeColor = data[0] > data[9] ? "rgba(148,14,25,1)" : "rgba(0,55,98,1)";

        var dataObj = {
          labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"],
          datasets: [{
            label: "Antall personer",
            backgroundColor: fillColor,
            data: data.slice(0, 9)
          }]
        };

        var myLineChart = new Chart(ctx, {
          type: 'line',
          data: dataObj,
          options: {
            hover: {
              // Overrides the global setting
              mode: 'label'
            }
          }
        });
      }
    }

    function fundingPerInhabitantChart(data) {

      var barChart = document.getElementById("funding_chart_container").getContext("2d");
      var dataObj = {
        labels: ["Kommunens innbyggertilskudd", "Nasjonalt gjennomsnitt"],
        datasets: [{
          label: "Innbyggertilskudd, i norske kroner",
          backgroundColor: ["rgba(148,14,25,0.8)", "rgba(0,55,98,0.8)"],
          data: [data[0].toFixed(2),data[1].toFixed(2)]
        }]
      };

      var fundingBarChart = new Chart(barChart, {
        type: "bar",
        data: dataObj,
        options: {
          scales: {
            yAxes: [{
              ticks: {
                max: data[0] > data[1] ? data[0] : data[1],
                min: 0,
                stepSize: 5000
              }
            }]
          }
        }

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
        if (a["calculated_income"] > b["calculated_income"]) {
          return 1;
        }
        if (a["calculated_income"] < b["calculated_income"]) {
          return -1;
        }
        return 0;
      });
      return temp;
    }
    //Taks the first element in the top-list and the first in the bottom-list, which represents the low/high municipalities
    function populationComments(top, bottom) {

      document.getElementById("top-comment").innerHTML = "<strong>" + top[0]["kommune"] + "</strong> har landets laveste utgiftsbehov i <strong>" + date.getFullYear() + "</strong>, beregnet til <strong>" + top[0]["expenditure_needs"] + "</strong> NOK (per innbygger). Kommunen får dermed også det laveste innbyggertilskuddet, beregnet til <strong>" + top[0]["calculated_income"].toFixed(1) + "</strong> NOK per innbygger. Dette forteller oss at <strong>" + top[0]["kommune"] + "</strong> (isolert sett) er den kommunen som er billigst i drift dette året.";
      document.getElementById("bottom-comment").innerHTML = "<strong>" + bottom[0]["kommune"] + "</strong> har landets høyeste utgiftsbehov i <strong>" + date.getFullYear() + "</strong>, beregnet til <strong>" + bottom[0]["expenditure_needs"] + "</strong> NOK (per innbygger). Kommunen får dermed også det høyeste innbyggertilskuddet, beregnet til <strong>" + bottom[0]["calculated_income"].toFixed(1) + "</strong> NOK per innbygger. Dette forteller oss at <strong>" + bottom[0]["kommune"] + "</strong> (isolert sett) er den kommunen som er dyrest i drift dette året.";

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


      var barChart = document.getElementById("bottom-list").getContext("2d");

      var dataObj = {
        labels: [data[0]["kommune"], data[1]["kommune"], data[2]["kommune"], data[3]["kommune"], data[4]["kommune"], data[5]["kommune"], data[6]["kommune"], data[7]["kommune"], data[8]["kommune"], data[9]["kommune"]],
        datasets: [{
          label: "Innbyggertilskudd i norske kroner",
          backgroundColor: "rgba(148,14,25,0.8)",
          data: [data[0]["calculated_income"], data[1]["calculated_income"], data[2]["calculated_income"], data[3]["calculated_income"], data[4]["calculated_income"], data[5]["calculated_income"], data[6]["calculated_income"], data[7]["calculated_income"], data[8]["calculated_income"], data[9]["calculated_income"]]
        }]
      };

      var fundingBarChart = new Chart(barChart, {
        type: "horizontalBar",
        data: dataObj,
        options: {
          scales: {
            xAxes: [{
              ticks: {
                max: 90000,
                min: 0,
                stepSize: 10000
              }
            }]
          }
        }
      });
    }

    //Highcharts graphics
    function topListChart(data) {
      var barChart = document.getElementById("top-list").getContext("2d");

      var dataObj = {
        labels: [data[0]["kommune"], data[1]["kommune"], data[2]["kommune"], data[3]["kommune"], data[4]["kommune"], data[5]["kommune"], data[6]["kommune"], data[7]["kommune"], data[8]["kommune"], data[9]["kommune"]],
        datasets: [{
          label: "Innbyggertilskudd i norske kroner",
          backgroundColor: "rgba(0,55,98,0.8)",
          data: [data[0]["calculated_income"], data[1]["calculated_income"], data[2]["calculated_income"], data[3]["calculated_income"], data[4]["calculated_income"], data[5]["calculated_income"], data[6]["calculated_income"], data[7]["calculated_income"], data[8]["calculated_income"], data[9]["calculated_income"]]
        }]
      };

      var fundingBarChart = new Chart(barChart, {
        type: "horizontalBar",
        data: dataObj,
        options: {
          scales: {
            xAxes: [{
              ticks: {
                max: 30000,
                min: 0,
                stepSize: 10000
              }
            }]
          }
        }

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