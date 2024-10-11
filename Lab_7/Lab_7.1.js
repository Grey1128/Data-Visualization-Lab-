function init(){

    var dataset;

    

    d3.csv("../Lab_7/Unemployment_78-95.csv",function(d){
        return {
            date: new Date(+d.year, +d.month-1),
            number: +d.number
        };
    })
    .then(function(data){
        dataset = data;

        lineChart(dataset);
    })
}


function lineChart(dataset){

    
    var w=600;
    var h=300;
    var padding=50;


    var svg= d3.select("#chart")
            .append("svg")
            .attr("width",w)
            .attr("height",h)
            .append("g");

    xScale=d3.scaleTime()
            .domain(d3.extent(dataset, function(d){return d.date;}))
            .range([padding,w-padding]);

    yScale = d3.scaleLinear()
            .domain([0,d3.max(dataset,function(d){return d.number; })])
            .range([h - padding,padding]);

    line = d3.line()
            .x(function(d){return xScale(d.date);})
            .y(function(d){return yScale(d.number);});
            

    svg.append("path")
        .datum(dataset)
        .attr("class","line")
        .attr("d",line)
        .style("stroke", "black")
        .style("fill","none")

    //X axis
    var xAxis= d3.axisBottom()
					.ticks(10)
					.scale(xScale);

	    svg.append("g")
			.attr("transform","translate(0,"+((h-padding))+")")
			.call(xAxis);
    //Y axis
	var yAxis=d3.axisLeft()
					.ticks(10)
					.scale(yScale);

		svg.append("g")
			.attr("class","axis")
			.attr("transform","translate("+(padding)+",0)")
			.call(yAxis);
//define area
var area = d3.area()
            .x(function(d){return xScale(d.date); })
            .y0(function(d){return yScale.range()[0];})
            .y1(function(d){return yScale(d.number);});

//add area 
svg.append("path")
    .datum(dataset)
    .attr("class",area)
    .attr("d",area)
    .style("fill","lightblue");


//Horizontal line for half mill 
svg.append("line")
.attr("class","line halfMilmark")
.attr("x1",padding)
.attr("y1",h-yScale(50000)+95)
.attr("x2",w)
.attr("y2",h-yScale(50000)+95)
.style("stroke","red")
.style("stroke-width",1)
.attr("stroke-dasharry","4");

//Text label for half mill
svg.append("text")
.attr("class", "half MilLabel")
.attr("x", padding+ 10)
.attr("y",h-yScale(50000)+90)
.text("Half a million unemployed");




}




