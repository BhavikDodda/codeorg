// 
function createCuboid(x, y, z) {
  var nodes = [[x,   y,   z  ]];

  return { 'nodes': nodes,};
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
onEvent("screen1", "keydown", function(event) {
  screenkeydown(event);
  if ((event.key=="Left" || event.key=="Right") || (event.key=="Up" || event.key=="Down")) {
    // 
    clearCanvas();
    drawAxes(event.key);
    var node;
    // 
    for (var shapeNum = 0; shapeNum < shapes.length; shapeNum++) {
        node = shapes[shapeNum].nodes;
        if (event.key=="Down") {
          rotateX3D(-0.1, node);
        }
        if (event.key=="Up") {
          rotateX3D(0.1, node);
        }
        if (event.key=="Left") {
          rotateY3D(0.1, node);
        }
        if (event.key=="Right") {
          rotateY3D(-0.1, node);
        }
        drawpoint(node);
    }
  }
});
function drawpoint(nodes) {
  var point = nodes[0];
  if (isNaN(point[0])!=true) {
    setStrokeColor(rgb(255+3*point[0], 255+3*point[1], 255+3*point[2]));
    setFillColor(rgb(255+3*point[0], 255+3*point[1], 255+3*point[2]));
    circle(320/2 + point[0], 450/2 + point[1], 1);
  }
}
function drawAxes(key, x1) {
  var thecolor = "";
  var colorsArray = ["yellow","orange","blue"];
  for (var Axes_num = 0; Axes_num < Axes.length; Axes_num+=2) {
      //setting color of the axis
      thecolor = colorsArray[Axes_num/2];
      // 
      if (x1!==undefined) {
        var thenode1 = (Axes[Axes_num]).nodes;
        var thenode2 = (Axes[Axes_num+1]).nodes;
        rotateX3D(x1, thenode1);
        rotateX3D(x1, thenode2);
        rotateY3D(x1, thenode1);
        rotateY3D(x1, thenode2);
      }
      if (key !== undefined) {
        var node1 = (Axes[Axes_num]).nodes;
        var node2 = (Axes[Axes_num+1]).nodes;
        if (key=="Down") {
          rotateX3D(-0.1, node1);
          rotateX3D(-0.1, node2);
        }
        if (key=="Up") {
          rotateX3D(0.1, node1);
          rotateX3D(0.1, node2);
        }
        if (key=="Left") {
          rotateY3D(0.1, node1);
          rotateY3D(0.1, node2);
        }
        if (key=="Right") {
          rotateY3D(-0.1, node1);
          rotateY3D(-0.1, node2);
        }
      }
      // 
      var point1 = (Axes[Axes_num]).nodes[0];
      var point2 = (Axes[Axes_num+1]).nodes[0];
      setStrokeColor(thecolor);
      setStrokeWidth(3);
      var x_displace = 320/2;
      var y_displace = 450/2;
      line(point1[0]+x_displace, point1[1]+y_displace, point2[0]+x_displace, point2[1]+y_displace);
  }
}
function draw() {
  // 
  clearCanvas();
  drawAxes(undefined, 20);
  var node;
  // 
  for (var shapeNum = 0; shapeNum < shapes.length; shapeNum++) {
      node = shapes[shapeNum].nodes;
      rotateX3D(20, node);
      rotateY3D(20, node);
      drawpoint(node);
      // 
  }
}
// 
var Axes = [];
var shapes = [];
var scaleFactor = 1;
var equation = "";
function Draw3dGraph(EXPRESSION) {
  Axes = [];
  shapes = [];
  equation = EXPRESSION;
  for (var x = -100; x < 100; x=x+10/scaleFactor) {
    for (var y = -100; y < 100; y=y+10/scaleFactor) {
      var z = eval(equation);
      appendItem(shapes, createCuboid(x*scaleFactor, y*scaleFactor, z*scaleFactor));
    }
  }
  appendItem(Axes, createCuboid(-150*scaleFactor, 0, 0));
  appendItem(Axes, createCuboid(150*scaleFactor, 0, 0));
  appendItem(Axes, createCuboid(0, -150*scaleFactor, 0));
  appendItem(Axes, createCuboid(0, 150*scaleFactor, 0));
  appendItem(Axes, createCuboid(0, 0, -150*scaleFactor));
  appendItem(Axes, createCuboid(0, 0, 150*scaleFactor));
  draw();
}
Draw3dGraph("z=Math.sqrt(10000-x*x-y*y)");
setText("text_input1", "Math.sqrt(10000-x*x-y*y)");
onEvent("text_input1", "keydown", function(event) {
  if (event.key=="Enter") {
    Draw3dGraph("z="+getText("text_input1"));
  }
});
function screenkeydown(event) {
  if (event.key=="PageUp") {
    scaleFactor = scaleFactor+0.2;
    Draw3dGraph(equation);
  }
  if (event.key=="PageDown") {
    scaleFactor = scaleFactor+-0.2;
    Draw3dGraph(equation);
  }
  // 
}
