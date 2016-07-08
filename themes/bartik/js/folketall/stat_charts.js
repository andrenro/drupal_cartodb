$(document).ready(function() {

    PopulationChartHandler = (function() {



        function populationGraph(data) {
            new Highcharts.Chart({
                chart: {
                    renderTo: "population_graph",
                    type: 'line',

                },
                title: {
                    text: 'Årlig endring i befolkning neste 10 år',
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
                    name: 'Årlig endring i befolkning neste 10 år',
                    data: data
                }]
            });

        }

        function initChart() {

            new Highcharts.Chart({
                chart: {
                    renderTo: "chart_container",
                    type: 'column',

                },
                colors: ['#003762', '#940E19'],
                title: {
                    text: ''
                },
                xAxis: {
                    categories: ["Inngangen av kvartalet", "Utgangen av kvartalet"]
                },
                yAxis: {
                    title: {
                        text: 'Antall personer'
                    }
                },
                series: [{
                    name: 'Antall',
                    data: [1, 2]
                }]
            });
        }

        function fundingPerInhabitantChart(data) {

            new Highcharts.Chart({
                chart: {
                    renderTo: "funding_chart_container",
                    type: 'bar',

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
                    name: "Antall Personer",
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



        function showQuarterlyDelta(data) {
            var diff = (data[1] - data[0]) < 0 ? +(data[1] - data[0]) : "+" + (data[1] - data[0]);
            var cal = MathHandler.percentageOf(data[1], data[0]);

            var deltaVal = (cal - 100).toFixed(2);
            var delta = deltaVal < 0 ? deltaVal : "+" + deltaVal




            new Highcharts.Chart({
                chart: {
                    renderTo: "chart_container",
                    type: 'column'
                },
                title: {
                    text: "Kvartalsmessig endring i folketall: " + diff + " personer<br>(" + delta + " %)"
                },
                xAxis: {
                    categories: ["Inngangen av kvartalet", "Utgangen av kvartalet"]
                },
                yAxis: {
                    title: {
                        text: 'Antall personer'
                    }
                },
                series: [{
                    name: "Antall Personer",
                    data: [{
                        name: "Inngangen av kvartalet",
                        y: parseInt(data[0].toFixed(2)),
                        color: "#003762"
                    }, {
                        name: "Utgangen av kvartalet",
                        y: parseInt(data[1].toFixed(2)),
                        color: "#940E19"
                    }]
                }]
            });
        }

        return {
            initChart: initChart,
            showQuarterlyDelta: showQuarterlyDelta,
            fundingPerInhabitantChart: fundingPerInhabitantChart,
            populationGraph: populationGraph
        }

    })();

});
