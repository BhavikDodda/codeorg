// 
var ifhold = false;
var currentButton = 1;
var displacement_x = 0;
var displacement_y = 0;
var Points_list = [];
var snap_grid_allowed = true;
var show_grid_allowed = true;
// 
var PointsType = [];
var Elliptical_Arc = {};
function draw_graph(size) {
  setActiveCanvas("canvas1_svg");
  if (show_grid_allowed) {
    setStrokeColor("#eee");
    for (var i = size; i < 320; i=i+size) {
      line(i, 0, i, 350);
    }
    for (var j = size; j < 350; j=j+size) {
      line(0, j, 320, j);
    }
  }
}
var grid_size = 50;
draw_graph(grid_size);
var id = 1;
var ListOfAllRadioElements = [];
onEvent("label1_svg", "click", function(event) {
  if (event.ctrlKey===true) {
    radioButton("radio"+id, false, "group");
    appendItem(ListOfAllRadioElements, "radio"+id);
    setSize("radio"+id, 20, 20);
    setStyle("radio"+id,"cursor: -webkit-grab");
    
    // 
    radio_button(event.x, event.y);
    appendItem(Points_list, id);
    appendItem(PointsType, "L");
    draw_svg();
    // 
    currentRadioButton = id-2;
    setTheControls(id);
    StylePointsTypeButtons(PointsType[currentRadioButton]);
    // 
    id = id+1;
  }
});
//continue
function setTheControls(i) {
  var theHtml = "";
  var St = PointsType[i-2];
  if (!isNaN(i)) {
    if (i==1) {
      theHtml = theHtml+"<h4 >Selected Point</h4>";
      XAndY();
    } else {
      theHtml = theHtml+"<h4 >Selected Point</h4>";
      theHtml = theHtml+'<button id="o1" style="padding:5px; width:30px; height:30px;">L</button><button id="o2" style="padding:5px; width:30px; height:30px">Q</button><button id="o3" style="padding:5px; width:30px; height:30px">C</button><button id="o4" style="padding:5px; width:30px; height:30px">A</button>';
      XAndY();
      if (St=="q"||St=="Q") {
        ControlPoints("Control Point X Position", "Control Point Y Position", "radioQ"+i);
      }
      if (St=="C"||St=="c") {
        ControlPoints("First Control Point X Position", "First Control Point Y Position", "radioC1"+i);
        ControlPoints("Second Control Point X Position", "Second Control Point Y Position", "radioC2"+i);
      }
      if (St=="A"||St=="a") {
        Elliptical_Arc.i = eval("Elliptical_Arc.a"+i);
        theHtml = (theHtml+"<h5 >"+"X Radius")+"</h5>";
        theHtml = ((((theHtml+'<input type="range" step="50" min="0" max="800" value="')+Elliptical_Arc.i[0])+'" id="sliderX')+'Radius')+'">';
        theHtml = (theHtml+"<h5 >"+"Y Radius")+"</h5>";
        theHtml = ((((theHtml+'<input type="range" step="50" min="0" max="600" value="')+Elliptical_Arc.i[1])+'" id="sliderY')+'Radius')+'">';
        theHtml = (theHtml+"<h5 >"+"Rotation")+"</h5>";
        theHtml = ((((theHtml+'<input type="range" min="0" max="360" value="')+Elliptical_Arc.i[2])+'" id="slider')+'Rotation')+'">';
        theHtml = (theHtml+"<h5 >"+"Large Arc Sweep Flag")+"</h5>";
        theHtml = ((((theHtml+'<input type="range" min="0" max="1" value="')+Elliptical_Arc.i[3])+'" id="slider')+'Flag')+'">';
        theHtml = (theHtml+"<h5 >"+"Sweep Flag")+"</h5>";
        theHtml = ((((theHtml+'<input type="range" min="0" max="1" value="')+Elliptical_Arc.i[4])+'" id="slider')+'SFlag')+'">';
      }
    }
  }
  innerHTML("Controls2","");
  innerHTML("Controls2",theHtml);
  setStyle("sliderX",'-webkit-appearance: none; width: 100%; height: 15px; border-radius: 5px; background: #d3d3d3; outline: none; opacity: 0.7; -webkit-transition: .2s; transition: opacity .2s;');
  setStyle("sliderY",'-webkit-appearance: none; width: 100%; height: 15px; border-radius: 5px; background: #d3d3d3; outline: none; opacity: 0.7; -webkit-transition: .2s; transition: opacity .2s;');
  if (!(isNaN(i))) {
    SliderControls('sliderX', 'sliderY', i);
  }
  if (St=="q"||St=="Q") {
    setStyle(("sliderX"+"radioQ")+i,'-webkit-appearance: none; width: 100%; height: 15px; border-radius: 5px; background: #d3d3d3; outline: none; opacity: 0.7; -webkit-transition: .2s; transition: opacity .2s;');
    setStyle("sliderY"+"radioQ"+i,'-webkit-appearance: none; width: 100%; height: 15px; border-radius: 5px; background: #d3d3d3; outline: none; opacity: 0.7; -webkit-transition: .2s; transition: opacity .2s;');
    SliderControls('sliderXradioQ'+i, 'sliderYradioQ'+i, "Q"+i);
  }
  if (St=="c"||St=="C") {
    setStyle(("sliderX"+"radioC1")+i,'-webkit-appearance: none; width: 100%; height: 15px; border-radius: 5px; background: #d3d3d3; outline: none; opacity: 0.7; -webkit-transition: .2s; transition: opacity .2s;');
    setStyle(("sliderY"+"radioC1")+i,'-webkit-appearance: none; width: 100%; height: 15px; border-radius: 5px; background: #d3d3d3; outline: none; opacity: 0.7; -webkit-transition: .2s; transition: opacity .2s;');
    setStyle(("sliderX"+"radioC2")+i,'-webkit-appearance: none; width: 100%; height: 15px; border-radius: 5px; background: #d3d3d3; outline: none; opacity: 0.7; -webkit-transition: .2s; transition: opacity .2s;');
    setStyle(("sliderY"+"radioC2")+i,'-webkit-appearance: none; width: 100%; height: 15px; border-radius: 5px; background: #d3d3d3; outline: none; opacity: 0.7; -webkit-transition: .2s; transition: opacity .2s;');
    SliderControls('sliderXradioC1'+i, 'sliderYradioC1'+i, "C1"+i);
    SliderControls('sliderXradioC2'+i, 'sliderYradioC2'+i, "C2"+i);
  }
  if (St=="a"||St=="A") {
    setStyle(("sliderX"+"Radius")+'','-webkit-appearance: none; width: 100%; height: 15px; border-radius: 5px; background: #d3d3d3; outline: none; opacity: 0.7; -webkit-transition: .2s; transition: opacity .2s;');
    setStyle(("sliderY"+"Radius")+'','-webkit-appearance: none; width: 100%; height: 15px; border-radius: 5px; background: #d3d3d3; outline: none; opacity: 0.7; -webkit-transition: .2s; transition: opacity .2s;');
    setStyle(("slider"+"Rotation")+'','-webkit-appearance: none; width: 100%; height: 15px; border-radius: 5px; background: #d3d3d3; outline: none; opacity: 0.7; -webkit-transition: .2s; transition: opacity .2s;');
    setStyle(("slider"+"Flag")+'','-webkit-appearance: none; width: 100%; height: 15px; border-radius: 5px; background: #d3d3d3; outline: none; opacity: 0.7; -webkit-transition: .2s; transition: opacity .2s;');
    setStyle(("slider"+"SFlag")+'','-webkit-appearance: none; width: 100%; height: 15px; border-radius: 5px; background: #d3d3d3; outline: none; opacity: 0.7; -webkit-transition: .2s; transition: opacity .2s;');
    SliderControlsElliptical_Arc("sliderXRadius", 0,i);
    SliderControlsElliptical_Arc("sliderYRadius", 1,i);
    SliderControlsElliptical_Arc("sliderRotation", 2,i);
    SliderControlsElliptical_Arc("sliderFlag", 3,i);
    SliderControlsElliptical_Arc("sliderSFlag", 4,i);
  }
  if (i>1) {
    togglePointStyle();
  }
  function XAndY() {
    var X = getXPosition("radio"+i);
    var Y = getYPosition("radio"+i);
    theHtml = theHtml+"<h5 >Point X Position</h5>";
    theHtml = theHtml+'<input type="range" min="0" max="320" value="'+X+'" id="sliderX">';
    theHtml = theHtml+"<h5 >Point Y Position</h5>";
    theHtml = theHtml+'<input type="range" min="0" max="350" value="'+Y+'" id="sliderY">';
  }
  function ControlPoints(t1, t2, R_id) {
    var X1 = getXPosition(R_id);
    var Y1 = getYPosition(R_id);
    theHtml = theHtml+"<h5 >"+t1+"</h5>";
    theHtml = ((theHtml+'<input type="range" min="0" max="320" value="'+X1)+'" id="sliderX'+R_id)+'">';
    theHtml = theHtml+"<h5 >"+t2+"</h5>";
    theHtml = ((theHtml+'<input type="range" min="0" max="350" value="')+Y1)+'" id="sliderY'+R_id+'">';
  }
}
function SliderControlsElliptical_Arc(n, n2,i) {
  onEvent(n, "input", function( ) {
    eval("Elliptical_Arc.a"+i+"["+n2+"]"+" = "+getNumber(n));
    draw_svg();
  });
}
function SliderControls(i, i2, Button) {
  onEvent(i, "input", function( ) {
    radio_button(getNumber(i), getYPosition("radio"+Button), Button);
    draw_svg();
  });
  onEvent(i2, "input", function( ) {
    radio_button(getXPosition("radio"+Button), getNumber(i2), Button);
    draw_svg();
  });
}
function radio_button(x, y, id1) {
  var displacement_x = x%grid_size;
  var displacement_y = y%grid_size;
  // 
  var position_x = null;
  var position_y = null;
  // 
  if (snap_grid_allowed) {
    if (displacement_x>(grid_size/2)) {
      position_x = (x-displacement_x)+(grid_size-10);
    } else {
      position_x = (x-displacement_x)-10;
    }
    if (displacement_y>(grid_size/2)) {
      position_y = (y-displacement_y)+(grid_size-10);
    } else {
      position_y = (y-displacement_y)-10;
    }
  } else {
    position_x = x-10;
    position_y = y-10;
  }
  // 
  if (id1===undefined) {
    //id1 is undefined whenever this app creates a new radio button
    setPosition("radio"+id, position_x, position_y);
    // 
    //idea burrowed from my project: https://studio.code.org/projects/applab/nvTT92I_yQSojf5KCn53mOjkyrU8A6AE_Bz9v6UKKwc
    radiobutton_Events(id);
  } else {
    setPosition("radio"+id1, position_x, position_y);
  }
  // 
}
function radiobutton_Events(id) {
  radioButtonMouseUp(id);
  radioButtonMouseDown(id);
}
function radioButtonMouseUp(id) {
  onEvent("radio"+id, "mouseup", function(event) {
    radioButtonMouseDown(id);
    ifhold = false;
    setStyle("radio"+id,"cursor: -webkit-grab");
    radio_button(event.x, event.y, id);
    draw_svg();
  });
}
function radioButtonMouseDown(id) {
  onEvent("radio"+id, "mousedown", function(event1) {
    radioButtonMouseUp(id);
    // 
    ifhold = true;
    setStyle("radio"+id,"cursor: -webkit-grabbing");
    displacement_x = event1.x-getProperty("radio"+id,"x");
    displacement_y = event1.y-getProperty("radio"+id,"y");
    // 
    currentButton = id;
  });
}
onEvent("screen1_svg", "mousemove", function(event) {
  if (ifhold) {
    setPosition("radio"+currentButton, event.x-displacement_x, event.y-displacement_y);
    draw_svg();
  }
});
// 
//Drawing
var svgtext = '';
function draw_svg() {
  manipulateSvgtext();
  setImageURL("image1_svg", makeSVG(svgtext));
}
// 
function Update_Information() {
  var innerHtml = "<div id='Controls'><h4 style='width: 100px; display: inline-block;'>Parameters</h4> <button  style='float: right;' id='increaseHeight'>Maximize</button> ";
  innerHtml = innerHtml+"<div id='grid-size'><h6 style='margin-bottom:-1px'>GRID SIZE</h6>";
  innerHtml = innerHtml+'<input id="grid-size-input" type="number" value=50 min=10></div>';
  // 
  innerHtml = innerHtml+"<div id='snap-grid'><h6 style='margin-bottom:-1px'>SNAP GRID</h6>";
  innerHtml = innerHtml+Slider_input_text()+'</div>';
  // 
  innerHtml = innerHtml+"<div id='show-grid'><h6 style='margin-bottom:-1px'>SHOW GRID</h6>";
  innerHtml = innerHtml+Slider_input_text2()+'</div>';
  innerHtml = innerHtml+"<div id='Controls2'><h4 >Selected Point</h4>";
  innerHtml = innerHtml+'<button id="o1" style="padding:5px; width:30px; height:30px;">L</button><button id="o2" style="padding:5px; width:30px; height:30px">Q</button><button id="o3" style="padding:5px; width:30px; height:30px">C</button><button id="o4" style="padding:5px; width:30px; height:30px">A</button>';
  innerHTML("text_area1_svg",innerHtml);
  //Set Styles
  setStyle("Controls","padding-left:0px; margin:10px");
  //Grid Size
  setStyle("grid-size","width:80px;background-color:forestgreen;padding-left:10px;border-radius:5px;margin-bottom:5px");
  setStyle("grid-size-input",'height: 17px; width: 2.7rem; background: rgb(43, 43, 43); border: none; border-radius: 4px; text-align: center; font-family: "Open Sans", sans-serif; font-size: .7rem; color: #fff;');
  setStyle("grid-size-input",'padding: 5px');
  //Snap Grid
  setStyle("snap-grid","position:absolute; left:110px; top: 55px");
  setStyle("snap-grid","width:80px;background-color:forestgreen;padding-left:10px;border-radius:5px;margin-bottom:5px");
  //input
  setStyle("ad-Checkbox-input","position:absolute;z-index:1;top:30px;");//z-index:1 sets one element on top of another
  setStyle("ad-Checkbox-fake","position: relative; height: 14px; width: 32px; width: 2.5rem; background: blue; border-radius: 30px;");
  setStyle("ad-Checkbox","padding-bottom:3px; cursor:pointer");
  setStyle("slider1","border-radius:50%; background-color:lightgreen;z-index:1;position:absolute;top:25px;left:35px");
  //Show Grid
  setStyle("show-grid","position:absolute; left:205px; top: 55px");
  setStyle("show-grid","width:80px;background-color:forestgreen;padding-left:10px;border-radius:5px;margin-bottom:5px");
  //input2
  setStyle("ad-Checkbox-input2","position:absolute;z-index:1;top:30px;");//z-index:1 sets one element on top of another
  setStyle("ad-Checkbox-fake2","position: relative; height: 14px; width: 32px; width: 2.5rem; background: blue; border-radius: 30px;");
  setStyle("ad-Checkbox2","padding-bottom:3px; cursor:pointer");
  setStyle("slider2","border-radius:50%; background-color:lightgreen;z-index:1;position:absolute;top:25px;left:35px");
  // 
  setStyle("Controls2","background-color:forestgreen;padding:10px;border-radius:5px;margin-bottom:5px");
  setStyle("o1","background-color:#eee;color:black");
  setStyle("o2","background-color:#eee;color:black");
  setStyle("o3","background-color:#eee;color:black");
  setStyle("o4","background-color:#eee;color:black");
  setStyle("o1","background-color:brown;color:white");
  setSize("slider1", 20, 20);
  setSize("slider2", 20, 20);
  hideElement("ad-Checkbox-input");
  hideElement("ad-Checkbox-input2");
  togglePointStyle();
}
function Slider_input_text() {
  var text = '<label id="ad-Checkbox"><input id="ad-Checkbox-input" type="checkbox" checked="" ><div id="ad-Checkbox-fake" ></div><button id="slider1"></button></label>';
  return text;
}
function Slider_input_text2() {
  var text = '<label id="ad-Checkbox2"><input id="ad-Checkbox-input2" type="checkbox" checked="" ><div id="ad-Checkbox-fake2" ></div><button id="slider2"></button></label>';
  return text;
}
var currentRadioButton = -1;
onEvent("screen1_svg", "click", function(event) {
  var id1 = event.srcElementId;
  if (id1.includes("radio")) {
    if (!id1.includes("slider")) {
      var X = id1.substring(5, id1.length);
      var index = 1;
      if (X.includes("Q")) {
        index = Number(X.substring(1,X.length));
      } else if (X.includes("C")) {
        index = Number(X.substring(2,X.length));
      } else {
        index = Number(X);
      }
      currentRadioButton = index-2;
      setTheControls(currentRadioButton+2);
      StylePointsTypeButtons(PointsType[currentRadioButton]);
    }
  }
});
function togglePointStyle() {
  onEvent("o1", "click", function( ) {
    if (currentRadioButton!=-1) {
      if (!isNaN(currentRadioButton)) {
        ResetOtherPointStyles(PointsType[currentRadioButton]);
        PointsType[currentRadioButton] = "L";
        draw_svg();
        setTheControls(currentRadioButton+2);
        StylePointsTypeButtons(PointsType[currentRadioButton]);
      }
    }
  });
  onEvent("o2", "click", function( ) {
    if (currentRadioButton!=-1) {
      if (!isNaN(currentRadioButton)) {
        ResetOtherPointStyles(PointsType[currentRadioButton]);
        PointsType[currentRadioButton] = "Q";
        draw_svg();
        setTheControls(currentRadioButton+2);
        StylePointsTypeButtons(PointsType[currentRadioButton]);
      }
    }
  });
  onEvent("o3", "click", function( ) {
    if (currentRadioButton!=-1) {
      if (!isNaN(currentRadioButton)) {
        ResetOtherPointStyles(PointsType[currentRadioButton]);
        PointsType[currentRadioButton] = "C";
        draw_svg();
        setTheControls(currentRadioButton+2);
        StylePointsTypeButtons(PointsType[currentRadioButton]);
      }
    }
  });
  onEvent("o4", "click", function( ) {
    if (currentRadioButton!=-1) {
      if (!isNaN(currentRadioButton)) {
        ResetOtherPointStyles(PointsType[currentRadioButton]);
        PointsType[currentRadioButton] = "A";
        draw_svg();
        setTheControls(currentRadioButton+2);
        StylePointsTypeButtons(PointsType[currentRadioButton]);
      }
    }
  });
}
function ResetOtherPointStyles(v) {
  if (v=="q") {
    deleteElement("radioQ"+(currentRadioButton+2));
    removeItem(ListOfAllRadioElements, ListOfAllRadioElements.indexOf("radioQ"+(currentRadioButton+2)));
  }
  if (v=="c") {
    deleteElement("radioC1"+(currentRadioButton+2));
    deleteElement("radioC2"+(currentRadioButton+2));
    removeItem(ListOfAllRadioElements, ListOfAllRadioElements.indexOf("radioC1"+(currentRadioButton+2)));
    removeItem(ListOfAllRadioElements, ListOfAllRadioElements.indexOf("radioC2"+(currentRadioButton+2)));
  }
}
function StylePointsTypeButtons(j) {
  setStyle("o1","background-color:#eee;color:black");
  setStyle("o2","background-color:#eee;color:black");
  setStyle("o3","background-color:#eee;color:black");
  setStyle("o4","background-color:#eee;color:black");
  if (j=="L"||j=="l") {
    setStyle("o1","background-color:brown;color:white");
  } else if (j=="Q"||j=="q") {
    setStyle("o2","background-color:brown;color:white");
  } else if (j=="C"||j=="c") {
    setStyle("o3","background-color:brown;color:white");
  } else if (j=="A"||j=="a") {
    setStyle("o4","background-color:brown;color:white");
  }
}
Update_Information();
//input controls
onEvent("grid-size-input", "input", function(event) {
  setTimeout(function() {
    if (getText("grid-size-input") == "") {
      setNumber("grid-size-input", 10);
    }
    if (getNumber("grid-size-input") < 10) {
      setNumber("grid-size-input", 10);
    }
    grid_size = getNumber("grid-size-input");
    clearCanvas();
    draw_graph(grid_size);
    clearCanvas();
    draw_graph(grid_size);
  }, 100);
});
// 
onEvent("ad-Checkbox-input", "input", function(event) {
  snapgridinput();
});
onEvent("slider1", "click", function(event) {
  if (getChecked("ad-Checkbox-input")) {
    setChecked("ad-Checkbox-input", false);
  } else {
    setChecked("ad-Checkbox-input", true);
  }
  // 
  snapgridinput();
});
function snapgridinput() {
  if (getChecked("ad-Checkbox-input")) {
    setStyle("slider1","border-radius:50%; background-color:lightgreen;z-index:1;position:absolute;top:25px;left:35px");
    snap_grid_allowed = true;
  } else {
    setStyle("slider1","border-radius:50%; background-color:#ff613c;z-index:1;position:absolute;top:25px;left:5px");
    snap_grid_allowed = false;
  }
}
// 
onEvent("ad-Checkbox-input2", "input", function(event) {
  snapgridinput2();
});
onEvent("slider2", "click", function(event) {
  if (getChecked("ad-Checkbox-input2")) {
    setChecked("ad-Checkbox-input2", false);
  } else {
    setChecked("ad-Checkbox-input2", true);
  }
  // 
  snapgridinput2();
});
function snapgridinput2() {
  if (getChecked("ad-Checkbox-input2")) {
    setStyle("slider2","border-radius:50%; background-color:lightgreen;z-index:1;position:absolute;top:25px;left:35px");
    show_grid_allowed = true;
  } else {
    setStyle("slider2","border-radius:50%; background-color:#ff613c;z-index:1;position:absolute;top:25px;left:5px");
    show_grid_allowed = false;
  }
  // 
  clearCanvas();
  draw_graph(grid_size);
  clearCanvas();
  draw_graph(grid_size);
  draw_svg();
}
onEvent("increaseHeight", "click", function( ) {
  if (getProperty("text_area1_svg", "height") == 100) {
    setStyle("text_area1_svg","top:250px;height:200px");
    setStyle("button1_svg","top:230px;");
    setText("increaseHeight", "Minimize");
  } else {
    setStyle("text_area1_svg","top:350px;height:100px");
    setStyle("button1_svg","top:330px;");
    setText("increaseHeight", "Maximize");
  }
});
function makeSVG(svg) {
  return (('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" xml:space="preserve" >'+svg)+'</svg>');
}
svgtext = '';
function manipulateSvgtext() {
  var svgpath = ("M"+(getXPosition("radio1")+10))+","+(getYPosition("radio1")+10);
  setActiveCanvas("canvas2_svg");
  clearCanvas();
  for (var i = 2; i <= Points_list.length; i++) {
    var P_Type = PointsType[i-2];
    var x = getXPosition("radio"+i) + 10;
    var y = getYPosition("radio"+i) + 10;
    var x1 = getXPosition("radio"+(i-1)) + 10;
    var y1 = getYPosition("radio"+(i-1)) + 10;
    if (P_Type=="L") {
      svgpath = svgpath+" L"+x+","+y;
    } else if ((P_Type=="Q")) {
      PointsType[i-2] = "q";
      radioButton("radioQ"+i, false, "Q"+i);
      appendItem(ListOfAllRadioElements, "radioQ"+i);
      setSize("radioQ"+i, 20, 20);
      setStyle("radioQ"+i,"cursor: -webkit-grab");
      setPosition("radioQ"+i, (x+x1)/2-10, (y+y1)/2-10);
      radiobutton_Events("Q"+i);
      svgpath = (svgpath+" L")+x+","+y;
    } else if (P_Type=="C") {
      PointsType[i-2] = "c";
      radioButton("radioC1"+i, false, "C"+i);
      radioButton("radioC2"+i, false, "C"+i);
      appendItem(ListOfAllRadioElements, "radioC1"+i);
      appendItem(ListOfAllRadioElements, "radioC2"+i);
      setSize("radioC1"+i, 20, 20);
      setSize("radioC2"+i, 20, 20);
      setStyle("radioC1"+i,"cursor: -webkit-grab");
      setStyle("radioC2"+i,"cursor: -webkit-grab");
      setPosition("radioC1"+i, ((x+x1)/2 - (grid_size/2))-10, (y+y1)/2-10);
      setPosition("radioC2"+i, ((x+x1)/2 + (grid_size/2))-10, (y+y1)/2-10);
      radiobutton_Events("C1"+i);
      radiobutton_Events("C2"+i);
      Cplot();
    } else if ((P_Type=="A")) {
      PointsType[i-2] = "a";
      
      eval(("Elliptical_Arc.a"+i)+" = [50,50,0,1,1]");
      // 
      svgpath = (svgpath+" A 50 50 0 1 1 ")+x+","+y;
    }
    if (P_Type=="q") {
      var c1 = getXPosition("radioQ"+i);
      var c2 = getYPosition("radioQ"+i);
      svgpath = ((((svgpath+" Q")+(c1+10))+",")+(c2+10))+" "+x+","+y;
      setStrokeWidth(3);
      setStrokeColor("yellow");
      line(x1+0, y1+0, c1+10, c2+10);
      line(x+0, y+0, c1+10, c2+10);
    }
    if (P_Type=="c") {
      Cplot();
    }
    if (P_Type=="a") {
      Elliptical_Arc.i = eval("Elliptical_Arc.a"+i);
      svgpath = ((((((((svgpath+" A ")+Elliptical_Arc.i[0])+" ")+Elliptical_Arc.i[1])+" "+Elliptical_Arc.i[2])+" "+Elliptical_Arc.i[3])+" "+Elliptical_Arc.i[4])+" ")+x+","+y;
    }
  }
  svgtext = '<path d="'+svgpath+'"  style="stroke:blue; fill:none; stroke-width:3"/>';
  function Cplot() {
    var d1 = getXPosition("radioC1"+i);
    var d2 = getYPosition("radioC1"+i);
    var d3 = getXPosition("radioC2"+i);
    var d4 = getYPosition("radioC2"+i);
    svgpath = ((((((svgpath+" C")+(d1+10))+",")+(d2+10))+" "+(d3+10))+","+(d4+10))+" "+x+","+y;
    setStrokeWidth(3);
    setStrokeColor("yellow");
    line(x1+0, y1+0, d1+10, d2+10);
    line(x+0, y+0, d3+10, d4+10);
  }
}
setStyle("text_area1_svg"," position:absolute; transition: 0.9s");
setStyle("button1_svg"," position:absolute; transition: 0.9s");
// 
onEvent("button1_svg", "click", function( ) {
  refreshSVG();
});
function refreshSVG() {
  for (var i = 0; i < ListOfAllRadioElements.length; i++) {
    deleteElement(ListOfAllRadioElements[i]);
  }
  ListOfAllRadioElements = [];
  setImageURL("image1_svg", "");
  ifhold = false;
  currentButton = 1;
  displacement_x = 0;
  displacement_y = 0;
  Points_list = [];
  snap_grid_allowed = true;
  show_grid_allowed = true;
  PointsType = [];
  Elliptical_Arc = {};
  grid_size = 50;
  id = 1;
  clearCanvas();
  draw_graph(grid_size);
  clearCanvas();
  draw_graph(grid_size);
}
