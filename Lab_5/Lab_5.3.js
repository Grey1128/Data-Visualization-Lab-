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

    svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(function(d){
        return d;
    })
    .attr("x",function(d,i){
        return i*(w/dataset.length)+15;
    })
    .attr("y",function(d){
        return h-(d*4)+12;
    })

    d3.select("#update")
        .on("click",function(){
            
            var numValues=dataset.length;
            var maxValue= 25;
            dataset= [];

            for(var i=0;i<numValues;i++){
                var newNumber= Math.floor(Math.random()* maxValue);
                dataset.push(newNumber);
            }

            yScale.domain([0,d3.max(dataset)+5]);
            
            svg.selectAll("rect")
                 .data(dataset)
                 .attr("y",function(d){
                    return h-yScale(d);
                 })
                 .attr("height",function(d){
                    return yScale(d);
                 })
                 .attr("fill",function(d){
                    return "rgb(0,0,"+Math.round(d*10)+")";
                 });
            
            svg.selectAll("text")
                 .data(dataset)
                 .text(function(d){
                    return d;
                 })
                 .attr("x",function(d,i){
                    return xScale(i)+ xScale.bandwidth()/2;
                 })
                 .attr("y",function(d){
                    return yScale(d)+14;
                 })


                })

    

    d3.select("#transition")
        .on("click",function(){
            
            var numValues=dataset.length;
            var maxValue= 25;
            dataset= [];

            for(var i=0;i<numValues;i++){
                var newNumber= Math.floor(Math.random()*maxValue);
                dataset.push(newNumber);
            }
            
            yScale.domain([0,d3.max(dataset)+5]);

            svg.selectAll("rect")
                 .data(dataset)
                 .transition()
                 .delay(function(d,i){
                    return i/dataset.length*100;
                 })
                 .duration(500)
                 .ease(d3.easeCubicInOut)
                 .attr("y",function(d){
                    return h- yScale(d);
                 })
                 .attr("height",function(d){
                    return yScale(d);
                 })
                 .attr("fill",function(d){
                    return "rgb(0,0,"+Math.round(d*10)+")";
                 });
            
            svg.selectAll("text")
                 .data(dataset)
                 .text(function(d){
                    return d;
                 })
                 .attr("x",function(d,i){
                    return xScale(i)+ xScale.bandwidth()/2;
                 })
                 .attr("y",function(d){
                    return yScale(d)+14;
                 })


                })

    

    d3.select("#add")
        .on("click",function(){

            var maxValue=25;
            var newNumber = Math.floor(Math.random()*maxValue);
            dataset.push(newNumber);

   

            xScale.domain(d3.range(dataset.length));

            var bars = svg.selectAll("rect")
                            .data(dataset);

            var texts = svg.selectAll("text")
                            .data(dataset);

                        bars.transition()
                            .duration(500)
                            .attr("x", function(d, i) {
                                return xScale(i);
                            })
                            .attr("y", function(d) {
                                return h - yScale(d);
                            })
                            .attr("width", xScale.bandwidth())
                            .attr("height", function(d) {
                                return yScale(d);
                            })
                            .attr("fill", function(d) {
                                return "rgb(0,0," + Math.round(d * 10) + ")";
                            });
               
                       bars.enter()
                            .append("rect")
                            .attr("x", function(d, i) {
                                return xScale(i);
                            })
                            .attr("y", function(d) {
                                return h - yScale(d);
                            })
                            .attr("width", xScale.bandwidth())
                            .attr("height", function(d) {
                                return yScale(d);
                            })
                            .attr("fill", function(d) {
                                return "rgb(0,0," + Math.round(d * 10) + ")";
                            })
                            .transition()
                            .duration(500);
                
                            texts.transition()
                            .duration(500)
                            .attr("x", function(d, i) {
                                return xScale(i) + xScale.bandwidth() / 2;
                            })
                            .attr("y", function(d) {
                                return h - yScale(d) - 5;
                            })
                            .text(function(d) {
                                return d;
                            });
               
                       texts.enter()
                            .append("text")
                            .attr("x", function(d, i) {
                                return xScale(i) + xScale.bandwidth() / 2;
                            })
                            .attr("y", function(d) {
                                return h - yScale(d) - 5;
                            })
                            .text(function(d) {
                                return d;
                            })
                            .transition()
                            .duration(500)



})

        d3.select("#remove")
        .on("click",function(){
            var bars= svg.selectAll("rect")
                            .data(dataset);
            var texts = svg.selectAll("text")
                            .data(dataset);

            dataset.shift();

            xScale.domain(d3.range(dataset.length));
    
            bars.exit()
                 .transition()
                 .duration(500)
                 .attr("x",w)
                 .remove();
                 
            texts.exit()
                 .transition()
                 .duration(500)
                 .attr("x", w)
                 .remove();

            bars.transition()
                 .duration(500)
                 .attr("x", function(d, i) {
                     return xScale(i);
                 })
                 .attr("y", function(d) {
                     return h - yScale(d);
                 })
                 .attr("width", xScale.bandwidth())
                 .attr("height", function(d) {
                     return yScale(d);
                 })
                 .attr("fill", function(d) {
                     return "rgb(0,0," + Math.round(d * 10) + ")";
                 });
            texts.transition()
                 .duration(500)
                 .attr("x", function(d, i) {
                     return xScale(i) + xScale.bandwidth() / 2;
                 })
                 .attr("y", function(d) {
                     return h - yScale(d) - 5;
                 })
                 .text(function(d) {
                     return d;
                 });             
})
