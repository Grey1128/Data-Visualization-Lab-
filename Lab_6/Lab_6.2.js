
var w=500;
var h=150;
var barPadding = 3;

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
        
        d3.select(this)
            .attr("fill","orange")
    })
    .on("mouseout",function(){
        d3.select(this).attr("fill","limegreen")
        d3.select("#tooltip").remove();
    })



    d3.select("#sort")
        .on("click",function(){
            sortBars(true);

        });
    
    d3.select("#sort-descend")
        .on("click", function(){
            sortBars(false);
        });   

    var sortBars= function(ascending){


        svg.selectAll("rect")
            .sort(function(a,b){
                return ascending ? d3.ascending(a,b): d3.descending(a,b);
    
            })
            .transition()
            .duration(1000)
            .attr("x",function(d,i){
                return xScale(i);
            })
        }            



    

