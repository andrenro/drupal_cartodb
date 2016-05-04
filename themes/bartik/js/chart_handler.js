
$(document).ready(function(){



	ChartHandler = (function(){

	function initChart(){
		 $('#chart_container').highcharts({
        chart: {
            type: 'bar'
        },
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


	//Data[0] = ja
	//Data[1] = nei
	//Data[2] = blank
	function updateChart(data){
		$('#chart_container').highcharts({
        chart: {
            type: 'bar'
        },
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
		updateChart: updateChart
	}


 })();


});