
$("document").ready(function(){

	var data = [2,5,3,1,2,3,53,55,44];

	var sorted = data.sort(function(d,b){
		if(d > b){
			return 1;
		}else if(b > d){
			return -1;
		}else{
			return 0;
		}
	});

	// var datalist = d3.select(".main").selectAll("div").data(sorted).enter().append("div").style("width", function(d){
	// 	return d * 10 + "px";
	// }).style("background","#6395EE").style("border","1px solid white").text(function(d){return d});

	


	var width = 420,barHeight = 20;

	var chart = d3.select('.chart').attr("width",width).attr("height",barHeight * sorted.length);

	var x = d3.scaleLinear().domain([0, d3.max(data)]).range([0, width]);


	var bar = chart.selectAll("g").data(sorted).enter().append("g").attr("transform",function(d,i){return "translate(0,"+i * barHeight + ")";});

	bar.append("rect").attr("width",x).attr("height",barHeight -1);

	bar.append("text").attr("x",function(d){return x(d) -3 ;}).attr("y",barHeight /2).attr("dy",".35em").text(function(d){return d;});


});