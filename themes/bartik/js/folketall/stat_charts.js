$(document).ready(function() {

    PopulationChartHandler = (function() {

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
                    categories: ["Inngangen av kvartalet","Utgangen av kvartalet"]
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

        function showQuarterlyDelta(data) {

            var cal = MathHandler.percentageOf(data[1],data[0]);
            var deltaVal = (cal - 100).toFixed(2);
            var delta = deltaVal < 0 ? deltaVal : "+"+deltaVal

            new Highcharts.Chart({
                chart: {
                    renderTo:"chart_container",
                    type: 'bar'
                },
                title: {
                    text:  "Kvartalsmessig endring i folketall ("+ delta+" %)"
                },
                xAxis: {
                    categories: ["Inngangen av kvartalet","Utgangen av kvartalet"]
                },
                yAxis: {
                    title: {
                        text: 'Antall personer'
                    }
                },
                series: [{
                    name:"Antall Personer",
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
            initChart:initChart,
            showQuarterlyDelta: showQuarterlyDelta
        }

    })();

});
