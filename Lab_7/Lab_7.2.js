function init(){

    var dataset= [ 10,20,30,40,50];
    var pie= d3.pie();

    var piedata=pie(dataset);


    var w=300;
    var h=300;

    var outerRadius= w/2;
    var innerRadius= w/3;
    var arc= d3.arc
                .innerRadius(innerRadius)
                .outerRadius(outerRadius);
    var color=d3.scaleOrdinal(d3.schemeCategory10);

    var svg =d3.select("#chart")
                .append("svg")
                .attr("width",w)
                .attr("height",h);


    var arcs= svg.selectAll("g.arc")
                    .data(piedata)
                    .enter()
                    .append("g")
                    .attr("class","arc")
                    .attr("transform", "translate("+outerRadius+","+outerRadius+")");


        arcs.append("path")
            .attr("fill",(d,i)=>color(i))
            .attr("d",(d,i)=>arc(d,i));

        arcs.append("text")
             .text(d=>d.data)
             .attr("text-anchor","middle")
             .attr("transform",d=>"translate("+arc.centroid(d)+")");
        
        





}




