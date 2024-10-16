
var w=500;
var h=300;

var projection=d3.geoMercator()
                    .center([145,-36.5])
                    .translate([w/2,h/2])
                    .scale(3000);

var path = d3.geoPath()
                .projection(projection);

var svg= d3.select("body")
            .append("svg")
            .attr("width",w)
            .attr("height",h)
            .attr("fill","grey");



d3.json("/Lab_8/LGA_VIC.json").then(function(json){

  svg.selectAll("path")
      .data(json.features)
      .enter()
      .append("path")
      .attr("d",path)           
          
})

/*
d3.json("/Lab_8/LGA_VIC.json").then(function(json){


svg.selectAll("path")
    .data(json.features)
    .enter()
    .append("path")
    .attr("d",path);
          
          
          
          
})
    
async function loadJson() {
  const json = await d3.json("/Lab_8/LGA_VIC.json");
  svg.selectAll("path")
      .data(json.features)
      .enter()
      .append("path")
      .attr("d", path);
}
      loadJson();

*/








