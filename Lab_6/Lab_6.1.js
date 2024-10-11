	var w=500;
	var h=300;
	var barPadding = 5;

	var dataset =[24,10,29,19,8,15,20,12,9,6,21,28];

	var xScale = d3.scaleBand()
					.domain(d3.range(dataset.length))
					.range([0,w])
					.round(true)
					.paddingInner(0.05);
					
	var yScale = d3.scaleLinear()	
					.domain([0,d3.max(dataset)])
					.range([h,0])
					
		

	var svg=d3.select("body")
				.append("svg")
				.attr("width",w)
				.attr("height",h)	
				
	
	svg.selectAll("rect")
		.data(dataset)
		.enter()
		.append("rect")
		.attr("x",function(d,i){
			return xScale(i);
		})
		.attr("y",function(d){
			return yScale(d);
		})
		.attr("width",xScale.bandwidth())
		.attr("height",function(d){
			return h-yScale(d);
		})
		.attr("fill","limegreen")
		.on("mouseover",function(){
			
			
		})
		.on("mouseover",function(event,d){

			d3.select(this).attr("fill","orange");

			var rect=d3.select(this);
			var xPosition=parseFloat(rect.attr("x"))+ rect.attr("width")/2;
			var yPostition = parseFloat(rect.attr("y"))-10;

			svg.append("text")
			.attr("id","tooltip")
			.attr("x",xPosition)
			.attr("y",yPostition)
			.attr("text-anchor","middle")
			.attr("fill","black")
			.text(d);
		})
		.on("mouseout",function(){
			d3.select(this).attr("fill","limegreen")
			d3.select("#tooltip").remove();
		})
		.append("title")
		.text(function(d){
			return "The value is " +d;
		})







