
// Creating and SVG shage and adding text to it

var width = 1000;
var height = 600;

// creating svg element

var svg = d3.select("body")
            .append("svg")
            .attr("width", width)
            .attr("height", height);

// creating group element - it will hold the text and container element

svg.append("g")
    .append("rect")
    .attr("x", 400)
    .attr("y", 200)
    .attr("height", 200)
    .attr("width", 400)
    .attr("fill", "brown")
    .append("text")
    .attr("x", 400)
    .attr("y", 200)
    .attr("stroke", "black")
    .attr("font-family", "Lato")
    .text("LO1: This will be our first Learning Objective!");


//-------------- this code is for the SVG elment commented out on the html doc--------//

////drawing a line on our svg 
//d3.select("body")
//    .select("svg")
//    .append("line")
//    .attr("x1", 40)
//    .attr("x2", 500)
//    .attr("y1", 100)
//    .attr("y2", 100)
//    .attr("stroke", "yellow");
//
////drawing a circle on the SVG
//
//d3.select("body")
//    .select("svg")
//    .append("circle")
//    .attr("cx", 200)
//    .attr("cy", 300)
//    .attr("r", 100)
//    .attr("fill", "lightblue");
//
////drawing an ellipse on the svg
//
//d3.select("body")
//    .select("svg")
//    .append("ellipse")
//    .attr("cx", 1000)
//    .attr("cy", 300)
//    .attr("rx", 100)
//    .attr("ry", 50)
//    .attr("fill", "lightgreen");
//
////ADDING TEXT TO SVG
//
//// 1.create group element that will contain  the ellipse and text element...
//
//d3.select("body")
//    .select("svg")
//    .append("g")
//    .attr("transform",function(d,i)
//         {
//        return "translate(0,0)";
//    });
//
//// 2. append an ellipse element on the group
//
//var ellipse = g.append("ellipse")
//                .attr("cx", 100)
//                .attr("cy", 100)
//                .attr("rx", 200)
//                .attr("ry", 100)
//                .attr("fill", "blue")
//                .append("text");
//
//// 3. adding text element to the group
//
//g.append("text")
//    .attr("x",100)
//    .attr("y",100)
//    .attr("stroke", "white")
//    .text("Celebrec, it worked!");
