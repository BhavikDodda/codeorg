function createCuboid(x, y, z, w, h, d) {
  var nodes = [[x,   y,   z  ],
               [x,   y,   z+d],
               [x,   y+h, z  ],
               [x,   y+h, z+d],
               [x+w, y,   z  ],
               [x+w, y,   z+d],
               [x+w, y+h, z  ],
               [x+w, y+h, z+d]];
  var edges = [[0, 1], [1, 3], [3, 2], [2, 0],
               [4, 5], [5, 7], [7, 6], [6, 4],
               [0, 4], [1, 5], [2, 6], [3, 7]];
  return { 'nodes': nodes, 'edges': edges };
}
    
function sin(x) {
  return (Math.sin(x));
}
function cos(x) {
  return (Math.cos(x));
}

// Rotate shape around the z-axis
function rotateZ3D(theta, nodes) {
  var sinTheta = sin(theta);
  var cosTheta = cos(theta);
  
  for (var n = 0; n < nodes.length; n++) {
      var node = nodes[n];
      var x = node[0];
      var y = node[1];
      node[0] = x * cosTheta - y * sinTheta;
      node[1] = y * cosTheta + x * sinTheta;
  }
}

function rotateY3D(theta,nodes) {
  var sinTheta = sin(theta);
  var cosTheta = cos(theta);
  
  for (var n = 0; n < nodes.length; n++) {
      var node = nodes[n];
      var x = node[0];
      var z = node[2];
      node[0] = x * cosTheta - z * sinTheta;
      node[2] = z * cosTheta + x * sinTheta;
  }
}

function rotateX3D(theta, nodes) {
  var sinTheta = sin(theta);
  var cosTheta = cos(theta);
  
  for (var n = 0; n < nodes.length; n++) {
      var node = nodes[n];
      var y = node[1];
      var z = node[2];
      node[1] = y * cosTheta - z * sinTheta;
      node[2] = z * cosTheta + y * sinTheta;
  }
}
setActiveCanvas("canvas1");

function drawInitially(){
  clearCanvas();
  var nodes;
  var edges;
  // 
  for (var shapeNum = 0; shapeNum < shapes.length; shapeNum++) {
      nodes = shapes[shapeNum].nodes;
      edges = shapes[shapeNum].edges;
      rotateX3D(-0.5, nodes);
      rotateY3D(-0.5, nodes);
      for (var e = 0; e < edges.length; e++) {
          var n0 = edges[e][0];
          var n1 = edges[e][1];
          var node0 = nodes[n0];
          var node1 = nodes[n1];
          setStrokeColor("blue");
          line(node0[0] + 150, node0[1]+150, node1[0]+150, node1[1]+150);
      }   
  }
  
  // Draw nodes
   
  for (shapeNum=0; shapeNum < shapes.length; shapeNum++) {
      nodes = shapes[shapeNum].nodes;

      for (var n = 0; n < nodes.length; n++) {
          var node = nodes[n];
          setStrokeColor("green");
          circle(node[0]+150, node[1]+150, 1);
      }
  }
}

onEvent("screen1", "keydown", function(event) {
  clearCanvas();
  var nodes;
  var edges;
  // 
  for (var shapeNum = 0; shapeNum < shapes.length; shapeNum++) {
      nodes = shapes[shapeNum].nodes;
      edges = shapes[shapeNum].edges;
      if (event.key=="Down") {
        rotateX3D(-0.1, nodes);
      }
      if (event.key=="Up") {
        rotateX3D(0.1, nodes);
      }
      if (event.key=="Left") {
        rotateY3D(0.1, nodes);
      }
      if (event.key=="Right") {
        rotateY3D(-0.1, nodes);
      }
      for (var e = 0; e < edges.length; e++) {
          var n0 = edges[e][0];
          var n1 = edges[e][1];
          var node0 = nodes[n0];
          var node1 = nodes[n1];
          setStrokeColor("blue");
          line(node0[0] + 150, node0[1]+150, node1[0]+150, node1[1]+150);
      }   
  }
  
  // Draw nodes
   
  for (shapeNum=0; shapeNum < shapes.length; shapeNum++) {
      nodes = shapes[shapeNum].nodes;

      for (var n = 0; n < nodes.length; n++) {
          var node = nodes[n];
          setStrokeColor("green");
          circle(node[0]+150, node[1]+150, 1);
      }
  }
});
//b
var shape1 = createCuboid(-145, -75, -20, 10, 80, 20);
var shape2 = createCuboid(-135, -75, -20, 30, 10, 20);
var shape3 = createCuboid(-115, -65, -20, 10, 30, 20);
var shape4 = createCuboid(-115, -35, -20, 10, 30, 20);
var shape5 = createCuboid(-135, -5, -20, 30, 10, 20);
var shape6 = createCuboid(-135, -40, -20, 20, 10, 20);
//h
var shape7 = createCuboid(-95, -75, -20, 10, 80, 20);
var shape8 = createCuboid(-60, -75, -20, 10, 80, 20);
var shape9 = createCuboid(-85, -40, -20, 25, 10, 20);
//a
var shape10 = createCuboid(-41, -70, -20, 10, 83, 20);
rotateZ3D(-50, shape10.nodes);
var shape11 = createCuboid(5, -75, -20, 10, 83, 20);
rotateZ3D(50, shape11.nodes);
var shape12 = createCuboid(-25, -37, -20, 25, 10, 20);
//v
var shape13 = createCuboid(25, -69, -20, 10, 81, 20);
rotateZ3D(50, shape13.nodes);
var shape14 = createCuboid(32, -90, -20, 10, 81, 20);
rotateZ3D(-50, shape14.nodes);
//i
var shape15 = createCuboid(71, -75, -20, 35, 10, 20);
var shape16 = createCuboid(69, -5, -20, 35, 10, 20);
var shape17 = createCuboid(83, -65, -20, 10, 60, 20);
//k
var shape18 = createCuboid(115, -75, -20, 10, 80, 20);
var shape19 = createCuboid(65, -157, -20, 10, 40, 20);
rotateZ3D(51, shape19.nodes);
var shape20 = createCuboid(115, 60, -20, 10, 50, 20);
rotateZ3D(-51, shape20.nodes);
var shapes = [shape1, shape2, shape3, shape4, shape5, shape6, shape7, shape8, shape9, shape10, shape11, shape12, shape13,shape14,shape15,shape16,shape17, shape18, shape19, shape20];
drawInitially();