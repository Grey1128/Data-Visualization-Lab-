
var w=500;
var h=300;

var color=d3.scaleQuantize()
              .range(['#f2f0f7','#cbc9e2','#9e9ac8','#756bb1','#54278f'])

var projection=d3.geoMercator()
                    .center([145,-36.5])
                    .translate([w/2,h/2])
                    .scale(3000);

var path = d3.geoPath()
                .projection(projection);

var svg= d3.select("body")
            .append("svg")
            .attr("width",w)
            .attr("height",h);
          //  .attr("fill","grey");

async function load() {
  //load json 
  const json = await d3.json("/Lab_8/LGA_VIC.json");
  
  //load unemployment csv
  const unemploymentData = await d3.csv("/Lab_8/VIC_LGA_unemployment.csv");
  
  //load city csv
  const city = await d3.csv("/Lab_8/VIC_city.csv");

  const unemploymentMap = {};
  unemploymentData.forEach(d => {
    // Assuming the CSV has 'LGA' and 'unemployed' columns
    unemploymentMap[d.LGA] = +d.unemployed; // Convert to number
  });

  //Data merging 
    json.features.forEach(feature => {
    const lga = feature.properties.LGA_name;
    const unemploymentRecord = unemploymentData.find(d => d.LGA === lga);
    if (unemploymentRecord) {

     
      feature.properties.unemployment = +unemploymentRecord.unemployed;

    
  } else {
    feature.properties.unemployment = 0;
      console.log(`No match found for LGA: ${lga}`);
  }
  });


   //Color domain base on data 
   color.domain(d3.extent(json.features, feature => feature.properties.unemployment));
  
   

  svg.selectAll("path")
      .data(json.features)
      .enter()
      .append("path")
      .attr("d", path)
      .style("fill", feature => color(feature.properties.unemployment))
      .attr("stroke", "#333") //better visibility
      .attr("stroke-width", 1);


  svg.selectAll("circle")
      .data(city)
      .enter()
      .append("circle")
      .attr("cx",d=>projection([d.Longitude, d.Latitude])[0])
      .attr("cy", d=>projection([d.Longitude,d.Latitude])[1])
      .attr("r",2)
      .attr("fill","red");


}

load();






