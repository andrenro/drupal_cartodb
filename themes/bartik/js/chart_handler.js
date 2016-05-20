$(document).ready(function() {



    ChartHandler = (function() {

        function initChart() {
            $('#chart_container').highcharts({
                chart: {
                    type: 'column',

                },
                colors: ['#003762', '#940E19', '#41834B'],
                title: {
                    text: ''
                },
                xAxis: {
                    categories: ['Ja', 'Nei', 'blankt']
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
                colors: ['#003762', '#940E19', '#41834B'],
                title: {
                    text: 'Nasjonal totaloversikt'
                },
                xAxis: {
                    categories: ['Ja', 'Nei', 'Avstemning ikke avholdt']
                },
                yAxis: {
                    title: {
                        text: 'Nasjonale Resultater (%)'
                    }
                },
                series: [{
                    name: "(32 % Deltakelse)",
                    data: [{
                        y: data[0],
                        color: "#41834B"
                    }, {
                        y: data[1],
                        color: "#940E19"
                    }, {
                        y: data[2],
                        color: "#ACACAC"
                    }]
                }]
            });
        }

        function decidedChart(data, result) {
            var columnColor = {};

            switch (result) {
                case "ja":
                    columnColor.first = "#41834b";
                    columnColor.second = "#4c9a57";
                    columnColor.third = "#65b371";
                    break;
                case "nei":
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
                    text: "De tre kommunene med høyest valgdeltakelse"
                },
                xAxis: {
                    categories: [data[0].kommunenavn, data[1].kommunenavn, data[2].kommunenavn]
                },
                yAxis: {
                    title: {
                        text: "Prosentvis deltakelse"
                    }
                },
                series: [{
                    name: "Valgdeltakelse (oppgitt i %)",
                    data: [{
                        y: data[0].deltakelse,
                        color: columnColor.first
                    }, {
                        y: data[1].deltakelse,
                        color: columnColor.second
                    }, {
                        y: data[2].deltakelse,
                        color: columnColor.third
                    }]
                }]
            });
        }

        //Data[0] = ja
        //Data[1] = nei
        //Data[2] = blankt
        function updateChart(data) {
            $('#chart_container').highcharts({
                chart: {
                    type: 'column'
                },
                colors: ['#003762', '#940E19', '#41834B'],
                title: {
                    text: null
                },
                xAxis: {
                    categories: ['Ja', 'Nei', 'blankt']
                },
                yAxis: {
                    title: {
                        text: 'Prosent antall stemmer'
                    }
                },
                series: [{
                    name: data[3] + "% Deltakelse)",
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