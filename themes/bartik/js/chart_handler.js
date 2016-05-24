$(document).ready(function() {



    ChartHandler = (function() {

        function initChart() {
            $('#chart_container').highcharts({
                chart: {
                    type: 'column',

                },
                colors: ['#003762', '#940E19', '#003762'],
                title: {
                    text: ''
                },
                xAxis: {
                    categories: ['Ja', 'Nei', 'Blankt']
                },
                yAxis: {
                    title: {
                        text: 'Antall Stemmer'
                    }
                },
                series: [{
                    name: 'Kommune',
                    data: [1, 2, 3]
                }]
            });

        }

        //TODO: where "Avstemning ikke avholdt" include comments
        function showTotal(data) {
            $('#chart_container').highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Nasjonale resultater: ' + data[2].toFixed(2) + " % gjennomsnittlig valgdeltakelse"
                },
                xAxis: {
                    categories: ['Ja', 'Nei']
                },
                yAxis: {
                    title: {
                        text: 'Nasjonale Resultater (%)'
                    }
                },
                series: [{
                    name:"Nasjonale resultater",
                    data: [{
                        name:"% av kommunene der resultatet ble ja",
                        y: parseInt(data[0].toFixed(2)),
                        color: "#003762"
                    }, {
                        name:"% av kommunene der resultatet ble nei",
                        y: parseInt(data[1].toFixed(2)),
                        color: "#940E19"
                    }]
                }]
            });
        }

        function decidedChart(data, result) {
            var columnColor = {};
            switch (result) {
                case "prosent_ja":
                    columnColor.first = "#003762";
                    columnColor.second = "#00457c";
                    columnColor.third = "#0062af";
                    break;
                case "prosent_nei":
                    columnColor.first = "#940E19";
                    columnColor.second = "#bb111f";
                    columnColor.third = "#e91627";
                    break;
                default:
                    break;
            }

            $('#chart_container').highcharts({
                chart: {
                    type: 'column'
                },
                colors: [],
                title: {
                    text: "De tre kommunene med størst valgdeltakelse"
                },
                xAxis: {
                    categories: [data[0].kommunenavn, data[1].kommunenavn, data[2].kommunenavn]
                },
                yAxis: {
                    title: {
                        text: "Prosentvis valgdeltakelse"
                    }
                },
                series: [{
                    name: "Valgdeltakelse (oppgitt i %)",
                    data: [{
                        y: data[0].valgdeltakelse,
                        color: columnColor.first
                    }, {
                        y: data[1].valgdeltakelse,
                        color: columnColor.second
                    }, {
                        y: data[2].valgdeltakelse,
                        color: columnColor.third
                    }]
                }]
            });
        }

        //Data[0] = ja
        //Data[1] = nei
        //Data[2] = prosent_blankt
        function updateChart(data) {
            $('#chart_container').highcharts({
                chart: {
                    type: 'column'
                },
                colors: ['#003762', '#940E19', '#003762'],
                title: {
                    text: null
                },
                xAxis: {
                    categories: ['Ja', 'Nei', 'Blankt']
                },
                yAxis: {
                    title: {
                        text: 'Prosent antall stemmer'
                    }
                },
                series: [{
                    name: data[3] + "% valgdeltakelse",
                    data: [data[0], data[1], data[2]]
                }]
            });
        }

        return {
            initChart: initChart,
            updateChart: updateChart,
            showTotal: showTotal,
            decidedChart: decidedChart
        }


    })();


});