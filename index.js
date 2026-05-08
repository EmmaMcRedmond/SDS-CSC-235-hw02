
console.log("hi");

d3.selectAll('summary')
    .classed('selected', true); 

d3.selectAll("#summary img")
    .on("click", function() {

        let img = d3.select(this);

        let isSelected = img.classed("selected");

        img.classed("selected", !isSelected);
    });