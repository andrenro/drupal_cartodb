$(document).ready(function() {



    ChartHandler = (function() {

        function initChart() {

            new Highcharts.Chart({
                chart: {
                    renderTo: "chart_container",
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

        function showTotal(data) {
            new Highcharts.Chart({
                chart: {
                    renderTo:"chart_container",
                    type: 'bar'
                },
                title: {
                    text:  "Nasjonal oversikt over resultatene fra folkeavstemningene: <br><strong>"+data[0].toFixed(1)+"% 'Ja'</strong><br><strong>"+data[1].toFixed(1)+"% 'Nei'</strong><br><strong>"+data[2].toFixed(1) + "%</strong> gjennomsnittlig valgdeltakelse"
                },
                xAxis: {
                    categories: ["Resultatet ble 'Ja'", "Resultatet ble 'Nei'"]
                },
                yAxis: {
                    title: {
                        text: 'Nasjonale resultater (%)'
                    }
                },
                series: [{
                    name:"Resultat",
                    data: [{
                        name: "Prosentandel av kommunene der resultatet ble Ja",
                        y: parseInt(data[0].toFixed(2)),
                        color: "#003762"
                    }, {
                        name: "Prosentandel av kommunene der resultatet ble Nei",
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

            new Highcharts.Chart({
                chart: {
                    renderTo:"chart_container",
                    type: 'bar'
                },
                colors: [],
                title: {
                    text: "Topp "+ data.length+ " kommuner med størst valgdeltakelse"
                },
                xAxis: {
                    categories: [data[0].kommune, data[1].kommune, data[2].kommune,data[3].kommune,data[4].kommune,data[5].kommune, data[6].kommune, data[7].kommune,data[8].kommune,data[9].kommune]
                },
                yAxis: {
                    title: {
                        text: "Prosentvis valgdeltakelse"
                    }
                },
                series: [{
                    name: "Valgdeltakelse",
                    data: [{
                        y: data[0].valgdeltakelse,
                        color: columnColor.first
                    }, {
                        y: data[1].valgdeltakelse,
                        color: columnColor.first
                    }, {
                        y: data[2].valgdeltakelse,
                        color: columnColor.first
                    },
                    {
                        y: data[3].valgdeltakelse,
                        color: columnColor.first
                    },
                    {
                        y: data[4].valgdeltakelse,
                        color: columnColor.first
                    },
                    {
                        y: data[5].valgdeltakelse,
                        color: columnColor.first
                    },
                      {
                        y: data[6].valgdeltakelse,
                        color: columnColor.first
                    },
                      {
                        y: data[7].valgdeltakelse,
                        color: columnColor.first
                    },
                      {
                        y: data[8].valgdeltakelse,
                        color: columnColor.first
                    },
                      {
                        y: data[9].valgdeltakelse,
                        color: columnColor.first
                    }
                    ]
                }]
            });
        }

        //Data[0] = ja
        //Data[1] = nei
        //Data[2] = prosent_blankt
        function updateChart(data,callback) {
            var deltakelse = data[3] > 0 ? data[3] : "N/A";
            var result = data[1] > data[0] ? "Nei" : "Ja";

            new Highcharts.Chart({
                chart: {
                    renderTo:"chart_container",
                    type: 'bar'
                },
                colors: [],
                title: {
                    text: "<strong><h3>"+data[4]+"</h3></strong><br>Resultat: <strong>'"+result+"'</strong><br><strong>Ja: "+data[0]+"%</strong><br><strong>Nei: "+data[1]+"%</strong><br><strong>Blankt "+data[2]+"%</strong><br> (<strong>"+deltakelse+"</strong> % valgdeltakelse)"
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
                    name: "Resultat",
                    data: [{
                        y:data[0],
                        color: "#003762"
                    },{
                        y:data[1],
                        color: "#940E19"
                    },{
                        y:data[2],
                        color: "#ACACAC"
                    }]
                }]
            });

            if(callback){
                callback();
            }
        }
        return {
            initChart: initChart,
            updateChart: updateChart,
            showTotal: showTotal,
            decidedChart: decidedChart
        }


    })();


});