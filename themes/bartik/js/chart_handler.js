
$(document).ready(function(){



	ChartHandler = (function(){

	function initChart(){
		 $('#chart_container').highcharts({
        chart: {
            type: 'bar',

        },
        colors:['#003762','#940E19','#41834B'],
        title: {
            text: ''
        },
        xAxis: {
            categories: ['Ja','Nei','Blank']
        },
        yAxis: {
            title: {
                text: 'Antall Stemmer'
            }
        },
        series: [{
            name: 'Kommune',
            data: [1,2,3]
        }]
    });

	}

    function showTotal(data){
        $('#chart_container').highcharts({
        chart: {
            type: 'bar'
        },
        colors:['#003762','#940E19','#41834B'],
        title: {
            text: 'Nasjonal totaloversikt'
        },
        xAxis: {
            categories: ['Ja','Nei','Avstemning ikke avholdt']
        },
        yAxis: {
            title: {
                text: 'Nasjonale Resultater(%)'
            }
        },
        series: [{
            name: " (32 % Deltakelse)",
            data: [{y:data[0],color:"#003762"},{y:data[1],color:"#940E19"},{y:data[2],color:"#41834B"}]
        }]
    });
    }

    function decidedChart(data){
        $('#chart_container').highcharts({
        chart: {
            type: 'bar'
        },
        colors:['#003762','#940E19','#41834B'],
        title: {
            text: "Topp 3 kommuner der'"+data[0].resultat+"' ble resultatet"
        },
        xAxis: {
            categories: [data[0].name_munic,data[1].name_munic,data[2].name_munic]
        },
        yAxis: {
            series:{
                text:"Kommune"
            }
        },
        series: [{
            name: "Flertall: "+data[0].resultat+" (oppgitt i %)",
            data: [{y:data[0].percentage,color:"#003762"},{y:data[1].percentage,color:"#940E19"},{y:data[2].percentage,color:"#41834B"}]
        }]
    });
    }

	//Data[0] = ja
	//Data[1] = nei
	//Data[2] = blank
	function updateChart(data){
		$('#chart_container').highcharts({
        chart: {
            type: 'bar'
        },
        colors:['#003762','#940E19','#41834B'],
        title: {
            text: ''
        },
        xAxis: {
            categories: ['Ja','Nei','Blank']
        },
        yAxis: {
            title: {
                text: 'Antall Stemmer'
            }
        },
        series: [{
	        name: data[3] + " ("+data[4]+"% Deltakelse)",
            data: [data[0],data[1],data[2]]
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